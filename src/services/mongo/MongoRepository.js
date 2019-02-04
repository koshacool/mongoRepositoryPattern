const { RepositoryInterface } = require('../repositoryInterface');

class MongoRepository extends RepositoryInterface{
  findOne(Model, query) {
    return Model.findOne(query);
  }

  find(Model, query = {}) {
    return Model.find(query);
  }

  save(Model) {
    return Model.save();
  }

  remove(Model, query) {
    return Model.remove(query);
  }
}

const repository = new MongoRepository();

module.exports = { repository };
