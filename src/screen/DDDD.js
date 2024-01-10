import React from "react";
import { connect } from "react-redux";
import { incrementCount } from "./component/action";

function DDDD({ count, incrementCount }) {
  return (
    <div>
      <h1>D PAGE</h1>
      <div>
        <br></br>
        <button onClick={incrementCount}>카운트!</button>
        <span>{count}</span>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { count: state.count };
};

const mapDispatchToProps = {
  incrementCount,
};

export default connect(mapStateToProps, mapDispatchToProps)(DDDD);
