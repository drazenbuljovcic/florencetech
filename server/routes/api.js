const express = require('express'),
  router = express.Router();

router.get('/issues', (req, res) => {
  res.send('hai');
});

module.exports = router;
