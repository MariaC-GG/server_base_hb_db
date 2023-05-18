const { DataTypes} = require('sequelize')
const db = require('../db/conn')
const Socio = db.define('socio',{
    cartao_socio: {
        type: DataTypes.INTEGER
      },
      nome_socio: {
        type: DataTypes.STRING(30)
      },
      endereco_socio: {
        type: DataTypes.STRING(30)
      },
      telefone_socio: {
        type: DataTypes.INTEGER
      },
      email_socio: {
        type: DataTypes.STRING(30)
      }
    },{
        createdAt:false,
        updatedAt:false
})

// User.sync({force:true})

module.exports = User


