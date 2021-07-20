const express = require('express');
const GoalController = require('./controllers/goalController');
const UserController = require('./controllers/userController');
const AuthController = require('./controllers/authController');

const verifyToken = require('./services/verifyTokenService');

const routes = express.Router();

routes.get('/goals', verifyToken, GoalController.index);
routes.put('/goals', verifyToken, GoalController.saveMoney);
routes.post('/goals', verifyToken, GoalController.store);
routes.delete('/goals', verifyToken, GoalController.delete);

routes.get("/user", verifyToken, UserController.index);
routes.post("/user", verifyToken, UserController.store);
routes.get("/user/:id", verifyToken, UserController.findUserByid);
routes.delete("/user/:id", verifyToken, UserController.deleteUser);

routes.post("/login", AuthController.login);
routes.get("/logout", AuthController.logout);
routes.post("/register", AuthController.register);

    module.exports = routes;