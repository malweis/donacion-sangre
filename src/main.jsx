import React from 'react';
import { createRoot } from 'react-dom';
import { ApolloProvider } from '@apollo/client';
import App from './App';
import client from './apollo';

import './index.css';

const rootElement = document.getElementById('root');

createRoot(rootElement).render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApolloProvider>
);
