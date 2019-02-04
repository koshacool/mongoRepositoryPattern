const express = require('express');

const { errorHandler } = require('../middleware/index');
const users = require('../controllers/users');
const applications = require('../controllers/applications');

const routersInit = (dbService) => {
  const router = express();

  router.use('/users', users(dbService));
  router.use('/applications', applications(dbService));

  router.use(errorHandler);

  return router;
};

module.exports = routersInit;
