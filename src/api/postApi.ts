import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { linkApiSecond } from '@/constants/general';
import { Post } from '@/models';
import { ListParamsSecond, ListResponseSecond } from '@/models/common';

export const postApi = createApi({
  reducerPath: 'postApi',
  tagTypes: ['Post'],
  keepUnusedDataFor: 10,
  baseQuery: fetchBaseQuery({ baseUrl: linkApiSecond }),
  endpoints: (builder) => ({
    getListPost: builder.query<ListResponseSecond<Post>, ListParamsSecond>({
      query: (params) => {
        return {
          url: 'posts',
          params,
        };
      },
      providesTags(result) {
        if (result) {
          const final = [
            ...result.data.map((item) => ({
              type: 'Post' as const,
              id: item._id,
            })),
            {
              type: 'Post' as const,
              id: 'LIST',
            },
          ];
          return final;
        }
        return [{ type: 'Post' as const, id: 'LIST' }];
      },
    }),
  }),
});

export const { useGetListPostQuery } = postApi;
