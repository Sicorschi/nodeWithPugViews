const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');

class Post extends Model {}
Post.init({
    id: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.TEXT
    },
    userId: {
        type: DataTypes.SMALLINT
    }
}, {
    sequelize,
    modelName: 'post',
    timestamps: false
});


module.exports = Post;