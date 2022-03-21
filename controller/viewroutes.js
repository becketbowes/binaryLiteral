const sequelize = require('./connection');
const { Literal, Reader, Comment, Neat } = require('../models');
const router = require('express').Router();

router.get('/', (req, res) => {
    Literal.findAll({
        attributes: ['id', 'title', 'image', 'imageAlt', 'keywords', 'article', 'createdAt',
                [ sequelize.literal('(SELECT COUNT(*) FROM neat WHERE literal.id = neat.literalKey)'), 'ohNeat' ]],
        include: [
                { model: Comment, attributes: ['id', 'text', 'createdAt',], include: { model: Literal, attributes: ['title'] }},
                { model: Reader, attributes: ['user']}]    
        })
    .then(data => { res.render('home', data[0].get({ plain: true })); })
    .catch(err => { console.log(err); res.status(500).json(err); });
});

module.exports = router;