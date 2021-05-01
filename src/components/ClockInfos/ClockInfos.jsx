import React from "react";
import {
  ClockInfosWrapper,
  ClockInfoContainer,
  ClockInfo,
  ClockInfoValue,
} from "./ClockInfos.styles";

import { Container } from "../../theme/GlobalStyle";

const ClockInfos = () => {
  return (
    <ClockInfosWrapper>
      <Container>
        <ClockInfoContainer>
          <ClockInfo>Current timezone</ClockInfo>
          <ClockInfoValue>Europe/london</ClockInfoValue>
        </ClockInfoContainer>

        <ClockInfoContainer>
          <ClockInfo>day of the year</ClockInfo>
          <ClockInfoValue>296</ClockInfoValue>
        </ClockInfoContainer>

        <ClockInfoContainer>
          <ClockInfo>day of the week</ClockInfo>
          <ClockInfoValue>5</ClockInfoValue>
        </ClockInfoContainer>

        <ClockInfoContainer>
          <ClockInfo>week number</ClockInfo>
          <ClockInfoValue>42</ClockInfoValue>
        </ClockInfoContainer>
      </Container>
    </ClockInfosWrapper>
  );
};

export default ClockInfos;
