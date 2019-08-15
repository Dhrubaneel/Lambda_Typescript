<!-- DO NOT EDIT README.md (It will be overridden by README.hbs) -->

# AWS Lambda function using Typescript

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Description](#description)
  - [Prerequisite](#prerequisite)
  - [Run the application in Debug mode](#run-the-application-in-debug-mode)
  - [Run test Cases](#run-test-cases)
  - [Create Readme](#create-readme)
  - [References](#references)
- [Synopsis](#synopsis)
- [Code Documentation](#code-documentation)
  - [Classes](#classes)
  - [Functions](#functions)
  - [Typedefs](#typedefs)
  - [Helper](#helper)
    - [new Helper(inputDimension)](#new-helperinputdimension)
    - [helper.area() ⇒ <code>number</code>](#helperarea-%E2%87%92-codenumbercode)
    - [helper.perimeter() ⇒ <code>number</code>](#helperperimeter-%E2%87%92-codenumbercode)
  - [handler(event, context, callback)](#handlerevent-context-callback)
  - [dimensionResult : <code>Object</code>](#dimensionresult--codeobjectcode)
  - [geometricFigure : <code>Object</code>](#geometricfigure--codeobjectcode)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Description

The target of this project is to create a simple Lambda function using Typescript. The codebase includes unit test cases
with Mocha and Chai. Also VS Code Internal debugging tool will be used to run and debug the code through Typescript
files.


Prerequisite
------------
Following software need to be installed in system.

1) VS Code
2) Git
3) Node

Please use the same "launch.json" and "settings.json" files under .vscode folder to get the codebase instantly working.
It will also hide .js and .js.map files generated from .ts files to make the codebase look less cluttered.

Please Note, "sourcemap" option must be true in tsconfig.json as we are using "TS Node" module to use the vs code
internal debugging tool to debug through typescript code.

This project use jsdoc to create Readme file auto generated. All ts files need to have proper comments to have Readme
file generated properly. Run the comment "npm run build:doc" before every commit to get the Readme file freshly
regenerated. If any change is required in definition then README.hbs file needs to be modified.


Run the application in Debug mode
---------------------------------
Press f5 key. This will run VS Code in debug mode based on the configuration mentioned in launch.json. launch.json
targets the file lambda-local which calls the actual handler with json from EVENT_EXAMPLE as lambda event.



Run test Cases
--------------
npm run test

Create Readme
--------------
npm run build:doc

References
----------
https://code.visualstudio.com/docs/languages/typescript

https://medium.com/@dupski/debug-typescript-in-vs-code-without-compiling-using-ts-node-9d1f4f9a94a

https://blog.shovonhasan.com/deploying-a-typescript-node-aws-lambda-function-with-serverless/

https://journal.artfuldev.com/unit-testing-node-applications-with-typescript-using-mocha-and-chai-384ef05f32b2

https://appdividend.com/2017/03/31/beginners-guide-to-setup-typescript-with-webpack/

https://github.com/jsdoc2md/jsdoc-to-markdown/wiki

https://minimaldevelop.blog/2017/05/05/how-to-setup-standardjs-for-visual-studio-code-nodejs-and-typescript/
# Synopsis

Code samples

# Code Documentation
## Classes

<dl>
<dt><a href="#Helper">Helper</a></dt>
<dd></dd>
</dl>

## Functions

<dl>
<dt><a href="#handler">handler(event, context, callback)</a></dt>
<dd></dd>
</dl>

## Typedefs

<dl>
<dt><a href="#dimensionResult">dimensionResult</a> : <code>Object</code></dt>
<dd><p>Type definition for dimension result</p></dd>
<dt><a href="#geometricFigure">geometricFigure</a> : <code>Object</code></dt>
<dd><p>Type definition for geometric figure</p></dd>
</dl>

<a name="Helper"></a>

## Helper
**Kind**: global class  

* [Helper](#Helper)
    * [new Helper(inputDimension)](#new_Helper_new)
    * [.area()](#Helper+area) ⇒ <code>number</code>
    * [.perimeter()](#Helper+perimeter) ⇒ <code>number</code>

<a name="new_Helper_new"></a>

### new Helper(inputDimension)

| Param | Type | Description |
| --- | --- | --- |
| inputDimension | [<code>geometricFigure</code>](#geometricFigure) | <p>the height and width of the geometric figure</p> |

<a name="Helper+area"></a>

### helper.area() ⇒ <code>number</code>
<p>Function to calculate area of a geometric figure</p>

**Kind**: instance method of [<code>Helper</code>](#Helper)  
<a name="Helper+perimeter"></a>

### helper.perimeter() ⇒ <code>number</code>
<p>Function to calculate perimeter of a geometric figure</p>

**Kind**: instance method of [<code>Helper</code>](#Helper)  
<a name="handler"></a>

## handler(event, context, callback)
**Kind**: global function  

| Param | Description |
| --- | --- |
| event | <p>Lambda event</p> |
| context | <p>Lambda context</p> |
| callback | <p>Lambda Callback</p> |

<a name="dimensionResult"></a>

## dimensionResult : <code>Object</code>
<p>Type definition for dimension result</p>

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| area | <code>number</code> | <p>area of the figure</p> |
| perimeter | <code>number</code> | <p>perimeter of the figure</p> |

<a name="geometricFigure"></a>

## geometricFigure : <code>Object</code>
<p>Type definition for geometric figure</p>

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| width | <code>number</code> | <p>width of the figure</p> |
| height | <code>number</code> | <p>height of the figure</p> |

