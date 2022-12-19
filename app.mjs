import express from 'express';

import viewRoute from './routes/viewRoute.mjs';

const app = express();
app.use(express.static('public'));

app.set('view engine', 'pug');
app.use('/', viewRoute);

// app.use('*', (req, res) => {
//   res.status(404).json({ status: 'fail', message: 'Not found' });
// });

export default app;
