import { render } from '../render/render';
import { store } from '../store/store';

export const clickPlus = () => {
    store.amount += 1;

    render(['new-render-order']);
};
