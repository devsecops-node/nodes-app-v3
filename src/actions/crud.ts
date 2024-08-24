"use server"

import { StatusOptiosn } from "@/components/main/ModalSetStatus"
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
const createNote = async (formData: FormData, status: StatusOptiosn) => {
  try {
    await prisma.notes.create({
      data: {
        note: formData.get('title') as string,
        complete: false,
        title: "",
        status,
        create: new Date(),
        lastModified: new Date(),
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
        note: noteUpdated,
        lastModified: new Date()
      }
    })
    revalidatePath(`/notes/${id}`)
    return { status: true }
  } catch (error) {
    return { status: false }
  }
}

// ? note === title
const fintNoteByTitle = async (title: string) => {
  try {
    const allNotes = await getAllNotes()
    if (allNotes.status) {
      const findedNotes = allNotes.data?.map((dat) => dat.note.includes('title'))
    }
  } catch (er) {
    console.log("error on fintNoteByTitle", er)
    return { notes: undefined, status: true }
  }
}

export { getAllNotes, createNote, deleteOne, getNote, updateOneNote, fintNoteByTitle }