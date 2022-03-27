const Sequelize = require('sequelize');
require('dotenv').config();

//call sequelize to connect to database, using dotenv to hide credentials
let sequelize;

if (process.env.JAWSDB_URL) {
    sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
    const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
        host: 'localhost',
        dialect: 'mysql',
        port: 3311
    });
}

module.exports = sequelize;