import {   createSlice } from '@reduxjs/toolkit';
import useAxios from '../components/hooks/useAxios.jsx';
 
 export const fetchTreatments = () => async (dispatch) => {
  const [axiosFetching] = useAxios();
  dispatch(fetchDataStart());
   try {
    const response = await axiosFetching.get('/treatments');
    dispatch(fetchDataSuccess(response.data));
  } catch (error) {
    dispatch(fetchDataFailure(error.message));
  }
};

const initialState = {
  treatments: [],
  loading: false,
  error: '',
};
  const treatmentSlice = createSlice({
    name: 'treatments',
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
 
export const { fetchDataStart, fetchDataSuccess, fetchDataFailure } = treatmentSlice.actions;
export default treatmentSlice.reducer;