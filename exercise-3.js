var express = require('express');
var app = express();

function calcul(operation,num1,num2) {
    //console.log(operation);console.log(num1);console.log(num2);
    var result;
    var num1 = Number(num1);
    var num2 = Number(num2);
    var areNumbers = !isNaN(num1+num2);
    //console.log(areNumbers);
    
    if (areNumbers){
        //console.log('are numbers');
        switch(operation) {
            case 'add':
                result=num1+num2;
                break;
            case 'sub':
                result=num1-num2;
                break;
            case 'mult':
                result=num1*num2;
                break;
            case 'div':
                result=num1/num2;
                break;
            default:
            throw new Error('The requested operation name is not valid');
        }
    }
    else {
        //console.log('not numbers');
        throw new Error('The provided numbers are not valid');
    }
    //console.log(result);
    return result;
}


app.get('/op/:operation/:number1/:number2', function (req, res) {
  //console.log(req);
  //console.log(res);
  var solution;
  try {
      solution = calcul(req.params.operation,req.params.number1,req.params.number2);
      res.send(solution.toString());
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
