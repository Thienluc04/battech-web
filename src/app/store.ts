import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

import { authApi } from '@/api/authApi';
import { authorApi } from '@/api/authorApi';
import { jobApi } from '@/api/jobApi';
import { newsApi } from '@/api/newsApi';
import { passApi } from '@/api/passApi';
import { postApi } from '@/api/postApi';
import { tagApi } from '@/api/tagApi';
import { topicApi } from '@/api/topicApi';
import authReducer from '@/features/auth/authSlice';
import authorReducer from '@/features/author/authorSlice';
import jobReducer from '@/features/job/jobSlice';
import newsReducer from '@/features/news/newsSlice';
import postReducer from '@/features/post/postSlice';
import tagReducer from '@/features/tag/tagSlice';
import topicReducer from '@/features/topic/topicSlice';

const rootReducer = combineReducers({
  news: newsReducer,
  job: jobReducer,
  auth: authReducer,
  post: postReducer,
  topic: topicReducer,
  author: authorReducer,
  tag: tagReducer,
  [newsApi.reducerPath]: newsApi.reducer,
  [jobApi.reducerPath]: jobApi.reducer,
  [authApi.reducerPath]: authApi.reducer,
  [postApi.reducerPath]: postApi.reducer,
  [topicApi.reducerPath]: topicApi.reducer,
  [authorApi.reducerPath]: authorApi.reducer,
  [tagApi.reducerPath]: tagApi.reducer,
  [passApi.reducerPath]: passApi.reducer,
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
      authorApi.middleware,
      tagApi.middleware,
      passApi.middleware,
    ),
});

setupListeners(store.dispatch);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
