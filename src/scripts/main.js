// Imports go first
import { potteryPrimaryKey, makePottery } from "./potteryWheel.js"


// Make 5 pieces of pottery at the wheel

const mug = makePottery("Mug", 2, 5);
console.log(mug);

const bowl = makePottery("Bowl", 1, 4);
console.log(bowl);

const vase = makePottery("Vase", 3, 10);
console.log(vase);

const plate = makePottery("Plate", 1, 1);
console.log(plate);

const jug = makePottery("Jug", 4, 8);
console.log(jug);

// Fire each piece of pottery in the kiln


// Determine which ones should be sold, and their price


// Invoke the component function that renders the HTML list

