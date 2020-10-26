import { html, addHandlers, appendChild } from "../../utils";

export function textarea({ value, placeholder, className, events, parent, atomicName = 'textarea' }) {
    const el = html('textarea',`textarea atomicAtom ${className}`,`${value}`);
    el.setAttribute('placeholder', placeholder);
    el['atomicName'] = atomicName;

    addHandlers(el, events);
    appendChild(parent, el);

    return el;
}   






