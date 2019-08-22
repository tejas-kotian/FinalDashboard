import React from "react";
import PropTypes from "prop-types";

const TotalAllocation = ({ allocation, onConfirm, onReset }) => (
  <div className="col md-12 ">
  <div className="row border rounded  border-lightgray content-color h-45">
    <div className="col-md-4 align-self-center p-1">
    <span className={"whiteBackground border " + (allocation <100?' border-danger':' border-success') }>
 {allocation} % </span> <span className="ml-3 small align-self-left font-weight-bold text-left" style={{color:"#052948"}}> Total Allocation </span>
    </div>
    <div className="col-md-1 align-self-center p-1">
      
    </div>
    <div className="col-md-2" />
    <div className="col-md-5 ml-auto">
      <button type="button" className={"mt-2 mb-2 btn btn-default text-center " + (allocation ===100?'':'disabled') }onClick={onConfirm}>Confirm</button>
      <a className="ml-2 anchor pull-right text-center" href="#" onClick={onReset}>Reset</a>
    </div>
  </div>
  </div>
);

TotalAllocation.propTypes = {
  allocation: PropTypes.number,
  onConfirm: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired
};

export default TotalAllocation;
