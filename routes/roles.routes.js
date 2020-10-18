const express = require('express');
const router = express.Router();
const Roles = require('../database/models/Roles');

router.get('/', (req,res) => {
    Roles.findAll().then(roles => {
        res.json(roles);
    }).catch(err => {
        res.json({
            message: err.message
        });
    });
});

router.post('/create', (req, res) => {
    const { name, description } = req.body;
    Roles.build({
        name,
        description
    }).save().then(role => {
        res.json(role);
    }).catch(err => {
        res.json({
            message: err.message
        });
    });
});

router.put('/edit/:id', (req, res) => {
    const { id } = req.params;
    const { name, description } = req.body;
    Roles.update({
        name,
        description
    }, {
        where: {
            id
        }
    }).then(() => {
        res.json({
            message: `Rol with name ${name} is succesfully updated`
        });
    }).catch(err => {
        res.json({
            message: err.message
        });
    });
});

router.delete('/delete/:id', (req, res) => {
    const { id } = req.params;
    Roles.destroy({
        where: {
            id
        }
    }).then(() => {
        res.json({
            message: `The rol with id ${id} is successfully deleted`
        });
    }).catch(err => {
        res.json({
            message: err.message
        });
    });
});

module.exports = router;