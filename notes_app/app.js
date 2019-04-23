const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes')

//Customize yargs version
yargs.version('1.1.0')

// Create
yargs.command({
    command: 'add',
    describe: 'add a new note',
    builder: {
        title:{
            describe: 'note title',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe: 'note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        notes.addNote(argv.title, argv.body)
    }
})

//Remove
yargs.command({
    command: 'remove',
    describe: 'removing an existing note',
    builder: {
        title: {
            describe: 'note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        notes.removeNote(argv.title)
    }
})



//List
yargs.command({
    command: 'list',
    describe: 'listing all notes',
    handler: () => {
        notes.listAllNotes()
    }
})

//Read
yargs.command({
    command: 'read',
    describe: 'read an existing note',
    builder: {
        title: {
            describe: 'note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        notes.readNote(argv.title)
    }
})



console.log(yargs.argv)