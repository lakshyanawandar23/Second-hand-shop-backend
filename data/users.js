import bcrypt from 'bcryptjs'
const users = [
  {
    name: 'Admin user ',
    email: 'admin@gmail.com',
    password: bcrypt.hashSync('testuser', 10),
    address: 'jodhpur , rajasthan',
    contact: { phone_no: '9413934889', isVerified: true },
    isAdmin: true,
  },
  {
    name: 'Tanmay Mathur',
    email: 'tanmaymathur@gmail.com',
    password: bcrypt.hashSync('123456', 10),
    address: 'jodhpur , rajasthan',
    contact: { phone_no: '9413934889' },
  },
  {
    name: 'lomesh soni',
    email: 'lomesh@gmail.com',
    password: bcrypt.hashSync('lomesh12', 10),
    address: 'jodhpur, rajasthan',
    contact: { phone_no: '9460120127' },
  },
]

export default users
