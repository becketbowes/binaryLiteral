const express = require('express');
const controller = require('./controller');
const sequelize = require('./controller/connection');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});

const app = express();
const PORT = process.env.PORT || 3311;

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.static(__dirname + '/views/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(controller);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('On Air'));
});