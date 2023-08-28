function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

// Define the internal function
function internal() {
  const added = this.add(this.internal.a, this.internal.b); // Add a and b
  const multiplied = this.multiply(this.internal.a, this.internal.b); // Multiply a and b
  console.log(added); // Log the added result
  console.log(multiplied); // Log the multiplied result
  return this; // Return the current object
}

// Not allowed to change below this

const example1 = {
  internal: {
    a: 2,
    b: 4,
    c: 8,
  },
  add,
  multiply,
  calculate: internal,
};

const example2 = {
  internal: {
    a: 2,
    b: 2,
    c: 3,
  },
  add,
  multiply,
  calculate: internal,
};

example1.calculate();
example2.calculate();
