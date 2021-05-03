import React from "react";
import {
  ClockInfosWrapper,
  ClockInfoContainer,
  ClockInfo,
  ClockInfoValue,
  Column,
} from "./ClockInfos.styles";

import { Container } from "../../theme/GlobalStyle";
import { useSelector } from "react-redux";

const ClockInfos = ({ amPm }) => {
  const showMore = useSelector((state) => {
    return state.showMoreInfoReducer.showMore;
  });

  return (
    <ClockInfosWrapper amPm={amPm} showMore={showMore}>
      <Container
        style={{
          marginTop: 50,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        <Column>
          <ClockInfoContainer amPm={amPm}>
            <ClockInfo>Current timezone</ClockInfo>
            <ClockInfoValue>Europe/london</ClockInfoValue>
          </ClockInfoContainer>

          <ClockInfoContainer amPm={amPm}>
            <ClockInfo>day of the year</ClockInfo>
            <ClockInfoValue>296</ClockInfoValue>
          </ClockInfoContainer>
        </Column>

        <Column>
          <ClockInfoContainer amPm={amPm}>
            <ClockInfo>day of the week</ClockInfo>
            <ClockInfoValue>5</ClockInfoValue>
          </ClockInfoContainer>
          <ClockInfoContainer amPm={amPm}>
            <ClockInfo>week number</ClockInfo>
            <ClockInfoValue>42</ClockInfoValue>
          </ClockInfoContainer>
        </Column>
      </Container>
    </ClockInfosWrapper>
  );
};

export default ClockInfos;
