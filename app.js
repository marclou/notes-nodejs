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
  let allNotes = notes.getAllNotes();
  let message = allNotes ? allNotes : 'No notes yet';
  console.log(message);

} else if (command === 'read') {
  let note = notes.getNote(argv.title);
  let message = note ? note : 'Invalid Title';
  console.log(message);
} else if (command === 'remove') {
  let removedNote = notes.removeNote(argv.title);
  let message = removedNote ? 'Note successfully removed' : 'Title does not exist';
  console.log(message);
} else {
  console.log('Command not recognized');
}
