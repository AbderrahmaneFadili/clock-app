import React from "react";
import Quote from "../Quote/Quote";
import ClockTime from "../ClockTime/ClockTime";
import LessMore from "../LessMore/LessMore";
import { ClockContainer } from "./Clock.styles";
import { Container } from "../../theme/GlobalStyle";

const Clock = () => {
  return (
    <ClockContainer>
      <Container>
        <Quote />
        <ClockTime />
        <LessMore />
      </Container>
    </ClockContainer>
  );
};

export default Clock;
