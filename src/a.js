const setup = app => {
  app.get('/a', function (req, res) {
    res.send('a')
  });
};

module.exports = setup;
