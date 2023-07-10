import {   createSlice } from '@reduxjs/toolkit';
// import { fetchDataRequest, fetchDataSuccess, fetchDataFailure } from './Action.jsx';
// import axios from 'axios';
import useAxios from '../components/hooks/useAxios.jsx';
 
 export const fetchUsers = () => async (dispatch) => {
  const [axiosFetching] = useAxios();
  dispatch(fetchDataStart());
   try {
    const response = await axiosFetching.get('/users');
    dispatch(fetchDataSuccess(response.data));
  } catch (error) {
    dispatch(fetchDataFailure(error.message));
  }
};
const initialState = {
  users: [],
  loading: false,
  error: '',
};
  const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
      fetchDataStart(state) {
        state.loading = true;
        state.error = '';
      },
      fetchDataSuccess(state, action) {
        state.loading = false;
        state.data = action.payload;
        state.error = '';
      },
      fetchDataFailure(state, action) {
        state.loading = false;
        state.data = [];
        state.error = action.payload;
      },
    },
 
    
});
 
export const { fetchDataStart, fetchDataSuccess, fetchDataFailure } = userSlice.actions;
export default userSlice.reducer;