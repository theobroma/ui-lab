import { lazy, Suspense } from 'react';
import pMinDelay from 'p-min-delay';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import LoadingPage from '../@components/UI/LoadingPage';

// import MainView from '../@views/MainView';
import { AppLayout } from './AppLayout';

const MIN_LAZY_DELAY = 300;

const MainView = lazy(() =>
  pMinDelay(import('../@views/MainView'), MIN_LAZY_DELAY),
);

const AppContainer = () => {
  return (
    <Suspense fallback={<LoadingPage />}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<MainView />} />
            <Route path="*" element={<div>Not Found</div>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default AppContainer;
