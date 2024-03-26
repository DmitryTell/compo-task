import { renderCore } from './render-core';
import { handlers } from '../handlers/handlers';

export const render = (types) => {
    types.forEach((type) => {
        renderCore[type]();
    });

    const clickableElements = document.querySelectorAll('[\\@click]');

    clickableElements.forEach((element) => {
        const handlerName = element.getAttribute('@click');

        element.addEventListener('click', (event) => {
            handlers[handlerName](event);
        });
    });
};
