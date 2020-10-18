const express = require('express');
const router = express.Router();
const Post = require('../database/models/Post');

router.get('/', (req, res) => {
        Post.findAll().then((posts) => {
            res.json(posts);
        }).catch(err => {
            res.json({
                message: err.message
            });
        });
});

router.post('/create', (req, res) => {
    const { title, description } = req.body;
    Post.create({
        title,
        description
    }).then((post) => {
        res.json(post);
    }).catch(err => {
        res.json({
            message: err.message
        });
    });
});

router.put('/edit/:id', (req, res) => {
    console.log(`update op post with id ${req.params.id}`);
    const { title, description } = req.body;
    const { id } = req.params;
    Post.update({
        title,
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
    console.log(`delete op post with id ${req.params.id}`);
    const { id } = req.params;
    Post.destroy({
        where: {
            id
        }
    }).then(() => {
        res.json({
            message: 'the post is succesfully deleted'
        });
    }).catch(err => {
        res.json({
            message: err.message
        });
    });
});

module.exports = router;