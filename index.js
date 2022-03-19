const express = require('express');
const controller = require('./controller');
const sequelize = require('./controller/connection')

const app = express();
const PORT = process.env.PORT || 3311;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(controller);

sequelize.sync({ force: true }).then(() => {
    app.listen(PORT, () => console.log('On Air'));
});