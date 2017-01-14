let express = require('express');

//create the app
let app = express();

//heroku will specify a port each time a request is made
const PORT = process.env.PORT || 3000;


/*Express middleware for the weather api that only works in http

the arguments are:

	req = requested incoming data i.e., bundle file, index file, etc
	res = the function has access to the response data being sent back
	next = finishes the function, moves on.

The browser will not allow http requests through an https app.  Since the Weather
api is http, this script changes the app to http.  The is only because we argument
using the free weather api version.  The pay version allows https and we caould
remove this script*/

app.use(function (req, res, next) {
  if (req.headers['x-forwarded-proto'] === 'https') {
    res.redirect('http://' + req.hostname + req.url);
  } else {
    next();
  }
});


app.use(express.static('public'));

// start server with conditional port
app.listen(PORT, function(){
    console.log('Express server is up on port ' + PORT);
});
