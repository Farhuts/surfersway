'use strict'

const db = require('../server/db')
const {User, Product, Order, OrderItem} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const [shortBoard, longBoard, foamy] = await Promise.all([
    Product.create({
      name: 'STUMP (THRUSTER)',
      size: "5'0' x 21.5' x 2.5",
      description: `5'0 X NOA DEANE PRO
                    5'0' x 21.5' x 2.5'.
                    Super-Fun for all skill levels!
                    Tons of float and easy wave catching.
                    Stiff dual composite core.
                    Triple (x3) maple stringers!
                    Durable HDPE graphic slick bottom.
                    Old-School PE deck with throwback design.
                    Hi-performance fin system with performance
                    fins.Designed by Catch Surf in California, U.S.A.`,
      boardType: 'shorty',
      imageUrl:
        'https://cdn.shopify.com/s/files/1/1154/7998/products/ODY50T-ND_WH18_TB_1024x1024.jpg?v=1557866492',
      stock: 5,
      price: 299
    }),
    Product.create({
      name: 'STUMP (THRUSTER)',
      size: "5'0' x 21.5' x 2.5",
      description: `5'0' X BLAIR CONKLIN PRO
                    5’0” x 21.5” x 2.5” (36 Liters)
                    Super-Fun for all skill levels!
                    Tons of float and easy wave catching.
                    Stiff dual composite core.
                    Triple (x3) maple stringers!
                    Durable HDPE graphic slick bottom.
                    Old-School PE deck with throwback design.
                    Hi-performance fin system with performance fins.
                    Designed by Catch Surf in California, U.S.A. `,
      boardType: 'shorty',
      imageUrl:
        'https://cdn.shopify.com/s/files/1/1154/7998/products/ODY50T-BC_TQ19_TB_1024x1024.jpg?v=1557866468',
      stock: 5,
      price: 299
    }),
    Product.create({
      name: 'STUMP (THRUSTER)',
      size: "5'0' x 21.5' x 2.5",
      description: `5'0' X HARRY BRYANT PRO
                    5’0” x 21.5” x 2.5”(36 Liters)
                    Super-Fun for all skill levels!
                    Tons of float and easy wave catching.
                    Stiff dual composite core.
                    Triple (x3) maple stringers!
                    Durable HDPE graphic slick bottom.
                    Old-School PE deck with throwback design.
                    Hi-performance fin system with performance fins.
                    Designed by Catch Surf in California, U.S.A.`,
      boardType: 'shorty',
      imageUrl:
        'https://cdn.shopify.com/s/files/1/1154/7998/products/Harrybryant_stump_tri_1024x1024.jpg?v=1549057901',
      stock: 5,
      price: 299
    }),
    Product.create({
      name: 'STUMP (THRUSTER)',
      size: "5'0' x 21.5' x 2.5",
      description: `5'0'x 21.5” x 2.5”(36 Liters)
                    Super-Fun for all skill levels!
                    Tons of float and easy wave catching.
                    Stiff dual composite core.
                    Triple (x3) maple stringers!
                    Durable HDPE graphic slick bottom.
                    Old-School PE deck with throwback design.
                    Hi-performance fin system with performance fins.
                    Designed by Catch Surf in California, U.S.A. `,
      boardType: 'shorty',
      imageUrl:
        'https://cdn.shopify.com/s/files/1/1154/7998/products/ODY50-T_BLU9_TB_1024x1024.jpg?v=1557866577',
      stock: 5,
      price: 270
    }),
    Product.create({
      name: 'STUMP (TRI - WAKE-SURFER)',
      size: "5'0' x 21.5' x 2.5",
      description: `STUMP - 5'0' QUAD - WAKE SURFER
                    5’0” x 21.5” x 2.5”(36 Liters)
                    Built-in traction pad (No wax required!)
                    Super-Fun for all skill levels!
                    Tons of float and easy wave catching.
                    Stiff dual composite core.
                    Triple (x3) maple stringers!
                    Durable HDPE graphic slick bottom.
                    Old-School PE deck with throwback design.
                    Hi-performance fin system with wake surfing fins.
                    Designed by Catch Surf in California, U.S.A.`,
      boardType: 'shorty',
      imageUrl:
        'https://cdn.shopify.com/s/files/1/1154/7998/products/50T_wake_eLemon_1024x1024.jpg?v=1548290189',
      stock: 5,
      price: 330
    }),
    Product.create({
      name: 'STUMP (QUAD - WAKE SURFER)',
      size: "5'0' x 21.5' x 2.5",
      description: `STUMP - 5'0' QUAD - WAKE SURFER
                    5’0” x 21.5” x 2.5”(36 Liters)
                    Built-in traction pad (No wax required!)
                    Super-Fun for all skill levels!
                    Tons of float and easy wave catching.
                    Stiff dual composite core.
                    Triple (x3) maple stringers!
                    Durable HDPE graphic slick bottom.
                    Old-School PE deck with throwback design.
                    Hi-performance fin system with wake surfing fins.
                    Designed by Catch Surf in California, U.S.A.`,
      boardType: 'shorty',
      imageUrl:
        'https://cdn.shopify.com/s/files/1/1154/7998/products/ody50_wk_neonPink_q2_1024x1024.jpg?v=1548289978',
      stock: 5,
      price: 340
    }),
    Product.create({
      name: 'STUMP (QUAD - WAKE SURFER)',
      size: "5'0' x 21.5' x 2.5",
      description: `STUMP - 5'0' QUAD - WAKE SURFER
                    5’0” x 21.5” x 2.5”(36 Liters)
                    Built-in traction pad (No wax required!)
                    Super-Fun for all skill levels!
                    Tons of float and easy wave catching.
                    Stiff dual composite core.
                    Triple (x3) maple stringers!
                    Durable HDPE graphic slick bottom.
                    Old-School PE deck with throwback design.
                    Hi-performance fin system with wake surfing fins.
                    Designed by Catch Surf in California, U.S.A. `,
      boardType: 'shorty',
      imageUrl:
        'https://cdn.shopify.com/s/files/1/1154/7998/products/ody50_wk_black_q2_1024x1024.jpg?v=1548289978',
      stock: 5,
      price: 350
    }),
    Product.create({
      name: 'LOST RNF',
      size: '5’5” x 20.0” x 2.5',
      description: `5’5” x 20.0” x 2.5”(42 Liters)
                    ...Lost's iconic shape by Matt 'Mayhem' Biolos Central concave and vee out the tail.
                    Winged swallow tail with thruster (tri) fin setup. Stiff dual composite core.
                    Triple (x3) maple stringers! Durable HDPE graphic slick bottom.
                    Hi-Performance removeable fin system with leash plug.
                    Designed by Catch Surf in California, U.S.A. `,
      boardType: 'shorty',
      imageUrl:
        'https://cdn.shopify.com/s/files/1/1154/7998/products/ODY55-LST_BL19_TB_1024x1024.jpg?v=1557877781',
      stock: 5,
      price: 320
    }),
    Product.create({
      name: 'LOST RNF',
      size: '5’5” x 20.0” x 2.5',
      description: `5’5” x 20.0” x 2.5”(42 Liters)
                    ...Lost's iconic shape by Matt 'Mayhem' Biolos Central concave and vee out the tail.
                    Winged swallow tail with thruster (tri) fin setup.
                    Stiff dual composite core. Triple (x3) maple stringers!
                    Durable HDPE graphic slick bottom. Hi-Performance removeable fin system with leash plug.
                    Designed by Catch Surf in California, U.S.A. `,
      boardType: 'shorty',
      imageUrl:
        'https://cdn.shopify.com/s/files/1/1154/7998/products/ODY55-LST_GN19_TB_1024x1024.jpg?v=1557877781',
      stock: 5,
      price: 320
    }),
    Product.create({
      name: 'SKIPPER (QUAD)',
      size: '6’0” x 21.5” x 3.0',
      description: `6'0' X TYLER STANALAND PRO
                    6’0” x 21.5” x 3.0”(48 Liters)
                    Super-Fun for all skill levels!
                    Tons of float and easy wave catching.
                    Stiff dual composite core.
                    Triple (x3) maple stringers!
                    Durable HDPE graphic slick bottom.
                    Old-School PE deck with throwback design.
                    Hi-Performance fin system with performance fins.
                    Designed by Catch Surf in California, U.S.A. `,
      boardType: 'shorty',
      imageUrl:
        'https://cdn.shopify.com/s/files/1/1154/7998/products/ODY60Q-TS_HP19_TB_1024x1024.jpg?v=1559166916',
      stock: 5,
      price: 300
    }),
    // longBoards
    Product.create({
      name: 'PLANK SINGLE FIN',
      size: '8’0” x 23.0” x 3.375',
      description: `TIME TO WALK THE PLANK!
                    8’0' x 23.0' x 3.375'(86 Liters)
                    Special Fin Box that Accepts any Standard Longboard Fin 9'.
                    Performance Single Fin Included.
                    Super-Fun for all Skill Levels.
                    Tons of Float and Easy Wave Catching.
                    Stiff Dual Composite Core. Triple Maple-Ply Stringers!
                    Durable HDPE Slick Bottom with Bumper-Tail.
                    Old-School PE Deck with Throwback Design.
                    Designed by Catch Surf in California, U.S.A.`,
      boardType: 'long',
      imageUrl:
        'https://cdn.shopify.com/s/files/1/1154/7998/products/ody80_plank_hotpink_1024x1024.jpg?v=1557877413',
      stock: 5,
      price: 380
    }),
    Product.create({
      name: 'LOG - AMAZE/TWIST',
      size: '7’0” x 22.0” x 3.125',
      description: `** LIMITED AND EXCLUSIVE MODEL **
                    7’0” x 22.0” x 3.125” (72 Liters)
                    Limited edition Barry McGee and Josh Lazcano signature model.
                    Fully finless version for true freedom of Slide and Glide.
                    Quad-finned version includes Hi-Performance Fin System with removeable 'side-bite' fins.
                    Stiff Dual Composite Core. Triple Maple-Ply Stringers.
                    Durable HDPE Slick Bottom with Bumper-Tail.
                    Old-School PE Deck with Throwback Design. Designed by Catch Surf in California, U.S.A.`,
      boardType: 'long',
      imageUrl:
        'https://cdn.shopify.com/s/files/1/1154/7998/products/ODY70Q-BM_MRN_TB_copy_1024x1024.jpg?v=1557879046',
      stock: 5,
      price: 350
    }),
    Product.create({
      name: 'PLANK SIERRA PRO',
      size: "8'0' x 23.0' x 3.375",
      description: `TIME TO WALK THE PLANK!
                    8'0' x 23.0' x 3.375'(86 Liters).
                    Sierra Lerback Signature Model.
                    Special Fin Box that Accepts any Standard Longboard Fin.
                    7.5” Performance Single Fin Included.
                    Super-Fun for all Skill Levels.
                    Tons of Float and Easy Wave Catching.
                    Stiff Dual Composite Core. Triple Maple-Ply Stringers.
                    Durable HDPE Slick Bottom with Bumper-Tail.
                    Old-School PE Deck with Throwback Design.
                    Designed by Catch Surf in California, U.S.A.`,
      boardType: 'long',
      imageUrl:
        'https://cdn.shopify.com/s/files/1/1154/7998/products/ODY70PL-SL_PK19_TB_1024x1024.jpg?v=1557877569',
      stock: 5,
      price: 380
    }),
    Product.create({
      name: "LOG J. O'B. PRO",
      size: "8'0' x 23.0' x 3.375",
      description: `"Jamie O'Brien Signature Model.
                    Super-Fun for all Skill Levels.
                    Tons of Float and Easy Wave Catching.
                    Stiff Dual Composite Core.
                    Triple Maple-Ply Stringers.
                    Durable HDPE Slick Bottom with Bumper-Tail.
                    Old-School PE Deck with Throwback Design.
                    Designed by Catch Surf in California, U.S.A."`,
      boardType: 'long',
      imageUrl:
        'https://cdn.shopify.com/s/files/1/1154/7998/products/ODY70JOB_SK19_TB_1024x1024.jpg?v=1557873827',
      stock: 5,
      price: 350
    }),
    Product.create({
      name: 'LOG K.R. PRO',
      size: "8'0' x 23.0' x 3.375",
      description: `HOG THE WAVES ON A LOG!
                    8'0' x 23.0' x 3.375'(86 Liters).
                    Kalani Robb Signature Model.
                    Super-Fun for all Skill Levels.
                    Tons of Float and Easy Wave Catching.
                    Stiff Dual Composite Core. Triple Maple-Ply Stringers.
                    Durable HDPE Slick Bottom with Bumper-Tail.
                    Old-School PE Deck with Throwback Design.
                    Designed by Catch Surf in California, U.S.A.`,
      boardType: 'long',
      imageUrl:
        'https://cdn.shopify.com/s/files/1/1154/7998/products/ODY70-KR_LM19_TB_1024x1024.jpg?v=1557873923',
      stock: 5,
      price: 400
    }),
    Product.create({
      name: 'LOG STANALAND PRO',
      size: "8'0' x 23.0' x 3.375",
      description: `HOG THE WAVES ON A LOG!
                    8'0' x 23.0' x 3.375'(86 Liters).
                    Kalani Robb Signature Model.
                    Super-Fun for all Skill Levels.
                    Tons of Float and Easy Wave Catching.
                    Stiff Dual Composite Core.
                    Triple Maple-Ply Stringers.
                    Durable HDPE Slick Bottom with Bumper-Tail.
                    Old-School PE Deck with Throwback Design.
                    Designed by Catch Surf in California, U.S.A.`,
      boardType: 'long',
      imageUrl:
        'https://cdn.shopify.com/s/files/1/1154/7998/products/ODY70-TS_HP19_TB_1024x1024.jpg?v=1557873786',
      stock: 5,
      price: 350
    }),
    // bodyBoard
    Product.create({
      name: 'CLASSIC BODYBOARD',
      size: "36', 42' or 45'",
      description: `THE CLASSIC SUMMER SHRED SLED SIZES: 36', 42' or 45'.
                    Jamie O'Brien Signature Model.
                    Great for All Skill Levels.
                    Stiff Dual-Composite Core.
                    Durable HDPE Slick Bottom.
                    High Quality PE Deck and Double Rails.
                    Graduated Channels for Extra Control.
                    Old School Crescent Tail Design.
                    Pro-Style Coil Leash and Leash Plug Included.
                    Designed by Catch Surf in California, U.S.A.`,
      boardType: 'bodyBoard',
      imageUrl:
        'https://cdn.shopify.com/s/files/1/1154/7998/products/JAMIE-CLASSIC_36_1024x1024.jpg?v=1548114897',
      stock: 5,
      price: 90
    }),
    Product.create({
      name: 'CLASSIC PRO BODYBOARD',
      size: '42',
      description: `ALL KILLER NO FILLER! SIZE: 42'.
                    Blair Conklin Signature Model.
                    PRO Bodyboard to Perform at Highest Level.
                    Ultra-Durable PolyPRO Core.
                    Dual Graphite Stringers for Extra Strength.
                    High Quality PE Deck and Double Rails.
                    Graduated Channels for Extra Control.
                    Durable HDPE Slick Bottom.
                    Old School Crescent Tail Design.
                    Designed by Catch Surf in California, U.S.A.`,
      boardType: 'bodyBoard',
      imageUrl:
        'https://cdn.shopify.com/s/files/1/1154/7998/products/CONKLIN_classicPro_42_1024x1024.jpg?v=1549060832',
      stock: 5,
      price: 230
    }),
    Product.create({
      name: 'STAND-UP BODYBOARD',
      size: '45',
      description: `SWITCH IT UP WITH THE STAND UP BOOG! SIZE: 45.
                    Kalani Robb Signature Model.
                    Custom Shape for Stand-Up.
                    Dropknee or Prone Riding.
                    Stiff Dual-Composite Core.
                    Dual (x2) Maple-Ply Stringers.
                    Durable HDPE Slick Bottom.
                    Old School PE Deck and Double Rails.
                    Rolled Vee Tail.
                    Designed by Catch Surf in California, U.S.A.`,
      boardType: 'bodyBoard',
      imageUrl:
        'https://cdn.shopify.com/s/files/1/1154/7998/products/robb_standup45_pro_1024x1024.jpg?v=1549059251',
      stock: 5,
      price: 170
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
