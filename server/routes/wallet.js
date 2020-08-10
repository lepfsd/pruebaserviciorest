const express = require('express');
const axios = require('axios');
const services = require('../services');

const app = express();

app.get('/api/transactions', (req, res) => {
    
  axios.get(`http://127.0.0.1:5000/api/transactions`, services.createToken(req.headers.authorization))
  .then(response => res.json(response.data))
  .catch(e => {
      console.log(e);
  });

});

app.get('/api/transactions/:id', (req, res) => {
    
  axios.get(`http://127.0.0.1:5000/api/transactions/${req.params.id}`, services.createToken(req.headers.authorization))
  .then(response => res.json(response.data))
  .catch(e => {
      console.log(e);
  });

});

app.post('/api/balance', (req, res) => {
  
  axios.post(`http://127.0.0.1:5000/api/balance`, {
    identification: req.body.identification,
    telephone: req.body.telephone
  },
  services.createToken(req.headers.authorization)
  )
  .then(response => res.json(response.data))
  .catch(e => {
    console.log(e);
  });
});

app.post('/api/credit', (req, res) => {

  axios.post(`http://127.0.0.1:5000/api/credit`, {
    identification: req.body.identification,
    telephone: req.body.telephone,
    amount: req.body.amount,
    description: req.body.description
  }, 
  services.createToken(req.headers.authorization)
  )
  .then(response => req.json(response.data))
  .catch(e => {
    console.log(e);
  });
});

app.post('/api/debit', (req, res) => {

  axios.post(`http://127.0.0.1:5000/api/debit`, {
    identification: req.body.identification,
    telephone: req.body.telephone,
    amount: req.body.amount,
    description: req.body.description
  }, 
  services.createToken(req.headers.authorization)
  )
  .then(response => req.json(response.data))
  .catch(e => {
    console.log(e);
  });
});

app.post('/api/payment', (req, res) => {

  axios.post(`http://127.0.0.1:5000/api/payment`, {
    token: req.body.token
  }, 
  services.createToken(req.headers.authorization)
  )
  .then(response => req.json(response.data))
  .catch(e => {
    console.log(e);
  });
});

module.exports = app;


