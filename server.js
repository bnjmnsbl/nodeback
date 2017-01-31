var express = require("express")
var app = express()

app.get('/:resourceUri', function(req, res) {
  
  var returnObj = {};
  var usTime = req.params.resourceUri;
  var isNumber = /^\d/.test(usTime);
  if (isNumber) {
    
  }
  res.send(usTime);
    
})

app.listen(8080, function () {
  console.log('listening on port 8080!')
})
