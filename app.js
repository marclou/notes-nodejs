console.log('--- App started ---\n\n');

const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const command = process.argv[2];
const argv = yargs.argv;

if (command === 'add') {
  var note = notes.addNote(argv.title, argv.body);
  if (note) {
    console.log('Note created ');
    console.log('---');
    console.log(`Title : ${note.title}, \nBody : ${note.body}`);
  } else {
    console.log('Note title already existing...');
  }
} else if (command === 'list') {
  notes.getAll();
} else if (command === 'read') {
  notes.getNote(argv.title);
} else if (command === 'remove') {
  notes.removeNote(argv.title);
} else {
  console.log('Command not recognized');
}
