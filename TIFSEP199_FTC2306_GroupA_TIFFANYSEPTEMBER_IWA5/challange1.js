const FREE_WARNING = "Free shipping only applies to single customers";
const BANNED_WARNING =
  "Unfortunately we do not ship to your country of residence";
const NONE_SELECTED = 0;

const customerLocation = "RSA";
const customers = 1;
let currency = "R";

const shoeCost = 300 * 1;
const toysCost = 100 * 5;
const shirtCost = 150 * NONE_SELECTED;
const batteriesCost = 35 * 2;
const pensCost = 5 * NONE_SELECTED;

const totalItemCost =
  shoeCost + toysCost + shirtCost + batteriesCost + pensCost;

let shipping = 0;
if (customerLocation === "RSA") {
  shipping = 400;
} else if (customerLocation === "NAM") {
  shipping = 600;
  currency = "$";
} else {
  shipping = 800;
  currency = "$";
}

const totalCost = totalItemCost + shipping;

if (customerLocation === "NK") {
  console.log(BANNED_WARNING);
} else {
  if (
    totalItemCost >= 1000 &&
    (customerLocation === "RSA" || customerLocation === "NAM") &&
    customers === 1
  ) {
    shipping = 0;
  }
  if (shipping === 0 && customers !== 1) {
    console.log(FREE_WARNING);
  }

  console.log("Price : ", currency, totalCost);
}
