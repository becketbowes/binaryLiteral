const router = require('express').Router();
const { Reader, Literal } = require('../../models');

//get all literals
router.get('/', (req, res) => {
    Literal.findAll({
        attributes: ['id', 'title', 'keywords', 'article', 'createdAt'],
        order: [[ 'createdAt', 'DESC' ]],
        include: [{ model: Reader, attributes: ['user']}];
        })
    .then(data => res.json(data))
    .catch(err => { console.log(err); res.status(500).json(err) });
});

//get one literal by id
router.get('/:id', (req, res) => {
    Literal.findOne({ 
        where: { id: req.params.id },
        attributes: ['id', 'title', 'keywords', 'article'],
        include: [{ model: Reader, attributes: ['user']}]    
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
        keywords: req.body.keywords,
        article: req.body.article,
        readerKey: req.body.readerKey
    })
    .then(data => res.json(data))
    .catch(err => { console.log(err); res.status(500).json(err); });
});

//update a literal title
router.put('/title/:id', (req, res) => {
    Literal.update({ title: req.body.title, }, { where: { id: req.body.id }})
    .then(data => {
        if (!data) {
            res.status(404).json({ message: 'no such literal '});
            return;
        }
        res.json(data);
    })
    .catch(err => { console.log(err); res.status(500).json(err); });
});

//update a literal's keywords
router.put('/keyword/:id', (req, res) => {
    Literal.update({ keywords: req.body.keywords, }, { where: { id: req.body.id }})
    .then(data => {
        if (!data) {
            res.status(404).json({ message: 'no such literal '});
            return;
        }
        res.json(data);
    })
    .catch(err => { console.log(err); res.status(500).json(err); });
});

//update a literal's article
router.put('/article/:id', (req, res) => {
    Literal.update({ article: req.body.article, }, { where: { id: req.body.id }})
    .then(data => {
        if (!data) {
            res.status(404).json({ message: 'no such literal '});
            return;
        }
        res.json(data);
    })
    .catch(err => { console.log(err); res.status(500).json(err); });
});

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