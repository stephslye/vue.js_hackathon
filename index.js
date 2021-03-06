const express = require('express');
const path = require('path');
const serveStatic = require('serve-static');

const app = express();
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const bodyParser = require('body-parser');

const router = require('./config/router');
const { port, dbURI } = require('./config/environment');
const errorHandler = require('./lib/errorHandler');

mongoose.connect(dbURI);


app.use(bodyParser.json());
app.use('/api', router);

app.use(serveStatic(__dirname + "/dist"));

app.use(errorHandler);

app.listen(port, () => console.log(`We're up and running on port ${port}`));

module.exports = app;
