import { Router } from 'express';

import PostController from './controllers/PostController';
import RegisterController from './controllers/RegisterController';
import LoginController from './controllers/LoginController';
import LikeController from './controllers/LikeController';
import UserController from './controllers/UserController';

const routes = new Router();

routes.get('/posts', PostController.loadPosts);
routes.post('/posts', PostController.savePost);

routes.post('/register', RegisterController.newUser);
routes.post('/login', LoginController.login);

routes.post('/posts/:id/like', LikeController.newLike);
routes.post('/posts/:id/dislike', LikeController.newDislike);

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);

export default routes;
