import chalk from "chalk";

import greet from "./greet.js";

const styledMessage = chalk.bgGreen.black(console.log('bjorn'))
console.log(styledMessage)