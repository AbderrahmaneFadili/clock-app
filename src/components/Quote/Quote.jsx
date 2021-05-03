import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { QuoteAuthor, QuoteText, QuoteWrapper, Refresh } from "./Quote.styles";
import { fetchQuote } from "../../store/actions/quotes.actions";

const Quote = () => {
  const { quote } = useSelector((state) => state.quoteReducer);

  const showMore = useSelector((state) => {
    return state.showMoreInfoReducer.showMore;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchQuote());
  }, []);

  const handleRefresh = () => {
    dispatch(fetchQuote());
  };
  return (
    <QuoteWrapper showMore={showMore}>
      {quote && <QuoteText> {quote.content}</QuoteText>}
      <QuoteAuthor>{quote && quote.author}</QuoteAuthor>
      <Refresh
        onClick={() => {
          handleRefresh();
        }}
      />
    </QuoteWrapper>
  );
};

export default Quote;
