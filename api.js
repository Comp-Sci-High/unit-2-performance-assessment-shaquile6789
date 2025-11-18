const env = require('dotenv').config({ quiet: true });
const prompt = require('prompt-sync')();
const apiKey = process.env.apiKey2

// run your code with node api.js
// add your apiKey to .env if your API needs one, otherwise ignore
// Follow the checklist on the Performance Assessment Google Doc
let pUrl = "https://www.thesportsdb.com/api/v1/json/123/searchplayers.php?p="

async function player(pUrl){
    const response = await fetch(pUrl)
    const data = await response.json(pUrl + prompt("Choose a player: "))
    console.log(data)
}

player(pUrl)