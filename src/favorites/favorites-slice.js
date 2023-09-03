import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    toggleFavorites: (state, { payload: favoriteItem }) => {
      if (state.some((el) => el.id === favoriteItem.id)) {
        // state = state.filter((el) => el.id !== favoriteItem.id);
        const index = state.findIndex((el) => el.id === favoriteItem.id);

        if (index !== -1) {
          state.splice(index, 1);
        }
      } else {
        state.push(favoriteItem);
        // console.log(state);
      }
    },
  },
});

export default favoritesSlice;

export const { actions, reducer } = favoritesSlice;
