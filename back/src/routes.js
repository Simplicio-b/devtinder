//  Dependencias
const express = require('express');
const routes = express.Router();

//  Controllers
const DevController = require('./controllers/DevController');
const DeslikesController = require('./controllers/DeslikeController'); 
const LikeController = require('./controllers/LikeController');

// Routes
routes.get("/", (req, res) => {
    return res.json({ menssagem: `Olá ${req.query.name}`});
});

routes.get("/devs", DevController.index);

routes.post("/devs", DevController.store);

routes.post("/devs/:devId/likes", LikeController.store);

routes.post("/devs/:devId/deslikes", DeslikesController.store);

module.exports = routes;
