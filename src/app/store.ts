import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

import { authApi } from '@/api/authApi';
import { jobApi } from '@/api/jobApi';
import { newsApi } from '@/api/newsApi';
import { postApi } from '@/api/postApi';
import { topicApi } from '@/api/topicApi';
import authReducer from '@/features/auth/authSlice';
import jobReducer from '@/features/job/jobSlice';
import newsReducer from '@/features/news/newsSlice';
import postReducer from '@/features/post/postSlice';
import topicReducer from '@/features/topic/topicSlice';

const rootReducer = combineReducers({
  news: newsReducer,
  job: jobReducer,
  auth: authReducer,
  post: postReducer,
  topic: topicReducer,
  [newsApi.reducerPath]: newsApi.reducer,
  [jobApi.reducerPath]: jobApi.reducer,
  [authApi.reducerPath]: authApi.reducer,
  [postApi.reducerPath]: postApi.reducer,
  [topicApi.reducerPath]: topicApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      newsApi.middleware,
      jobApi.middleware,
      authApi.middleware,
      postApi.middleware,
      topicApi.middleware,
    ),
});

setupListeners(store.dispatch);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
