import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function assestReducer(state = initialState.assests, action) {

  switch (action.type) {
    
    case types.LOAD_ASSETS_SUCCESS:
      return action.assests;

      case types.ON_PERCENT_ENTER_SUCCESS: {
        
        return state.map(item =>
          item.id == action.assests.id
            ? // transform the one with a matching id
              { ...item, val: action.assests.val }
            : // otherwise return original todo
              item
        );
        }

        case types.RESET_ASSESTENTERED_SUCCESS:{
            return state.map(item => item.id !=null ? { ...item, val:0} : item);
        }
        
        default:
            return state;
  }
}

