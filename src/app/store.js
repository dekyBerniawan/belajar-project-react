import { configureStore } from '@reduxjs/toolkit';
import bestFoodReducer from '../features/bestFood/bestFoodSlice';
import burgerReducer from '../features/burger/burgerSlice';

export const store = configureStore({
  reducer: {
    bestFood: bestFoodReducer,
    burger: burgerReducer,
  },
});
