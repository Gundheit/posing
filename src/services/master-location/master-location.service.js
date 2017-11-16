// Initializes the `master-location` service on path `/master-location`
const createService = require('feathers-sequelize');
const createModel = require('../../models/master-location.model');
const hooks = require('./master-location.hooks');
const filters = require('./master-location.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'master-location',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/master-location', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('master-location');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
