const STATUS_MAP = {
  shelf: {
    color: "green",
    canReserve: true,
    canCheckout: true,
    canCheckIn: false,
  },
  reserved: {
    color: "blue",
    canReserve: false,
    canCheckout: true,
    canCheckIn: false,
  },
  overdue: {
    color: "red",
    canReserve: false,
    canCheckout: false,
    canCheckIn: true,
  },
  checkedOut: {
    color: "orange",
    canReserve: false,
    canCheckout: false,
    canCheckIn: true,
  },
};

// Edit below line

// For book1
const book1 = document.querySelector("#book1");
const reserveBook1 = book1.querySelector(".reserve");
const checkoutBook1 = book1.querySelector(".checkout");
const checkinBook1 = book1.querySelector(".checkin");
const statusBook1 = book1.querySelector(".status");

// For book2
const book2 = document.querySelector("#book2");
const reserveBook2 = book2.querySelector(".reserve");
const checkoutBook2 = book2.querySelector(".checkout");
const checkinBook2 = book2.querySelector(".checkin");
const statusBook2 = book2.querySelector(".status");

// For book3
const book3 = document.querySelector("#book3");
const reserveBook3 = book3.querySelector(".reserve");
const checkoutBook3 = book3.querySelector(".checkout");
const checkinBook3 = book3.querySelector(".checkin");
const statusBook3 = book3.querySelector(".status");

checkinBook1.style.color = "none";
statusBook1.style.color = STATUS_MAP[statusBook1.textContent].color;
reserveBook1.disabled = !STATUS_MAP[statusBook1.textContent].canReserve;
checkoutBook1.disabled = !STATUS_MAP[statusBook1.textContent].canCheckout;
checkinBook1.disabled = !STATUS_MAP[statusBook1.textContent].canCheckIn;
reserveBook1.style.color = !STATUS_MAP[statusBook1.textContent].canReserve
  ? "black"
  : "none";
checkoutBook1.style.color = !STATUS_MAP[statusBook1.textContent].canCheckout
  ? "black"
  : "none";

checkinBook2.style.color = "none";
statusBook2.style.color = STATUS_MAP[statusBook2.textContent].color;
reserveBook2.disabled = !STATUS_MAP[statusBook2.textContent].canReserve;
checkoutBook2.disabled = !STATUS_MAP[statusBook2.textContent].canCheckout;
checkinBook2.disabled = !STATUS_MAP[statusBook2.textContent].canCheckIn;
reserveBook2.style.color = !STATUS_MAP[statusBook1.textContent].canReserve
  ? "black"
  : "none";
checkoutBook2.style.color = !STATUS_MAP[statusBook1.textContent].canCheckout
  ? "black"
  : "none";

checkinBook3.style.color = "none";
statusBook3.style.color = STATUS_MAP[statusBook3.textContent].color;
reserveBook3.disabled = !STATUS_MAP[statusBook3.textContent].canReserve;
checkoutBook3.disabled = !STATUS_MAP[statusBook3.textContent].canCheckout;
checkinBook3.disabled = !STATUS_MAP[statusBook3.textContent].canCheckIn;
reserveBook3.style.color = !STATUS_MAP[statusBook1.textContent].canReserve
  ? "black"
  : "none";
checkoutBook3.style.color = !STATUS_MAP[statusBook1.textContent].canCheckout
  ? "black"
  : "none";
