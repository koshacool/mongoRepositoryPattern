const { Router: router } = require('express');
const create = require('./create');
const list = require('./list');
const get = require('./get');


module.exports = (dbService) => {
  const api = router();

  api.post('/', create(dbService));
  api.get('/', list(dbService));
  api.get('/:id', get(dbService));

  return api;
};
