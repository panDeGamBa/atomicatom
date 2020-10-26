import { html, addHandlers, appendChild } from "../../utils";

export function button({ text, className, events, parent, atomicName = 'button' }) {
    const el = html('button',`btn ${className}`,`${text}`);
    el['atomicName'] = atomicName;
    addHandlers(el, events);
    appendChild(parent, el);

    return el;
}