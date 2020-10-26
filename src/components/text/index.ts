import { html, addHandlers, appendChild } from "../../utils";

export function text({ title, type, className, events, parent, atomicName = 'text' }) {
    const el = html(type,`text ${className}`,`${title}`);
    el['atomicName'] = atomicName;
    addHandlers(el, events);
    appendChild(parent, el);

    return el;
}






