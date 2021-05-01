import React from "react";
import { QuoteAuthor, QuoteText, QuoteWrapper, Refresh } from "./Quote.styles";

const Quote = () => {
  return (
    <QuoteWrapper>
      <QuoteText>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta officia
        beatae deleniti quaerat veritatis nemo dolorem repudiandae unde
        excepturi, in dolor minus.
      </QuoteText>
      <QuoteAuthor>John Doe</QuoteAuthor>
      <Refresh />
    </QuoteWrapper>
  );
};

export default Quote;
