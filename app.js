const chalk = require('chalk') // npm module
const { demandOption } = require('yargs')
const yargs = require('yargs')
const { listNotes, readNote } = require('./notes.js')
const notes = require('./notes.js') // self module

//
yargs.version('1.1.0')

//Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note Body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
       notes.addNote(argv.title, argv.body)
    }
    // handler: function(argv){
    //     notes.addNote(argv.title, argv.body)
    //  } this is old version function in javascript
})


//create remove command
yargs.command({
    command: 'remove',
    describe: 'remove a note',
    builder: {
      title: {
            describe: 'removing a note!',
            demandOption: true,
            type: 'string'
      }  
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
})


yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler(){
        listNotes()
    }
})


yargs.command({
    command: 'read',
    describe: 'read your notes',
    builder: {
        title: {
            describe: 'title from body to read',
            demandOption: true,
            type: 'string'
        }
    },
    // handler: function(){
        
    // }
    handler(argv){
        readNote(argv.title)
    }
})

yargs.parse()