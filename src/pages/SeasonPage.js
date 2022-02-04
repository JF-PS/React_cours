import React, { useState, useEffect } from "react";
import { format, compareAsc } from "date-fns";
import {
  getSeasonByDate,
  getNextSeason,
  forHowManyDays,
  InHowManyDays,
} from "../utils/seasons";
import Modal from "../components/Modal";

const Season = () => {
  const currentDate = new Date();

  useEffect(() => {
    const currentSeason = getSeasonByDate(currentDate);
    const nextSeason = getNextSeason(currentDate);

    console.log(currentSeason);
    console.log(forHowManyDays(currentSeason));

    console.log(nextSeason);
    console.log(InHowManyDays(currentDate, nextSeason.period.start));
  }, [getSeasonByDate, currentDate]);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          border: "1px solid black",
          width: "100px",
          height: "100px",
        }}
      >
        test
      </div>
    </div>
  );
};
{
  /* <Modal
        styled={{
          border: "1px solid black",
          width: "100px",
          height: "100px",
        }}
      >
        test
      </Modal> */
}
export default Season;
