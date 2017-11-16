// Initializes the `master_item` service on path `/master-item`
const createService = require('feathers-sequelize');
const createModel = require('../../models/master-item.model');
const hooks = require('./master-item.hooks');
const filters = require('./master-item.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'master-item',
    Model,
    paginate,
    id: 'tmb_id',
  };

  // Initialize our service with any options it requires
  app.use('/master-item', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('master-item');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
