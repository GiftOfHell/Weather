'use strict';
/*
 'use strict' is not required but helpful for turning syntactical errors into true errors in the program flow
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
*/

/*
 Modules make it possible to import JavaScript files into your application.  Modules are imported
 using 'require' statements that give you a reference to the module.
  It is a good idea to list the modules that your application depends on in the package.json in the project root
 */
var util = require('util');
var faker = require('faker');
const jsf = require('json-schema-faker');

/*
 Once you 'require' a module you can reference the things that it exports.  These are defined in module.exports.
 For a controller in a127 (which this is) you should export the functions referenced in your Swagger document by name.
 Either:
  - The HTTP Verb of the corresponding operation (get, put, post, delete, etc)
  - Or the operationId associated with the operation in your Swagger document
  In the starter/skeleton project the 'get' operation on the '/hello' path has an operationId named 'hello'.  Here,
  we specify that in the exports of this module that 'hello' maps to the function named 'hello'
 */
module.exports = {
  weathers: getWeathers
};

/*
  Functions in a127 controllers used for operations should take two parameters:
  Param 1: a handle to the request object
  Param 2: a handle to the response object
 */
function getWeathers(req, res) {
  // this sends back a JSON response which is a single string
  res.json([{

    "date1": "" + faker.date.future(),
    "temperature1": "" + (faker.random.number() % 41 - 21),
    "city1": "" + faker.address.city(),
    "image1": "" + faker.image.city(),

    "date2": "" + faker.date.future(),
    "temperature2": "" + (faker.random.number() % 41 - 21),
    "city2": "" + faker.address.city(),
    "image2": "" + faker.image.city(),

    "date3": "" + faker.date.future(),
    "temperature3": "" + (faker.random.number() % 41 - 21),
    "city3": "" + faker.address.city(),
    "image3": "" + faker.image.city(),

    "date4": "" + faker.date.future(),
    "temperature4": "" + (faker.random.number() % 41 - 21),
    "city4": "" + faker.address.city(),
    "image4": "" + faker.image.city(),

    "date5": "" + faker.date.future(),
    "temperature5": "" + (faker.random.number() % 41 - 21),
    "city5": "" + faker.address.city(),
    "image5": "" + faker.image.city(),

    "date6": "" + faker.date.future(),
    "temperature6": "" + (faker.random.number() % 41 - 21),
    "city6": "" + faker.address.city(),
    "image6": "" + faker.image.city(),

    "date7": "" + faker.date.future(),
    "temperature7": "" + (faker.random.number() % 41 - 21),
    "city7": "" + faker.address.city(),
    "image7": "" + faker.image.city(),

  }]);
}