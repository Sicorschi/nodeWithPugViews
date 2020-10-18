const express = require('express');
const router = express.Router();
const User = require('../database/models/User');
const Roles = require('../database/models/Roles');
const Post = require('../database/models/Post');

router.get('/', (req, res) => {
    User.findAll({
        include: [{
            model: Post,
            attributes: ['title', 'description']
        }, {
            model: Roles
        }]
    }).then((users) => {
        res.json(users);
    });
});

router.post('/create', (req, res) => {
    const { name, description } = req.body;
    User.build({
        name,
        description
    }).save().then((user) => {
        res.json(user);
    }).catch(err => {
        res.json({
            message: err.message
        });
    });
});

router.put('/update/:id', (req, res) => {
    const { id } = req.params;
    const { name, description } = req.body;
    User.update({
        name,
        description
    }, {
        where: {
            id
        }
    }).then((updated) => {
        res.json(updated);
    }).catch(err => {
        res.json({
            message: err.message
        });
    });
});

router.delete('/delete/:id', (req, res) => {
    const { id } = req.params;
    User.destroy({
        where: {
            id
        }
    }).then((deleted) => {
        res.json(deleted);
    }).catch(err => {
        res.json({
            message: err.message
        });
    });
});



module.exports = router;