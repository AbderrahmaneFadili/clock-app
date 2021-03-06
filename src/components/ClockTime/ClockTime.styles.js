import styled from "styled-components";

export const ClockTimeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 10vh;
`;

export const ClockTimeGreating = styled.span`
  display: flex;
  align-items: center;
`;

export const ClockTimeGreatingIcon = styled.span`
  margin-right: 1rem;
  font-size: 1.3rem;
`;

export const ClockTimeGreatingText = styled.span`
  font-size: 1.4rem;
  text-transform: uppercase;
  font-weight: 200;
  letter-spacing: 3px;
`;

export const ClockTimeClock = styled.h1`
  font-size: 20vh;

  @media screen and (min-width: 768px) {
    font-size: 30vh;
  }
`;

export const TimeZone = styled.span`
  font-size: 1.2rem;
  font-weight: 200;
  margin-left: 1rem;
`;
