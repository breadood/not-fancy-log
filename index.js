'use strict';

const timestamp = require('time-stamp');
const chalk = require('chalk');

function getTimestamp(){
  return '['+(timestamp('HH:mm:ss'))+']';
}

function log(){
  var time = getTimestamp();
  process.stdout.write(time + ' ');
  console.log.apply(console, arguments);
  return this;
}

function info(){
  var time = chalk.blue(getTimestamp());
  process.stdout.write(time + ' ');
  console.info.apply(console, arguments);
  return this;
}

function warn(){
  var time = chalk.yellow(getTimestamp());
  process.stderr.write(time + ' ');
  console.warn.apply(console, arguments);
  return this;
}

function error(){
  var time = chalk.red(getTimestamp());
  process.stderr.write(time + ' ');
  console.error.apply(console, arguments);
  return this;
}

module.exports = log;
module.exports.info = info;
module.exports.warn = warn;
module.exports.error = error;
