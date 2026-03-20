const { PrismaClient } = require('@prisma/client')
const bcrypt = require('bcryptjs')

async function main() {
  const prisma = new PrismaClient()

  const email = 'admin@companys.local'
  const existing = await prisma.user.findUnique({ where: { email } })
  if (existing) {
    console.log('Admin user already exists:', email)
    await prisma.$disconnect()
    return
  }

  const hashed = await bcrypt.hash('password123', 10)
  const admin = await prisma.user.create({
    data: {
      name: 'Super Admin',
      email,
      password: hashed,
      role: 'SUPER_ADMIN'
    }
  })

  console.log('Created admin user:', admin.email)
  await prisma.$disconnect()
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
