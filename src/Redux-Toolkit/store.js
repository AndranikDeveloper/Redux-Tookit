import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { reducer as favoriteReducer } from '../favorites/favorites-slice';
import { userSlice } from '../user/user.slice';

const rootReducer = combineReducers({
  favorites: favoriteReducer,
  user: userSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
