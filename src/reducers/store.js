import { configureStore } from '@reduxjs/toolkit';
import usersReduce from './usersReduce';
// import usersReduce from './usersReduce';
// import usersReduce from './usersReduce';
// import rootReducer from './rootReducer';
// const {users} = usersReduce()
const store = configureStore({
  // reducer: users,
  reducer: {
    users: usersReduce
  }
});

// module.exports = store
export default store;