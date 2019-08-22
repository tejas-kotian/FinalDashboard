import React from "react";
import PropTypes from "prop-types";
import LogoComponent from "../assestdashboard/LogoComponent";

const DashboardItem = ({ assestsEntered, handleSubmit, allocation }) => (
  
  <div>
   <div className="small">
   
    {allocation > 0 ?
      assestsEntered.map(assests => {
        return (
          <div
            key={assests.id}
            className={"fixed-width-275 rounded mt-3 mb-3 bg-white stuff-" + assests.id}
          >
            <span className="ml-1 text-left">{assests.name}</span>
            <span className="mr-2 percentage-font-color float-right">{assests.val}%</span>
          </div>
        );
      }) : <LogoComponent></LogoComponent>
    }
    <>
      {allocation > 0 && (
        <button
          type="button"
          onClick={handleSubmit}
          className={
            "btn btn-default h-10 w-75 ml-4 pull-bottom " +
            (allocation === 100 ? "" : "disabled")
          }
        >
          SUBMIT
        </button>
      )}
    </>
    </div>
  </div>
);

DashboardItem.propTypes = {
  assestsEntered: PropTypes.array.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  allocation: PropTypes.number
};

export default DashboardItem;
