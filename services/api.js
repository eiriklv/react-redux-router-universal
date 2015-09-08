import _ from 'lodash';

let notes = [{
  id: "0",
  subject: 'Some dummy subject 1',
  content: 'Some dummy content 1'
}, {
  id: "1",
  subject: 'Some dummy subject 2',
  content: 'Some dummy content 2'
}, {
  id: "2",
  subject: 'Some dummy subject 3',
  content: 'Some dummy content 3'
}];

let notesCount = notes.length;

export function createNewNote() {
  let id = notesCount++;

  notes.push({
    id: id.toString(),
    subject: '(no subject)',
    content: '(no content)'
  });

  return new Promise((resolve, reject) => {
    setTimeout(resolve.bind(null, id, 1000));
  });
}

export function deleteNoteById(id) {
  let index = _.findIndex(notes, { id: id });
  notes.splice(index, 1);

  return new Promise((resolve, reject) => {
    setTimeout(resolve, 1000);
  });
}

export function updateNoteById(id, newData) {
  let index = _.findIndex(notes, { id: id });
  notes.splice(index, 1, _.assign({}, { id: id }, newData));

  return new Promise((resolve, reject) => {
    setTimeout(resolve, 1000);
  });
}

export function getNoteById(id) {
  return new Promise((resolve, reject) => {
    let note = _.find(notes, { id: id });
    setTimeout(resolve.bind(null, _.assign({}, note)), 1000);
  })
}

export function getInbox() {
  return new Promise((resolve, reject) => {
    setTimeout(resolve.bind(null, _.assign([], notes)), 1000);
  });
}
