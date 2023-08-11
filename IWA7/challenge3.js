const leoName = "Leo";
const leoSurname = "Musvaire     ";
const leoBalance = "-9394";

const sarahName = "Sarah    ";
const sarahSurname = "Kleinhans";
const sarahBalance = "-4582.2";

const divider = "----------------------------------";

// Only change below this line

const owed = parseFloat(leoBalance) + parseFloat(sarahBalance);

function formatNumber(number) {
  const [integerPart, decimalPart] = number.toFixed(2).split(".");
  let formattedIntegerPart = "";

  for (let i = 0; i < integerPart.length; i++) {
    if ((integerPart.length - i) % 3 === 0 && i !== 0) {
      formattedIntegerPart += " ";
    }
    formattedIntegerPart += integerPart[i];
  }

  return `${formattedIntegerPart}.${decimalPart}`;
}

const leo = `${leoName} ${leoSurname} (Owed: R ${formatNumber(
  Math.abs(parseFloat(leoBalance))
)})`;
const sarah = `${sarahName} ${sarahSurname} (Owed: R ${formatNumber(
  Math.abs(parseFloat(sarahBalance))
)})`;
const totalText = `  Total amount owed: R ${formatNumber(Math.abs(owed))}\n`;
const result = `\n${leo}\n${sarah}\n\n${divider}\n${totalText}${divider}`;

console.log(result);
