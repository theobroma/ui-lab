import { lazy, Suspense } from 'react';
import pMinDelay from 'p-min-delay';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import LoadingPage from '../@components/UI/LoadingPage';
import BasicView from '../@views/PopupStateView/BasicView';
// import MainView from '../@views/MainView';
import PopupStateLayout from '../@views/PopupStateView/PopupStateLayout';

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
            {/* resolvers */}
            <Route path="popup-state" element={<PopupStateLayout />}>
              <Route path="basic" element={<BasicView />} />
              {/* <Route path="yup" element={<YupBasicExample />} /> */}
              {/* <Route path="zod" element={<ZodBasicExample />} /> */}
              <Route index element={<div>Click any tab.</div>} />
            </Route>
            <Route path="*" element={<div>Not Found</div>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default AppContainer;
