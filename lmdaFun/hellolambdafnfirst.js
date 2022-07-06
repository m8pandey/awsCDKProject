"use strict";
const AWS = require('aws-sdk');
exports.handler = async (event) => {
    // TODO implement
    console.log("amit" + event);
    const s3 = new AWS.S3();
    var bucket = "amitbucketforjson";
    var key = "mock.json";
    try {
        const params = {
            Bucket: bucket,
            Key: key
        };
        var data = await s3.getObject(params).promise();
        console.log("theobject" + data);
        return data.Body.toString('utf-8');
    }
    catch (error) {
        console.log(error);
        return;
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVsbG9sYW1iZGFmbmZpcnN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaGVsbG9sYW1iZGFmbmZpcnN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxNQUFNLEdBQUcsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7QUFHL0IsT0FBTyxDQUFDLE9BQU8sR0FBRyxLQUFLLEVBQUUsS0FBUyxFQUFFLEVBQUU7SUFDbEMsaUJBQWlCO0lBRWpCLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFDLEtBQUssQ0FBQyxDQUFDO0lBRTNCLE1BQU0sRUFBRSxHQUFHLElBQUksR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDO0lBQ3ZCLElBQUksTUFBTSxHQUFHLG1CQUFtQixDQUFBO0lBQ2hDLElBQUksR0FBRyxHQUFHLFdBQVcsQ0FBQTtJQUVyQixJQUFJO1FBRUEsTUFBTSxNQUFNLEdBQUc7WUFDWCxNQUFNLEVBQUUsTUFBTTtZQUNkLEdBQUcsRUFBRSxHQUFHO1NBQ1gsQ0FBQztRQUVGLElBQUksSUFBSSxHQUFHLE1BQU0sRUFBRSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNoRCxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsQ0FBQztRQUNoQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0tBRXRDO0lBQUMsT0FBTyxLQUFLLEVBQUU7UUFDWixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ25CLE9BQU87S0FDVjtBQUdMLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEFXUyA9IHJlcXVpcmUoJ2F3cy1zZGsnKTtcclxuIFxyXG4gXHJcbmV4cG9ydHMuaGFuZGxlciA9IGFzeW5jIChldmVudDphbnkpID0+IHtcclxuICAgIC8vIFRPRE8gaW1wbGVtZW50XHJcbiAgIFxyXG4gICAgY29uc29sZS5sb2coXCJhbWl0XCIrZXZlbnQpO1xyXG4gICAgXHJcbiAgIGNvbnN0IHMzID0gbmV3IEFXUy5TMygpO1xyXG4gICAgdmFyIGJ1Y2tldCA9IFwiYW1pdGJ1Y2tldGZvcmpzb25cIlxyXG4gICAgdmFyIGtleSA9IFwibW9jay5qc29uXCJcclxuXHJcbiAgICB0cnkge1xyXG5cclxuICAgICAgICBjb25zdCBwYXJhbXMgPSB7XHJcbiAgICAgICAgICAgIEJ1Y2tldDogYnVja2V0LFxyXG4gICAgICAgICAgICBLZXk6IGtleVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHZhciBkYXRhID0gYXdhaXQgczMuZ2V0T2JqZWN0KHBhcmFtcykucHJvbWlzZSgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwidGhlb2JqZWN0XCIgKyBkYXRhKTtcclxuICAgICAgICByZXR1cm4gZGF0YS5Cb2R5LnRvU3RyaW5nKCd1dGYtOCcpO1xyXG5cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH0gIFxyXG4gICAgXHJcblxyXG59OyJdfQ==