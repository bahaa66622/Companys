const { PrismaClient } = require('@prisma/client')

async function main(){
  const prisma = new PrismaClient()
  const user = await prisma.user.findUnique({ where: { email: 'admin@companys.local' } })
  if (!user) { console.log('no user') }
  else {
    console.log('id', user.id)
    console.log('email', user.email)
    console.log('password length', user.password.length)
    console.log('password json', JSON.stringify(user.password))
  }
  await prisma.$disconnect()
}

main().catch(e=>{ console.error(e); process.exit(1) })
