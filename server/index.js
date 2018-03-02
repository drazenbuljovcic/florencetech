const express = require('express'),
  path = require('path'),
  morgan = require('morgan'),
  multer = require('multer'),
  port = process.env.PORT || 3000;

const apiRoutes = require('./routes/api');

const app = express();

app.use('/api', apiRoutes);

app.listen(port, (err) => {
  if (err) { console.log(`Unable to start server on port ${port}.`); return; }

  console.log(`Server running on port ${port}`);
})