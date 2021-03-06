const sequelize = require('../connection');
const router = require('express').Router();
const { Reader, Literal, Neat, Comment } = require('../../models');

//get all literals
router.get('/', (req, res) => {
    Literal.findAll({
        order: [[ 'createdAt', 'DESC' ]],
        attributes: ['id', 'title', 'image', 'keywords', 'article', 'createdAt',
                [ sequelize.literal('(SELECT COUNT(*) FROM neat WHERE literal.id = neat.literalkey)'), 'ohNeat' ]],
        include: [{ 
                    model: Comment, 
                    attributes: ['id', 'text', 'readerkey', 'literalkey', 'createdAt'],
                    include: { model: Reader, attributes: ['user']}
                },
                { model: Reader, attributes: ['user'] }]
        })
    .then(data => res.json(data))
    .catch(err => { console.log(err); res.status(500).json(err) });
});

//get one literal by id
router.get('/:id', (req, res) => {
    Literal.findOne({ 
        where: { id: req.params.id },
        attributes: ['id', 'title', 'image', 'keywords', 'article', 'createdAt',
            [ sequelize.literal('(SELECT COUNT(*) FROM neat WHERE literal.id = neat.literalkey)'), 'ohNeat' ]],
        include: [
            { model: Comment, attributes: ['id', 'text', 'createdAt',], include: { model: Literal, attributes: ['title'] }},
            { model: Reader, attributes: ['user']}]    
    })
    .then(data => {
        if (!data) {
            res.status(404).json({ message: 'no such literal' });
            return;
        }
        res.json(data);
    })
    .catch(err => { console.log(err); res.status(500).json(err); });
});

//post a literal
router.post('/', (req, res) => {
    Literal.create({
        title: req.body.title,
        image: req.body.image,
        imageAlt: req.body.imageAlt,
        keywords: req.body.keyword,
        article: req.body.article,
        readerkey: req.session.readerkey
    })
    .then(data => res.json(data))
    .catch(err => { console.log(err); res.status(500).json(err); });
});

//post an upvote for a literal
router.put('/neat', (req, res) => {
    if (req.session) {
        Neat.create({ ...req.body, user: req.session.user}, { Neat, Comment, Reader })
        .then(() => {
            console.log(req.body);
            return Literal.findOne({ where: { id: req.body.literalkey },    
                attributes: [ 'id', 'title', 'keywords', 'article', 'createdAt', 
                        [ sequelize.literal('(SELECT COUNT(*) FROM neat WHERE literal.id = neat.literalkey)'), 'ohNeat' ]]
            })
        })
        .then(data => res.json(data))
        .catch(err => { console.log(err); res.status(500).json(err); });
    }
});

//update a literal title
router.put('/title/:id', (req, res) => {
    console.log(req.body);
    Literal.update({ title: req.body.newTitle, }, { where: { id: req.body.literalkey }})
    .then(data => {
        if (!data) {
            res.status(404).json({ message: 'no such literal' });
            return;
        }
        console.log(data);
        res.json(data);
    })
    .catch(err => { console.log(err); res.status(500).json(err); });
});

//update a literal image
router.put('/image/:id', (req, res) => {
    Literal.update({ image: req.body.newImage, }, { where: { id: req.body.literalkey }})
    .then(data => {
        if (!data) {
            res.status(404).json({ message: 'no such literal' });
            return;
        }
        res.json(data);
    })
    .catch(err => { console.log(err); res.status(500).json(err); });
});

//update a literal image alt
router.put('/imgalt/:id', (req, res) => {
    Literal.update({ image: req.body.newImgAlt, }, { where: { id: req.body.literalkey }})
    .then(data => {
        if (!data) {
            res.status(404).json({ message: 'no such literal' });
            return;
        }
        res.json(data);
    })
    .catch(err => { console.log(err); res.status(500).json(err); });
});


//update a literal's keywords
router.put('/keywords/:id', (req, res) => {
    Literal.update({ keywords: req.body.newKeywords, }, { where: { id: req.body.literalkey }})
    .then(data => {
        if (!data) {
            res.status(404).json({ message: 'no such literal' });
            return;
        }
        res.json(data);
    })
    .catch(err => { console.log(err); res.status(500).json(err); });
});

//update a literal's article
router.put('/article/:id', (req, res) => {
    Literal.update({ article: req.body.newArticle, }, { where: { id: req.body.literalkey }})
    .then(data => {
        if (!data) {
            res.status(404).json({ message: 'no such literal' });
            return;
        }
        res.json(data);
    })
    .catch(err => { console.log(err); res.status(500).json(err); });
});

//delete an article by id
router.delete('/:id', (req, res) => {
    Literal.destroy({ where: { id: req.params.id }})
    .then(data => {
        if (!data) {
            res.status(404).json({ message: 'no such literal' });
            return;
        }
        res.json(data);
    })
    .catch(err => {console.log(err); res.status(500).json(err); });
});

module.exports = router;