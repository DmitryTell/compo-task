import { store } from '../store/store';
import { render } from '../render/render';

export const clickRange = () => {
    store.isSelectedInPack = !store.isSelectedInPack;

    render(['new-render-order']);
};
