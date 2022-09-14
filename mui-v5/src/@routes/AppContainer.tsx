import { lazy, Suspense } from 'react';
import pMinDelay from 'p-min-delay';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import LoadingPage from '../@components/UI/LoadingPage';
import IvanovLayout from '../@views/IvanovView/IvanovLayout';
import LogRocketView from '../@views/LogRocketView';
// import MainView from '../@views/MainView';
import MediumSignupView from '../@views/MediumSignupView';
import ResolverLayout from '../@views/ResolverView/ResolverLayout';
import SocialFormsLayout from '../@views/SocialFormsView/SocialFormsLayout';
import StrictTypingView from '../@views/StrictTypingView';

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
            <Route path="resolvers" element={<ResolverLayout />}>
              {/* <Route path="basic" element={<BasicExample />} /> */}
              {/* <Route path="yup" element={<YupBasicExample />} /> */}
              {/* <Route path="zod" element={<ZodBasicExample />} /> */}
              <Route index element={<div>Click any tab.</div>} />
            </Route>
            <Route path="logrocket" element={<LogRocketView />} />
            <Route path="medium" element={<MediumSignupView />} />
            <Route path="strict-typing" element={<StrictTypingView />} />
            {/* social forms */}
            <Route path="social" element={<SocialFormsLayout />}>
              {/* <Route path="login" element={<LoginPage />} /> */}
              {/* <Route path="signup" element={<SignupPage />} /> */}
              <Route index element={<div>Click any tab.</div>} />
            </Route>
            {/* ivanov tutorials */}
            <Route path="ivanov" element={<IvanovLayout />}>
              {/* <Route path="signin" element={<SignIn />} /> */}
              {/* <Route path="dependent" element={<DependentFieldsRaw />} /> */}
              {/* <Route path="mask" element={<NormalizeMask />} /> */}
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
