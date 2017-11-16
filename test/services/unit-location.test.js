const assert = require('assert');
const app = require('../../src/app');

describe('\'unit-location\' service', () => {
  it('registered the service', () => {
    const service = app.service('unit-location');

    assert.ok(service, 'Registered the service');
  });
});
