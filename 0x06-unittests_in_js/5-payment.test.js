const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./5-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', function () {
  // use hooks for setup and restore of spy
  beforeEach(function () {
    // spy on console.log
    sinon.spy(console, 'log');
  });

  afterEach(function () {
    // restore original method
    sinon.restore();
  });

  it('should sum 100 and 20 and log 120', function () {
    sendPaymentRequestToApi(100, 20);

    //assert
    expect(console.log.calledOnceWith('The total is: 120')).to.be.true;
  });

  it('should sum 10 and 10 and log 20', function () {
    sendPaymentRequestToApi(10, 10);

    // assert
    expect(console.log.calledOnceWith('The total is: 20')).to.be.true;
  });

  /*
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
  */
});
