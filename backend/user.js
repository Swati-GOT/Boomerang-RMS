var fs = require('fs');
var csvWriter = require('csv-write-stream');
var writer = csvWriter({sendHeaders: false}); //Instantiate var
var csvFilePath = "../csvFiles/"; 
var common = require('./common');

var fieldName = {
    LOG_TIMESTAMP:'LOG_TIMESTAMP',
    LOG_TIMEZONE:'LOG_TIMEZONE',
    LOG_TYPE:'LOG_TYPE',
    LOG_APP_VERSION:'LOG_APP_VERSION',
    SERIAL_ID:'SERIAL_ID',
    SOURCE_MAC:'SOURCE_MAC',
    VENDOR:'VENDOR',
    MODEL:'MODEL',
    ACCOUNT:'ACCOUNT',
    PROJECT:'PROJECT',
    DEPLOYMENT_DATE:'DEPLOYMENT_DATE',
    STORE_CHAIN:'STORE_CHAIN',
    STORE_NAME:'STORE_NAME',
    NAME:'NAME',
    AOI_ID:'AOI_ID',
    COUNTRY:'COUNTRY',
    CITY:'CITY',
    LATITUDE:'LATITUDE',
    LONGITUDE:'LONGITUDE',
    UNIQUE_ID:'UNIQUE_ID',
    AOI_ZONE:'AOI_ZONE',
    ACTION_TIMESTAMP:'ACTION_TIMESTAMP'
}


function saveFile(jsonData){
    var name="AA067";	
    var today = new Date();
    var save_date=today.getFullYear()+"_"+("0"+(today.getMonth()+1)).slice(-2)+"_"+today.getDate();
    var logDate = today.getFullYear()+"-"+("0"+(today.getMonth()+1)).slice(-2)+"-"+today.getDate()+"-"+today.getHours()+":"+today.getMinutes()+":"+today.getSeconds()+":"+today.getMilliseconds();
    var fileName = "";  //name+"_"+ save_date +"_"+"OFFLINE.csv"
    var uniqueID = Math.random().toString(36).substring(2) + (new Date()).getTime().toString(36);

    if(jsonData.IS_ONLINE){
        fileName= name+"_"+ save_date +"_"+"ONLINE.csv"
    }  else{
        fileName= name+"_"+ save_date +"_"+"OFFLINE.csv"
    }  

    var data = {
        LOG_TIMESTAMP:logDate,
        LOG_TIMEZONE:'0500',
        LOG_TYPE:jsonData.LOG_TYPE,
        LOG_APP_VERSION:'1.0.1',
        SERIAL_ID:'G6BN91900JQJ',
        SOURCE_MAC:'1C:69:7A:01:EE:A7',
        VENDOR:'INTEL',
        MODEL:'MODEL',
        ACCOUNT:'ACCOUNT',
        PROJECT:'PROJECT',
        DEPLOYMENT_DATE:"2019-12-13",
        STORE_CHAIN:'CHEDRAUI',
        STORE_NAME:'INTERLOMAS',
        NAME:'AA067',
        AOI_ID:'INTER_24_PROF',
        COUNTRY:'MEX',
        CITY:'NAUCALPAN',
        LATITUDE:'19.403144',
        LONGITUDE:'-99.268634',
        UNIQUE_ID:uniqueID,
        AOI_ZONE:jsonData.AOI_ZONE,
        ACTION_TIMESTAMP:logDate
    }


    if (fs.existsSync(csvFilePath+fileName)) {
        console.log("inside if")
        writeFile(fileName,data)
    }else{
        console.log("inside else")
        writeFile(fileName,fieldName)
    }
}

function writeFile(csvFilename,data){
    // Append some data to CSV the file    
    writer = csvWriter({sendHeaders: false});
    writer.pipe(fs.createWriteStream(csvFilePath+csvFilename, {flags: 'a'}));
    writer.write(data);
    writer.end();
}


// save File
exports.saveFile = function(req, res) {
    var jsonData = req.body;
    console.log(jsonData);  
    saveFile(jsonData);
    
    var response = {  
        status:"OK",  
        message:"Data recorded successfully" 
    };  
    res.end(JSON.stringify(response));  
};

exports.getResponse = function (req, res) {
    var fileName = csvFilePath+'AA067_2020_06_11_ONLINE.csv';
    //console.log(fileName);
    common.uploadFile(fileName);
    res.send('FileUploaded !!');
};
