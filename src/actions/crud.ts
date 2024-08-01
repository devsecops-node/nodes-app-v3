"use server"

import { prisma } from "@/lib/prismadb"
import { revalidatePath } from "next/cache"

const getAllNotes = async () => {
  try {
    // const delay = (ms: any) => new Promise(resolve => setTimeout(resolve, ms));

    // Espera 5 segundos
    // await delay(5000);
    const data = await prisma.notes.findMany()
    return { status: true, data }
  } catch (error) {
    console.log('error on getAllNotes', error)
    return { status: false }
  }
}
const createNote = async (formData: FormData) => {

  try {
    await prisma.notes.create({
      data: {
        note: formData.get('title') as string,
        complete: false,
        title: "",
        status : "medium",
      }
    })
    revalidatePath('/')
    return { status: true }
  } catch (error) {
    console.log('error on createNote', error)
    return { status: false }
  }
}

const deleteOne = async (id: string) => {
  try {
    await prisma.notes.delete({
      where: {
        id
      }
    })
    revalidatePath('/')
    return { status: true }
  } catch (error) {
    console.log('error on createNote', error)
    return { status: false }
  }
}

const getNote = async (id: string) => {
  try {
    const note = await prisma.notes.findUnique({
      where: {
        id
      }
    })
    return { status: true, note }
  } catch (error) {
    console.log('error on ')
    return { status: false, note: undefined }
  }
}
const updateOneNote = async (id: string, noteUpdated: string) => {
  try {
    await prisma.notes.update({
      where: {
        id
      },
      data: {
        note: noteUpdated
      }
    })
    revalidatePath(`/notes/${id}`)
    return { status: true }
  } catch (error) {
    return { status: false }
  }
}

export { getAllNotes, createNote, deleteOne, getNote, updateOneNote }