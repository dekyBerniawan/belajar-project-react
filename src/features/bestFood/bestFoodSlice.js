import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getBestFoods = createAsyncThunk(
  'bestFoods/getBestFoods',
  async () => {
    const res = await axios.get(
      'https://free-food-menus-api-two.vercel.app/best-foods'
    );
    // console.log(res);
    return res.data;
  }
);

const bestFoodSlice = createSlice({
  name: 'bestFood',
  initialState: {
    data: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBestFoods.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getBestFoods.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(getBestFoods.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default bestFoodSlice.reducer;
