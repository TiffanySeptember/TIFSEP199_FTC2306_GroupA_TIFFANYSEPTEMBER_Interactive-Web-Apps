const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const data = {
  response: {
    requestType: "FETCH_ATHLETE_DATA",
    requestBy: "ALL_MATCHING_ATHLETES",
    forDisplay: "BEST_RACES",

    data: {
      NM372: {
        firstName: "Nwabisa",
        surname: "Masiko",
        id: "NM372",
        races: [
          {
            date: "2022-11-18T20:00:00.000Z",
            time: [9, 7, 8, 6],
          },
          {
            date: "2022-12-02T20:00:00.000Z",
            time: [6, 7, 8, 7],
          },
        ],
      },

      SV782: {
        firstName: "Schalk",
        surname: "Venter",
        id: "SV782",
        races: [
          {
            date: "2022-11-18T20:00:00.000Z",
            time: [10, 8, 3, 12],
          },
          {
            date: "2022-11-25T20:00:00.000Z",
            time: [6, 8, 9, 11],
          },
          {
            date: "2022-12-02T20:00:00.000Z",
            time: [10, 11, 4, 8],
          },
          {
            date: "2022-12-09T20:00:00.000Z",
            time: [9, 8, 9, 11],
          },
        ],
      },
    },
  },
};

// Only edit below this comment

function createHtml(athleteId) {
  // takes ID as input
  const athlete = data.response.data[athleteId]; //get data for athlete
  const latestRace = athlete.races.slice(-1)[0]; //gets latest race details
  const dateArray = new Date(latestRace.date) // format date, calculates lap time
    .toLocaleDateString("en-US")
    .split("/");
  const day = dateArray[1];
  const monthIndex = parseInt(dateArray[0]);
  const year = dateArray[2];
  const month = MONTHS[monthIndex - 1];

  const totalLapTime = latestRace.time.reduce(function (total, lapTime) {
    return total + lapTime;
  }, 0);
  const hours = Math.floor(totalLapTime / 60);
  const minutes = totalLapTime % 60;

  const fragment = document.createRange().createContextualFragment(
    // create html snippet with athlete info
    "<h2>" +
      athlete.id +
      "</h2>" +
      "<dl>" +
      "<dt>Athlete</dt><dd>" +
      athlete.firstName +
      " " +
      athlete.surname +
      "</dd>" +
      "<dt>Total Races</dt><dd>" +
      athlete.races.length +
      "</dd>" +
      "<dt>Event Date (Latest)</dt><dd>" +
      day +
      " " +
      month +
      " " +
      year +
      "</dd>" +
      "<dt>Total Time (Latest)</dt><dd>" +
      String(hours).padStart(2, "0") +
      ":" +
      String(minutes).padStart(2, "0") +
      "</dd>" +
      "</dl>"
  );

  return fragment; //returns html snippet
}

function appendAthleteData(athleteId) {
  // takes the ID as input
  const section = document.querySelector('[data-athlete="' + athleteId + '"]');
  section.appendChild(createHtml(athleteId)); //appends the html snippet
}

appendAthleteData("NM372"); //finds the corresponding html sections and add the athlete info tho them
appendAthleteData("SV782");
