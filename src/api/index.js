import pkg from 'express';
const { Router, Response } = pkg;
import ProcessRoutes from './process/index.js';

class Routes {

  router = Router();

  constructor() {
    this.routes();
  }

  routes = () => {
    this.router.use('/process', ProcessRoutes);
  }
}

export default new Routes().router;