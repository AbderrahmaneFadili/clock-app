import {
  FETCH_QUOTE_START,
  FETCH_QUOTE_SUCCESS,
  FETCH_QUOTE_FAILURE,
} from "../types/quotes.types";

const initialState = {
  loading: false,
  quote: null,
  error: null,
};

const quoteReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_QUOTE_START:
      return {
        ...state,
        loading: true,
        quote: null,
        error: null,
      };

    case FETCH_QUOTE_SUCCESS:
      return {
        ...state,
        loading: false,
        quote: payload,
        error: null,
      };

    case FETCH_QUOTE_FAILURE:
      return {
        ...state,
        loading: false,
        quote: null,
        error: payload,
      };

    default:
      return state;
  }
};

export default quoteReducer;
