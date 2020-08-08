const express = require('express');
const axios = require('axios');

const app = express();

let token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xMjcuMC4wLjE6ODAwMFwvYXBpXC9hdXRoXC9sb2dpbiIsImlhdCI6MTU5Njg2MDcxMywiZXhwIjoxNTk2ODY0MzEzLCJuYmYiOjE1OTY4NjA3MTMsImp0aSI6Ims3dDREdUdYMGQxcGF6NWwiLCJzdWIiOjEsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.78fNPVrqWdmVtZetiFl5HY4L3TLVB6QPDbM0YarwRhA'

const config = {
  headers: { Authorization: `Bearer ${token}` }
};

app.get('/api/transactions', (req, res) => {
    
  axios.get(`http://127.0.0.1:8000/api/transactions`, config)
  .then(response => res.json(response.data))
  .catch(e => {
      console.log(e);
  });

});

app.post('/api/balance', (req, res) => {
  
  axios.post(`http://127.0.0.1:8000/api/balance`, {
    identification: req.body.identification,
    telephone: req.body.telephone
  },
  config
  )
  .then(response => res.json(response.data))
  .catch(e => {
    console.log(e);
  });
});

app.post('/api/credit', (req, res) => {

  axios.post(`http://127.0.0.1:8000/api/credit`, {
    identification: req.body.identification,
    telephone: req.body.telephone,
    amount: req.body.amount,
    description: req.body.description
  }, config)
  .then(response => req.json(response.data))
  .catch(e => {
    console.log(e);
  });
});

app.post('/api/debit', (req, res) => {

  axios.post(`http://127.0.0.1:8000/api/debit`, {
    identification: req.body.identification,
    telephone: req.body.telephone,
    amount: req.body.amount,
    description: req.body.description
  }, config)
  .then(response => req.json(response.data))
  .catch(e => {
    console.log(e);
  });
});

app.post('/api/payment', (req, res) => {

  axios.post(`http://127.0.0.1:8000/api/payment`, {
    token: req.body.token
  }, config)
  .then(response => req.json(response.data))
  .catch(e => {
    console.log(e);
  });
});

module.exports = app;


