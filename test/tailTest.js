const assert = require('chai').assert;
const tail = require('../tail');

describe('#Tail', () => {
  it('should return [3, 4, 5] for [2, 3, 4, 5]', () => {
    assert.deepEqual(tail([2, 3, 4, 5]), [3, 4, 5]);
  });
  it('should return [] for [2]', () => {
    assert.deepEqual(tail([2]), []);
  });
  it('should return [4] for [3, 4]', () => {
    assert.deepEqual(tail([3, 4]), [4]);
  });
  it('should return an error when comparing [3, 4] with [3]', () => {
    assert.notDeepEqual(tail([3, 4]), [3]);
  });
});

