import React from "react";
import PropTypes from "prop-types";


const StrategyList = ({ strategies, onPercentEnter}) => {

  return  (
  <table className="table table-bordered mt-3 small">
    <thead className="content-color">
      <tr>
        <td className="font-weight-bold text-center">Index Crediting Strategies</td>
        <td colSpan={2} className="text-center">1 Year P2P</td>
      </tr>
    </thead>
    <tbody>
      {strategies.map(strategy => {
        return (
          <tr key={strategy.id}>
            <td>{strategy.name}</td>
            <td><span className="font-weight-bold text-align-center">{strategy.options[0].value}% <span className="text-align-center fontGreyColor">Cap</span></span></td>
            <td><span className="percentInput"><  input type="number" name={strategy.name} id={strategy.id}  value={strategy.val||''}  onChange={onPercentEnter} ></input><span>%</span></span></td>
          </tr>
        );
      })}
    </tbody>
  </table>
);
    }

StrategyList.propTypes = {
  strategies: PropTypes.array.isRequired,
  onPercentEnter: PropTypes.func.isRequired
};

export default StrategyList;
