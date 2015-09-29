var express = require('express');
var app = express();

var entries = {
  1: {
    firstName: "John",
    lastName: "Smith",
    emails: [
      {type: "home", address: "john@smith.com"},
      {type: "work", address: "jsmith@megacorp.com"}
    ]
  },
  2: {
    firstName: "Michael",
    lastName: "Jordan",
    emails: [
      {type: "home", address: "michael@jordan.com"},
      {type: "work", address: "mjordan@nba.com"}
    ]
  },
  3: {
    firstName: "Shrek",
    lastName: "The Green Guy",
    emails: [
      {type: "home", address: "shrek@monster.com"},
      {type: "work", address: ""}
    ]
  },
};

function getEntry(id){
  if (entries[id]) return entries[id];
  else throw new Error("No entry was found for this id");
}


app.get('/entry/:entryId', function (req, res) {
  //console.log(req);
  //console.log(res);
  try {
      res.json(getEntry(req.params.entryId));
  }
  catch(e){
      res.status(400).send(e.message);
      console.log(e);
  }
});



/* YOU DON'T HAVE TO CHANGE ANYTHING BELOW THIS LINE :) */

// Boilerplate code to start up the web server
var server = app.listen(process.env.PORT, process.env.IP, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
