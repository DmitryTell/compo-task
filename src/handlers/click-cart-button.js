import { render } from '../render/render';
import { store } from '../store/store';

export const clickCartButton = () => {
    store.isOpenedCart = true;

    render(['new-render-order']);
};
