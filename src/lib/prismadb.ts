// import { PrismaClient } from '@prisma/client'

import { PrismaClient } from "@prisma/client/extension";

// const globalForPrisma = global as unknown as { prisma: PrismaClient }

// export const prisma =
//   globalForPrisma.prisma ||
//   new PrismaClient({
//     log: ['query'],
//   })

// if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
declare global {
  var prisma: PrismaClient | undefined
}

export const prisma = globalThis.prisma || new PrismaClient()

if (process.env.NODE_ENV !== "production") globalThis.print = prisma