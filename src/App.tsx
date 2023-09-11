import { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';

import './App.scss';
import { useHandleFetchMeMutation, useHandleRefreshTokenMutation } from './api/authApi';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { routerBrowser } from './constants/routerBrowser';
import { authAction, selectCurrentUser } from './features/auth/authSlice';
import { getToken, saveToken } from './utils/auth';

function App() {
  const currentUser = useAppSelector(selectCurrentUser);
  const [handleFetchMe, { data: newUser }] = useHandleFetchMeMutation();
  const [handleRefreshToken, { data: newTokens }] = useHandleRefreshTokenMutation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (currentUser) {
      dispatch(authAction.setCurrentUser(currentUser));
    } else {
      const { refreshToken } = getToken();
      if (refreshToken) {
        handleRefreshToken(refreshToken);
      }
    }
  }, [currentUser]);

  useEffect(() => {
    if (newTokens) {
      handleFetchMe(newTokens.accessToken);
      saveToken(newTokens.accessToken, newTokens.refreshToken);
    }
  }, [newTokens]);

  useEffect(() => {
    if (newUser && newUser.username) {
      dispatch(authAction.setCurrentUser(newUser));
    }
  }, [newUser]);

  return <RouterProvider router={routerBrowser} />;
}

export default App;
