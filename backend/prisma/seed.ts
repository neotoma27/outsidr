import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function main() {
  const helens = await prisma.user.upsert({
    where: { id: 1 },
    update: {},
    create: {
      email: 'helens@example.com',
      name: 'Helens',
    },
  })
  const klamath = await prisma.user.upsert({
    where: { id: 2 },
    update: {},
    create: {
      email: 'klamath@example.com',
      name: 'Klamath',
    },
  })
  const whitney = await prisma.user.upsert({
    where: { id: 3 },
    update: {},
    create: {
      email: 'whitney@example.com',
      name: 'Whitney',
    },
  })
  const adams = await prisma.user.upsert({
    where: { id: 4 },
    update: {},
    create: {
      email: 'adams@example.com',
      name: 'Adams',
    },
  })
  const baker = await prisma.user.upsert({
    where: { id: 5 },
    update: {},
    create: {
      email: 'baker@example.com',
      name: 'Baker',
    },
  })
  console.log({ helens, klamath, whitney, adams, baker })
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })