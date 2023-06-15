const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', function () {
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

  sumInputs.forEach(function ({type, a, b, exp}) {
    it(`should use Utils.calculateNumber to sum '${a}' and '${b}'`, function () {
      // make Utils.calculateNumber a spy
      const spy = sinon.spy(Utils, 'calculateNumber');
      // should call Utils.calculateNumber once
      sendPaymentRequestToApi(a, b);

      // assert
      expect(spy.calledOnceWith(type, a, b)).to.be.true;

      // restore the original method
      spy.restore();
    });
  });
});
