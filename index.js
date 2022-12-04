#!/usr/bin/env node

import gradient from "gradient-string";
import chalkAnimation from "chalk-animation";
import { createSpinner } from "nanospinner";
import chalk from "chalk";
import inquirer from "inquirer";
import figlet from "figlet";

let clienT;

const passTime = (ms = 2000) => new Promise((r) => setTimeout(r, ms));
async function welcome() {
  const coloredTitle = chalkAnimation.rainbow("Welcome to SHEILA'S STORES \n");

  await passTime();
  coloredTitle.stop();

  console.log(`
  ${chalk.bgGreen(" WANT TO SHOP ? ")}
  This an online store with all that you need.
  You are just one click away to getting that item ${chalk.bgYellow(
    " you have longed for "
  )}
  `);
}
await welcome();

async function reqName() {
  const answer = await inquirer.prompt({
    name: "shopper_name",
    type: "input",
    message: "Dear Customer, What is your name?",
    default() {
      return "Customer";
    },
  });

  clienT = answer.shopper_name;
  console.log(` Hello ${clienT},\n
  ${chalk.bgMagenta(" What will you be getting from us today? \n")}
      `);
  var cloth = "CLOTH";
  var shoes = "SHOES";
  var gadgets = "GADGETS";
  var accessories = "ACCESSORIES";
  let userChoice = await inquirer.prompt({
    name: "shopper_choice",
    type: "list",
    message: "Choose a category\n",
    choices: [cloth, shoes, gadgets, accessories],
  });

  clienT = userChoice.shopper_choice;
}
await reqName();

async function catDetails() {
  var cloth = "CLOTH";
  var shoes = "SHOES";
  var gadgets = "GADGETS";
  var accessories = "ACCESSORIES";
  if (clienT == cloth) {
    let clothChoice = await inquirer.prompt({
      name: "cloth_choice",
      type: "list",
      message: "Choose a Cloth\n",
      choices: ["Top $10", "Skirt $20", "Trouser $25", "Blouse $15"],
    });
    var chosen1 = clothChoice;

    // console.log(clothChoice);
  } else if (clienT == shoes) {
    let shoeChoice = await inquirer.prompt({
      name: "shoe_choice",
      type: "list",
      message: "Choose a Shoe\n",
      choices: ["Sneakers $30", "Sandals $15", "Pams $10", "Boots $30"],
    });
    var chosen2 = shoeChoice;

    // console.log(shoeChoice);
  } else if (clienT == gadgets) {
    let gadgetChoice = await inquirer.prompt({
      name: "gadget_choice",
      type: "list",
      message: "Choose a Gadget\n",
      choices: ["Phone $150", "IWatch $60", "Airpods $15", "Wireless Mouse $5"],
    });
    var chosen3 = gadgetChoice;

    // console.log(gadgetChoice);
  } else if (clienT == accessories) {
    let accessoriesChoice = await inquirer.prompt({
      name: "accessories_choice",
      type: "list",
      message: "Choose an Accessory\n",
      choices: ["Belt $10", "Hair Clip $5", "Cufflinks $15", "Necklace $30"],
    });
    var chosen4 = accessoriesChoice;

    // console.log(accessoriesChoice);
  } else {
    console.log("Not available");
  }

  var answer = chosen1 || chosen2 || chosen3 || chosen4;
  console.log("You have selected" + chosen1);
}
await catDetails();
