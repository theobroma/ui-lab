import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import LoadingPage from './@components/UI/LoadingPage';
import { SnackBarProvider } from './@components/UI/SnackBar';
import { AppContainer } from './@routes/AppContainer';
import { persistor, store } from './@store/configureStore';
import AppThemeProvider from './@themes/theme';
import reportWebVitals from './reportWebVitals';

import './index.css';
// All styles
import './@assets/styles/index.scss';
// Open Source fonts
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const rootEl = document.getElementById('root');

render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={<LoadingPage />} persistor={persistor}>
        <AppThemeProvider>
          <SnackBarProvider>
            <AppContainer />
          </SnackBarProvider>
        </AppThemeProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  rootEl,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
