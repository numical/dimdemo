const express = require('express')
const setupA = require('./a');
const setupB = require('./b');
const setupC = require('./c');

const port = 8080;

const app = express()
if ( process.env.DIM_SWITCH_A !== 'true') {
  setupA(app);
};
setupB(app);
setupC(app);

app.listen(port, () => console.log(`Alphaet server listening on port ${port}`));
