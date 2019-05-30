const express = require('express');
const path = require('path');
const app = express();

app.set('view', path.join(__dirname, 'view'));
app.set('view engine', 'pug');

const routes = require('./routes.js');
app.use('/', routes);

const port = (process.env.PORT || 4000);
app.listen(port, () => console.log(`listening on ${port}`));