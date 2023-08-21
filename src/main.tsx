import { newsApi } from '@/api/newsApi.ts';
import { ApiProvider } from '@reduxjs/toolkit/query/react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App.tsx';
import { store } from './app/store.ts';
import './index.scss';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ApiProvider api={newsApi}>
    <Provider store={store}>
      <App />
      <ToastContainer />
    </Provider>
  </ApiProvider>,
);
