'use strict'

const db = require('../server/db')
const {User, Product, Order, OrderItem} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const [shortBoard, longBoard, foamy] = await Promise.all([
    Product.create({
      name: 'shortBoard',
      description: 'short',
      imageUrl:
        'https://www.aotearoasurf.co.nz/wp-content/uploads/2017/10/BIC-6-7-Shortboard.jpg',
      stock: 5,
      price: 299
    }),
    Product.create({
      name: 'longBoard',
      description: 'long',
      imageUrl:
        'https://www.ronjonsurfshop.com/assets/item/alternate/large/10690064001D--rj_8_pintail_longboard_1208.jpg',
      stock: 5,
      price: 350
    }),
    Product.create({
      name: 'foamy',
      description: 'foam',
      imageUrl:
        'https://media.decathlon.my/1749164/100-foam-surfboard-7-supplied-with-leash-and-fins.jpg',
      stock: 5,
      price: 99
    })
  ])

  const [user1, user2, user3] = await Promise.all([
    User.create({
      userName: 'user1',
      email: 'test@gmail.com',
      password: '123'
    }),
    User.create({
      userName: 'user2',
      email: 'test2@gmail.com',
      password: '1234'
    }),
    User.create({
      userName: 'user3',
      email: 'test3@gmail.com',
      password: '12345'
    })
  ])

  const [order1, order2, order3] = await Promise.all([
    Order.create({
      status: 'processing',
      userId: 1
    }),
    Order.create({
      status: 'cart',
      userId: 2
    }),
    Order.create({
      status: 'cart',
      userId: 3
    })
  ])
  console.log('Seeding successfull!')
}

async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

if (module === require.main) {
  runSeed()
}

module.exports = seed
