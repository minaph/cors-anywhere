const functions = require('@google-cloud/functions-framework');
const cors_proxy = require('./lib/cors-anywhere');

const proxy = cors_proxy.createServer();

// Register an HTTP function with the Functions Framework
functions.http('myHttpFunction', (req, res) => {
  // Your code here

  proxy.emit("request", req, res);
});