const router = require('express').Router();
const sequelize = require('./connection');
const { Post, User, Comment } = require('../models');

router.get('/', (req, res) => {
    res.render('write', { loggedin: true, blackpage: true })
})

module.exports = router;