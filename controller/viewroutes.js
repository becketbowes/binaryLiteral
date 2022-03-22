const sequelize = require('./connection');
const { Literal, Reader, Comment } = require('../models');
const router = require('express').Router();

router.get('/', (req, res) => {
    Literal.findAll({
        order: [[ 'createdAt', 'DESC' ]],
        attributes: ['id', 'title', 'image', 'imageAlt', 'keywords', 'article', 'createdAt',
                [ sequelize.literal('(SELECT COUNT(*) FROM neat WHERE literal.id = neat.literalKey)'), 'ohNeat' ]],
        include: [
                { model: Comment, attributes: ['id', 'text', 'createdAt',], include: { model: Literal, attributes: ['title'] }},
                { model: Reader, attributes: ['user']}]    
        })
    .then(data => { 
        const article = data.map(article => article.get({ plain: true }));
        res.render('home', { article }); 
    })
    .catch(err => { console.log(err); res.status(500).json(err); });
});

router.get('/literal/:id', (req, res) => {
    Literal.findOne({
        where: { id: req.params.id },
        attributes: ['id', 'title', 'image', 'imageAlt', 'keywords', 'article', 'createdAt',
                [ sequelize.literal('(SELECT COUNT(*) FROM neat WHERE literal.id = neat.literalKey)'), 'ohNeat' ]],
        include: [
                { model: Comment, attributes: ['id', 'text', 'createdAt',], include: { model: Literal, attributes: ['title'] }},
                { model: Reader, attributes: ['user']}]    
        })
    .then(data => { 
        if (!data) { res.status(404).json({ message: 'no such post' }); return; }
        const literal = data.get({ plain: true });
        res.render('literal', { literal });
    })
    .catch(err => { console.log(err); res.status(500).json(err); });
});

router.get('/signup', (req, res) => {
    res.render('signup');
})

router.get('/login', (req, res) => {
    res.render('login');
});

module.exports = router;