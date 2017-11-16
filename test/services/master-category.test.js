const assert = require('assert');
const app = require('../../src/app');

describe('\'master-category\' service', () => {
  it('registered the service', () => {
    const service = app.service('master-category');

    assert.ok(service, 'Registered the service');
  });
});
