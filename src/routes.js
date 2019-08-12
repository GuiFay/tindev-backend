const express = require('express');
const DevController = require('./controllers/DevController');
const LikeController = require('./controllers/LikeController');
const DislikeController = require('./controllers/DislikeController');

const routes = express.Router()

// GET, POST, PUT, DELET
routes.get('/', (req, res) => {
    return res.json({ mensagem: `Olá ${req.query.name}` })
});

routes.post('/devs', DevController.store);
routes.post('/devs/:devId/likes', LikeController.store);
routes.post('/devs/:devId/dislikes', DislikeController.store);
routes.get('/devs/', DevController.index);

module.exports = routes