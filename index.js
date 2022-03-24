const express = require('express');
const controller = require('./controller');
const sequelize = require('./controller/connection');
const helpers = require('./views/utils/helpers');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({ helpers });
const session = require('express-session');


const app = express();
const PORT = process.env.PORT || 3311;

const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
    secret: 'ifYouTellEveryoneItsNotASecretHarold',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({ db: sequelize })
};

app.use(session(sess));
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.static(__dirname + '/views/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(controller);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('On Air'));
});