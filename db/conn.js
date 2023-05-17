const { Sequelize } = require('sequelize')
const sequelize = new Sequelize('db_conn','root','senai',{
    host: 'localhost',
    dialect: 'mysql',
})

sequelize.authenticate().then(()=>{
    console.log('olá mundo!')
}).catch((error)=>{
    console.error('não foi!'+error)
})

module.exports = sequelize