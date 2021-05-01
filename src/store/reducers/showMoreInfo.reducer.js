import { TOGGLE_SHOW_MORE } from "../types/showMoreInfo.types";

const initialState = {
  showMore: false,
};

const showMoreInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_SHOW_MORE:
      return {
        ...state,
        showMore: !state.showMore,
      };

    default:
      return state;
  }
};

export default showMoreInfoReducer;
