const express = require('express');
const router = require('./routes/index');

const app = express();
const port = 1245;

app.use('/', router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

export default app;
// module.exports = app;
