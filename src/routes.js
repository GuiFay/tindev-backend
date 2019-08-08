const express = require('express');
const DevController = require('./controllers/DevController');

const routes = express.Router()

// GET, POST, PUT, DELET
routes.get('/', (req, res) => {

    return res.json({ mensagem: `Olá ${req.query.name}` })
});

routes.post('/devs', DevController.store);

module.exports = routes