console.log('--- App started ---');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');
const _ = require('lodash');

const command = process.argv[2];
console.log(process.argv);

if (command === 'add') {

} else if (command === 'list') {

} else if (command === 'read') {

} else if (command === 'remove') {

} else {
  console.log('Command not recognized');
}
