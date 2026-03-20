const bcrypt = require('bcryptjs')
const hash = '$2a$10$tN4ZpFT7MdtR/GEZfhvxBuq4xsNYT/mWX9CR8hi6NUzK5VWWU39n.'
const plain = 'password123'
console.log('plain length', plain.length)
console.log('hash length', hash.length)
console.log('compareSync', bcrypt.compareSync(plain, hash))
bcrypt.compare(plain, hash).then(r=>console.log('compare async', r)).catch(e=>console.error(e))
