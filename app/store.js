import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers/index';

import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();

export function Store(initialState = {}) {
    const store = createStore(reducers,
        initialState,
        composeWithDevTools(applyMiddleware(sagaMiddleware)),
    );
    return store;
}

const INITIAL_STATE = {
    products: { fetching: false, allProducts: [{ name: 'toto' }, { name: 'titi' }] },
};

const store = new Store(INITIAL_STATE);
sagaMiddleware.run(sagas);

export default store;
