var options = {
  weekday: "short",
  year: "numeric",
  month: "long",
  day: "numeric",
};

var today = new Date().toLocaleDateString("en-us", options);

const contents = [
  {
    id: 1,
    title: "infected",
    number: "292,642,670",
    date: today,
    definition: "Number of active cases of COVID-19",
  },
  {
    id: 2,
    title: "total infected",
    number: "1,292,642,670",
    date: today,
    definition: "Number of total cases of COVID-19",
  },
  {
    id: 3,
    title: "recovered",
    number: "292,642,670",
    date: today,
    definition: "Number of total recovered of COVID-19",
  },
  {
    id: 4,
    title: "infected",
    number: "",
    date: today,
    definition: "Total number of COVID-19 Cases",
  },
  {
    id: 5,
    title: "recovered",
    number: "",
    date: today,
    definition: "Total number of recoveries from COVID-19",
  },
  {
    id: 6,
    title: "deaths",
    number: "",
    date: today,
    definition: "Total number of deaths caused by COVID-19",
  },
];
export default contents;
