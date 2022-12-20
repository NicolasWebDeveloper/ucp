import express from 'express';

import viewRoute from './routes/viewRoute.mjs';
import authRoute from './routes/authRoute.mjs';

import errorController from './controllers/errorController.mjs';

const app = express();
app.use(express.static('public'));
app.use(express.json());

app.set('view engine', 'pug');
app.use('/', viewRoute);
app.use('/auth', authRoute);

app.use('*', (req, res) => {
  res.status(404).json({ status: 'fail', message: 'URL not found' });
});

app.use(errorController);

export default app;
