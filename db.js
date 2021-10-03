const { DataStore } = require('notarealdb');

const store = new DataStore('./data');

module.exports = {
  // playlist: store.collection('playlist'),
  users: store.collection('users'),
  artists: store.collection('artists')
};