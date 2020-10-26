import { html, addHandlers, appendChild } from "../../utils";

const SELECT_CLASS = 'select';

export function select({ options, className, events, parent, atomicName = 'select' }) {
    const el = html('select',`${SELECT_CLASS} atomicAtom ${className}`,`${generateList(options)}`);
    el['atomicName'] = atomicName;

    addHandlers(el, events, true);
    appendChild(parent, el);
    
    return el;
}

function generateList(options) {
    let text = '';
    options.forEach((option, i) => {
        text += `<option class="${SELECT_CLASS}__option" value="${option.value}" ${option.selected ? 'selected' : ''}>${option.text}</option>`;
    });

    return text;
}






