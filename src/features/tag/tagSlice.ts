import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { RootState } from '@/app/store';
import { ListParams, Tag } from '@/models';

interface TagState {
  list: Tag[];
  params: ListParams;
}

const initialState: TagState = {
  list: [],
  params: {
    limit: 5,
    page: 1,
    sort: 'asc',
  },
};

const tagSlice = createSlice({
  name: 'tag',
  initialState,
  reducers: {
    setListTag(state, action: PayloadAction<Tag[]>) {
      state.list = action.payload;
    },
    setParams(state, action: PayloadAction<ListParams>) {
      state.params = action.payload;
    },
  },
});

// Actions
export const tagActions = tagSlice.actions;

// Selectors
export const selectListTag = (state: RootState) => state.tag.list;
export const selectParamsTag = (state: RootState) => state.tag.params;

// Reducers
const tagReducer = tagSlice.reducer;
export default tagReducer;
