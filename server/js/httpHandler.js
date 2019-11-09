const fs = require('fs');
const path = require('path');
const headers = require('./cors');
const multipart = require('./multipartUtils');
// const key = require('./keypressHandler');
// const keypress = require('../../client/js/keypressHandler.js');
// const client = require('../../client/');

const makeRandom = () => {
  var strokeHolder = ['up', 'down', 'left', 'right'];
  var randomStroke = Math.floor(Math.random() * strokeHolder.length);
  var actualRandom = strokeHolder[randomStroke];
  return actualRandom;
}

// Path for the background image ///////////////////////
module.exports.backgroundImageFile = path.join('.', 'background.jpg');
////////////////////////////////////////////////////////

let messageQueue = null;
module.exports.initialize = (queue) => {
  messageQueue = queue;
};

module.exports.router = (req, res, next = () => { }) => {
  console.log('Serving request type ' + req.method + ' for url ' + req.url);
  res.writeHead(200, headers);
  var message = messageQueue.dequeue();
  if (message) {
    res.write(message);
  } else {
    res.write(makeRandom());
  }
  res.end();
  next(); // invoke next() at the end of a request to help with testing!
};
