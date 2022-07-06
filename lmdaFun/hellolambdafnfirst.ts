const AWS = require('aws-sdk');
 
 
exports.handler = async (event:any) => {
    // TODO implement
   
    console.log("amit"+event);
    
   const s3 = new AWS.S3();
    var bucket = "amitbucketforjson"
    var key = "mock.json"

    try {

        const params = {
            Bucket: bucket,
            Key: key
        };

        var data = await s3.getObject(params).promise();
        console.log("theobject" + data);
        return data.Body.toString('utf-8');

    } catch (error) {
        console.log(error);
        return;
    }  
    

};