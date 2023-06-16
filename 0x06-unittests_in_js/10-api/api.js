const express = require('express');

const app = express();
app.use(express.json()); // for parsing application/json req

const port = 7865;

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

// regex route paramenter; numbers only for id param
app.get('/cart/:id(\\d*)', (req, res) => {
  res.send(`Payment methods for cart ${req.params.id}`);
});

app.get('/available_payments', (req, res) => {
  // send a JSON response
  res.json({
    payment_methods: {
      credit_cards: true,
      paypal: false,
    },
  });
});

app.post('/login', (req, res) => {
  // console.log('#######', req.body); // SCAFF
  // request.body is parsed as JSON
  const username = req.body.userName;
  res.send(`Welcome ${username}`);
});

app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});

module.exports = app;
