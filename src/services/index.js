const { mongoManager } = require('./mongo');
const serviceTypes = require('./serviceTypes');


const services = {
  [serviceTypes.MONGO]: mongoManager,
};

const defaultService = services[serviceTypes.MONGO];

module.exports = (serviceName, models) => {
  const Service = services[serviceName] || defaultService;

  return new Service(models);
};
