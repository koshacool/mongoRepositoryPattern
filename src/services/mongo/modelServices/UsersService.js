const { repository } = require('../MongoRepository');

class UsersService {
  constructor(models) {
    this._models = models;
  }

  getAll() {
    const { Users } = this._models;

    return repository.find(Users);
  }

  getById(id) {
    const { Users } = this._models;

    return repository.findOne(Users, { _id: id });
  }

  create(login, password) {
    const { Users } = this._models;
    const user = new Users({ login, password });

    return repository.save(user);
  }
}

module.exports = { UsersService };
