// import React from 'react';
// import {Provider} from 'react-redux';
// import {ConnectedRouter} from 'connected-react-router';
// import AppLayout from '@crema/core/AppLayout';
// import AuthRoutes from '@crema/utility/AuthRoutes';
// import LocaleProvider from '@crema/utility/LocaleProvider';
// import CremaThemeProvider from '@crema/utility/CremaThemeProvider';
// import CremaStyleProvider from '@crema/utility/CremaStyleProvider';
// import ContextProvider from '@crema/utility/ContextProvider';

// import configureStore, {history} from './redux/store';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import './app.css';

// const store = configureStore();

// const App = () => (
//   <ContextProvider>
//     <Provider store={store}>
//       <CremaThemeProvider>
//         <CremaStyleProvider>
//           <LocaleProvider>
//             <ConnectedRouter history={history}>
//               <AuthRoutes>
//                 <CssBaseline />
//                 <AppLayout />
//               </AuthRoutes>
//             </ConnectedRouter>
//           </LocaleProvider>
//         </CremaStyleProvider>
//       </CremaThemeProvider>
//     </Provider>
//   </ContextProvider>
// );

// export default App;

import React from 'react';
import {Provider} from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import {BrowserRouter} from 'react-router-dom';
import AppLayout from '@crema/core/AppLayout';
import AuthRoutes from '@crema/utility/AuthRoutes';
import LocaleProvider from '@crema/utility/LocaleProvider';
import CremaThemeProvider from '@crema/utility/CremaThemeProvider';
import CremaStyleProvider from '@crema/utility/CremaStyleProvider';
import ContextProvider from '@crema/utility/ContextProvider';
import InfoViewContextProvider from './@crema/core/InfoView/InfoViewContext';
import configureStore, {history} from './redux/store';

import './app.css';

const store = configureStore();

const App = () => (
  <ContextProvider>
    <Provider store={store}>
      <InfoViewContextProvider>
        <CremaThemeProvider>
          <CremaStyleProvider>
            <LocaleProvider>
              <BrowserRouter>
                <AuthRoutes>
                  <CssBaseline />
                  <AppLayout />
                </AuthRoutes>
              </BrowserRouter>
            </LocaleProvider>
          </CremaStyleProvider>
        </CremaThemeProvider>
      </InfoViewContextProvider>
    </Provider>
  </ContextProvider>
);

export default App;
