const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');


class Roles extends Model {}
Roles.init({
    id: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true
    }
}, {
    sequelize,
    modelName: 'role',
    timestamps: false
});

module.exports = Roles;