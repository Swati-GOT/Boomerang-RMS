const fs = require('fs');
const AWS = require('aws-sdk');
const path = require("path");
const config = require('./config');

const s3 = new AWS.S3({
    accessKeyId: config.AWS_ACCESS_KEY,
    secretAccessKey: config.AWS_SECRET_ACCESS_KEY
});

exports.uploadFile = function(fileName) {
    var scriptName = fileName.split(/[\\/]/).pop(); // Remove the last array element
    console.log(scriptName);
    fs.readFile(fileName, (err, data) => {
        if (err) throw err;
        const params = {
            Bucket: 'boomerang-rms', // pass your bucket name
            Key: 'scriptName', // 
            Body: JSON.stringify(data, null, 2)
        };
        s3.upload(params, function(s3Err, data) {
            if (s3Err) throw s3Err
            console.log(`File uploaded successfully at ${data.Location}`)
        });
  });
};
