import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import registerServiceWorker from './registerServiceWorker';
import ReduxPromise from 'redux-promise';
import { applyMiddleware, createStore } from 'redux';
import reducers from './Reducers';
import { Provider } from 'react-redux';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(<Provider store={createStoreWithMiddleware(reducers)}>
<App />
</Provider>, document.getElementById('root'));
registerServiceWorker();
