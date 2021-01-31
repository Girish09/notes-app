const notes = getSavedNotes()

const filters = {
    searchText: '',
    sortBy: 'byEdited'
}


const timeStamp = {                                     //this code might to change later consistent with Andrew's code
    createdAt: moment().valueOf(),
    updatedAt: moment().valueOf(),
}


renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', function (e) {
    const id = uuidv4();
     
    notes.push({
        createdAt: timeStamp.createdAt,
        updatedAt: timeStamp.updatedAt,
        id: id,
        title: '',
        body: ''
    })
    
    saveNotes(notes)
    renderNotes(notes, filters)
    location.assign(`/edit.html#${id}`)
})

document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

document.querySelector('#filter-by').addEventListener('change', function (e) {
    filters.sortBy = e.target.value;
    renderNotes(notes, filters);
})