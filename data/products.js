const products = [
  {
    name: 'Cooler',
    images: [
      { image1: '/images/cool1.jpeg' },
      { image1: '/images/cool2.jpeg' },
      { image1: '/images/book2.jpeg' },
    ],
    description:
      'A short and concise product portable and easy to install and use in a very good condition used only for 3 months',

    category: 'Electronics',
    Cost: {
      price: 3500,
      negotiable: true,
    },
    expiresOn: 2077 - 9 - 19,

    shippingAddress: {
      address: 'MBM Hostel no 3',
      city: 'jodhpur',
      shippingCharge: 0,
    },
    seller: {
      sellername: 'aditya',
      selleraddress: 'rohit pg near mbm engineering college',
      selleremail: 'aditya@gmail.com',
      phoneNo: { mobile: '9829028999', isVerified: true },
    },
  },

  {
    name: 'Fridge ',
    images: [
      { image1: '/images/fri.jpeg' },
      { image1: '/images/fridge1.jpeg' },
      { image1: '/images/fridge2.jpeg' },
    ],

    description:
      'A small portable fridge can be used to store neccessary dairy and day to day product good condition 2nd hand product used for almost 1.5 years',

    category: 'Electronics',
    Cost: {
      price: 4700,
    },
    expiresOn: 2077 - 9 - 19,
    shippingAddress: {
      address: 'RK PG ratanada',
      city: 'jodhpur',
      shippingCharge: 170,
    },

    seller: {
      sellername: 'rohit',
      selleraddress: 'jodhpur, rajasthan',
      selleremail: 'rohan@gmail.com',
      phoneNo: { mobile: '9868383125' },
    },
  },
  {
    name: 'laptop desk',
    images: [
      { image1: '/images/desk1.jpeg' },
      { image1: '/images/desk2.jpg' },
      { image1: '/images/desk3.jpg' },
    ],

    description:
      'Foldable laptop desk table portable and consumes less space in good condition',

    category: 'Products',
    Cost: {
      price: 200,
    },
    shippingAddress: {
      address: 'CHB',
      city: 'jodhpur',
      shippingCharge: 100,
    },
    seller: {
      sellername: 'hemant',
      selleraddress: 'mbm hostel',
      selleremail: 'hemant2456@gmail.com',
      phoneNo: { mobile: '9868383125' },
    },
    expiresOn: 2077 - 9 - 19,
  },
  {
    name: 'monitor',
    images: [
      { image1: '/images/monitor1.jpg' },
      { image1: '/images/monitor2.jpg' },
      { image1: '/images/monitor3.jpg' },
    ],

    description:
      'a 20 inch LG monitor mainly used for coding and movie streaming purpose used for almost 2 years still in warrenty with bill',

    category: 'Electronics',
    Cost: {
      price: 900,
    },
    shippingAddress: {
      address: 'Bikasnagar',
      city: 'nepalgunj',
      shippingCharge: 100,
    },
    seller: {
      sellername: 'Moti ',
      selleraddress: 'localite',
      selleremail: 'moti@gmail.com',
      phoneNo: { mobile: '9868383125' },
    },
    expiresOn: 2077 - 9 - 19,
  },
]
export default products
