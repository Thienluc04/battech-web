import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { linkAuth } from '@/constants/general';
import { AuthLogin, TokensResponse, User } from '@/models';

export const authApi = createApi({
  reducerPath: 'authApi',
  tagTypes: ['Auth'],
  keepUnusedDataFor: 10,
  baseQuery: fetchBaseQuery({ baseUrl: linkAuth }),
  endpoints: (builder) => ({
    handleLogin: builder.mutation<TokensResponse, AuthLogin>({
      query: (data) => {
        return {
          url: 'login',
          method: 'POST',
          body: data,
        };
      },
    }),
    handleFetchMe: builder.mutation<User, string>({
      query: (token) => {
        return {
          url: 'me',
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        };
      },
    }),
    handleRefreshToken: builder.mutation<TokensResponse, string>({
      query: (refreshToken) => {
        return {
          url: 'token',
          method: 'POST',
          body: {
            refreshToken,
          },
        };
      },
    }),
  }),
});

export const { useHandleLoginMutation, useHandleFetchMeMutation, useHandleRefreshTokenMutation } =
  authApi;
