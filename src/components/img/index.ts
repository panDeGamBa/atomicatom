import { html, addHandlers, appendChild } from "../../utils";

export function img({ src, alt, className, events, parent, atomicName = 'img' }) {
    const el = html('img',`img ${className}`,``);
    el.setAttribute('src', src);
    el.setAttribute('alt', alt);
    el['atomicName'] = atomicName;
    
    addHandlers(el, events);
    appendChild(parent, el);

    return el;
}   






