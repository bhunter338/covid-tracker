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
    number: "",
    date: today,
    definition: "Number of daily cases of COVID-19",
  },
  {
    id: 2,
    title: "recovered",
    number: "",
    date: today,
    definition: "Number of daily recoveries from COVID-19",
  },
  {
    id: 3,
    title: "deaths",
    number: "",
    date: today,
    definition: "Number of daily deaths caused by COVID-19",
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
