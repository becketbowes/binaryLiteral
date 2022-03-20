const { Model, DataTypes } = require('sequelize');
const sequelize = require('../controller/connection');

class Comment extends Model {}

Comment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        text: {
            type: DataTypes.STRING,
            allowNull: false
        },
        readerKey: {
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
        modelName: 'comment'
    }
);

module.exports = Comment;