import { productsSaga } from './products';

export default function* sagas() {
    yield [
        productsSaga(),
    ];
}
