
const schema = (sequelize, DataTypes) => {
    return sequelize.define('sys_menu', {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        menu_name: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'menu_name'
        },
        createdAt: {
            type: DataTypes.BIGINT,
            allowNull: false,
            field: 'created_at'
        },
        updatedAt: {
            type: DataTypes.BIGINT,
            allowNull: false,
            field: 'updated_at'
        },
    }, {
        freezeTableName: true
    })
}

module.exports = schema;