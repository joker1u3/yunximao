class response {
  constructor() {}

  send(res, data) {
    res.status(data.status || data.statusCode || 500);
    res.format({
      'application/json': function () {
        delete data.template_name;
        res.json(data);
      },
      'text/html': function () {
        if (data.template_name) {
          res.render(data.template_name, data)
        } else {
          res.render('error');
        }
      },
      'default': function () {
        // log the request and respond with 406
        res.status(406).send('Not Acceptable');
      }
    });
  }
}

module.exports = new response();