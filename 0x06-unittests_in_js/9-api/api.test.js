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

/*
describe('Tests for project', function () {
  let out = '';
  const stdout = process.stdout.write.bind(process.stdout);
  // define function for mocking stdout
  function stdoutMock(chunk, encoding, callbk) {
    out += chunk.toString();
  }

  // parameterize test for 0-console
  const tests0 = [
    'hello',
    'world',
    'hello world',
    'Hello from Holberton!',
  ];

  describe('Tests for 0-console.js', function () {
    it('return undefined', function () {
      const msg = displayMessage('A test message');
      expect(msg).to.eq(undefined);
    });

    tests0.forEach((strArg) => {
      it(`test ${strArg} output`, function () {
        // mock stdout
        process.stdout.write = stdoutMock;
        // use console.log
        displayMessage(strArg);
        // reset stdout
        process.stdout.write = stdout;
        // test output
        expect(out).to.eq(`${strArg}\n`);
        // reset variable for capturing output
        out = ''
      });
    });
  });

  describe('Tests for 4-http.js', function () {
    it('should respond with Hello Holberton School!', function (done) {
      if (!DB) {
        this.skip();
      }
      request(baseUrl, function (err, res, bdy) {
        if (err) {
          done(err);
        } else {
          expect(res.statusCode).to.eq(200);
          expect(bdy).to.eq('Hello Holberton School!');
          done();
        }
      });
    });
  });

  describe('Tests full_server', function () {
    it('test GET /', function (done) {
      if (!DB) {
        this.skip();
      }
      request(baseUrl, function (err, res, bdy) {
        if (err) {
          done(err);
        } else {
          expect(res.statusCode).to.eq(200);
          expect(bdy).to.eq('Hello Holberton School!');
          done();
        }
      });
    });

    it('test GET /students', function (done) {
      if (!DB) {
        this.skip();
      }
      const url = `${baseUrl}/students`;
      request(url, function (err, res, bdy) {
        if (err) {
          done(err);
        } else {
          expect(res.statusCode).to.eq(200);
          expect(bdy).to.be.eq('This is the list of our students\nNumber of students in CS: 6. List: Johann, Arielle, Jonathan, Emmanuel, Guillaume, Katie\nNumber of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy');
          done();
        }
      });
    });

    it('test GET /students/major with allowed major', function (done) {
      if (!DB) {
        this.skip();
      }
      const url = `${baseUrl}/students/SWE`;
      request(url, function (err, res, bdy) {
        if (err) {
          done(err);
        } else {
          expect(res.statusCode).to.eq(200);
          expect(bdy).to.eq('List: Guillaume, Joseph, Paul, Tommy');
          done();
        }
      });
    });

    it('test GET /students/major with incorrect major', function (done) {
      if (!DB) {
        this.skip();
      }
      const url = `${baseUrl}/students/French`;
      request(url, function (err, res, bdy) {
        if (err) {
          done(err);
        } else {
          expect(res.statusCode).to.eq(500);
          expect(bdy).to.eq('Major parameter must be CS or SWE');
          done();
        }
      });
    });

    it('test homepage without database', function (done) {
      if (DB) {
        this.skip();
      }
      request(baseUrl, function (err, res, bdy) {
        if (err) {
          done(err);
        } else {
          expect(res.statusCode).to.eq(200);
          expect(bdy).to.eq('Hello Holberton School!');
          done();
        }
      });
    });

    it('test GET /students without database', function (done) {
      if (DB) {
        this.skip();
      }
      const url = `${baseUrl}/students`;
      request(url, function (err, res, bdy) {
        if (err) {
          done(err);
        } else {
          expect(res.statusCode).to.eq(500);
          done();
        }
      });
    });

    it('test GET /students/major without database', function (done) {
      if (DB) {
        this.skip();
      }
      const url = `${baseUrl}/students/CS`;
      request(url, function (err, res, bdy) {
        if (err) {
          done(err);
        } else {
          expect(res.statusCode).to.eq(500);
          expect(bdy).to.eq('Cannot load the database');
          done();
        }
      });
    });
  });
});
*/
