import React from "react";
import GlobalStyle from "./theme/GlobalStyle";
import styled, { ThemeProvider } from "styled-components";
import theme from "./theme/theme";

import Clock from "./components/Clock/Clock";
import ClockInfos from "./components/ClockInfos/ClockInfos";

import dayBg from "./images/day-large.jpg";
import nightBg from "./images/night-large.jpg";

//Clock Wrapper
const ClockWrapper = styled.div`
  background: ${({ amPm }) =>
      amPm === "pm" ? `url(${nightBg})` : `url(${dayBg})`}
    no-repeat center/cover;
  height: 100vh;
`;

const App = () => {
  //check if date is AM or PM
  function formatAMPM(date) {
    let hours = date.getHours();
    let ampm = hours >= 12 ? "pm" : "am";
    return ampm;
  }

  return (
    <ThemeProvider theme={theme}>
      <ClockWrapper amPm={formatAMPM(new Date())}>
        <GlobalStyle />
        <Clock amPm={formatAMPM(new Date())} />
        <ClockInfos amPm={formatAMPM(new Date())} />
      </ClockWrapper>
    </ThemeProvider>
  );
};

export default App;
