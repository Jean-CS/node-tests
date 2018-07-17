const express = require('express');

let app = express();

app.get('/', (req, res) => {
  res.status(404).send({
    error: 'Page not found.',
    name: 'WhatEver App 0.0.1'
  })
});

app.get('/users', (req, res) => {
  res.status(200).send([
    {
      name: 'Dude 1',
      age: 22
    }, 
    {
      name: 'Girl 2',
      age: 16
    }
  ])
});

app.listen(3000);

module.exports.app = app;