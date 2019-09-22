const setup = app => {
  app.get('/c', function (req, res) {
    res.send('c')
  });
};

module.exports = setup;
