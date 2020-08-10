const express = require('express');
const axios = require('axios');
const services = require('../services');

const app = express();

app.post('/api/auth/login', (req, res) => {
  
    console.log(req.body.email);
    axios.post(`http://127.0.0.1:5000/api/auth/login`, {
        email: req.body.email,
        password: req.body.password
    })
    .then(response => res.json(response.data))
    .catch(e => {
        console.log(e);
    });

});

app.post('/api/auth/logout', (req, res) => {

  axios.post(`http://127.0.0.1:5000/api/auth/logout`, {
    key: "value"
  },
  services.createToken(req.headers.authorization)
  )
  .then(response => res.json(response.data))
  .catch(e => {
    console.log(e);
  });
});

app.post('/api/auth/refresh', (req, res) => {

  axios.post(`http://127.0.0.1:5000/api/auth/refresh`, {
      key: "value"
    },
    services.createToken(req.headers.authorization)
  )
  .then(response => res.json(response.data))
  .catch(e => {
    console.log(e);
  });
});

app.post('/api/auth/me', (req, res) => {
  
  axios.post(`http://127.0.0.1:5000/api/auth/me`, {
      key: "value"
    }, 
    services.createToken(req.headers.authorization)
  )
  .then(response => res.json(response.data))
  .catch(e => {
      console.log(e);
  }); 

});

app.post('/api/auth/signup', (req, res) => {
    
  axios.post(`http://127.0.0.1:8000/api/auth/signup`, {
      email: req.body.email,
      password: req.body.password,
      name: req.body.name
  })
  .then(response => res.json(response.data))
  .catch(e => {
      console.log(e);
  });

});




module.exports = app;