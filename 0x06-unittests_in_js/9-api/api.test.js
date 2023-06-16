const { expect } = require('chai');
const request = require('request');

const baseUrl = 'http://localhost:7865';

describe('Cart page', function () {
  const url0 = `${baseUrl}/cart/37`;
  const url1 = `${baseUrl}/cart/thirty-seven`;
  const url2 = `${baseUrl}/cart/`;

  it('should respond with the right content', function (done) {
    request.get(url0, function (err, res, bdy) {
      if (err) {
        done(err);
      } else {
        expect(bdy).to.eq(`Payment methods for cart 37`);
        done();
      }
    });
  });

  it('should respond with the right status code for valid id', function (done) {
    request.get(url0, function (err, res, bdy) {
      if (err) {
        done(err);
      } else {
        expect(res.statusCode).to.eq(200);
        done();
      }
    });
  });

  it('should respond with the right status code for invalid id', function (done) {
    request.get(url1, function (err, res, bdy) {
      if (err) {
        done(err);
      } else {
        expect(res.statusCode).to.eq(404);
        done();
      }
    });
  });

  it('should respond with the right status code for invalid id', function (done) {
    request.get(url2, function (err, res, bdy) {
      if (err) {
        done(err);
      } else {
        expect(res.statusCode).to.eq(404);
        done();
      }
    });
  });
});

describe('Index page', function () {
  it('should respond with the right content', function (done) {
    request.get(baseUrl, function (err, res, bdy) {
      if (err) {
        done(err);
      } else {
        expect(bdy).to.eq('Welcome to the payment system');
        done();
      }
    });
  });

  it('should respond with the right status code', function (done) {
    request.get(baseUrl, function (err, res, bdy) {
      if (err) {
        done(err);
      } else {
        expect(res.statusCode).to.eq(200);
        done();
      }
    });
  });
});
