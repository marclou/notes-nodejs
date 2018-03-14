const fs = require('fs');

const fetchNote = () => {
  try {
    let notesExistingString = fs.readFileSync('notes.json');
    return JSON.parse(notesExistingString);
  } catch (e) {
    console.log(e);
    return [];
  }
};

const saveNotes = (notes) => {
  fs.writeFileSync('notes.json', JSON.stringify(notes));
};

module.exports = {
  addNote: (title, body) => {
    let notes = fetchNote();
    let note = {
      title,
      body
    }

    let duplicateNotes = notes.filter(note => note.title === title);

    if (duplicateNotes.length === 0) {
      notes.push(note);
      saveNotes(notes);
      return note;
    } 
  },
  getAll: () => {
    console.log('Getting all notes');
  },
  getNote: (title) => {
      console.log(`Getting note ${title}`);
  },
  removeNote: (title) => {
    console.log(`Remove note ${title}`);
  }
};
