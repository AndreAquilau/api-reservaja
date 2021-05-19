import express, { Application } from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import { json, urlencoded } from 'body-parser';
import cors from 'cors';
import routes from '@routes/index';

class App {
  app: Application;

  constructor() {
    this.app = express();
    this.loadDependencies();
  }

  loadDependencies() {
    this.app.use(morgan('dev'));
    this.app.use(helmet());
    this.app.use(urlencoded({ extended: true }));
    this.app.use(json());
    this.app.use(cors());
    this.app.use(routes);
  }
}

export default new App().app;
