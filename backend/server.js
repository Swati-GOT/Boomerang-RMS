var express = require('express');
var app = express();
var bodyParser = require('body-parser');  
var routes = require('./routes');
var config = require('./config');
var cronJob = require('./cronProcessor');

const MY_PORT = config.PORT;
 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));  

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.listen(MY_PORT, function(){
    console.log(`Server running on port ${MY_PORT}`);
    cronJob.start();
});

app.use('/', routes);

// const cron = require("node-cron");

// // schedule tasks to be run on the server
// cron.schedule("* * * * *", function() {
//     console.log("---------------------");
//     console.log("Running Cron Job");
//   });
