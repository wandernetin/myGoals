const express = require('express');
const GoalController = require('./controllers/goalController');
const { verifySignUp, authJwt } = require('./middleware');
const controller = require('./controllers/authController');
const userController = require('./controllers/userController');

const routes = express.Router();

routes.get('/goals', GoalController.index);
routes.put('/goals', GoalController.saveMoney);
routes.post('/goals', GoalController.store);
routes.delete('/goals', GoalController.delete);
routes.post(
    '/api/auth/signup',
    [
        verifySignUp.checkDuplicateUsernameOrEmail
    ],
    controller.signup
);
routes.post('/api/auth/signin', controller.signin);
routes.get('/api/test/all', userController.allAccess);
//routes.get('/api/test/user', [authJwt.verifyToken], controller.userBoard);

    module.exports = routes;