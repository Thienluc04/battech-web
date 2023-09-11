import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { linkApiSecond } from '@/constants/general';
import { ResponseSuccess, Topic } from '@/models';
import { ListParamsSecond, ListResponseSecond } from '@/models/common';

export const topicApi = createApi({
  reducerPath: 'topicApi',
  tagTypes: ['Topic'],
  keepUnusedDataFor: 10,
  refetchOnMountOrArgChange: true,
  baseQuery: fetchBaseQuery({ baseUrl: linkApiSecond }),
  endpoints: (builder) => ({
    getListTopic: builder.query<ListResponseSecond<Topic>, ListParamsSecond>({
      query: (params) => {
        return {
          url: 'topics',
          params,
        };
      },
      providesTags(result) {
        if (result) {
          const final = [
            ...result.data.map((item) => ({
              type: 'Topic' as const,
              id: item._id,
            })),
            {
              type: 'Topic' as const,
              id: 'LIST',
            },
          ];
          return final;
        }
        return [{ type: 'Topic' as const, id: 'LIST' }];
      },
    }),
    getSingleTopic: builder.query<Topic, string>({
      query: (id) => {
        return {
          url: `topics/${id}`,
        };
      },
    }),
    createTopic: builder.mutation<ResponseSuccess<Topic>, Topic>({
      query: (data) => {
        return {
          url: 'topics',
          method: 'POST',
          body: data,
        };
      },
    }),
    updateTopic: builder.mutation<ResponseSuccess<Topic>, Topic>({
      query: (data) => {
        return {
          url: `topics/${data._id}`,
          method: 'PUT',
          body: data,
        };
      },
    }),
    deleteTopic: builder.mutation<ResponseSuccess<Topic>, string>({
      query: (id) => {
        return {
          url: `topics/${id}`,
          method: 'DELETE',
        };
      },
    }),
  }),
});

export const {
  useGetListTopicQuery,
  useLazyGetSingleTopicQuery,
  useCreateTopicMutation,
  useUpdateTopicMutation,
  useDeleteTopicMutation,
} = topicApi;
