import chalk from "chalk";

import figletPromised from "figlet-promised";

import greet from "./greet.js";

const styledMessage = chalk.bgGreen.black(greet('bjorn'))
console.log(styledMessage)

async function runFiglet() {
    const result = await figletPromised('Bjorn')
    console.log(result)
}

runFiglet()