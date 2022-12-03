#!/usr/bin/env node

// const inquirer = require("inquirer");
// const chalk = require("chalk");
// const figlet = require("figlet");
// const app = require("commander");
// const mongoose = require("mongoose");

// chalk.green.bold(
//   figlet.textSync("SHEILA'S STORE", {
//     horizontalLayout: "fitted",
//     verticalLayout: "default",
//   })
// );

import gradient from "gradient-string";
import chalkAnimation from "chalk-animation";
import { createSpinner } from "nanospinner";
import chalk from "chalk";
import inquirer from "inquirer";
import figlet from "figlet";

let clienT;

const passTime = (ms = 2000) => new Promise((r) => setTimeout(r, ms));
async function welcome() {
  // console.log(chalk.bgRed("SHEILA'S STORES"));
  const coloredTitle = chalkAnimation.rainbow("Welcome to SHEILA'S STORES \n");

  await passTime();
  coloredTitle.stop();

  console.log(`
  ${chalk.bgGreen(" WANT TO SHOP ? ")}
  This an online store with all that you need.
  You are just one click away to getting that item  ${chalk.bgYellow(
    " you have longed for "
  )} 
  `);
}
await welcome();

async function reqName() {
  var categoryOpt = [
    { id: 1, name: "Cloth" },
    { id: 2, name: "Shoe" },
    { id: 3, name: "Gadgets" },
    { id: 4, name: "Accessories" },
  ];
  const answer = await inquirer.prompt({
    name: "shopper_name",
    type: "input",
    message: "Dear Customer, What is your name?",
    default() {
      return "Customer";
    },
  });

  clienT = answer.shopper_name;
  console.log(`Hello ${clienT},\n 
  ${chalk.bgMagenta(" What will you be getting from us today? \n")}
      `);

  let userChoice = inquirer.prompt("Input a number between 1 and 4");
  for (var category of categoryOpt) {
    console.log(userChoice);
    if (userChoice === category.id || userChoice === `${category.id}`) {
      return console.log(category.name);
    } else {
      console.log(`Not in the list ${userChoice}`);
    }
  }
}
await reqName();

async function chooseCat() {
  const questionDesign = chalk.bgMagenta(
    "What will you be getting from us today? \n"
  );
  const answer = await inquirer.prompt({
    name: "choose_category",
    type: "list",
    message: "What will you be getting from us today?",
    choices: ["Cloth", "Shoes", "Gadgets", "Accessories"],
  });
}
await chooseCat;
