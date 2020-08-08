const express = require('express');

const app = express();

app.use(require('./user'));
app.use(require('./wallet'));

module.exports = app;