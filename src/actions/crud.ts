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
        note: formData.get('title') as string
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
    return {status:true}
  } catch (error) {
    console.log('error on createNote', error)
    return { status: false }
  }
}
export { getAllNotes, createNote,deleteOne }