import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import showMoreInfoReducer from "./reducers/showMoreInfo.reducer";
import quoteReducer from "./reducers/quotes.reducer";
import timeZoneReducer from "./reducers/timeZone.reducer";

const rootReducer = combineReducers({
  showMoreInfoReducer,
  quoteReducer,
  timeZoneReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
