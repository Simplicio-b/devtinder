const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes');

const server = express();

mongoose.connect('mongodb+srv://omini:omini123@cluster0-rbsva.mongodb.net/omini9?retryWrites=true&w=majority', {
    useNewUrlParser: true,
});

server.use(express.json());
server.use(routes); 

server.listen(3333);
