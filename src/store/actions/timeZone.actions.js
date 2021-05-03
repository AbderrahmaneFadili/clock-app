import {
  FETCH_TIME_ZONE_START,
  FETCH_TIME_ZONE_SUCCESS,
  FETCH_TIME_ZONE_FAILURE,
} from "../types/timeZone.types";

import key from "../../api/key";

export const fetchTimeZoneStart = () => ({
  type: FETCH_TIME_ZONE_START,
});

export const fetchTimeZoneSuccess = (payload) => ({
  type: FETCH_TIME_ZONE_SUCCESS,
  payload,
});

export const fetchTimeZoneFailure = (payload) => ({
  type: FETCH_TIME_ZONE_FAILURE,
  payload,
});

export const fetchTimeZone = () => (dispatch) => {
  dispatch(fetchTimeZoneStart());
  fetch("https://geo-finder.p.rapidapi.com/ip", {
    method: "GET",
    headers: {
      "x-rapidapi-key": key,
      "x-rapidapi-host": "geo-finder.p.rapidapi.com",
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      dispatch(
        fetchTimeZoneSuccess({
          timeZone: data.time_zone.id,
          currentTime: data.current_time,
        }),
      );
    })
    .catch((error) => dispatch(fetchTimeZoneFailure(error)));
};
