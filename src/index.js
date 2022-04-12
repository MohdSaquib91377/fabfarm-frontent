import React from 'react';
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux';
import store, { persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import './css/reset.css';
import './css/style.css';
import './css/screen.css';
import './css/responsive.css';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container)
root.render(
  <React.StrictMode>
    <div className='clv_main_wrapper index_v4'>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </div>
  </React.StrictMode>
);
