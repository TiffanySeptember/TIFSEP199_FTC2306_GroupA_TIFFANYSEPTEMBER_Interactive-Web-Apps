const currentYear = new Date().getFullYear();

const holidays = {
  0: {
    id: 0,
    name: "Day of Reconciliation",
    date: `16 December ${currentYear}`,
  },
  1: {
    id: 1,
    name: "Workers Day",
    date: new Date(`1 April ${currentYear}`),
  },
  2: {
    id: 2,
    name: "Day of Goodwill",
    date: new Date(`26 December ${currentYear}`),
  },
  3: {
    id: 3,
    name: "New Year Day",
    date: new Date(`1 January ${currentYear}`),
  },
  4: {
    id: 4,
    name: "Womens Day",
    date: new Date(`9 August ${currentYear}`),
  },
  5: {
    id: 5,
    name: "Heritage Day",
    date: new Date(`24 September ${currentYear}`),
  },
  6: {
    id: 6,
    name: "Christmas Day",
    date: new Date(`25 December ${currentYear} 13:25`),
  },
  7: {
    id: 7,
    name: "Youth Day",
    date: new Date(`16 June ${currentYear}`),
  },
  8: {
    id: 8,
    name: "Human Rights Day",
    date: new Date(`21 March ${currentYear}`),
  },
};

const christmas = 6;
const futureId = 9;

// Do not change code above this comment

console.log(
  // updated this to use the short format of a conditional statement
  holidays[futureId]
    ? holidays[futureId].name
    : `ID ${futureId} not created yet` // had to use string interpolation here
);

copied = Object.assign({}, holidays[christmas]); // Using Object.assign to do a deep copy
copied.name = "X-mas Day"; // setting the name individually to avoid overwriting the object
correctDate = new Date(copied.date); // The date is string format so had to use new Date to set it to date format
correctDate.setHours(0); // had to use set hours to update the hours
correctDate.setMinutes(0); // had to use set minutes to update the minutes
isEarlier = correctDate < holidays[6].date; // here I have to check correctDate against the original date
console.log("New date is earlier:", isEarlier);
if (isEarlier) copied.date = correctDate;
console.log(
  "ID change:",
  holidays[christmas].id != copied.id ? copied.id : false // had to use the short format for conditional statements here
);
console.log(
  "Name change:",
  holidays[christmas].name != copied.name ? copied.name : false // had to use the short format for conditional statements here.
);
console.log(
  "Date change:",
  holidays[christmas].date != copied.date ? copied.date : false // had to use the short format for conditional statements here
);

const firstHolidayTimestamp = Math.min(
  new Date(holidays[0].date).getTime(),
  new Date(holidays[1].date).getTime(),
  new Date(holidays[2].date).getTime(),
  new Date(holidays[3].date).getTime(),
  new Date(holidays[4].date).getTime(),
  new Date(holidays[5].date).getTime(),
  new Date(holidays[6].date).getTime(),
  new Date(holidays[7].date).getTime(),
  new Date(holidays[8].date).getTime()
);

const lastHolidayTimestamp = Math.max(
  new Date(holidays[0].date).getTime(),
  new Date(holidays[1].date).getTime(),
  new Date(holidays[2].date).getTime(),
  new Date(holidays[3].date).getTime(),
  new Date(holidays[4].date).getTime(),
  new Date(holidays[5].date).getTime(),
  new Date(holidays[6].date).getTime(),
  new Date(holidays[7].date).getTime(),
  new Date(holidays[8].date).getTime()
);

const firstDay = new Date(firstHolidayTimestamp).getDate();
const firstMonth = new Date(firstHolidayTimestamp).getMonth() + 1;
const lastDay = new Date(lastHolidayTimestamp).getDate();
const lastMonth = new Date(lastHolidayTimestamp).getMonth() + 1;

console.log(
  `${firstDay.toString().padStart(2, 0)}/${firstMonth // pad the start with 0
    .toString()
    .padStart(2, 0)}/${currentYear}` // pad the start with 0
); // had to use string interpolation here
console.log(
  `${lastDay.toString().padStart(2, 0)}/${lastMonth // pad the start with 0
    .toString()
    .padStart(2, 0)}/${currentYear}` // pad the start with 0
); // had to use string interpolation here

const randomHoliday = holidays[Math.floor(Math.random() * 8)]; // Making sure to return an integer between 1 and 8
console.log(randomHoliday.date);
