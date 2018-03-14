console.log('--- App started ---');

const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const command = process.argv[2];
const argv = yargs.argv;

if (command === 'add') {
  notes.addNote(argv.title, argv.body);
} else if (command === 'list') {
  notes.getAll();
} else if (command === 'read') {
  notes.getNote(argv.title);
} else if (command === 'remove') {

} else {
  console.log('Command not recognized');
}
