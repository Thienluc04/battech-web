import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { linkApiSecond } from '@/constants/general';
import { ListParamsSecond, ResponseSuccess, Tag } from '@/models';

export const tagApi = createApi({
  reducerPath: 'TagApi',
  tagTypes: ['Tag'],
  keepUnusedDataFor: 10,
  refetchOnMountOrArgChange: true,
  baseQuery: fetchBaseQuery({ baseUrl: linkApiSecond }),
  endpoints: (builder) => ({
    getListTag: builder.query({
      query: (params: ListParamsSecond) => {
        return {
          url: 'tags',
          params,
        };
      },
      providesTags(result) {
        if (result?.data) {
          const final = [
            ...result.data.map((item: Tag) => ({
              type: 'Tag' as const,
              id: item._id,
            })),
            {
              type: 'Tag' as const,
              id: 'LIST',
            },
          ];
          return final;
        }
        return [{ type: 'Tag' as const, id: 'LIST' }];
      },
    }),
    getSingleTag: builder.query<Tag, string>({
      query: (id) => {
        return {
          url: `tags/${id}`,
        };
      },
    }),
    createTag: builder.mutation<ResponseSuccess<Tag>, Tag>({
      query: (data) => {
        return {
          url: 'tags',
          method: 'POST',
          body: data,
        };
      },
    }),
    updateTag: builder.mutation<ResponseSuccess<Tag>, Tag>({
      query: (data) => {
        return {
          url: `tags/${data._id}`,
          method: 'PUT',
          body: data,
        };
      },
    }),
    deleteTag: builder.mutation<ResponseSuccess<Tag>, string>({
      query: (id) => {
        return {
          url: `tags/${id}`,
          method: 'DELETE',
        };
      },
    }),
    deleteListTag: builder.mutation<ResponseSuccess<string>, string[]>({
      query: (listId) => {
        return {
          url: 'tags',
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
  useLazyGetListTagQuery,
  useLazyGetSingleTagQuery,
  useCreateTagMutation,
  useUpdateTagMutation,
  useDeleteTagMutation,
  useDeleteListTagMutation,
} = tagApi;
