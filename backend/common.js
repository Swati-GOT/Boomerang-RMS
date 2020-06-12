const fs = require('fs');
const AWS = require('aws-sdk');
const path = require("path");
const config = require('./config');

const s3 = new AWS.S3({
    accessKeyId: config.AWS_ACCESS_KEY,
    secretAccessKey: config.AWS_SECRET_ACCESS_KEY
});

/**
 * This Function uploads file on s3
 * Public-read access is given to these files and can be downloaded from s3
 */

exports.uploadFile = function(fileName) {
    var scriptName = fileName.split(/[\\/]/).pop(); // Remove the last array element
    console.log(fileName);

    fs.readFile(fileName, (err, data) => {
        if (err) throw err;
        const params = {
            Bucket: 'boomerang-rms', // pass your bucket name
            Key: scriptName, // 
            ContentDisposition: 'attachment',
            Body: data,
            ACL:'public-read'
        };
        s3.upload(params, function(s3Err, data) {
            if (err) throw err;
            console.log("Upload Success", data);
        });
  });
};
