import { ApiProvider } from '@reduxjs/toolkit/query/react';
import ReactDOM from 'react-dom/client';
import 'react-loading-skeleton/dist/skeleton.css';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { newsApi } from '@/api/newsApi.ts';

import App from './App.tsx';
import { store } from './app/store.ts';
import './index.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ApiProvider api={newsApi}>
    <Provider store={store}>
      <App />
      <ToastContainer />
    </Provider>
  </ApiProvider>,
);
