import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function toggleReducer(state = initialState.toggle, action) {
  
  switch (action.type) {
    case types.ON_TOGGLE_SUCCESS:
      
      return state.map(item =>
        item.key == action.assests.key
          ? // transform the one with a matching id
            { ...item, value: action.assests.value }
          : // otherwise return original todo
            item
      );
    default:
      return state;
  }
}

