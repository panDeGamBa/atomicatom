import { html, addHandlers, appendChild } from "../../utils";
import { input } from "../input";

const CHECKBOX_CLASS = 'checkBox';

export function checkBox({ list, className, events, parent, atomicName = 'checkbox' }) {
    const el = html('div',`${CHECKBOX_CLASS} atomicAtom ${className}`,`${generateList(list)}`);

    el['getValue'] = () => getData(el);
    el['atomicName'] = atomicName;

    addHandlers(el.querySelectorAll(`.${CHECKBOX_CLASS}__input`), events);
    appendChild(parent, el);

    return el;
}

function generateList(list) {
    let text = '';
    list.forEach((checkbox, i) => {
        text += `<input id="${i + checkbox.name + checkbox.value + checkbox.text}" class="${CHECKBOX_CLASS}__input" type="checkbox" value="${checkbox.value}" ${checkbox.checked ? 'checked': ''}>
            <label class="${CHECKBOX_CLASS}__label" for="${i + checkbox.name + checkbox.value + checkbox.text}">
                <span class="${CHECKBOX_CLASS}__icon" ></span>
                <p class="${CHECKBOX_CLASS}__text" >${checkbox.text}</p>
            </label>`;
    });

    return text;
}

function getData(el) {
    const inputs = el.querySelectorAll('input');
    const inputValues = [];

    [...inputs].forEach((input) => {
       if(input.checked) {
            inputValues.push(input.value);
       }
    });

    return inputValues;
}





