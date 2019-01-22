/* JavaScript for WATS 3020 Sandwich Machine Assignment */

// Step One ///////////////////////////////////////////////////////////
//
// Gather data from the user using the prompt() command.
// Users will fill in each prompt with text.
// Provide examples where it may help (e.g. show a comma-separated list of
// toppings to indicate how to specify toppings, etc.)
//

prompt("Welcome to our New Automated Sandwich Creator! Please type what you would like in each prompt seperating out items with a comma.")

let bread = prompt("Select a Bread from: (White, Wheat, Multigrain, Flat, or Cheese)");

let meat = prompt("Select your Meat(s) from: (Ham, Beef, Chicken, Turkey, or Vegan)");

let toppings = prompt("Select any toppings or Cheese's you would like: (Swiss, Cheddar, American, Provolone, Feta, Lettuce, Onion, Pickles, Olives, Tomato, Spinach)");

let condiments = prompt("Select any Condiments you'd like: (Mayo, Vinegar, Oil, Dressing, HotSauce)");

// Step Two ////////////////////////////////////////////////////////////
//
// Process all the input to calculate values for the user's order. The named
// values are initialized to `null`. Change that so they equal the proper value.
//
// The `prices` object below specifies the prices for each thing.

let prices = {
    sandwich: 5, // Base price for a sandwich is $5, includes bread
    meat: 1, // Each kind of meat on a sandwich costs $1
    topping: 0.5, // Each topping costs $0.50
    condiment: 0.25 // Each condiment costs $0.25
};

let meatArray = meat.split(',');
let toppingArray = toppings.split(',');
let condimentArray = condiments.split(',');


let meatCost = meatArray.length * prices.meat;
let toppingCost = toppingArray.length * prices.topping;
let condimentCost = condimentArray.length * prices.condiment;

let subtotal = meatCost + toppingCost + condimentCost + prices.sandwich;

let waStateTaxRate = 0.065;
let orderTax = subtotal * waStateTaxRate;

let totalPrice = subtotal + orderTax;

//calculate tips
let tenPercent = (totalPrice * 0.1) + totalPrice;
let fifteenPercent = (totalPrice * 0.15) + totalPrice;
let eighteenPercent = (totalPrice * 0.18) + totalPrice;
let twentyPercent = (totalPrice * 0.2) + totalPrice;

// Step Three //////////////////////////////////////////////////////////
//
// We must provide all of the info the user gave us to confirm the order,
// and then we must also provide the cost information so the user understands their bill.


let receiptTemplate = `
    <p>SANDWICH ORDER</p>
    <p>Bread: ${bread}</p>
    <p>Meat: ${meat}</p>
    <p>Toppings: ${toppings}</p>
    <p>Condiments: ${condiments}</p>
    <p>---------------------</p>
    <p class="text-right">Sandwich: ${prices.sandwich.toFixed(2)}</p>
    <p class="text-right">Meat: ${meatCost.toFixed(2)}</p>
    <p class="text-right">Toppings: ${toppingCost.toFixed(2)}</p>
    <p class="text-right">Condiments: ${condimentCost.toFixed(2)}</p>
    <p class="text-right">--------</p>
    <p class="text-right">Subtotal: ${subtotal.toFixed(2)}</p>
    <p class="text-right">Tax: ${orderTax.toFixed(2)}</p>
    <p class="text-right">--------</p>
    <p class="text-right">Total: ${totalPrice.toFixed(2)}</p>
    <p>---------------------</p>
    <p>Suggested Tips</p>
    <p>10% = $${tenPercent.toFixed(2)}</p>
    <p>15% = $${fifteenPercent.toFixed(2)}</p>
    <p>18% = $${eighteenPercent.toFixed(2)}</p>
    <p>20% = $${twentyPercent.toFixed(2)}</p>
`

///////////////////////////////////////////////////////////////////////
// Do not edit below this line unless you are doing something fancy!
//////////////////////////////////////////////////////////////////////
let receiptText = document.querySelector("#receipt-text");
receiptText.innerHTML = receiptTemplate;
