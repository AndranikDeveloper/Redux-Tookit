import { createSlice } from '@reduxjs/toolkit';
import { getUserById } from './user.actions';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    isLoading: false,
    users: {},
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUserById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUserById.fulfilled, (state, action) => {
        console.log(action.payload);
        state.isLoading = false;
        state.users = action.payload;
      })
      .addCase(getUserById.rejected, (state, action) => {
        state.isLoading = false;
        state.users = {};
        state.error = action.payload.error;
      });
  },
});

// export const { actions, reducer } = userSlice;
