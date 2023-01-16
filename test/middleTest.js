const middle = require('../middle');
const assert = require('chai').assert;

describe('#middle', () => {
  it('should return [3] for [1, 2, 3, 4, 5]', () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });
  it('should not return [4] for [1, 2, 3, 4, 5]', () => {
    assert.notDeepEqual(middle([1, 2, 3, 4, 5]), [4]);
  });
  it('should return [2, 3] for [1, 2, 3, 4]', () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
  it('should not return [1, 2] for [1, 2, 3, 4]', () => {
    assert.notDeepEqual(middle([1, 2, 3, 4]), [1, 2]);
  });
});

