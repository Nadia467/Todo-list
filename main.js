#! /usr/bin/env node
import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    let addTask = await inquirer.prompt([
        {
            name: "todo",
            message: "what you want to do in your todos?",
            type: "input",
        },
        {
            name: "addMore",
            message: "do you want to add more?",
            type: "confirm",
            default: true,
        },
    ]);
    todos.push(addTask.todo);
    condition = addTask.addMore;
    console.log(todos);
}
