const assert = require('assert');
const app = require('../../src/app');

describe('\'master-location\' service', () => {
  it('registered the service', () => {
    const service = app.service('master-location');

    assert.ok(service, 'Registered the service');
  });
});
