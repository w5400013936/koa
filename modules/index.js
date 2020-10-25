const { DataTypes } = require('sequelize');
const db = require('../config/db');
const sequelize = db.sequelize;

// const schema = sequelize.import('../schema/index');
const schemaModel = require('../schema/index');
const schema = schemaModel(sequelize, DataTypes);

// try {
//     await sequelize.authenticate();
//     console.log('success!!!');
// } catch (err) {
//     console.log('failed...');
// }

class MenuModel {
    static async test() {
        let msg;
        try {
            await sequelize.authenticate();
            console.log('success!!!');
            msg = 'success';
        } catch (err) {
            console.log('failed...');
            msg = 'failed';
        }
        return msg;
    }

    static async getMenu() {
        return schema.findAll();
    }

    static async getMenuById(id) {
        return schema.findOne({
            where: {
                id: id
            }
        });
    }
}

module.exports = MenuModel;