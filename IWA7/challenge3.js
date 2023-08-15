const leoName = "Leo";
const leoSurname = "Musvaire     ";
const leoBalance = "-9394";

const sarahName = "Sarah    ";
const sarahSurname = "Kleinhans";
const sarahBalance = "-4582.2";

const divider = "----------------------------------";

// Only change below this line

const owed = parseFloat(leoBalance) + parseFloat(sarahBalance); //This line calculates the total amount owed by adding the parsed floating-point values

function formatNumber(number) {
  //function definition that takes a number as an argument and returns a formatted string representation of that number
  const [integerPart, decimalPart] = number.toFixed(2).split("."); //call ensures that the number is rounded to 2 decimal places and returns a string and the split, splits the string into two parts integer part and decimal part
  let formattedIntegerPart = "";

  for (let i = 0; i < integerPart.length; i++) {
    // The purpose of this loop and conditions is to format the integer part of the number by adding spaces every three digits
    if ((integerPart.length - i) % 3 === 0 && i !== 0) {
      formattedIntegerPart += " ";
    }
    formattedIntegerPart += integerPart[i];
  }

  return `${formattedIntegerPart}.${decimalPart}`; //After the loop completes, the code returns a formatted string representation of the number by combining the formatted integer part and the decimal part
}
// format number function is used to format the balance amount.
const leo = `${leoName} ${leoSurname} (Owed: R ${formatNumber(
  // a formatted string for Leo's information it includes his name, surname, and formatted balance amount.
  Math.abs(parseFloat(leoBalance)) // function ensures that the balance value is treated as positive to prevent negative amounts from appearing in the formatted string.
)})`;
const sarah = `${sarahName} ${sarahSurname} (Owed: R ${formatNumber(
  Math.abs(parseFloat(sarahBalance))
)})`;
const totalText = `  Total amount owed: R ${formatNumber(Math.abs(owed))}\n`;
const result = `\n${leo}\n${sarah}\n\n${divider}\n${totalText}${divider}`; //This creates the final result string by combining the formatted strings for Leo and Sarah
//The ${} syntax is used to interpolate variables and function results into the string.
console.log(result);
