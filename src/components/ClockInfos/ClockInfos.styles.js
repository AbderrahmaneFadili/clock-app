import styled from "styled-components";

export const ClockInfosWrapper = styled.div`
  background-color: ${({ amPm, theme }) =>
    amPm === "am" ? theme.lightGrayBg : theme.darkBg};
  color: ${({ amPm, theme }) => (amPm === "am" ? theme.dark : theme.white)};
  height: ${({ showMore }) => (showMore ? "30vh" : "0")};
  overflow: hidden;
  transition: 0.4s linear;
`;

export const ClockInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 900px) {
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 1rem;
  }
`;

export const ClockInfo = styled.span`
  font-size: 0.888rem;
  font-weight: 200;
  text-transform: uppercase;
  word-spacing: 4px;
  letter-spacing: 2px;
`;

export const ClockInfoValue = styled.span`
  font-size: 1.4rem;
  font-weight: 600;
`;

export const Column = styled.div`
  width: 100%;

  @media screen and (min-width: 900px) {
    width: 50%;
  }
`;
