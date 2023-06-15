const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('Test calculateNumber function', function () {
  // prepare parameter fixtures
  const inputs = [
    { a: 1, b: 3, exp: 4 },
    { a: 1, b: 3.7, exp: 5 },
    { a: 1.2, b: 3.7, exp: 5 },
    { a: 1.5, b: 3.7, exp: 6 },
    { a: 0, b: 8.4, exp: 8 },
    { a: -0.5, b: -4.3, exp: -4 },
    { a: -0.6, b: -4.3, exp: -5 },
    { a: -5.5, b: 8.9, exp: 4 },
  ];

  inputs.forEach(function ({ a, b, exp }) {
    it(`'${a}' + '${b}' should equal '${exp}'`, function () {
      assert.equal(calculateNumber(a, b), exp);
    });
  });
});
