const router = require('express').Router();
const { Comment, Reader } = require('../../models');

router.get('/:id', (req, res) => {
    Comment.getAll({
        where: { id: literalKey },
        attributes: [ 'id', 'text'],
        include: [{ model: Reader, attributes: ['user'] }]
    })
    .then(data => res.json(data))
    .catch(err => { console.log(err); res.status(500).json(err); });
});

router.post('/', (req, res) => {
    Comment.create({
        text: req.body.text,
        readerKey: req.body.readerKey,
        literalKey: req.body.literalKey
    })
    .then(data => res.json(data))
    .catch(err => { console.log(err); res.status(500).json(err); });
});

router.delete('/:id', (req, res) => {
    Comment.destroy({ where: { id: req.params.id } })
    .then(data => res.json(data))
    .catch(err => { console.log(err); res.status(500).json(err); });
});

module.exports = router;