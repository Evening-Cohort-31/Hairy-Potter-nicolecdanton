// Imports go first
import { potteryPrimaryKey, makePottery } from "./potteryWheel.js"
import { firePottery } from "./kiln.js";
import { toSellOrNotToSell, usePottery } from "./PotteryCatalog.js";
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

firePottery(mug, 2100)
firePottery(bowl, 2300)
firePottery(vase, 1100)
firePottery(plate, 3300)
firePottery(jug, 1100)

// Determine which ones should be sold, and their price

toSellOrNotToSell(mug)
toSellOrNotToSell(bowl)
toSellOrNotToSell(vase)
toSellOrNotToSell(plate)
toSellOrNotToSell(jug)

// Invoke the component function that renders the HTML list

