import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store, { persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import './css/reset.css';
import './css/style.css';
import './css/screen.css';
import './css/responsive.css';
import App from './App';
ReactDOM.render(
  <React.StrictMode>
    <div id="wrapper">
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
