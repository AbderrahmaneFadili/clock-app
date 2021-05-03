import React from "react";
import Quote from "../Quote/Quote";
import ClockTime from "../ClockTime/ClockTime";
import LessMore from "../LessMore/LessMore";
import { ClockContainer } from "./Clock.styles";
import { Container } from "../../theme/GlobalStyle";
import { useSelector } from "react-redux";
import moment from "moment";

const Clock = ({ amPm, time }) => {
  const showMore = useSelector((state) => {
    return state.showMoreInfoReducer.showMore;
  });

  const currentTime = moment(time).format("HH:MM");

  return (
    <ClockContainer showMore={showMore}>
      <Container>
        <Quote />
        <ClockTime currentTime={currentTime} amPm={amPm} />
        <LessMore />
      </Container>
    </ClockContainer>
  );
};

export default Clock;
