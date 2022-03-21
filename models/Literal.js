const { Model, DataTypes } = require('sequelize');
const sequelize = require('../controller/connection');

class Literal extends Model {}

Literal.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        image: {
            type: DataTypes.STRING,
            allowNull: true
        },
        imageAlt: {
            type: DataTypes.STRING,
            allowNull: true
        },
        keywords: {
            type: DataTypes.STRING,
            allowNull: true
        },
        article: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        readerKey: {
            type: DataTypes.INTEGER,
            references: { model: 'reader', key: 'id' }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        modelName: 'literal'
    }
);

module.exports = Literal;