import { linkApi } from '@/constants/general';
import { Job } from '@/models';
import { ListParams, ListResponse } from '@/models/common';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const jobApi = createApi({
  reducerPath: 'jobApi',
  tagTypes: ['Job'],
  keepUnusedDataFor: 10,
  baseQuery: fetchBaseQuery({ baseUrl: linkApi }),
  endpoints: (builder) => ({
    getAllJob: builder.query<ListResponse<Job>, ListParams>({
      query: (params) => {
        return {
          url: 'jobs',
          params,
        };
      },
      providesTags(result) {
        if (result) {
          const final = [
            ...result.data.map((item) => ({
              type: 'Job' as const,
              id: item.id,
            })),
            {
              type: 'Job' as const,
              id: 'LIST',
            },
          ];
          return final;
        }
        return [{ type: 'Job' as const, id: 'LIST' }];
      },
    }),
    getSingleJob: builder.query<Job[], string>({
      query: (slug) => {
        return {
          url: 'jobs',
          params: {
            slug,
          },
        };
      },
    }),
    getSimilarJobs: builder.query<Job[], string>({
      query: (group) => {
        return {
          url: 'jobs',
          params: {
            group,
          },
        };
      },
    }),
  }),
});

export const { useGetAllJobQuery, useGetSingleJobQuery, useGetSimilarJobsQuery } = jobApi;
