require('./config/config');

const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false}));

app.use(bodyParser.json());

app.use( express.static( path.resolve(__dirname, '../public')));

app.use(require('./routes/index'));

app.listen(process.env.PORT, () => {
    console.log(`listen on port: ${process.env.PORT}`);
});