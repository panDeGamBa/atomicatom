import { html, appendChild } from "../../utils";

export function container({ type, parent = null, container }) {
    container.forEach(element => {
        const el = html(type, element, '');

        el.setAttribute('id', element);
        parent 
            ? appendChild(parent, el)
            : appendChild('body', el)
    });
}   






