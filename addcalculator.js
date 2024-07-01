#! usr/bin/env node 
import inquirer from 'inquirer';
import chalk from 'chalk';
console.log(chalk.bold.cyan("!!!!!!!!WELCOME TO ADDITION CALCULATOR !!!!!!!!!!"));
const input1 = await inquirer.prompt({
    name: "num1",
    type: "number",
    message: "kindly enter your first number:"
});
const input2 = await inquirer.prompt({
    name: "num2",
    type: "number",
    message: "kindly enter your second number"
});
let total = input1.num1 + input2.num2;
console.log(chalk.green("You're answer is ", total));
