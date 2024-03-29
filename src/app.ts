import express from 'express';
import 'dotenv/config';

import connection from './database/connection';
import urlRoutes from './routes/url.routes';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/urls', urlRoutes);

export { app, connection };