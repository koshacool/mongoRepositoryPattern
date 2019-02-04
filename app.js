const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const api = require('./src/api/index');
const { onAppStart } = require('./on-start');
const getDbService = require('./src/services');
const serviceTypes = require('./src/services/serviceTypes');

const { Users } = require('./src/models/users');
const { Roles } = require('./src/models/roles');
const { Applications } = require('./src/models/applications');
const { UserApplicationRoles } = require('./src/models/userApplicationRoles');

const app = express();

const models = { Users, Roles, Applications, UserApplicationRoles };
const dbService = getDbService(serviceTypes.MONGO, models);


app.use(logger('dev'));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));



// api routes v1
app.use('/api/v1', api(dbService));

// on App start
onAppStart();

module.exports = app;
