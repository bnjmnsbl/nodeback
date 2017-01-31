var express = require("express")
var app = express()

app.get('/:resourceUri', function(req, res) {
  
  
  var usTime = req.params.resourceUri;
  
  
  function timeCheck(repo) {
  var returnObj = {};
  var isNumber = /^\d/.test(repo); 

  
  
  if (isNumber) {
    returnObj.unix = repo; 
    returnObj.natural = getRealTime(repo);
   
  } else {
    returnObj.natural = repo;
    returnObj.unix = getUnixTime(repo)
  }
  return returnObj;
}

function getUnixTime(naturalTime) {
  var mydate = naturalTime.split(" ");
    var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  
  var month = months.indexOf(mydate[0]) +1;
  if (month < 10) {
    month = "0"+ month;
  }
  
  var day = mydate[1].slice(0, -1);
  if (day < 10) {
    day = "0" + day;
  }
  var year = mydate[2];
  var newdate = year + "-" + month + "-" + day;
  
  return (new Date(newdate).getTime());               
}

function getRealTime(UNIX_timestamp) {
  var a = new Date(UNIX_timestamp * 1000);
  var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var time = month + ' ' + date + ', ' + year
  return time;
}



  
  res.send(timeCheck(usTime));
    
})

app.listen(8080, function () {
  console.log('listening on port 8080!')
})
