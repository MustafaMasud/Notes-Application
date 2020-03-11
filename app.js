const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

// Cusomize yarg version
yargs.version('1.1.0')

//Create add command
yargs.command({
    command: 'add',
    describe: 'add a new note',

    //creating within
    builder: {

        //type
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },

        body:{
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    //takes in arg and displays arguements and string
    handler(argv){
        notes.addNote(argv.title, argv.body)
    }
})

//Create remove command
yargs.command({
    command: 'remove',
    describe: 'removing a note',
    builder: {

        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },

    },
    handler(argv){
        notes.removeNote(argv.title)
    }
})
//Create list command
yargs.command({
    command: 'list',
    describe: 'list notes',
    handler(){
        notes.listNotes()
    }
})

//Create a read command
yargs.command({
    command: 'read',
    describe: 'read a note',
    builder:{

        title: {

            describe: 'title',
            demandOption: true,
            type: 'string'

        }

    },
    handler(argv){
        notes.readNotes(argv.title)
    }
})
// add, remove, read, list

yargs.parse()
