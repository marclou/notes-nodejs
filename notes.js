module.exports = {
  addNote: (title, body) => {
    console.log(`Adding note : ${title}, ${body}`);
  },
  getAll: () => {
    console.log('Getting all notes');
  },
  getNote: (title) => {
      console.log(`Getting note ${title}`);
  }
}
