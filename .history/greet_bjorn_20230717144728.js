import chalk from "chalk";

const figlet = require('figlet-promised')

import greet from "./greet.js";

const styledMessage = chalk.bgGreen.black(greet('bjorn'))
console.log(styledMessage)

async function runFiglet() {
    const result = await figlet('Bjorn')
    console.log(result)
}

runFiglet()