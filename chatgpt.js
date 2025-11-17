const env = require('dotenv').config({ quiet: true });
const prompt = require('prompt-sync')();
const apiKey = process.env.apiKey1

// run your code with node chatgpt.js
// add your apiKey to .env from gChat
// Follow the checklist on the Performance Assessment Google Doc
console.log("Welcome to ChatGPT")
let chatURL= "https://api.openai.com/v1/responses"

async function GPT(body){
    const options = {
        method: 'POST',
        headers: {
            Authorization: `Bearer ` + apiKey,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    }
    const response = await fetch(chatURL, options)
    const data = await response.json()
    console.log(data.output[0].content[0].text)
}
GPT({
    model: prompt("What model would you like to use? (Ex. gpt-4.1) "),
    input: prompt("Ask ChatGPT something: ")
})