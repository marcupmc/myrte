import { put, takeEvery } from 'redux-saga/effects'
import fetch from 'isomorphic-fetch';

import productsAction from '../constants/productsActions';

export function* fetchProducts() {
    let products;
    yield fetch('http://api-myrte.herokuapp.com/products', {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache, no-store',
        },
    }).then(r => r.json())
    .then(data => {
        products = data;
    });
    yield put({ type: productsAction.FETCH_PRODUCTS_SUCCESS, data: products }); // TODO Action creator !
}

export function* productStartFetching() {
    yield takeEvery(productsAction.FETCH_PRODUCTS_START, fetchProducts);
}

export function* productsSaga() {
    yield [
        productStartFetching(),
    ];
}
