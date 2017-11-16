// Initializes the `unit-location` service on path `/unit-location`
const createService = require('feathers-sequelize');
const createModel = require('../../models/unit-location.model');
const hooks = require('./unit-location.hooks');
const filters = require('./unit-location.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'unit-location',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/unit-location', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('unit-location');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
