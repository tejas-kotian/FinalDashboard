import React from "react";
import PropTypes from "prop-types";
import PieChart from "../common/PieChart";




const Dashboard = ({pieItems}) => (


  <div className="card ml-4">
    <div className="card-body">
  <PieChart data={pieItems} />
  </div>
  </div>
  
  );


Dashboard.propTypes = {
  pieItems:PropTypes.array
};

export default Dashboard;
