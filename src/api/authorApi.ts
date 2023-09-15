import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { linkApiSecond } from '@/constants/general';
import { Author, ResponseSuccess } from '@/models';

export const authorApi = createApi({
  reducerPath: 'AuthorApi',
  tagTypes: ['Author'],
  keepUnusedDataFor: 10,
  refetchOnMountOrArgChange: true,
  baseQuery: fetchBaseQuery({ baseUrl: linkApiSecond }),
  endpoints: (builder) => ({
    getListAuthor: builder.query({
      query: (params) => {
        return {
          url: 'authors',
          params,
        };
      },
      providesTags(result) {
        if (result.data) {
          const final = [
            ...result.data.map((item: Author) => ({
              type: 'Author' as const,
              id: item._id,
            })),
            {
              type: 'Author' as const,
              id: 'LIST',
            },
          ];
          return final;
        }
        return [{ type: 'Author' as const, id: 'LIST' }];
      },
    }),
    getSingleAuthor: builder.query<Author, string>({
      query: (id) => {
        return {
          url: `authors/${id}`,
        };
      },
    }),
    createAuthor: builder.mutation<ResponseSuccess<Author>, Author>({
      query: (data) => {
        return {
          url: 'authors',
          method: 'POST',
          body: data,
        };
      },
    }),
    updateAuthor: builder.mutation<ResponseSuccess<Author>, Author>({
      query: (data) => {
        return {
          url: `authors/${data._id}`,
          method: 'PUT',
          body: data,
        };
      },
    }),
    deleteAuthor: builder.mutation<ResponseSuccess<Author>, string>({
      query: (id) => {
        return {
          url: `authors/${id}`,
          method: 'DELETE',
        };
      },
    }),
    deleteListAuthor: builder.mutation<ResponseSuccess<string>, string[]>({
      query: (listId) => {
        return {
          url: 'authors',
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
  useGetListAuthorQuery,
  useLazyGetSingleAuthorQuery,
  useCreateAuthorMutation,
  useUpdateAuthorMutation,
  useDeleteAuthorMutation,
  useDeleteListAuthorMutation,
} = authorApi;
