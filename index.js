#! /usr/bin/env node
import inquirer from "inquirer";
import figlet from "figlet";
import chalk from "chalk";
console.log(figlet.textSync("Calculator"));
while (true) {
    const answer = await inquirer.prompt([
        {
            type: "number",
            name: "firstdigit",
            message: "Enter First Number :"
        },
        {
            type: "number",
            name: "seconddigit",
            message: "Enter Second Number :"
        },
        {
            type: "list",
            name: "operation",
            choices: ['*', '/', '+', '-'],
            message: "Enter operation to perform :"
        }
    ]);
    const { firstdigit, seconddigit, operation } = answer;
    if (firstdigit && seconddigit && operation) {
        let result = 0;
        if (operation == '+') {
            result = firstdigit + seconddigit;
        }
        else if (operation == '-') {
            result = firstdigit - seconddigit;
        }
        else if (operation == '*') {
            result = firstdigit * seconddigit;
        }
        else if (operation == '/') {
            result = firstdigit / seconddigit;
        }
        console.log(chalk.greenBright("Your result is :", result));
    }
    else {
        console.log(chalk.redBright("Kindly Enter Valid Number"));
    }
    const calculate_again = await inquirer.prompt([
        {
            name: "checktocalculate",
            type: "string",
            message: "If you want to terminate than enter & :"
        }
    ]);
    if (calculate_again.checktocalculate == "&") {
        console.log(chalk.redBright("Calculator terminated."));
        break;
    }
}
