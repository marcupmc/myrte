import productsActions from '../constants/productsActions';

export function fetchProducts() {
    return {
        type: productsActions.FETCH_PRODUCTS_START,
    };
}
