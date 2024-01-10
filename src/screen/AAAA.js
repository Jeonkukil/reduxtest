import React from "react";
import { connect } from "react-redux";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import { incrementCount } from "./component/action";
import BBBB from "./BBBB";
import CCCC from "./CCCC";
import DDDD from "./DDDD";

function AAAA({ count, incrementCount }) {
  return (
    <div>
      <h1>a PAGE</h1>
      <Link to="/b-page">
        <span>Go B PAGE</span>
      </Link>
      <br></br>
      <Link to="/c-page">
        <span>Go C PAGE</span>
      </Link>
      <br></br>
      <Link to="/d-page">
        <span>Go D PAGE</span>
      </Link>
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

export default connect(mapStateToProps, mapDispatchToProps)(AAAA);
