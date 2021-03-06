const Sequelize = require('sequelize')
const db = require('../db')

const Product = db.define('product', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  size: {
    type: Sequelize.STRING
  },
  description: {
    type: Sequelize.TEXT
  },
  boardType: {
    type: Sequelize.STRING
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: 'src="assets/items/fomie_pink.jpg',
    validate: {
      isUrl: true
    }
  },
  stock: {
    type: Sequelize.SMALLINT,
    validate: {
      min: 0
    },
    defaultValue: 1
  },
  price: {
    type: Sequelize.SMALLINT,
    validate: {
      min: 0
    },
    allowNull: false
  }
})

module.exports = Product
