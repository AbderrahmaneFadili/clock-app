import {
  FETCH_TIME_ZONE_START,
  FETCH_TIME_ZONE_SUCCESS,
  FETCH_TIME_ZONE_FAILURE,
} from "../types/timeZone.types";

const initialState = {
  loading: false,
  timeZoneData: null,
  error: null,
};

const timeZoneReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_TIME_ZONE_START:
      return { ...state, loading: true, timeZoneData: null, error: null };

    case FETCH_TIME_ZONE_SUCCESS:
      return { ...state, loading: false, timeZoneData: payload, error: null };

    case FETCH_TIME_ZONE_FAILURE:
      return { ...state, loading: false, timeZoneData: null, error: payload };

    default:
      return state;
  }
};

export default timeZoneReducer;
