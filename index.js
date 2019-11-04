const axios = require("axios");
const inquirer = require("inquirer");
const generateHTML = require("./generateHTML")

getUser();
   var info = []
//function determines the persons favourite color

async function getUser() {
  try {
    const { user } = await inquirer.prompt([
        {
        type: 'input',
        name: 'user',
        message: 'Who are you looking for?'
        },
        {
        type: 'checkbox',
        name: 'color',
        message: "What is your favourite colour?",
        choices: ['Green', 'Blue', 'Pink', 'Red'],
        }]);
    
    const data  = await axios.get(
      `https://api.github.com/users/${user}`
    ).then(
        function(res) {
            var uinfo = res.data
            console.log(uinfo);
        });

        function generateHTML() {
          var html = data.createElement("HTML Document");
          data.body.appendChild(html);
        }
  
  } catch (err) {
    console.log(err);
  }
}

