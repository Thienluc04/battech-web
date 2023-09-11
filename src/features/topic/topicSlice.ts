import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { RootState } from '@/app/store';
import { ListParamsSecond, Topic } from '@/models';

interface TopicState {
  list: Topic[];
  params: ListParamsSecond;
}

const initialState: TopicState = {
  list: [],
  params: {
    limit: 5,
    page: 1,
    sort: 'asc',
  },
};

const topicSlice = createSlice({
  name: 'topic',
  initialState,
  reducers: {
    setListTopic(state, action: PayloadAction<Topic[]>) {
      state.list = action.payload;
    },
    setParams(state, action: PayloadAction<ListParamsSecond>) {
      state.params = action.payload;
    },
  },
});

// Actions
export const topicActions = topicSlice.actions;

// Selectors
export const selectListTopic = (state: RootState) => state.topic.list;
export const selectParamsTopic = (state: RootState) => state.topic.params;

// Reducers
const topicReducer = topicSlice.reducer;
export default topicReducer;
