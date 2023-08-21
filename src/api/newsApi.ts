import { linkApi } from '@/constants/general';
import { News } from '@/models';
import { ListParams, ListResponse } from '@/models/common';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const newsApi = createApi({
  reducerPath: 'newsApi',
  tagTypes: ['News'],
  keepUnusedDataFor: 10,
  baseQuery: fetchBaseQuery({ baseUrl: linkApi }),
  endpoints: (builder) => ({
    getAllNews: builder.query<ListResponse<News>, ListParams>({
      query: (params) => {
        return {
          url: 'posts',
          params: {
            isNewest: false,
            isEvent: false,
            ...params,
          },
        };
      },
      providesTags(result) {
        if (result) {
          const final = [
            ...result.data.map((item) => ({
              type: 'News' as const,
              id: item.id,
            })),
            {
              type: 'News' as const,
              id: 'LIST',
            },
          ];
          return final;
        }
        return [{ type: 'News' as const, id: 'LIST' }];
      },
    }),
    getNewestList: builder.query<ListResponse<News>, ListParams>({
      query: (params) => {
        return {
          url: 'posts',
          params: {
            isNewest: true,
            isEvent: false,
            ...params,
          },
        };
      },
    }),
    getNewsEventList: builder.query<ListResponse<News>, ListParams>({
      query: (params) => {
        return {
          url: 'posts',
          params: {
            isNewest: false,
            isEvent: true,
            ...params,
          },
        };
      },
    }),
    getSingleNews: builder.query<News[], string>({
      query: (slug) => {
        return {
          url: 'posts',
          params: {
            slug,
          },
        };
      },
    }),
    getNewsWithCategory: builder.query<News[], string>({
      query: (category) => {
        return {
          url: 'posts',
          params: {
            isNewest: false,
            isEvent: false,
            category: category,
          },
        };
      },
    }),
  }),
});

export const {
  useGetAllNewsQuery,
  useGetNewestListQuery,
  useGetSingleNewsQuery,
  useGetNewsWithCategoryQuery,
  useGetNewsEventListQuery,
} = newsApi;
