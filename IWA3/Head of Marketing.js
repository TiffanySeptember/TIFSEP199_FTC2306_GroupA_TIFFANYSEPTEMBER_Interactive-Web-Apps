const firstname = "Alex";
const surname = "Naidoo";
const role = "Head of Marketing";

(function () {
  const display = firstname + " " + surname + " (" + role + ")";
  document.querySelector("#alex").innerText = display;
})();
