import { combineReducers } from "redux";
import assests from './assestReducer';
import toggle from './toggleReducer';

const rootReducer = combineReducers({
  assests,toggle
});

export default rootReducer;
