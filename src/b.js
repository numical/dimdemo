const setup = app => {
  app.get('/b', function (req, res) {
    res.send('b')
  });
};

module.exports = setup;
