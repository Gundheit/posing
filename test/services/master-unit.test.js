const assert = require('assert');
const app = require('../../src/app');

describe('\'master-unit\' service', () => {
  it('registered the service', () => {
    const service = app.service('master-unit');

    assert.ok(service, 'Registered the service');
  });
});
