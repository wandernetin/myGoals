const express = require('express');
const GoalController = require('./controllers/goalController');
const routes = express.Router();

routes.get('/goals', GoalController.index);
routes.post('/goals', GoalController.store);
routes.delete('/goals', GoalController.delete);

module.exports = routes;