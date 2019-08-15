// Code to run lambda code locally
const sample = require("./EVENT_SAMPLE/sample.json");
import { handler } from './src/lambda';

handler(sample, null, (err: any, data: any) => {
    if (err) {
        console.log("Error:", JSON.stringify(err, null, 2));
    } else {
        console.log("Handler response:", JSON.stringify(data, null, 2));
    }
});

