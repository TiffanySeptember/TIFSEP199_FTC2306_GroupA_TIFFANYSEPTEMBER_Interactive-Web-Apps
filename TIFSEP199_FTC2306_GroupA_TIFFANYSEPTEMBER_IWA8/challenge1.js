const leoName = "Leo Musvaire";
const leoNumber = "2";
const leoStreet = "Church St.";
const leoPostal = "3105";
const leoBalance = "-10";

const sarahName = "Sarah    ";
const sarahSurname = "Kleinhans";
const sarahBalance = "-4582.21000111";
const sarahNumber = "13";
const sarahStreet = "William Close";
const sarahPostal = "0310";

// Only change below this line

const leo = {
  name: leoName + leoSurname, //corrected variable name and added missing ':'
  balance: leoBalance,
  accessId: "47afb389-8014-4d0b-aff3-e40203d2107f", //added missing quotes
  age: 24,
  address: {
    //added missing '{'
    number: leoNumber,
    street: leoStreet,
    postal: leoPostal, //changed '_' to camelCase 'postalCode'
  },
};

const sarah = {
  name: sarahName + " " + sarahSurname, // Corrected variable name and added some space
  age: 62,
  accessId: "6b279ae5-5657-4240-80e9-23f6b635f7a8", // added missing quotes
  balance: sarahBalance,
  address: {
    //added missing '{'
    number: sarahNumber,
    street: sarahStreet,
    postalCode: sarahPostal, //changed '_' to camelCase  'postalCode'
  },
};

console.log(leo, leo.address["postalCode"]); // Corrected property access and added quotes
console.log(sarah, sarah.address["postalCode"]); // Corrected property access and added quotes
