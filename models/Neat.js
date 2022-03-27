const { Model, DataTypes } = require('sequelize');
const sequelize = require('../controller/connection');

class Neat extends Model {}

Neat.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        readerkey: {
            type: DataTypes.INTEGER,
            references: { model: 'reader', key: 'id' }
        },
        literalKey: {
            type: DataTypes.INTEGER,
            references: { model: 'literal', key: 'id' }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        modelName: 'neat'
    }
);

module.exports = Neat;