import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { persistState } from 'redux-devtools';
import rootReducer from '../reducers/index';
import DevTools from '../containers/DevTools';

const enhancer = composeWithDevTools(
  applyMiddleware(thunk),
  DevTools.instrument(),
  persistState(window.location.href.match(/[?&]debug_session=([^&#]+)\b/)),
);

export default function (initialState) {
  const store = createStore(rootReducer, initialState, enhancer);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers/index').default; // eslint-disable-line global-require
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
