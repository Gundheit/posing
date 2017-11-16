//const items = require('./items/items.service.js');
const masterItem = require('./master-item/master-item.service.js');
const users = require('./users/users.service.js');
const masterCategory = require('./master-category/master-category.service.js');
const masterUnit = require('./master-unit/master-unit.service.js');
const masterLocation = require('./master-location/master-location.service.js');
const unitLocation = require('./unit-location/unit-location.service.js');
module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  //app.configure(items);
  app.configure(masterItem);
  app.configure(users);
  app.configure(masterCategory);
  app.configure(masterUnit);
  app.configure(masterLocation);
  app.configure(unitLocation);
};
