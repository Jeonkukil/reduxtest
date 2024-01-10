import React, { useState } from "react";
import { connect } from "react-redux";
import {
  incrementCount,
  decrementCount,
  addItem,
  removeItem,
} from "./component/action";
import { useInputHandler } from "./component/UserInputHandler";

function BBBB({
  count,
  incrementCount,
  items,
  decrementCount,
  addItem,
  removeItem,
}) {
  const { input, setInput, handleAddItem } = useInputHandler(addItem);

  const handleRemoveItem = (index) => {
    removeItem(index);
  };

  return (
    <div>
      <h1>B PAGE</h1>
      <div>
        <br></br>
        <button onClick={incrementCount}>카운트증가!</button>
        <button onClick={decrementCount}>카운트감소!</button>
        <span>{count}</span>
      </div>
      <br></br>
      <div>
        <input value={input} onChange={(e) => setInput(e.target.value)}></input>
        <button onClick={handleAddItem} disabled={!input.trim()}>
          입력
        </button>
      </div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {" "}
            {item} <button onClick={() => handleRemoveItem(index)}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { count: state.count, items: state.items };
};

const mapDispatchToProps = {
  incrementCount,
  decrementCount,
  addItem,
  removeItem,
};

export default connect(mapStateToProps, mapDispatchToProps)(BBBB);
