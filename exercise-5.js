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
  var firstName = firstName || '';
  var lastName = lastName || '';
  var email = email || '';
  
  
  Object.keys(entries).forEach(function(key) {
      var e = entries[key];
      if (e.firstName.indexOf(firstName) >= 0 || e.lastName.indexOf(lastName) >= 0) {
          results.push(e);
      }
      else {
          Object.keys(e.emails).some(function(emailKey) {
              var email = e.emails[emailKey];
              if (email.emailAddress.indexOf(email) >= 0) {
                  results.push(e);
                  return true;
              }
          });
      }
  });
  return results;
}


// findEntriesByName: function(name) {
//         var ab = this;
//         var results = [];
//         Object.keys(ab.entries).forEach(function(key) {
//             var e = ab.entries[key];
//             if (e.firstName.indexOf(name) >= 0 || e.lastName.indexOf(name) >= 0) {
//                 results.push(e);
//             }
//             else {
//                 Object.keys(e.emails).some(function(emailKey) {
//                     var email = e.emails[emailKey];
//                     if (email.emailAddress.indexOf(name) >= 0) {
//                         results.push(e);
//                         return true;
//                     }
//                 });
//             }
//         });
//         return results;
//     }








app.get('/entry/search', function (req, res) {
  //console.log(req);
  //console.log(res);
  try {
      console.log();
      //res.json(getEntry(req.params.entryId));
       res.json(findEntry(req.query.firstName,req.query.lastName,req.query.email));

  }
  catch(e){
      res.status(404).send(e.message);
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
