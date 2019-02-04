const { Router: router } = require('express');
const update = require('./update');
const create = require('./create');
const list = require('./list');
const get = require('./get');


module.exports = (dbService) => {
  const api = router();

  api.get('/', list(dbService));
  api.get('/:id', get(dbService));
  api.patch('/:id', update(dbService));
  api.post('/', create(dbService));

  return api;
};
