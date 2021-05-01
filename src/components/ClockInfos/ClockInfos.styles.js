import styled from "styled-components";

export const ClockInfosWrapper = styled.div`
  background-color: ${({ theme }) => theme.darkBg};
  color: ${({ theme }) => theme.white};
  height: ${({ showMore }) => (showMore ? "40vh" : "0")};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: 0.4s linear;
`;

export const ClockInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
