import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from "react-redux"
import { store ,persistor} from './redux/store';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { PersistGate } from 'redux-persist/integration/react';
import './index.css';
import App from './App';
import { app } from './firebase.config';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
     <Provider store={store} app={app}>
     <ToastContainer
    theme="dark"
  position="top-left"
  autoClose={3000}
  closeOnClick
  pauseOnHover={false}
  />
  <PersistGate loading={"loading"} persistor={persistor}>
  <App />
  </PersistGate>
     </Provider>
    );

 