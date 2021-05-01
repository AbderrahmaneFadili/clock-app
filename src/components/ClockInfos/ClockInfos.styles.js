import styled from "styled-components";

export const ClockInfosWrapper = styled.div`
  background-color: ${({ theme }) => theme.darkBg};
  color: ${({ theme }) => theme.white};
  height: 40vh;
  display: flex;
  flex-direction: column;
  padding: 4rem 0 0;
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
