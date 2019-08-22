import React from "react";
import PropTypes from "prop-types";


const Toggle = ({ label, leftText, rightText, onToggle, id, toggleSelected }) => {
  
  const filterItemById =(toggleSelected, id, position) => {
   let _filter = toggleSelected.filter(i => i.key === id);

   if (_filter[0].value == position) {
      return 'highlight rounded w-50'
   }
    else{
      return 'nonhighlight rounded w-50'
    }
  }
  
  return (
    
    <div className="row w-100">
      <div className="col-md-12 col-md-center">
        <div className="row">
          <div className="col-md-12 caption">{label} </div>
        </div>          
        <div className="row toggleContenr">
          <div className="col-md-12 text-center d-flex justify-content-center border">
            <span   onClick={() => onToggle(id,-1)} className={filterItemById(toggleSelected,id, -1)}>{leftText}</span> 
            <span  onClick={() => onToggle(id,1)} className={filterItemById(toggleSelected,id, 1)}>{rightText}</span>
          </div>
        </div>
      </div>
    </div>
    
  );
};

Toggle.propTypes = {
  label: PropTypes.string,
  leftText: PropTypes.string,
  rightText: PropTypes.string,
  onToggle:PropTypes.func,
  id:PropTypes.string.isRequired,
  toggleSelected:PropTypes.array.isRequired
};

export default Toggle;
