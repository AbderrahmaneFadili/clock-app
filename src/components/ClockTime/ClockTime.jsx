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

const ClockTime = () => {
  return (
    <ClockTimeWrapper>
      <ClockTimeGreating>
        <ClockTimeGreatingIcon>
          <BsMoon />
        </ClockTimeGreatingIcon>
        <ClockTimeGreatingText>Good Evening</ClockTimeGreatingText>
      </ClockTimeGreating>
      <ClockTimeClock>
        23:30<TimeZone>BST</TimeZone>
      </ClockTimeClock>
    </ClockTimeWrapper>
  );
};

export default ClockTime;
