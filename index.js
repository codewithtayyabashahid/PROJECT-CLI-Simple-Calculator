#! usr/bin/env node
import inquirer from "inquirer";
//Printing a welcoming message
console.log("\n\t Welcome to \`codewithtayyabashahid\` - CLI Simple Calculator\n");
// let questions from users through inquirer
let answer = await inquirer.prompt([
    { message: "Enter your first number", type: "number", name: "firstNumber" },
    { message: "Enter your second number", type: "number", name: "secondNumber" },
    {
        message: "select one of operator to perform action",
        type: "list",
        name: "operator",
        choices: ["ADDITION", "SUBTRACTION", "MULTIPLICATION", "DIVISION"],
    },
]);
console.log(answer);
// CONDITIONAL STATEMENT IF-ELSE
if (answer.operator === "ADDITION") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "SUBTRACTION") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "MULTIPLICATION") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "DIVISION") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else {
    console.log("Invalid Input");
}
