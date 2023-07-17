import chalk from "chalk";

import greet from "./greet.js";

const styledMessage = chalk.bgGreen.black(greet('bjorn'))
console.log(styledMessage)