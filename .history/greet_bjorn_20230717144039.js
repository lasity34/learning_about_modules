import chalk from "chalk";

import greet from "./greet.js";

const styleMessage = chalk.bgGreen.black(console.log('bjorn'))
console.log(greet('Bjorn'))