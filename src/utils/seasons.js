import { differenceInDays } from "date-fns";

export const getAllSeasons = () => [
  {
    month: "Spring",
    period: { start: new Date(2022, 03, 20), end: new Date(2022, 06, 20) },
  },
  {
    month: "Summer",
    period: { start: new Date(2022, 06, 21), end: new Date(2022, 09, 22) },
  },
  {
    month: "Autumn",
    period: { start: new Date(2022, 09, 23), end: new Date(2022, 12, 20) },
  },
  {
    month: "Winter",
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

export const forHowManyDays = (currentSeason) => {
  return differenceInDays(currentSeason.period.end, currentSeason.period.start);
};

export const InHowManyDays = (currentDate, startSeasonDate) => {
  return differenceInDays(startSeasonDate, currentDate);
};
