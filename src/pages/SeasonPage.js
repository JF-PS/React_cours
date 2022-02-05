import React, { useState, useEffect } from "react";
import btnGoNext from "../assets/pictures/btnGoNext.png";
import btnGoBack from "../assets/pictures/btnGoBack.png";
import { isEmpty } from "lodash";

import {
  getSeasonByDate,
  getNextSeason,
  forHowManyDays,
  InHowManyDays,
  nbDaysOfSeason,
} from "../utils/seasons";
import Modal from "../components/Modal";
import "../style/seasonStyle.css";

const Season = () => {
  const currentDate = new Date();
  const [currentSeason, setCurrentSeason] = useState({});
  const [nextSeason, setNextSeason] = useState({});
  const [isCurrent, setIsCurrent] = useState(true);
  const toggle = () => {
    setIsCurrent((current) => !current);
  };

  useEffect(() => {
    setCurrentSeason(getSeasonByDate(currentDate));
    setNextSeason(getNextSeason(currentDate));
  }, []);

  return (
    <div className="pageContainer">
      <Modal>
        {!isEmpty(currentSeason) && !isEmpty(nextSeason) && (
          <>
            <div className="blocks">
              <h1>{isCurrent ? currentSeason.title : nextSeason.title}</h1>
              {/* <p>{!isCurrent && nbDaysOfSeason(nextSeason)}</p> */}

              <p>{isCurrent ? "depuis" : "dans"}</p>
              <p>
                {isCurrent
                  ? `${forHowManyDays(currentDate, currentSeason)} jours`
                  : `${InHowManyDays(
                      currentDate,
                      nextSeason.period.start
                    )} jours`}
              </p>
            </div>
            <div className="blocks">
              <img
                className="btnPicture"
                src={isCurrent ? btnGoNext : btnGoBack}
                alt="btnPicture"
                onClick={toggle}
              />
            </div>
          </>
        )}
      </Modal>
    </div>
  );
};

export default Season;
