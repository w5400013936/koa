const { DataTypes } = require('sequelize');
const db = require('../config/db');
const sequelize = db.sequelize;

// const schema = sequelize.import('../schema/index');
const schemaModel = require('../schema/index');
const schema = schemaModel(sequelize, DataTypes);

class MenuModel {
    static async test() {
        let isConnected;
        try {
            await sequelize.authenticate();
            console.log('success!!!');
            isConnected = true;
        } catch (err) {
            console.log('failed...');
            isConnected = false;
        }
        return isConnected;
    }

    static async getMenu() {
        return schema.findAndCountAll({
            order: [
                ['id', 'DESC']
            ],
            limit: 5
        });
    }

    static async getMenuById(id) {
        return schema.findOne({
            where: {
                id: id
            }
        });
    }

    static async createMenu(data) {
        return await schema.create({
            menu_name: data.menu_name,
            // menu_type: data.menu_type,
            // parent_id: data.parent_id,
            createdAt: Number(new Date().getTime()),
            updatedAt: Number(new Date().getTime())
        })
    }
}

module.exports = MenuModel;