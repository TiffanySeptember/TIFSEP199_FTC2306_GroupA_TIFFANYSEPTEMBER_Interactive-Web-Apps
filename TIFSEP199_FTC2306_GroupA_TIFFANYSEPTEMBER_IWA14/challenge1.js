firstName = "John";
age = 35;
hobby = "Coding";

const logTwice = (message) => {
  console.log(message);
  console.log(message);
};
// create a new function hobbyFunction
function hobbyFunction() {
  logTwice(`Hello, ${firstName} (${age}). I love ${hobby}!`);
}

hobbyFunction();
