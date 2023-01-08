import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import AppContainer from './@routes/AppContainer';
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

const container = document.getElementById('root') as HTMLDivElement;
const root = createRoot(container);

root.render(
  <StrictMode>
    <AppThemeProvider>
      <AppContainer />
    </AppThemeProvider>
  </StrictMode>,
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
