const express = require('express');
const middleware = require('../config/middleware');
const routes = require('../config/routers');

require('dotenv').config();

const app = express();

middleware.init(app);

routes.init(app);

app.set('port', process.env.PORT, 3000);

module.exports = app;