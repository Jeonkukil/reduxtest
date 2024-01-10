import { legacy_createStore as createStore } from "redux";

import { combineReducers } from "redux";

function countReducer(state = 0, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
}

function itemsReducer(state = [], action) {
  switch (action.type) {
    case "ADD_ITEM":
      return [...state, action.payload];
    case "REMOVE_ITEM":
      return state.filter((item, index) => index !== action.payload);
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  count: countReducer,
  items: itemsReducer,
});

const store = createStore(rootReducer);

export default store;
