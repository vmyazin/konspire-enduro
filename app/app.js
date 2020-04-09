const local_app = function () {}
var request = require('request');

// * ———————————————————————————————————————————————————————— * //
// * 	init
// *
// *	gets called upon starting enduro.js production server
// *	@param {express app} app - express app
// *	@return {nothing}
// * ———————————————————————————————————————————————————————— * //
local_app.prototype.init = function (app) {
  // express app available here
  // don't forget these routes will be available on production server server (defaults to localhost:5000)

  // app.get('/user', function (req, res) {
  //   enduro.api.temper.render('user', { user_name: 'martin' })
  //       .then((output) => {
  //           res.send(output)
  //       })
  // });

  app.get('/api/get_random_number', function (req, res) {
    res.send(Math.random().toString())
  });

  app.get("/about", (req, res, next) => {
    request.get("https://api.flickr.com/services/feeds/photoset.gne?set=72157623352223751&nsid=33129098@N06&lang=en-us&format=json&nojsoncallback=1", (err, response, body) => {
        if (err) {
            return next(err);
        }
        enduro.api.temper.render('about', JSON.parse(body))
          .then((output) => {
              res.send(output)
        })
        // res.send({data: JSON.parse(body)});
    });
  });
}


module.exports = new local_app()
