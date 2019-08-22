import * as types from "./actionTypes";
import * as assestApi from "../../api/assestApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function loadAssestSuccess(assests) {
  
  return { type: types.LOAD_ASSETS_SUCCESS, assests };
}

export function setSelectedToggleSuccess(assests) {
  return { type: types.ON_TOGGLE_SUCCESS, assests };
}

export function  onPercentEnterSuccess(assests) {
   return { type: types.ON_PERCENT_ENTER_SUCCESS, assests };
}

export function resetAssestEnteredSuccess() {
  return { type: types.RESET_ASSESTENTERED_SUCCESS };
}

export function loadAssest() {
  return function(dispatch) {
    dispatch(beginApiCall());
    return assestApi
      .getAssests()
      .then(assests => {
        dispatch(loadAssestSuccess(assests));
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}


export function setSelectedToggle(toggleID,isSelected) {
  
    return function(dispatch) {
       dispatch(setSelectedToggleSuccess({key:toggleID,value:isSelected}))
    }
}

export function onPercentEnter(id,val){
    return function(dispatch) {
       dispatch(onPercentEnterSuccess({id,val}))
    }
}

export function resetAssestEntered(){
   return function(dispatch) {
    dispatch(resetAssestEnteredSuccess())
   }
}
