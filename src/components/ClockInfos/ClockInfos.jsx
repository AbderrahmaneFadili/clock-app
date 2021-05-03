import React, { useEffect } from "react";
import {
  ClockInfosWrapper,
  ClockInfoContainer,
  ClockInfo,
  ClockInfoValue,
  Column,
} from "./ClockInfos.styles";

import { Container } from "../../theme/GlobalStyle";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { fetchTimeZone } from "../../store/actions/timeZone.actions";

const ClockInfos = ({ amPm }) => {
  const showMore = useSelector((state) => {
    return state.showMoreInfoReducer.showMore;
  });

  const { timeZoneData } = useSelector((state) => state.timeZoneReducer);

  const dispatch = useDispatch();

  const dayOftheWeek = moment(new Date()).day();
  const weekNumber = moment(new Date()).week();
  const dayOfYear = moment(new Date()).dayOfYear();

  useEffect(() => {
    dispatch(fetchTimeZone());
  }, []);
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
          <ClockInfoContainer>
            <ClockInfo>Current timezone</ClockInfo>
            {timeZoneData && (
              <ClockInfoValue>{timeZoneData.timeZone}</ClockInfoValue>
            )}
          </ClockInfoContainer>

          <ClockInfoContainer>
            <ClockInfo>day of the year</ClockInfo>
            <ClockInfoValue>{dayOfYear}</ClockInfoValue>
          </ClockInfoContainer>
        </Column>

        <Column>
          <ClockInfoContainer>
            <ClockInfo>day of the week</ClockInfo>
            <ClockInfoValue>{dayOftheWeek}</ClockInfoValue>
          </ClockInfoContainer>
          <ClockInfoContainer>
            <ClockInfo>week number</ClockInfo>
            <ClockInfoValue>{weekNumber}</ClockInfoValue>
          </ClockInfoContainer>
        </Column>
      </Container>
    </ClockInfosWrapper>
  );
};

export default ClockInfos;
