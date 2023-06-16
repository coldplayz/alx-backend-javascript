const express = require('express');
const app = express();

app.get('/', function (request, response) {
    response.send('Hello');
});

app.get('/cart/:cartId([0-9]*)', function (request, response) {
    response.send(`Payment methods for cart ${request.params.cartId}`);
});

app.listen(7865, function () {
    console.log('API available on localhost port 7865');
});
