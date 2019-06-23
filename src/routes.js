const express = require('express');

const PostController = require('./controllers/PostController');
const RegisterController = require('./controllers/RegisterController');
const LoginController = require('./controllers/LoginController');
const LikeController = require('./controllers/LikeController');

const routes = new express.Router();

routes.get('/posts', PostController.loadPosts);
routes.post('/posts', PostController.savePost);

routes.post('/register', RegisterController.newUser);
routes.post('/login', LoginController.login);

routes.post('/posts/:id/like', LikeController.newLike);
routes.post('/posts/:id/dislike', LikeController.newDislike);

module.exports = routes;
