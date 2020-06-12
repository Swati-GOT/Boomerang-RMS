var cronJob = require('cron').CronJob;
var common = require('./common');
var fs = require('fs');

var csvFolder = "../csvFiles/"; 

var job = new cronJob({
    cronTime: '0 22 * * *',
    onTick: function() {
        console.log("cron started ................");
        fs.readdir(csvFolder, (err, files) => {
            files.forEach(file => {
                var isTodaysDate = getFileDate(file);
                if(isTodaysDate){
                    common.uploadFile(csvFolder + file);
                }
            });
          });
    },
   start: false,
   //timeZone: 'Asia/Kolkata'
});

function getFileDate(fileName){
    var isTodaysDate = false;
    var filePart = fileName.split('_').splice(1,3);
    var stringDate = filePart[0] + '-' + filePart[1] + '-'+ filePart[2]
    var fileDate = new Date(stringDate).getDate();
    var todaysDate = new Date().getDate();
    if(fileDate == todaysDate){
        return isTodaysDate = true;
    }else{
        isTodaysDate = false;
    }
    return isTodaysDate;
}

module.exports = job;