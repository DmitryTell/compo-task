import { render } from '../render/render';
import { store } from '../store/store';

export const clickMinus = () => {
    if (store.amount > 1) {
        store.amount -= 1;
    }

    render(['new-render-order']);
};
