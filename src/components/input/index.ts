import { html, addHandlers, appendChild } from "../../utils";

export function input({ value, placeholder, type, className, events, parent, atomicName = 'input' }) {
    const el = html('input',`input atomicAtom ${className}`,``);
    el.setAttribute('type', type);
    el.setAttribute('value', value);
    el.setAttribute('placeholder', placeholder);
    el['atomicName'] = atomicName;
    
    addHandlers(el, events);
    appendChild(parent, el);

    return el;
}   






