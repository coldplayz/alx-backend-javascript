const expect = require('chai').expect;
const calculateNumber = require('./2-calcul_chai');

describe('Test calculateNumber function', function () {
  // prepare parameter fixtures
  const sumInputs = [
    { type: 'SUM', a: 1.4, b: 4.5, exp: 6 },
    { type: 'SUM', a: 1, b: 3, exp: 4 },
    { type: 'SUM', a: 1, b: 3.7, exp: 5 },
    { type: 'SUM', a: 1.2, b: 3.7, exp: 5 },
    { type: 'SUM', a: 1.5, b: 3.7, exp: 6 },
    { type: 'SUM', a: 0, b: 8.4, exp: 8 },
    { type: 'SUM', a: -0.5, b: -4.3, exp: -4 },
    { type: 'SUM', a: -0.6, b: -4.3, exp: -5 },
    { type: 'SUM', a: -5.5, b: 8.9, exp: 4 },
  ];

  const subInputs = [
    { type: 'SUBTRACT', a: 1.4, b: 4.5, exp: -4 },
    { type: 'SUBTRACT', a: 1, b: 3, exp: -2 },
    { type: 'SUBTRACT', a: 1, b: 3.7, exp: -3 },
    { type: 'SUBTRACT', a: 1.2, b: 3.7, exp: -3 },
    { type: 'SUBTRACT', a: 1.5, b: 3.7, exp: -2 },
    { type: 'SUBTRACT', a: 0, b: 8.4, exp: -8 },
    { type: 'SUBTRACT', a: -0.5, b: -4.3, exp: 4 },
    { type: 'SUBTRACT', a: -0.6, b: -4.3, exp: 3 },
    { type: 'SUBTRACT', a: -5.5, b: 8.9, exp: -14 },
  ];

  const divInputs = [
    { type: 'DIVIDE', a: 1.4, b: 4.5, exp: 0.2 },
    { type: 'DIVIDE', a:1.4, b: 0, exp: 'Error' },
    { type: 'DIVIDE', a: 1, b: 8, exp: 0.125 },
    { type: 'DIVIDE', a: 1, b: 3.7, exp: 0.25 },
    { type: 'DIVIDE', a: 1.2, b: 3.7, exp: 0.25 },
    { type: 'DIVIDE', a: 1.5, b: 3.7, exp: 0.5 },
    { type: 'DIVIDE', a: 0, b: 8.4, exp: 0 },
    { type: 'DIVIDE', a: -0.5, b: -4.3, exp: 0 },
    { type: 'DIVIDE', a: -0.6, b: -4.3, exp: 0.25 },
    { type: 'DIVIDE', a: -5.5, b: 7.9, exp: -0.625 },
  ];

  const invalidTypeInputs = [
    { type: 'INVALID', a: 1.4, b: 4.5, exp: 'Error' },
    { type: 'invalid', a:1.4, b: 0, exp: 'Error' },
    { type: 'divide', a: 1, b: 8, exp: 'Error' },
    { type: 'sum', a: 1, b: 3.7, exp: 'Error' },
    { type: 'subtract', a: 1.2, b: 3.7, exp: 'Error' },
    { type: 'DIVIDEND', a: 1.5, b: 3.7, exp: 'Error' },
    { type: 'DIVISOR', a: 0, b: 8.4, exp: 'Error' },
    { type: 'MULTIPLY', a: -0.5, b: -4.3, exp: 'Error' },
    { type: 'ADD', a: -0.6, b: -4.3, exp: 'Error' },
    { type: 'MINUS', a: -5.5, b: 7.9, exp: 'Error' },
  ];

  describe('tests for SUM', function () {
    sumInputs.forEach(function ({ type, a, b, exp }) {
      it(`'${a}' + '${b}' should equal '${exp}'`, function () {
        expect(calculateNumber(type, a, b)).to.eq(exp);
      });
    });
  });

  describe('tests for SUBTRACT', function () {
    subInputs.forEach(function ({ type, a, b, exp }) {
      it(`'${a}' - '${b}' should equal '${exp}'`, function () {
        expect(calculateNumber(type, a, b)).to.eq(exp);
      });
    });
  });

  describe('tests for DIVIDE', function () {
    divInputs.forEach(function ({ type, a, b, exp }) {
      it(`'${a}' / '${b}' should equal '${exp}'`, function () {
        expect(calculateNumber(type, a, b)).to.eq(exp);
      });
    });
  });

  describe('tests for invalid types', function () {
    invalidTypeInputs.forEach(function ({ type, a, b, exp }) {
      it(`should equal 'Error'`, function () {
        expect(calculateNumber(type, a, b)).to.eq(exp);
      });
    });
  });
});
