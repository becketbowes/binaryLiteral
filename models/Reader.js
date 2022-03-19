//import model and datatypes archetype objects from sequelize
const { Model, DataTypes } = require('sequelize');
//connect to the sequelize instance made in the connection file
const sequelize = require('../controller/connection');
//call bcrypt to encrypt user password
const bcrypt = require('bcrypt');

//create the table 'reader' based on sequelize's model archetype
class Reader extends Model { checkPass(login) { return bcrypt.compareSync(login, this.pass); }}

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
        hooks: {
            //async hash of user's passcode using bcrypt
            async beforeCreate(data) {
                data.pass = await bcrypt.hash(data.pass, 11);
                return data;
            },
            async beforeUpdate(upData) {
                upData.pass = await bcrypt.hash(upData.pass, 11);
                return upData;
            }
        },
        //define table config options
        sequelize,
        freezeTableName: true,
        modelName: 'reader'
    }
);

module.exports = Reader;