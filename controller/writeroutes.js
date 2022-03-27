const router = require('express').Router();
const sequelize = require('./connection');
const { Neat, Comment, Literal, Reader } = require('../models');

//this will make the write page
router.get('/', (req, res) => {
    console.log('write page router.get', req.session.readerid);
    Literal.findAll({
        //!!!!!!!!!!!!!!!!!!!!!!!!!!!
        where: { readerkey: req.session.readerkey },
        attributes: [ 'id', 'title', 'image', 'imageAlt', 'keywords', 'article', 'createdAt',
                [sequelize.literal('(SELECT COUNT(*) FROM neat WHERE literal.id = neat.literalkey)'), 'neato']],
        include: [{ 
            model: Comment, 
            attributes: [ 'id', 'text', 'literalkey', 'readerkey', 'createdAt' ],
            include: { model: Reader, attributes: ['user']}
        },
        { model: Reader, attributes: ['user'] }]
    })
    .then(data => {
        const literals = data.map(articles => articles.get({ plain: true }));
        res.render('write', { literals, loggedin: true, blackpage: true })
    })
    .catch(err => { console.log(err); res.status(500).json(err); });
});

//this will create the edit page
router.get('/:id', (req, res) => {
    console.log('edit page router.get', req.session.readerid);
    Literal.findByPk(req.params.id, {

        //THIS!!!

        // where: ({ id: req.body.id }),
        attributes: ['id', 'title', 'image', 'imageAlt', 'keywords', 'article'],
    })
    .then(data => {
        if (!data) { res.status(404).json({ message: 'no such article' }); return; }
        const oneLiteral = data.get({ plain: true });
        res.render('edit', { oneLiteral, loggedin: req.session.loggedin, blackpage: true });
    })
    .catch(err => { console.log(err); res.status(500).json(err); });
});

module.exports = router;