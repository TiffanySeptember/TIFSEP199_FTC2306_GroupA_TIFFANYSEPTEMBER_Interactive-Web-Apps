import { company, year } from "./configuration.js1";

const message = `© ${company} (${year})`;
document.querySelector("footer").innerText = message;
