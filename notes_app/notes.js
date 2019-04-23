const fs = require('fs')
const chalk = require('chalk')


//Create a new note
const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)

    debugger
    
    if (!duplicateNote) {
            notes.push({
                title: title,
                body: body
            })
        
            saveNotes(notes)
        console.log(chalk.white.bgGreen('New note added'))
        }
    else {
        console.log(chalk.white.bgRed('Note title taken'))
    }
    }

const removeNote = (title) => {
    const notes = loadNotes()
    const remainingNotes = notes.filter((note) => note.title !== title) 
    
    if (notes.length === remainingNotes.length) {
        console.log(chalk.white.bgRed('No note found!'))
    }
    else {
        saveNotes(remainingNotes)
        console.log(chalk.white.bgGreen('Note removed!'))
    }
}

const listAllNotes = () => {
    const notes = loadNotes()
    notes.forEach((note) => {
        console.log(chalk.blue.bold.bgWhite(note.title))
    })
}

const readNote = (title) => {
    const notes = loadNotes()
    const matchingNote = notes.find((note) => note.title === title)
    
    if (!matchingNote){
        console.log(chalk.white.bold.bgRed('No note found!'))
    }
    else{
        console.log(chalk.white.bold.bgGreen(matchingNote.title))
        console.log(matchingNote.body)
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON) 
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

module.exports = {
    addNote,
    removeNote,
    listAllNotes,
    readNote
}