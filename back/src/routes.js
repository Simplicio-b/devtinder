//  Dependencias
const express = require('express');
const routes = express.Router();

//  Controllers
const DevController = require('./controllers/DevController');
const LikeController = require('./controllers/LikeController');

routes.get("/", (req, res) => {
    return res.json({ menssagem: `Olá ${req.query.name}`});
});

routes.post("/devs", DevController.store);

routes.post("/devs/:devId/likes", LikeController.store);

module.exports = routes;
