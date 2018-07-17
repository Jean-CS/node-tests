const express = require('express');

let app = express();

app.get('/', (req, res) => {
  res.status(404).send({
    error: 'Page not found.',
    name: 'WhatEver App 0.0.1'
  })
});

app.listen(3000);

module.exports.app = app;