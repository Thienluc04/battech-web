import { jobApi } from '@/api/jobApi';
import { newsApi } from '@/api/newsApi';
import jobReducer from '@/features/job/jobSlice';
import newsReducer from '@/features/news/newsSlice';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

const rootReducer = combineReducers({
  news: newsReducer,
  job: jobReducer,
  [newsApi.reducerPath]: newsApi.reducer,
  [jobApi.reducerPath]: jobApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(newsApi.middleware, jobApi.middleware),
});

setupListeners(store.dispatch);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
