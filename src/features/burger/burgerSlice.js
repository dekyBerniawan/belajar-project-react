import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getBurgers = createAsyncThunk('burger/getBurgers', async () => {
  const res = await axios.get(
    'https://free-food-menus-api-two.vercel.app/burgers'
  );
  return res.data;
});

const burgerSlice = createSlice({
  name: 'burger',
  initialState: {
    data: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBurgers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getBurgers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(getBurgers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default burgerSlice.reducer;
