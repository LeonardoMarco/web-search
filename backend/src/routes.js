const express = require('express');

const routes = express.Router();

const search = require('./controllers/search');
//const home = require('./controllers/home');

const middlewares = require('../src/middlewares/query');

//AUTH
//routes.post('/search', auth.login);

routes.use(middlewares);
routes.post('/search', search.results)


module.exports = routes;