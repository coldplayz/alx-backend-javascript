const { expect } = require('chai');
const request = require('request');

const baseUrl = 'http://localhost:7865';

describe('Test login and available payments endpoints', function () {
  describe('POST /login', function () {
    const url = `${baseUrl}/login`;
    const params = [
      { desc: 'user Betty', options: { uri: url, json: true, body: { userName: 'Betty' } }, exp: 'Welcome Betty' },
      { desc: 'user Greenbel', options: { uri: url, json: true, body: { userName: 'Greenbel' } }, exp: 'Welcome Greenbel' },
      { desc: 'empty userName string', options: { uri: url, json: true, body: { userName: '' } }, exp: 'Welcome ' },
      { desc: 'user user123', options: { uri: url, json: true, body: { userName: 'user123' } }, exp: 'Welcome user123' },
      { desc: 'no userName form field', options: { uri: url, json: true, body: {  } }, exp: 'Welcome undefined' },
      { desc: 'no form data', options: { uri: url, json: true }, exp: 'Welcome undefined' },
      { desc: 'user user-123', options: { uri: url, json: true, body: { userName: 'user-123' } }, exp: 'Welcome user-123' },
    ];

    params.forEach(({ desc, options, exp }) => {
      console.log('In param.forEach callback', desc, options, exp); // SCAFF
      request.post(options, function (err, res, bdy) {
        it(desc, function (done) {
          if (err) {
            console.log('In err block'); // SCAFF
            done(err);
          } else {
            console.log('In assert block'); // SCAFF
            expect(res.statusCode).to.eq(200);
            expect(bdy).to.eq(exp);
            done();
          }
        });
      });
    });
  });

  describe('GET /available_payments', function () {
    const url = `${baseUrl}/available_payments`;
    const exp = {
      payment_methods: {
        credit_cards: true,
        paypal: false,
      },
    };

    it('test response content', function (done) {
      request.get({ url: url, json: true }, function (err, res, bdy) {
        if (err) {
          done(err);
        } else {
          expect(res.statusCode).to.eq(200);
          expect(bdy).to.deep.equal(exp);
          done();
        }
      });
    });
  });
});
