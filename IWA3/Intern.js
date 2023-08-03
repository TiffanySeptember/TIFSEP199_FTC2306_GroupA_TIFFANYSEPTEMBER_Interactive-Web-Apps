const firstname = "Johannes";
const surname = "Potgieter";
const role = "Intern";

(function () {
  const display = firstname + " " + surname + " (" + role + ")";
  document.querySelector("#johannes").innerText = display;
})();
