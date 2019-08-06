const express = require('express');
const routes = express.Router();

routes.get("/", (req, res) => {
    let x = req.query.name
    return res.json({ menssagem: "Hello human", name: x });
});

routes.post("/devs", (req, res) => {
    return res.json(req.body);
});

module.exports = routes;
