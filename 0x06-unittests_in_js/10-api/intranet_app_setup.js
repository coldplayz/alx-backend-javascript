const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/', function (request, response) {
  response.send('Welcome to the payment system');
});

app.get('/cart/:cartId', function (request, response) {
  response.send(`Payment methods for cart ${request.params.cartId}`);
});

app.get('/available_payments', function (request, response) {
  response.send({
    payment_methods: {
      credit_cards: true,
      paypal: false,
    }
  });
});

app.post('/login', function (request, response) {
  response.send(`Welcome ${request.body.userName}`);
});

app.listen(7865, function () {
  console.log('API available on localhost port 7865');
});
