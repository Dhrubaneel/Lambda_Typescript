AWS Lambda function using Typescript
====================================
The target of this project is to create a simple Lambda function using Typescript. The codebase includes unit test cases with Mocha and Chai. Also VS Code Internal debugging tool will be used to run and debug the code through Typescript files.


Prerequisite
------------
Following software need to be installed in system.

1) VS Code
2) Git
3) Node

Please use the same "launch.json" and "settings.json" files under .vscode folder to get the codebase instantly working. It will also hide .js and .js.map files generated from .ts files to make the codebase look less cluttered.

Please Note, "sourcemap" option must be true in tsconfig.json as we are using "TS Node" module to use the vs code internal debugging tool to debug through typescript code.


Run the application in Debug mode
---------------------------------
press f5 key


Run test Cases
--------------
npm run test

References
---------- 
https://code.visualstudio.com/docs/languages/typescript
https://medium.com/@dupski/debug-typescript-in-vs-code-without-compiling-using-ts-node-9d1f4f9a94a
https://blog.shovonhasan.com/deploying-a-typescript-node-aws-lambda-function-with-serverless/
https://journal.artfuldev.com/unit-testing-node-applications-with-typescript-using-mocha-and-chai-384ef05f32b2
https://appdividend.com/2017/03/31/beginners-guide-to-setup-typescript-with-webpack/