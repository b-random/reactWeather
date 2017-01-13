let express = require('express');

//create the app
let app = express();

//process.env lets us access env variables in node
const PORT = process.env.PORT || 3000;


/*Express middleware for the weather api that only works in http

the arguments are:

	req = requested incoming data i.e., bundle file, index file, etc
	res = the function has access to the response data being sent back
	next = finishes the function, moves on.

If the info coming in is http, then the next() moves on to the next thing.
If https it changes it to http and finishes.*/
app.use(function(req, res, next){
  if(req.headers['x-forward-proto'] === 'http'){
    next();
  } else {
    res.redirect('http://' + req.hostname + req.url);
  }
})

app.use(express.static('public'));

// start server with conditional port
app.listen(PORT, function(){
    console.log('Express server is up on port ' + PORT);
});
