import { store } from '../store/store';
import page from '../templates/page.pug';
import order from '../templates/order.pug';

export const renderCore = {
    'start-render-page': () => {
        const pageElement = document.getElementById('page');

        pageElement.innerHTML = page();
    },
    'start-render-order': () => {
        const orderElement = document.getElementById('order-block');

        if (orderElement) {
            orderElement.innerHTML = order({ store });
        }
    },
    'new-render-order': () => {
        const orderElement = document.getElementById('order-block');

        if (orderElement) {
            orderElement.innerHTML = order({ store });
        }
    },
};
