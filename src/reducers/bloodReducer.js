import {   createSlice } from '@reduxjs/toolkit';
import useAxios from '../components/hooks/useAxios';
 
 
 export const fetchBloods = () => async (dispatch) => {
  const [axiosFetching] = useAxios();
  dispatch(fetchDataStart());
   try {
    const response = await axiosFetching.get('/blood-posts');
    dispatch(fetchDataSuccess(response.data));
  } catch (error) {
    dispatch(fetchDataFailure(error.message));
  }
};
const initialState = {
  bloods: [],
  loading: false,
  error: '',
};
  const bloodSlice = createSlice({
    name: 'bloods',
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
 
export const { fetchDataStart, fetchDataSuccess, fetchDataFailure } = bloodSlice.actions;
export default bloodSlice.reducer;