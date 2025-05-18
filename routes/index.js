const routes =require('express').Router();
const lesson1Controller = require('../controllers/index');
routes.get('/', lesson1Controller.helloRoute);
routes.get('/Emily', lesson1Controller.EmilyRoute);

module.exports = routes;