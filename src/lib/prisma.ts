import { PrismaClient } from '@prisma/client'

export const prisma = new PrismaClient({
  log: ['query'], // fazer o log dos comandos de db executados
})
