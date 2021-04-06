// TODO: Include packages needed for this application
 const fs = require('fs');
const prompt = require("prompt-sync")();
// TODO: Create an array of questions for user input
const questions = ["Project Name" , "Description" , "Badges?", "Install Instructions?",
 "Usage", "Support contacts?", "Future Roadmap?", "Open to Contributions?", "Authors and Acknowledgment?", "Licensing?"];
let answers = [];
// TODO: Create a function to write README file
function getAnswers(newREADME, data) {

    for (i=0; i<questions.length; i++){

    answers[i] = prompt(questions[i] + " ");
        }}
    
function writeToFile() {

    for (i=0; i<questions.length; i++){
   
    const saveItem = `${ questions[i] }\n${ answers[i] }\n \n`;
   
    fs.appendFile("newREADME.md", saveItem, (err) => {
        if (err) {
          console.error(err);
          return
    }});



}}



getAnswers()

writeToFile()



// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
