import productsAction from '../constants/productsActions';

export default function products(state = {}, action) {
    switch (action.type) {
    case productsAction.FETCH_PRODUCTS_START:
        return {
            ...state,
            fetching: true,
        };
    default:
        return state;
    }
}
