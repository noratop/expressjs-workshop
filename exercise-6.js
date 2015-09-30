var express = require('express');
var app = express();
var ab = require('./lib/ab-constructors');
var bodyParser = require('body-parser');

var jsonParser = bodyParser.json();

app.use(bodyParser.json());

app.use(function(req, res, next) {
    console.log(new Date(), req.method, req.url);
    next();
});

var addressBook = new ab.AddressBook();

var entrySet = [new ab.Entry('John','Smith'),new ab.Entry('Michael','Jordan'),new ab.Entry('Shrek','TheMonster')];

entrySet.forEach(function(entry){
    
    var email1 = new ab.Email('work', entry.firstName+"@"+entry.lastName+".com");
    entry.setEmail("work", email1);
    var email2 = new ab.Email('home', entry.lastName+"@"+entry.firstName+".com");
    entry.setEmail("home", email2);
    
    addressBook.addEntry(entry);
});

app.post('/entry', function (req, res) {
    var JSONOutput=[];
    if (!req.body) {
        return res.sendStatus(400);
    }
    else {
        //console.log(addressBook);
        var newEntry = new ab.Entry(req.body.firstName,req.body.lastName);
        addressBook.addEntry(newEntry);
        console.log(addressBook);
        res.json(addressBook.entries[newEntry.id]);
    }
    // create user in req.body 
});


/* YOU DON'T HAVE TO CHANGE ANYTHING BELOW THIS LINE :) */

//Boilerplate code to start up the web server
var server = app.listen(process.env.PORT, process.env.IP, function () {
    var host = server.address().address;
    var port = server.address().port;
    
    console.log('Example app listening at http://%s:%s', host, port);
});
