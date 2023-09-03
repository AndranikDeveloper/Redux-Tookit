import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { actions } from '../favorites/favorites-slice';
import { bindActionCreators } from '@reduxjs/toolkit';
import * as userActions from '../user/user.actions';

const rootActions = {
  ...actions,
  ...userActions,
};

const useActions = () => {
  const dispatch = useDispatch();

  return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch]);
};

export default useActions;
