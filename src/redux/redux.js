import { act } from "react-dom/test-utils";
import { legacy_createStore as createStore } from "redux";

import { combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";

const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

const UPDATE_USER = "UPDATE_USER";
const DELETE_USER = "DELETE_USER";

/// 리듀서
/// 애플리캐이션의 상태를 변경하는 함수.
/// 주어진 현재 State와 action을 받아 새로운 상태를 반환한다.

const initialUserState = {
  loading: false,
  users: [],
  error: "",
};

function userReducer(state = initialUserState, action) {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return { ...state, loading: true };
    case FETCH_USERS_SUCCESS:
      return { loading: false, users: action.payload, error: "" };
    case FETCH_USERS_FAILURE:
      return { loading: false, users: [], error: action.payload };

    case UPDATE_USER:
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.payload.userId
            ? {
                ...user,
                ...action.payload.updatedData,
              }
            : user
        ),
      };

    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload),
      };
    default:
      return state;
  }
}

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

/// 리듀서의 하나의 리듀서로 통합해서 관리.

const rootReducer = combineReducers({
  users: userReducer,
  count: countReducer,
  items: itemsReducer,
});
/// 애플리캐이션 상태를 저장하는 객채

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
