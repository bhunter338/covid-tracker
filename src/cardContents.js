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
    definition: "Total number of COVID-19 Cases",
  },
  {
    id: 2,
    title: "recovered",
    number: "",
    date: today,
    definition: "Total number of recoveries from COVID-19",
  },
  {
    id: 3,
    title: "deaths",
    number: "",
    date: today,
    definition: "Total number of deaths caused by COVID-19",
  },
  {
    id: 4,
    title: "infected",
    number: "",
    date: today,
    definition: "Number of active cases of COVID-19",
  },
  {
    id: 5,
    title: "recovered",
    number: "",
    date: today,
    definition: "Number of serious/critical cases of COVID-19",
  },
  {
    id: 6,
    title: "deaths",
    number: "",
    date: today,
    definition: "Total COVID-19 cases per 1M population",
  },
];
export default contents;
