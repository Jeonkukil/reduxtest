import React from "react";
import axios from "axios";

/// 액션 생성자
/// 상태를 변경하기 위해 리덕스 스토어(저장소)에 전달되는 객체
/// 애플리케이션의 다른 부분에서 호출되어 , 생성된 액션 객체를 리덕스 스토어로 보낸다.

const DATA_INCREMENT = "INCREMENT";
const DATA_DECREMENT = "DECREMENT";
const DATA_ADD_ITEM = "ADD_ITEM";
const DATA_REMOVE_ITEM = "REMOVE_ITEM";

const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

const UPDATE_USER = "UPDATE_USER";
const DELETE_USER = "DELETE_USER";

const API_URL = "https://jsonplaceholder.typicode.com";

export const updateUser = (userId, updatedData) => ({
  type: UPDATE_USER,
  payload: { userId, updatedData },
});

export const deleteUser = (userId) => ({
  type: DELETE_USER,
  payload: userId,
});

const fetchUsersRequest = () => ({ type: FETCH_USERS_REQUEST });
const fetchUsersSuccess = (users) => ({
  type: FETCH_USERS_SUCCESS,
  payload: users,
});
const fetchUsersFailure = (error) => ({
  type: FETCH_USERS_FAILURE,
  payload: error,
});

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUsersRequest());
    axios
      .get(API_URL + "/users")
      .then((response) => {
        dispatch(fetchUsersSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchUsersFailure(error.message));
      });
  };
};

export const incrementCount = () => {
  return {
    type: DATA_INCREMENT,
  };
};

export const decrementCount = () => {
  return {
    type: DATA_DECREMENT,
  };
};

export const addItem = (item) => {
  return {
    type: DATA_ADD_ITEM,
    payload: item,
  };
};

export const removeItem = (index) => {
  return {
    type: DATA_REMOVE_ITEM,
    payload: index,
  };
};
