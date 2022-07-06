"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelloCdkStack = void 0;
const aws_cdk_lib_1 = require("aws-cdk-lib");
const aws_cdk_lib_2 = require("aws-cdk-lib");
const aws_iam_1 = require("aws-cdk-lib/aws-iam");
// import * as sqs from 'aws-cdk-lib/aws-sqs';
class HelloCdkStack extends aws_cdk_lib_1.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);
        /*   The code that defines lmbda stack goes here
         code: lambda.Code.fromAsset(path.join(__dirname, '/../lmdaFun')),
         //filenameoflmnda (.) then handlername..export.handlername
          console.log("direcorty name"+__dirname);
        */
        const lmbdafromcode = new aws_cdk_lib_2.aws_lambda.Function(this, 'lmbdafromcodeName', {
            runtime: aws_cdk_lib_2.aws_lambda.Runtime.NODEJS_16_X,
            handler: 'hellolambdafnfirst.handler',
            code: aws_cdk_lib_2.aws_lambda.Code.fromAsset('lmdaFun'),
            memorySize: 1024,
        });
        const s3bucketGetObjcetPolicy = new aws_iam_1.PolicyStatement();
        s3bucketGetObjcetPolicy.addActions('s3:GetObject');
        s3bucketGetObjcetPolicy.addResources('*');
        lmbdafromcode.addToRolePolicy(s3bucketGetObjcetPolicy);
    }
}
exports.HelloCdkStack = HelloCdkStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSGVsbG9DZGtTdGFjay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkhlbGxvQ2RrU3RhY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsNkNBQWdEO0FBRWhELDZDQUFtRDtBQUVuRCxpREFBc0Q7QUFFdEQsOENBQThDO0FBQzlDLE1BQWEsYUFBYyxTQUFRLG1CQUFLO0lBQ3BDLFlBQVksS0FBZ0IsRUFBRSxFQUFVLEVBQUUsS0FBa0I7UUFDeEQsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFFeEI7Ozs7VUFJRTtRQUlGLE1BQU0sYUFBYSxHQUFHLElBQUksd0JBQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLG1CQUFtQixFQUFFO1lBQ2pFLE9BQU8sRUFBRSx3QkFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXO1lBQ25DLE9BQU8sRUFBRSw0QkFBNEI7WUFDdEMsSUFBSSxFQUFDLHdCQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUM7WUFFcEMsVUFBVSxFQUFFLElBQUk7U0FHbkIsQ0FBQyxDQUFDO1FBR0gsTUFBTSx1QkFBdUIsR0FBRyxJQUFJLHlCQUFlLEVBQUUsQ0FBQztRQUN0RCx1QkFBdUIsQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDbkQsdUJBQXVCLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsdUJBQXVCLENBQUMsQ0FBQztJQUkzRCxDQUFDO0NBQ0o7QUEvQkQsc0NBK0JDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RhY2ssIFN0YWNrUHJvcHMgfSBmcm9tICdhd3MtY2RrLWxpYic7XHJcbmltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gJ2NvbnN0cnVjdHMnO1xyXG5pbXBvcnQgeyBhd3NfbGFtYmRhIGFzIGxhbWJkYSB9IGZyb20gJ2F3cy1jZGstbGliJztcclxuaW1wb3J0ICogYXMgcGF0aCBmcm9tICdwYXRoJztcclxuaW1wb3J0IHsgUG9saWN5U3RhdGVtZW50IH0gZnJvbSAnYXdzLWNkay1saWIvYXdzLWlhbSc7XHJcblxyXG4vLyBpbXBvcnQgKiBhcyBzcXMgZnJvbSAnYXdzLWNkay1saWIvYXdzLXNxcyc7XHJcbmV4cG9ydCBjbGFzcyBIZWxsb0Nka1N0YWNrIGV4dGVuZHMgU3RhY2sge1xyXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM/OiBTdGFja1Byb3BzKSB7XHJcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkLCBwcm9wcyk7XHJcblxyXG4gICAgICAgIC8qICAgVGhlIGNvZGUgdGhhdCBkZWZpbmVzIGxtYmRhIHN0YWNrIGdvZXMgaGVyZVxyXG4gICAgICAgICBjb2RlOiBsYW1iZGEuQ29kZS5mcm9tQXNzZXQocGF0aC5qb2luKF9fZGlybmFtZSwgJy8uLi9sbWRhRnVuJykpLFxyXG4gICAgICAgICAvL2ZpbGVuYW1lb2ZsbW5kYSAoLikgdGhlbiBoYW5kbGVybmFtZS4uZXhwb3J0LmhhbmRsZXJuYW1lXHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcImRpcmVjb3J0eSBuYW1lXCIrX19kaXJuYW1lKTtcclxuICAgICAgICAqL1xyXG5cclxuXHJcbiAgICAgICBcclxuICAgICAgICBjb25zdCBsbWJkYWZyb21jb2RlID0gbmV3IGxhbWJkYS5GdW5jdGlvbih0aGlzLCAnbG1iZGFmcm9tY29kZU5hbWUnLCB7XHJcbiAgICAgICAgICAgIHJ1bnRpbWU6IGxhbWJkYS5SdW50aW1lLk5PREVKU18xNl9YLFxyXG4gICAgICAgICAgICBoYW5kbGVyOiAnaGVsbG9sYW1iZGFmbmZpcnN0LmhhbmRsZXInLFxyXG4gICAgICAgICAgIGNvZGU6bGFtYmRhLkNvZGUuZnJvbUFzc2V0KCdsbWRhRnVuJyksXHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIG1lbW9yeVNpemU6IDEwMjQsXHJcbiAgICAgICAgICAgXHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgXHJcbiAgICAgICAgY29uc3QgczNidWNrZXRHZXRPYmpjZXRQb2xpY3kgPSBuZXcgUG9saWN5U3RhdGVtZW50KCk7XHJcbiAgICAgICAgczNidWNrZXRHZXRPYmpjZXRQb2xpY3kuYWRkQWN0aW9ucygnczM6R2V0T2JqZWN0Jyk7XHJcbiAgICAgICAgczNidWNrZXRHZXRPYmpjZXRQb2xpY3kuYWRkUmVzb3VyY2VzKCcqJyk7XHJcbiAgICAgICAgbG1iZGFmcm9tY29kZS5hZGRUb1JvbGVQb2xpY3koczNidWNrZXRHZXRPYmpjZXRQb2xpY3kpO1xyXG5cclxuICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgfVxyXG59XHJcbiJdfQ==