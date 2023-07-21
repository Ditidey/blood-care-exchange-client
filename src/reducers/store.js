import { configureStore } from '@reduxjs/toolkit';
import usersReduce from './usersReduce';
import doctorsReducer from './doctorsReducer';
import bloodReducer from './bloodReducer';
import treatmentReducers from './treatmentReducers';
 
const store = configureStore({
   
  reducer: {
    users: usersReduce,
    doctors: doctorsReducer,
    bloods: bloodReducer,
    treatments: treatmentReducers
  }
});

 
export default store;