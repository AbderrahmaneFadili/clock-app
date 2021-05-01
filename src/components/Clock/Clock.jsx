import React from "react";
import Quote from "../Quote/Quote";
import ClockTime from "../ClockTime/ClockTime";
import LessMore from "../LessMore/LessMore";
import { ClockContainer } from "./Clock.styles";

const Clock = () => {
  return (
    <ClockContainer>
      <Quote />
      <ClockTime />
      <LessMore />
    </ClockContainer>
  );
};

export default Clock;
