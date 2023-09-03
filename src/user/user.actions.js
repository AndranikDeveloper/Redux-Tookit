import { createAsyncThunk } from '@reduxjs/toolkit';

const fetchUserById = (userId) => {
  return new Promise((res) =>
    setTimeout(() => res({ id: userId, name: 'Ando' }), 1000)
  );
};

export const getUserById = createAsyncThunk(
  'user/fetchUserById',
  async (userId, thunkApi) => {
    try {
      const response = await fetchUserById(userId);
      return response;
    } catch (e) {
      thunkApi.rejectWithValue(e);
    }
  }
);
