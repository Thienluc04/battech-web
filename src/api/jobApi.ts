import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { linkApiJob } from '@/constants/general';
import { Job, ListParamsJob, ListResponseJob, jobKind } from '@/models';

export const jobApi = createApi({
  reducerPath: 'jobApi',
  tagTypes: ['Job'],
  keepUnusedDataFor: 10,
  baseQuery: fetchBaseQuery({ baseUrl: linkApiJob }),
  endpoints: (builder) => ({
    getAllJob: builder.query<ListResponseJob<Job>, ListParamsJob>({
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
      query: (category) => {
        return {
          url: 'jobs',
          params: {
            category,
          },
        };
      },
    }),
    getWorkCategories: builder.query<jobKind[], ListParamsJob>({
      query: (params) => {
        return {
          url: 'workCategories',
          params,
        };
      },
    }),
    getWorkLocations: builder.query<jobKind[], ListParamsJob>({
      query: (params) => {
        return {
          url: 'workLocations',
          params,
        };
      },
    }),
    getWorkTypes: builder.query<jobKind[], ListParamsJob>({
      query: (params) => {
        return {
          url: 'workTypes',
          params,
        };
      },
    }),
  }),
});

export const {
  useGetAllJobQuery,
  useGetSingleJobQuery,
  useGetSimilarJobsQuery,
  useGetWorkCategoriesQuery,
  useGetWorkLocationsQuery,
  useGetWorkTypesQuery,
} = jobApi;
