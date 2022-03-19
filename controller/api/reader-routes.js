const router = require ('express').Router();
const res = require('express/lib/response');
//gets sequelize-created objects through index file in models folder
const { Reader } = require('../../models');

//CRUD routes for reader object
router.get('/', (req, res) => {
    Reader.findAll()
    .then(data => res.json(data))
    .catch(err=> { console.log(err); res.status(500).json(err); });
});

router.get('/:id', (req, res) => {
    Reader.findOne({ where: { id: req.params.id } })
    .then(data => {
        if (!data) {
            res.status(404).json({ message: 'file not found' });
            return;
        }
        res.json(data);
    })
    .catch(err => { console.log(err); res.status(500).json(err); });
});

router.post('/', (req, res) => {
    //expects: {username: Namey McNamerson, password: 1234, email: im@aol.com, writer: true, binary: false, blackpage: true}
    Reader.create({
        user: req.body.user,
        email: req.body.email,
        pass: req.body.pass,
        writer: req.body.writer,
        binary: req.body.binary,
        blackpage: req.body.blackpage
    })
    .then(data => res.json(data))
    .catch(err => { console.log(err); res.status(500).json(err); });
});

router.post('/login', (req, res) => {
    Reader.findOne({ where: { email: req.body.email }})
    .then(data => {
        if (!data) {
            res.status(400).json({ message: 'no such thing' });
            return;
        }
        res.json({ reader: data })
        //verify
        const valid = data.checkPass(req.body.pass);
        if (!valid) {
            res.status(400).json({ message: 'not the password' });
            return;
        }
        res.json({ reader: data, message: 'logged in' });
    });
});

router.put('/:id', (req, res) => {
    Reader.update(req.body, { individualHooks: true, where: { id: req.params.id } })
    .then(data => {
        if (!data[0]) {
            res.status(404).json({ message: 'file not found' });
            return;
        }
        res.json(data);
    })
    .catch (err => { console.log(err); res.status(500).json(err); });
});

router.delete('/:id', (req, res) => {
    Reader.destroy({ where: { id: req.params.id }})
    .then(data => {
        if (!data) {
            res.status(404).json({ message: 'file not found'});
            return;
        }
        res.json(data);
    })
    .catch(err=> { console.log(err); res.status(500).json(err); });
});

module.exports = router;