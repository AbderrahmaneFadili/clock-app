import {
  FETCH_QUOTE_START,
  FETCH_QUOTE_SUCCESS,
  FETCH_QUOTE_FAILURE,
} from "../types/quotes.types";

export const fetchQuoteStart = () => ({
  type: FETCH_QUOTE_START,
});

export const fetchQuoteSuccess = (payload) => ({
  type: FETCH_QUOTE_SUCCESS,
  payload,
});

export const fetchQuoteFailure = (payload) => ({
  type: FETCH_QUOTE_FAILURE,
  payload,
});

export const fetchQuote = () => (dispatch) => {
  dispatch(fetchQuoteStart());
  fetch(`http://api.quotable.io/random`)
    .then((resp) => resp.json())
    .then((quote) => dispatch(fetchQuoteSuccess(quote)))
    .catch((error) => dispatch(fetchQuoteFailure(error)));
};
