const express = require('express')

const port = 8080;

const app = express()
if ( process.env.DIM_SWITCH_A !== 'true') {
  require('./a')(app);
};
if ( process.env.DIM_SWITCH_B !== 'true') {
  require('./b')(app);
};
if ( process.env.DIM_SWITCH_C !== 'true') {
  require('./c')(app);
};

app.listen(port, () => console.log(`Alphabet server listening on port ${port}`));
