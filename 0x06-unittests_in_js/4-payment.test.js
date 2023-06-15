const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', function () {
  // prepare parameter fixtures
  const sumInputs = [
    { type: 'SUM', a: 100, b: 20, exp: 10 },
    { type: 'SUM', a: 100, b: 20, exp: 10 },
    { type: 'SUM', a: 100, b: 20, exp: 10 },
    { type: 'SUM', a: 100, b: 20, exp: 10 },
    { type: 'SUM', a: 100, b: 20, exp: 10 },
    { type: 'SUM', a: 100, b: 20, exp: 10 },
    { type: 'SUM', a: 100, b: 20, exp: 10 },
    { type: 'SUM', a: 100, b: 20, exp: 10 },
    { type: 'SUM', a: 100, b: 20, exp: 10 },
  ];

  sumInputs.forEach(function ({type, a, b, exp}) {
    it(`should use Utils.calculateNumber to sum '${a}' and '${b}'`, function () {
      // make Utils.calculateNumber a stub
      const stub = sinon.stub(Utils, 'calculateNumber');
      // stub to always return 10
      stub.returns(10);

      // spy on console.log
      const spy = sinon.spy(console, 'log');

      // should call Utils.calculateNumber once, and console.log with known arg
      sendPaymentRequestToApi(a, b);

      // assert
      expect(stub.calledOnceWith(type, a, b)).to.be.true;
      expect(spy.calledOnceWith('The total is: 10')).to.be.true;

      // restore the original methods
      stub.restore();
      spy.restore();
    });
  });
});
