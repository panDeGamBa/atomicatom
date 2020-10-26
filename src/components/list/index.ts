import { html, addHandlers, appendChild } from "../../utils";

const LIST_CLASS = 'list';

export function list({ list, className, events, parent, atomicName = 'list' }) {
    const el = html('ul',`${LIST_CLASS} ${className}`,`${generateList(list)}`);
    addHandlers(el.querySelectorAll(`.${LIST_CLASS}__li`), events);
    appendChild(parent, el);
    el['atomicName'] = atomicName;
    return el;
}   

function generateList(list) {
    let text = '';
    list.forEach(li => {
        text += `<li data-id="${li.id}" class="${LIST_CLASS}__li">${li.text}</list>`;
    });

    return text;
}