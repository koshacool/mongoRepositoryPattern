const mongoose = require('mongoose');
const { UsersService } = require('./modelServices/UsersService');
const { ApplicationsService } = require('./modelServices/ApplicationsService');


class MongoManager{
  constructor(models) {
    this._connect();

    this.users = new UsersService(models);
    this.applications = new ApplicationsService(models);
  }

  _getMongoUrl() {
    return 'mongodb://localhost:27017/testdb';
  }

  _connect () {
    return mongoose.connect(this._getMongoUrl(), { useNewUrlParser: true });
  }


}

module.exports = { mongoManager: MongoManager };
