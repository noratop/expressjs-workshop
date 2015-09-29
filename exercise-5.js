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



function findEntry(firstName,lastName,email){
  var results = [];
  var firstName = firstName ? firstName : undefined;
  var lastName = lastName ? lastName : undefined;
  var email = email ? email.toLowerCase() : undefined;
  Object.keys(entries).forEach(function(key) {

      var e = entries[key];

      if (e.firstName.toLowerCase().indexOf(firstName) >= 0 || e.lastName.toLowerCase().indexOf(lastName) >= 0) {

          results.push(e);

      }
      else {
        e.emails.some(function(eObj){
          Object.keys(eObj).some(function(emailKey) {

            var emailadresses = eObj[emailKey];

            if (emailadresses.toLowerCase().indexOf(email) >= 0) {
              results.push(e);
              return true;
            }
          });
        });
      }
  });
  return results;
}




app.get('/entry/search', function (req, res) {

  try {
      res.json(findEntry(req.query.firstName,req.query.lastName,req.query.email));
  }
  catch(e){
      res.send(e.message);
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
