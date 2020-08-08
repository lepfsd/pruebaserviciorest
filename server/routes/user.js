const express = require('express');
const axios = require('axios');

const app = express();

let token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xMjcuMC4wLjE6ODAwMFwvYXBpXC9hdXRoXC9sb2dpbiIsImlhdCI6MTU5Njg2MDcxMywiZXhwIjoxNTk2ODY0MzEzLCJuYmYiOjE1OTY4NjA3MTMsImp0aSI6Ims3dDREdUdYMGQxcGF6NWwiLCJzdWIiOjEsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.78fNPVrqWdmVtZetiFl5HY4L3TLVB6QPDbM0YarwRhA'

const config = {
  headers: { Authorization: `Bearer ${token}` }
};

app.post('/api/auth/login', (req, res) => {
    
      axios.post(`http://127.0.0.1:8000/api/auth/login`, {
        email: req.body.email,
        password: req.body.password
    })
    .then(response => res.json(response.data))
    .catch(e => {
        console.log(e);
    });

});

app.post('/api/auth/logout', (req, res) => {

  axios.post(`http://127.0.0.1:8000/api/auth/logout`, {
    key: "value"
  },
  config
  )
  .then(response => res.json(response.data))
  .catch(e => {
    console.log(e);
  });
});

app.post('/api/auth/refresh', (req, res) => {

  axios.post(`http://127.0.0.1:8000/api/auth/refresh`, {
      key: "value"
    },
    config
  )
  .then(response => res.json(response.data))
  .catch(e => {
    console.log(e);
  });
});

app.post('/api/auth/me', (req, res) => {

  axios.post(`http://127.0.0.1:8000/api/auth/me`, {
      key: "value"
    }, 
    config
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