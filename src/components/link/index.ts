import { html, addHandlers, appendChild } from "../../utils";

export function link({ text, href, title, className, events, parent, target, atomicName = 'link' }) {
    const el = html('a',`link ${className}`,`${text}`);
    el.setAttribute('href', href);
    el.setAttribute('title', title);
    el.setAttribute('target', target);
    el['atomicName'] = atomicName;
    addHandlers(el, events);
    appendChild(parent, el);

    return el;
}   






