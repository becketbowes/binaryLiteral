const router = require('express').Router();
const { Comment, Reader } = require('../../models');

router.get('/:id', (req, res) => {
    Comment.getAll({
        where: { id: literalKey },
        attributes: ['id', 'text'],
        include: [{ model: Reader, attributes: ['user'] }]
    })
    .then(data => res.json(data))
    .catch(err => { console.log(err); res.status(500).json(err); });
});

//note that readerkey comes from session, text and literalKey come from front end fetch call
router.post('/', (req, res) => {
    if (req.session) {
        Comment.create({
            text: req.body.commenttext,
            literalKey: req.body.literalKey,
            readerkey: req.session.readerid
        })
        .then(data => res.json(data))
        .catch(err => { console.log(err); res.status(400).json(err); });
    }
});

router.delete('/:id', (req, res) => {
    Comment.destroy({ where: { id: req.params.id } })
    .then(data => res.json(data))
    .catch(err => { console.log(err); res.status(500).json(err); });
});

module.exports = router;