import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { linkApiSecond } from '@/constants/general';
import { Post, ResponseSuccess } from '@/models';
import { ListParamsSecond, ListResponseSecond } from '@/models/common';

export const postApi = createApi({
  reducerPath: 'postApi',
  tagTypes: ['Post'],
  keepUnusedDataFor: 10,
  refetchOnMountOrArgChange: true,
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
    getSinglePost: builder.query<Post, string>({
      query: (id) => {
        return {
          url: `posts/${id}`,
        };
      },
    }),
    createPost: builder.mutation<ResponseSuccess<Post>, Post>({
      query: (data) => {
        return {
          url: 'posts',
          method: 'POST',
          body: data,
        };
      },
    }),
    updatePost: builder.mutation<ResponseSuccess<Post>, Post>({
      query: (data) => {
        return {
          url: `posts/${data._id}`,
          method: 'PUT',
          body: data,
        };
      },
    }),
    deletePost: builder.mutation<ResponseSuccess<Post>, string>({
      query: (id) => {
        return {
          url: `posts/${id}`,
          method: 'DELETE',
        };
      },
    }),
    deleteListPost: builder.mutation<ResponseSuccess<string>, string[]>({
      query: (listId) => {
        return {
          url: 'posts',
          method: 'DELETE',
          body: {
            listId,
          },
        };
      },
    }),
  }),
});

export const {
  useGetListPostQuery,
  useLazyGetSinglePostQuery,
  useCreatePostMutation,
  useUpdatePostMutation,
  useDeletePostMutation,
  useDeleteListPostMutation,
} = postApi;