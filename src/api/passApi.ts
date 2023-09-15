import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { linkApiPass } from '@/constants/general';
import { CheckCode, ResponseSuccess } from '@/models';

export const passApi = createApi({
  reducerPath: 'passApi',
  tagTypes: ['Pass'],
  keepUnusedDataFor: 10,
  baseQuery: fetchBaseQuery({ baseUrl: linkApiPass }),
  endpoints: (builder) => ({
    forgotPass: builder.mutation<ResponseSuccess<string>, string>({
      query: (email) => {
        return {
          url: 'check-email',
          method: 'POST',
          body: {
            email,
          },
        };
      },
    }),
    forgotPassCheck: builder.mutation<ResponseSuccess<string>, CheckCode>({
      query: (data) => {
        return {
          url: 'check-code',
          method: 'POST',
          body: data,
        };
      },
    }),
  }),
});

export const { useForgotPassMutation, useForgotPassCheckMutation } = passApi;
