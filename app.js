const express = require('express');
const app = express();
const apiRouter = require('./routes/api-router');
const {
  SQL400Errors,
  customErrors,
  serverError,
  routeError,
  SQL422Errors
} = require('./errors');

app.use(express.json());

app.use('/api', apiRouter);

app.use(SQL400Errors);
app.use(SQL422Errors);
app.use(customErrors);
app.use(serverError);
app.all('/*', routeError);

module.exports = app;