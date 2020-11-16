
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
            type: DataTypes.DATE,
            allowNull: false,
            field: 'created_at'
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
            field: 'updated_at'
        },
    }, {
        timestamps: false,
        freezeTableName: true
    })
}

module.exports = schema;