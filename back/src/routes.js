const express = require('express');
const routes = express.Router();
const DevController = require('./controllers/DevController');

routes.get("/", (req, res) => {
    return res.json({ menssagem: `Olá ${req.query.name}`});
});

routes.post("/devs", DevController.store);

module.exports = routes;
