//Required 
const fs = require('fs')
const chalk = require('chalk')


//adding note function
const addNote = (title,body) => {
    //loading the function to get JSON data
    const notes = loadNote()

    //assigning array to a filtered array
    //const duplicateNotes = notes.filter((note) => note.title === title)
    const duplicateNotes = notes.find((note) => note.title === title)

    //Debugging
    debugger

    //if array is empty then You can add title
    if (!duplicateNotes){

        //pushing data to arrray
        notes.push({

            title: title,
            body: body
        })
    
        //writing to the file 
        savedNotes(notes)
        console.log(chalk.bgGreen('New note added'))
    }else {
        console.log(chalk.bgRed('Note title already exsists'))
    }

    
}

//reading notes function
const readNote = (title,body)=> {

    const notes = listNote()

}

//saving notes function
const savedNotes =(notes)=>{

    //converting to string
    const dataJSON =JSON.stringify(notes)

    //writing string to JSON file
    fs.writeFileSync('notes.json',dataJSON)
}

//lising notes function
const loadNote =(title,body)=>{

//to catch expected errors.
 try{

//reading file
 const data = fs.readFileSync('notes.json')
 const dataJSON = data.toString()
 return JSON.parse(dataJSON)

 } catch(e){
    return []
 }  
 

}

//remove note function
const removeNote = (title)=>{
    const data = loadNote()

    //checking if titles match by using filter
    const duplicateNotes = data.filter((note) => note.title !== title)

    //length -1 = something was removed 
    if (duplicateNotes.length === data.length - 1){
        savedNotes(duplicateNotes)
        console.log(chalk.bgWhite.Green('Note removed!'))

        //if array is 0 meaning no notes after removal
        if(duplicateNotes.length===0){
            console.log(chalk.bgWhite.Red('No notes left!'))}
        
    } else {
        console.log(chalk.bgWhite.Red('Note title does not exist!'))
    }

}

const listNotes = () => {
     
    const notes = loadNote()
    console.log(chalk.inverse('Your notes: '))
    notes.forEach(note => {
        console.log(note.title)
    })
    

}

const readNotes = (title) => {
    const notes = loadNote()
    const data = notes.find((note) => {
        return note.title === title
    })
    if (data === undefined){

        console.log(chalk.bgWhite.red("No Note found!"))
    } else {

        console.log(chalk.inverse("Note: " + title ))
        console.log("List: " + data.body)

        
    }
    
}
//exporting object
module.exports =  {
    
    listNotes: listNotes,
    addNote: addNote,
    removeNote: removeNote,
    readNotes: readNotes,
    loadNote: loadNote
} 