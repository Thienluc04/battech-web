import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { RootState } from '@/app/store';
import { Author, ListParamsSecond } from '@/models';

interface AuthorState {
  list: Author[];
  params: ListParamsSecond;
}

const initialState: AuthorState = {
  list: [],
  params: {
    limit: 5,
    page: 1,
    sort: 'asc',
  },
};

const authorSlice = createSlice({
  name: 'author',
  initialState,
  reducers: {
    setListAuthor(state, action: PayloadAction<Author[]>) {
      state.list = action.payload;
    },
    setParams(state, action: PayloadAction<ListParamsSecond>) {
      state.params = action.payload;
    },
  },
});

// Actions
export const authorActions = authorSlice.actions;

// Selectors
export const selectListAuthor = (state: RootState) => state.author.list;
export const selectParamsAuthor = (state: RootState) => state.author.params;

// Reducers
const authorReducer = authorSlice.reducer;
export default authorReducer;
