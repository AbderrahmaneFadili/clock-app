import styled from "styled-components";

export const ClockContainer = styled.div`
  height: 100vh;
  color: ${({ theme }) => theme.white};
  transition: 0.4s linear;
  height: ${({ showMore }) => (showMore ? "70vh" : "100vh")};
  position: "relative";
`;
