import React from "react";

export const incrementCount = () => {
  return {
    type: "INCREMENT",
  };
};

export const decrementCount = () => {
  return {
    type: "DECREMENT",
  };
};

export const addItem = (item) => {
  return {
    type: "ADD_ITEM",
    payload: item,
  };
};

export const removeItem = (index) => {
  return {
    type: "REMOVE_ITEM",
    payload: index,
  };
};
