// const sinon = require('sinon');
const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', function () {
  it('(true): should return a promise of an object', function (done) {
    res = getPaymentTokenFromAPI(true);

    //assert
    expect(res).to.be.an.instanceof(Promise);
    res.then((obj) => {
      expect(obj).to.deep.equal({ data: 'Successful response from the API' });
    });

    done();
  });

  it('(false): should return undefined, i.e. do nothing', function (done) {
    res = getPaymentTokenFromAPI(false);

    // assert
    expect(res).to.be.undefined;

    done();
  });
});
