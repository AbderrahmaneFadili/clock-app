import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import showMoreInfoReducer from "./reducers/showMoreInfo.reducer";

const rootReducer = combineReducers({
  showMoreInfoReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
