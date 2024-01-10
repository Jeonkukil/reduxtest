import React, { useState } from "react";
import { connect } from "react-redux";
import { incrementCount, decrementCount, addItem } from "./component/action";

function CCCC({ count, items, incrementCount, decrementCount, addItem }) {
  const [input, setInput] = useState("");

  const handleAddItem = () => {
    addItem(input);
    setInput("");
  };
  return (
    <div>
      <h1>C PAGE</h1>
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
          <li key={index}> {item}</li>
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
};

export default connect(mapStateToProps, mapDispatchToProps)(CCCC);
