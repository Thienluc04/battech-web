import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { RootState } from '@/app/store';
import { ListParams, Post } from '@/models';

interface PostState {
  list: Post[];
  params: ListParams;
}

const initialState: PostState = {
  list: [],
  params: {
    limit: 5,
    page: 1,
    sort: 'desc',
  },
};

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    setListPost(state, action: PayloadAction<Post[]>) {
      state.list = action.payload;
    },
    setParams(state, action: PayloadAction<ListParams>) {
      state.params = action.payload;
    },
  },
});

// Actions
export const postActions = postSlice.actions;

// Selectors
export const selectListPost = (state: RootState) => state.post.list;
export const selectParamsPost = (state: RootState) => state.post.params;

// Reducer
const postReducer = postSlice.reducer;
export default postReducer;
