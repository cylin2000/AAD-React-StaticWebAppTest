import React from 'react';
import ReactDOM from 'react-dom/client';
import { PublicClientApplication } from '@azure/msal-browser';
import { MsalProvider } from '@azure/msal-react';
import './index.css';
import App from './App';
import { msalConfig } from './AuthConfig';


const root = ReactDOM.createRoot(document.getElementById('root'));
const msalInstance = new PublicClientApplication(msalConfig);


root.render(
  <React.StrictMode>
    <MsalProvider instance={msalInstance}>
      <App />
    </MsalProvider>
  </React.StrictMode>
);

