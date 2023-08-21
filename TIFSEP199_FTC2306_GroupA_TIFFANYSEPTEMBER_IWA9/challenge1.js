const salary = 4000;
const lodging = "apartment";
const size = "large";

// Only change the syntax below (not the values or key names)

const expenses = {
  food: 51.7501,
  transport: 10.2,
};

const tax = {
  // add dubble quotationmarks to everything
  734: "3%",
  234: "20%",
  913: "12%",
  415: "38%",
  502: "42%",
};

const rent = {
  none: 0,
  "small-room": 200,
  "large-room": 300,
  "small-apartment": 400,
  "large-apartment": 800,
  "small-house": 1200,
  "large-house": 2400,
};

// You can change below however you want

const taxRateString = tax[913]; // Get the tax rate string by putting the amount in []
const taxRateDecimal = parseFloat(taxRateString) / 100; // Convert tax rate to decimal,t's divided by 100 to convert it from a percentage to a decimal form.

const afterTaxAmount = salary * (1 - taxRateDecimal); // Calculate after-tax amount. It multiplies the original salary by 1 - taxRateDecimal

const type = size + "-" + lodging; // Concatenate lodging and size

const balance =
  afterTaxAmount - expenses.transport - expenses.food - rent[type]; // Calculate balance,the code calculates the balance by subtracting various expenses from the after-tax amount.

console.log(balance.toFixed(2)); // Log the balance rounded to two decimal places
