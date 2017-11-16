// Initializes the `master-unit` service on path `/master-unit`
const createService = require('feathers-sequelize');
const createModel = require('../../models/master-unit.model');
const hooks = require('./master-unit.hooks');
const filters = require('./master-unit.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'master-unit',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/master-unit', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('master-unit');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
