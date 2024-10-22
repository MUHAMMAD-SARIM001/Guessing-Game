#! /usr/bin/env node
import inquirer from "inquirer"

const randomNumber = Math.floor(Math.random())
const answers = await inquirer.prompt ([
 {
    name:"UserGuessedNumber",
    type:"number",
    message:"please guess a number b/w 1-10:",
 },
 ]);
 if (answers.UserGuessedNumber === randomNumber) {
    console.log("Congratulatuions!You Guessed Right Number." );
 } else {
    console.log ("you Guessed wrong Number")
 }      
 