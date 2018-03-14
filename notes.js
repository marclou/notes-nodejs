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
  getAllNotes: () => {
    var notes = fetchNote();
    if (notes.length > 0) {
      return notes;
    }
  },
  getNote: (title) => {
    let notes = fetchNote();
    let noteToRead = notes.filter(note => note.title === title);
    if (noteToRead.length > 0) {
      return noteToRead;
    }
  },
  removeNote: (title) => {
    let notes = fetchNote();
    let newNotes = notes.filter(note => note.title !== title);

    saveNotes(newNotes);
    if (newNotes.length !== notes.length) {
      return true;
    } else {
      return false;
    }
  }
};
