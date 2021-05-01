import React from "react";
import { useSelector } from "react-redux";
import { QuoteAuthor, QuoteText, QuoteWrapper, Refresh } from "./Quote.styles";

const Quote = () => {
  const showMore = useSelector((state) => {
    return state.showMoreInfoReducer.showMore;
  });

  return (
    <QuoteWrapper showMore={showMore}>
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
