#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { HelloCdkStack } from "../lib/HelloCdkStack";

const app = new cdk.App();
new HelloCdkStack(app, 'HelloCdkStack', {
 

    /* define lambda stack */




});