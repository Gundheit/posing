// Initializes the `master-category` service on path `/master-category`
const createService = require('feathers-sequelize');
const createModel = require('../../models/master-category.model');
const hooks = require('./master-category.hooks');
const filters = require('./master-category.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'master-category',
    Model,
    paginate,
    id: 'tmkat_id',
  };

  // Initialize our service with any options it requires
  app.use('/master-category', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('master-category');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
