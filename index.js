const inquirer = require('inquirer')

const question ={
    message : "Team manager name?",
    name : "name",
    type : "input"
}

function writeHTML(){
    return`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
    
    </body>
    </html>
    `
}

function teamPrompt (){
    inquirer.prompt(question)
}

teamPrompt()
//fs.writeFile()



