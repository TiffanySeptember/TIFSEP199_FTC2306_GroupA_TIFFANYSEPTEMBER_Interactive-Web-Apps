let state = "idle";
let user = null;
let calculated = "1";

// Only allowed to change below

// ...function to increment calculated
const logCalc = () => {
  calculated++; // increment calculated by 1
};

// ...function to update user and state
const calcUser = () => {
  logCalc(); // increment calculated
  if (calculated > 2) {
    user = "John"; // set user if greater than 2
    state = "requesting"; // set state if greater than 2
  }
  if (calculated > 3) {
    state = "idle"; // set state if greater than 3
  }
};

// function = to display user info
const checkUser = () => {
  if (user && state === "requesting") {
    console.log(`User: ${user} (${calculated})`);
  }
};

// Only allowed to change code above

checkUser();
calcUser();

checkUser();
calcUser();

checkUser();
calcUser();

checkUser();
calcUser();

checkUser();
calcUser();
