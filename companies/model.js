const Sequelize = require('sequelize')
const sequelize = require('../db')

const Company = sequelize.define('companies', {
  name: {
    type: Sequelize.TEXT,
    field: 'name',
    allowNull: false
  },
  foundingyear		: {
    type: Sequelize.INTEGER,
    field: 'founding year',
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: true
  },
 
}, {
  timestamps: false,
  tableName: 'companies'
})

module.exports = Company