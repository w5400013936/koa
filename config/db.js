const Sequelize = require('sequelize');
const sequelize = new Sequelize('erp-catering-dev', 'erp_test', 'erp_test@abc', {
    host: '182.61.130.60',
    port: '33064',
    dialect: 'mysql',
    operatorsAliases:false,
    pool:{
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    timezone: '+08:00'
})

module.exports = {
    sequelize
}