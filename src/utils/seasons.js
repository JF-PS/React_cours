import { differenceInDays, formatDistanceToNow } from "date-fns";

export const getAllSeasons = () => [
  {
    title: "Printemps",
    period: { start: new Date(2022, 03, 20), end: new Date(2022, 06, 20) },
  },
  {
    title: "Summer",
    period: { start: new Date(2022, 06, 21), end: new Date(2022, 09, 22) },
  },
  {
    title: "Autumn",
    period: { start: new Date(2022, 09, 23), end: new Date(2022, 12, 20) },
  },
  {
    title: "Hiver",
    period: { start: new Date(2021, 12, 21), end: new Date(2022, 03, 19) },
  },
];

export const getSeasonByDate = (currentDate) =>
  getAllSeasons().filter(
    (season) =>
      currentDate >= season.period.start && currentDate <= season.period.end
  )[0];

export const getNextSeason = (currentDate) => {
  const seasons = getAllSeasons();
  const currentSeason = getSeasonByDate(currentDate);
  const index = seasons.indexOf(currentSeason) + 1;
  return seasons[index > seasons.length ? 1 : index];
};

export const forHowManyDays = (currentDate, currentSeason) => {
  console.log(currentDate);
  console.log(currentSeason.period.start);
  return formatDistanceToNow(currentSeason.period.start, currentDate);
};

export const InHowManyDays = (currentDate, startSeasonDate) => {
  return differenceInDays(startSeasonDate, currentDate);
};

export const nbDaysOfSeason = (currentSeason) => {
  return differenceInDays(currentSeason.period.end, currentSeason.period.start);
};
