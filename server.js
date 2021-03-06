var express = require('express');

// Create our app
var app = express();
var PORT = process.env.PORT || 5000;

app.use(express.static('public'));

app.use(function (req, res, next){
  if(req.headers['x-forwarded-proto'] === 'https'){
    res.redirect('http://'+ req.hostname + req.url);
  }else{
    next();
  }
});

app.listen(PORT, function () {
  console.log('Express server is up on port ' + PORT);
});
