const _ = require('lodash');
const { MethodNotAllowed } = require('rest-api-errors');
const { repository } = require('../MongoRepository');


class ApplicationsService {
  constructor(models) {
    this._models = models;
  }

  async getAll(userId) {
    const { Applications, UserApplicationRoles } = this._models;
    const userApplicationRoles = await repository.find(UserApplicationRoles, { userId });
    const applicationIds = userApplicationRoles.map(role => role.applicationId);

    return repository.find(Applications, { _id: { $in: applicationIds } });
  }

  getById(id) {
    const { Users } = this._models;

    return repository.findOne(Users, { _id: id });
  }

  async create(name, userId) {
    const { Applications, Roles, UserApplicationRoles } = this._models;
    const role = await repository.findOne(Roles, { name: 'write' });
    const applicationInstance = new Applications({ userId, name });
    const application = await repository.save(applicationInstance);
    const userApplicationRoleInstance = new UserApplicationRoles({
      roleId: role._id,
      userId,
      applicationId: application._id,
    });

    await repository.save(userApplicationRoleInstance);

    return application;
  }

  async update(id, userId, partToUpdate) {
    const { Applications, Roles, UserApplicationRoles } = this._models;
    const permission = await repository.findOne(UserApplicationRoles, { applicationId: id, userId });

    if (!permission) {
      throw new MethodNotAllowed(403, 'Permission denied.');
    }

    const role = await repository.findOne(Roles, { _id: permission.roleId });

    if (!role || role.name !== 'write') {
      throw new MethodNotAllowed(403, 'Permission denied.');
    }

    const application = await repository.findOne(Applications, { _id: id });
    const updatedApplications = _.extend(application, partToUpdate);

    await repository.save(updatedApplications);

    return application;
  }
}

module.exports = { ApplicationsService };
