const sequelize = require('./connection');
const { Literal, Reader, Comment } = require('../models');
const res = require('express/lib/response');
const router = require('express').Router();

//request to get all articles and render homepage
router.get('/', (req, res) => {
    Literal.findAll({
        order: [[ 'createdAt', 'DESC' ]],
        attributes: ['id', 'title', 'image', 'imageAlt', 'keywords', 'article', 'createdAt',
                [ sequelize.literal('(SELECT COUNT(*) FROM neat WHERE literal.id = neat.literalkey)'), 'ohNeat' ]],
        include: [
                { model: Comment, attributes: ['id', 'text', 'createdAt',], include: { model: Literal, attributes: ['title'] }},
                { model: Reader, attributes: ['user']}]    
        })
    .then(data => { 
        //render the homepage using the findAll from the data base and including session variables
        const articles = data.map(article => article.get({ plain: true }));
        res.render('home', { articles, loggedin: req.session.loggedin, blackpage: req.session.blackpage, binary: req.session.binary }); 
    })
    .catch(err => { console.log(err); res.status(500).json(err); });
});

//request called by comment button to get one article and render page, conditionally rendering comment writing section if reader is logged in
router.get('/literal/:id', (req, res) => {
    Literal.findOne({
        where: { id: req.params.id },
        attributes: ['id', 'title', 'image', 'imageAlt', 'keywords', 'article', 'createdAt',
                [ sequelize.literal('(SELECT COUNT(*) FROM neat WHERE literal.id = neat.literalkey)'), 'ohNeat' ]],
        include: [
                { model: Comment, attributes: ['id', 'text', 'createdAt',], include: { model: Literal, attributes: ['title'] }},
                { model: Reader, attributes: ['user']}]    
        })
    .then(data => { 
        if (!data) { res.status(404).json({ message: 'no such post' }); return; }
        //create single literal page returning database info and session variables
        const literal = data.get({ plain: true });
        res.render('literal', { literal, loggedin: req.session.loggedin, blackpage: req.session.blackpage, binary: req.session.binary });
    })
    .catch(err => { console.log(err); res.status(500).json(err); });
});

//request to render signup page(no data needed)
router.get('/signup', (req, res) => {
    res.render('signup');
})

//request to render login page(no data needed)
router.get('/login', (req, res) => {
    res.render('login');
});

module.exports = router;