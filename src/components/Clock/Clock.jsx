import React from "react";
import Quote from "../Quote/Quote";
import ClockTime from "../ClockTime/ClockTime";
import LessMore from "../LessMore/LessMore";
import { ClockContainer } from "./Clock.styles";
import { Container } from "../../theme/GlobalStyle";
import { useSelector } from "react-redux";

const Clock = () => {
  const showMore = useSelector((state) => {
    return state.showMoreInfoReducer.showMore;
  });
  return (
    <ClockContainer showMore={showMore}>
      <Container>
        <Quote />
        <ClockTime />
        <LessMore />
      </Container>
    </ClockContainer>
  );
};

export default Clock;
