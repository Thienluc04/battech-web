import { RootState } from '@/app/store';
import { News } from '@/models';
import { ListParams } from '@/models/common';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface NewsState {
  list: News[];
  listEvent: News[];
  listNewest: News[];
  listSimilar: News[];
  params: ListParams;
}

const initialState: NewsState = {
  list: [],
  listEvent: [],
  listNewest: [],
  listSimilar: [],
  params: {
    isNewest: false,
    isEvent: false,
    _limit: 8,
    _page: 1,
  },
};

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    setListNews(state, action: PayloadAction<News[]>) {
      state.list = action.payload;
    },
    setListNewest(state, action: PayloadAction<News[]>) {
      state.listNewest = action.payload;
    },
    setListEvent(state, action: PayloadAction<News[]>) {
      state.listEvent = action.payload;
    },
    setListNewsSimilar(state, action: PayloadAction<News[]>) {
      state.listSimilar = action.payload;
    },
    setParams(state, action: PayloadAction<ListParams>) {
      state.params = action.payload;
    },
  },
});

// Actions
export const newsActions = newsSlice.actions;

// Selectors
export const selectListNews = (state: RootState) => state.news.list;
export const selectListEventNews = (state: RootState) => state.news.listEvent;
export const selectListNewestNews = (state: RootState) => state.news.listNewest;
export const selectParamsNews = (state: RootState) => state.news.params;
export const selectListSimilarNews = (state: RootState) => state.news.listSimilar;

// Reducer
const newsReducer = newsSlice.reducer;
export default newsReducer;
