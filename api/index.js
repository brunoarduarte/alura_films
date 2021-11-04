const express = require('express');
const config = require('config');
const filmsRouter = require('../routes/filmsRoutes');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/films', filmsRouter);

app.listen(config.get('api.port'), () => {
  console.log(`Server started on port ${config.get('api.port')}`);
});

module.export = app;
