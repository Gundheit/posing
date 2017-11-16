const assert = require('assert');
const app = require('../../src/app');

describe('\'master_item\' service', () => {
  it('registered the service', () => {
    const service = app.service('master-item');

    assert.ok(service, 'Registered the service');
  });
});
