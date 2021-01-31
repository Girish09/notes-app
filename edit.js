const titleElement =  document.querySelector('#note-title');
const bodyElement = document.querySelector('#note-body');
const removeElement = document.querySelector('#remove-note');
const briefUpdate = document.querySelector('#brief');


const noteId = location.hash.substring(1);
const notes = getSavedNotes();

const note = notes.find(note => {
    return note.id === noteId
});

if (!note){
    location.assign('/index.html');
}


titleElement.value = note.title;
bodyElement.value = note.body;
briefUpdate.textContent = generateLastEdited(note.updatedAt);

titleElement.addEventListener('input', function(e){
    note.title = e.target.value;
    note.updatedAt = moment().valueOf();
    briefUpdate.textContent = generateLastEdited(note.updatedAt);
    saveNotes(notes);

})

bodyElement.addEventListener('input', function(e){
    note.body = e.target.value;
    note.updatedAt = moment().valueOf();
    briefUpdate.textContent = generateLastEdited(note.updatedAt);
    saveNotes(notes);
});

removeElement.addEventListener('click', function(e){
    removeNote(note.id);
    saveNotes(notes);
    location.assign('/index.html');
});


window.addEventListener('storage', function(e){
    console.log(e.target);
})


//________________

// const now = moment();

// console.log(now.toString());

// const nowTimeStamp = now.valueOf()
// console.log(moment(nowTimeStamp).toString());


//console.log(now.format('MMMM Do, YYYY'));

const now = moment();

now.year(1983).month('April').date(9);

const myBirthDay = now.format('MMMM D, YYYY')

console.log(myBirthDay.toString());

console.log(moment(myBirthDay).fromNow());

