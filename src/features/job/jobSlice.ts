import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { RootState } from '@/app/store';
import { Job } from '@/models';
import { ListParams } from '@/models';

interface JobState {
  list: Job[];
  similarJobs: Job[];
  params: ListParams;
}

const initialState: JobState = {
  list: [],
  similarJobs: [],
  params: {
    _limit: 6,
    _page: 1,
  },
};

const jobSlice = createSlice({
  name: 'job',
  initialState,
  reducers: {
    setListJob(state, action: PayloadAction<Job[]>) {
      state.list = action.payload;
    },
    setSimilarJobs(state, action: PayloadAction<Job[]>) {
      state.similarJobs = action.payload;
    },
    setParams(state, action: PayloadAction<ListParams>) {
      state.params = action.payload;
    },
  },
});

// Actions
export const jobActions = jobSlice.actions;

// Selectors
export const selectListJob = (state: RootState) => state.job.list;
export const selectSimilarJobs = (state: RootState) => state.job.similarJobs;
export const selectParamsJob = (state: RootState) => state.job.params;

// Reducer
const jobReducer = jobSlice.reducer;
export default jobReducer;
