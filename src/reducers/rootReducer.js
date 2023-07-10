import { combineReducers } from "redux";
import dataReducer from "./Reduce";


const rootReducer = combineReducers({
     
    users: dataReducer,
    
     
  });
 
  export default rootReducer;