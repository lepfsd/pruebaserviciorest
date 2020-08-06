const express = require('express');
const bcrypt = require('bcrypt');
const _ = require('underscore');

const app = express();

app.get('/user', function(req, res) {
    res.json('get user')
});

module.exports = app;