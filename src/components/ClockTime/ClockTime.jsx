import React from "react";
import {
  ClockTimeClock,
  ClockTimeGreating,
  ClockTimeGreatingIcon,
  ClockTimeGreatingText,
  ClockTimeWrapper,
  TimeZone,
} from "./ClockTime.styles";
import { BsMoon } from "react-icons/bs";
import { FaSun } from "react-icons/fa";
import { useSelector } from "react-redux";

const ClockTime = ({ currentTime, amPm }) => {
  const { timeZoneData } = useSelector((state) => state.timeZoneReducer);
  return (
    <ClockTimeWrapper>
      <ClockTimeGreating>
        <ClockTimeGreatingIcon>
          {amPm === "am" ? <FaSun /> : <BsMoon />}
        </ClockTimeGreatingIcon>
        <ClockTimeGreatingText>
          {amPm === "am" ? "Good Morning" : "Good Evening"}
        </ClockTimeGreatingText>
      </ClockTimeGreating>
      <ClockTimeClock>
        {currentTime}
        {timeZoneData && <TimeZone>{timeZoneData.currentTime}</TimeZone>}
      </ClockTimeClock>
    </ClockTimeWrapper>
  );
};

export default ClockTime;
