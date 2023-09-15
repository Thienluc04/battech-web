import { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';

import './App.scss';
import { useHandleFetchMeMutation, useHandleRefreshTokenMutation } from './api/authApi';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { routerBrowser } from './constants/routerBrowser';
import { authAction, selectCurrentUser } from './features/auth/authSlice';
import { getSession, getToken, saveSession, saveToken } from './utils/auth';

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
      const { refreshToken: refreshTokenSession } = getSession();
      if (refreshToken) {
        handleRefreshToken(refreshToken);
      }
      if (refreshTokenSession) {
        handleRefreshToken(refreshTokenSession);
      }
    }
  }, [currentUser]);

  useEffect(() => {
    if (newTokens) {
      handleFetchMe(newTokens.accessToken);
      const { refreshToken: refreshTokenSession } = getSession();
      if (!refreshTokenSession) {
        saveToken(newTokens.accessToken, newTokens.refreshToken);
      } else {
        saveSession(newTokens.accessToken, newTokens.refreshToken);
      }
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
