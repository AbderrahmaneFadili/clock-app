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

const ClockTime = ({ currentTime, amPm }) => {
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
        <TimeZone>BST</TimeZone>
      </ClockTimeClock>
    </ClockTimeWrapper>
  );
};

export default ClockTime;
