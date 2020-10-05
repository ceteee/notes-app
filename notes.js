const { default: chalk } = require('chalk')
const fs = require('fs')

const addNote = (title, body) => {
    const notes = loadNotes()
    
    // const duplicateNotes = notes.filter((note) => note.title === title)

    // const duplicateNotes = notes.filter(function(note){
    //     return note.title === title
    // }) old version function in javascript
    const duplicateNote = notes.find((note) => note.title === title) //more efficient then last code


    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        
        saveNotes(notes)
        console.log(chalk.green.inverse('New note added'))
    } else {
        console.log(chalk.red.inverse('note title taken!'))
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}


const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e){
        return []
    }

}



const removeNote = (title) => {
    const notes = loadNotes()
    const newNotes = notes.filter((note) => note.title !== title)
    console.log(newNotes)

    if (newNotes.length === notes.length) {
        console.log(chalk.red('note not available!!'))
    } else {
        saveNotes(newNotes)
        console.log(chalk.green.inverse('note already removed'))
    }

}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.green.inverse('Your Notes'))
    notes.forEach((note,index) => {
        console.log(chalk.bgBlackBright(index+1+". "+note.title))
    })
}



const readNote = (title) =>{
    const notes = loadNotes()
    const needToRNote = notes.find((note) => {
        return note.title === title
    })

if (needToRNote){
    console.log(chalk.blueBright.inverse(needToRNote.title))
    console.log(needToRNote.body)
} else {
    console.log(chalk.red.inverse('Note not availabe!, more option in list of notes'))
}
}



module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}