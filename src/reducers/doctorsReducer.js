import {   createSlice } from '@reduxjs/toolkit';
import useAxios from '../components/hooks/useAxios.jsx';
 
 export const fetchUsers = () => async (dispatch) => {
  const [axiosFetching] = useAxios();
  dispatch(fetchDataStart());
   try {
    const response = await axiosFetching.get('/doctors');
    dispatch(fetchDataSuccess(response.data));
  } catch (error) {
    dispatch(fetchDataFailure(error.message));
  }
};

const initialState = {
  doctors: [],
  loading: false,
  error: '',
};
  const doctorSlice = createSlice({
    name: 'doctors',
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
 
export const { fetchDataStart, fetchDataSuccess, fetchDataFailure } = doctorSlice.actions;
export default doctorSlice.reducer;