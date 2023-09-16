import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { linkApi } from '@/constants/general';
import { ListParams, ResponseSuccess, Topic } from '@/models';

export const topicApi = createApi({
  reducerPath: 'topicApi',
  tagTypes: ['Topic'],
  keepUnusedDataFor: 10,
  refetchOnMountOrArgChange: true,
  baseQuery: fetchBaseQuery({ baseUrl: linkApi }),
  endpoints: (builder) => ({
    getListTopic: builder.query({
      query: (params: ListParams) => {
        return {
          url: 'topics',
          params,
        };
      },
      providesTags(result) {
        if (result.data) {
          const final = [
            ...result.data.map((item: Topic) => ({
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
    deleteListTopic: builder.mutation<ResponseSuccess<string>, string[]>({
      query: (listId) => {
        return {
          url: 'topics',
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
  useGetListTopicQuery,
  useLazyGetSingleTopicQuery,
  useCreateTopicMutation,
  useUpdateTopicMutation,
  useDeleteTopicMutation,
  useDeleteListTopicMutation,
} = topicApi;
