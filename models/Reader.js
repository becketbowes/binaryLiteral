//import model and datatypes archetype objects from sequelize
const { Model, DataTypes } = require('sequelize');
//connect to the sequelize instance made in the connection file
const sequelize = require('../controller/connection');

//create the table 'reader' based on sequelize's model archetype
class Reader extends Model { }

//define the reader table that defines users of the site
Reader.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        user: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: { isEmail: true }
        },
        pass: {
            type: DataTypes.STRING,
            allowNull: false
        },
        writer: {
            //revert to false after assignment and make a path to authorize writers by admin
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },
        binary: {
            //will allow program to translate from binary code to english
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        blackpage: {
            //user preference for page layout
            type: DataTypes.BOOLEAN,
            defaultValue: true
        }
        //add foreign keys
    },
    {
        //define table config options
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'reader'
    }
);

module.exports = Reader;