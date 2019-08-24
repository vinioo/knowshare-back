import express from 'express';
import cors from 'cors';
import http from 'http';
import io from 'socket.io';

import routes from './routes';

import './database';

class App {
  constructor() {
    this.app = express();
    this.server = http.Server(this.app);
    this.io = io(this.server);

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use((req, res, next) => {
      req.io = this.io;

      return next();
    });
    this.app.use(cors());
    this.app.use(express.json());
  }

  routes() {
    this.app.use(routes);
  }
}

export default new App().server;
