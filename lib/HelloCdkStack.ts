import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { aws_lambda as lambda } from 'aws-cdk-lib';
import * as path from 'path';
import { PolicyStatement } from 'aws-cdk-lib/aws-iam';

// import * as sqs from 'aws-cdk-lib/aws-sqs';
export class HelloCdkStack extends Stack {
    constructor(scope: Construct, id: string, props?: StackProps) {
        super(scope, id, props);

        /*   The code that defines lmbda stack goes here
         code: lambda.Code.fromAsset(path.join(__dirname, '/../lmdaFun')),
         //filenameoflmnda (.) then handlername..export.handlername
          console.log("direcorty name"+__dirname);
        */


       
        const lmbdafromcode = new lambda.Function(this, 'lmbdafromcodeName', {
            runtime: lambda.Runtime.NODEJS_16_X,
            handler: 'hellolambdafnfirst.handler',
           code:lambda.Code.fromAsset('lmdaFun'),
           
            memorySize: 1024,
           

        });

      
        const s3bucketGetObjcetPolicy = new PolicyStatement();
        s3bucketGetObjcetPolicy.addActions('s3:GetObject');
        s3bucketGetObjcetPolicy.addResources('*');
        lmbdafromcode.addToRolePolicy(s3bucketGetObjcetPolicy);

       
        
    }
}
