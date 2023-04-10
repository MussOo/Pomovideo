import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Home from './components/Home';
import './index.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId='244683699210-16l5c7i4kk19rm7d6t9v3qa9reehlnec.apps.googleusercontent.com'>
    <React.StrictMode>
      <Home />
    </React.StrictMode>
  </GoogleOAuthProvider>,
);
