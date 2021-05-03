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

const ClockTime = ({ amPm }) => {
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
        23:30<TimeZone>BST</TimeZone>
      </ClockTimeClock>
    </ClockTimeWrapper>
  );
};

export default ClockTime;
