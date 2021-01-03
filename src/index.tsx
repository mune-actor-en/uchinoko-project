// React
import React from 'react';
import ReactDOM from 'react-dom';
// Redux
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import * as History from 'history'
import createStore from './reducks/store/store'
import App from './App';
import reportWebVitals from './reportWebVitals';

const history = History.createBrowserHistory()
export const store = createStore(history)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
