import { html, addHandlers, appendChild } from "../../utils";

const RADIO_CLASS = 'radioButton';

export function radioButton({ list, className, events, parent, atomicName = 'radio'}) {
    const el = html('div',`${RADIO_CLASS} atomicAtom ${className}`,`${generateList(list)}`);

    el['getValue'] = () => getData(el);
    el['atomicName'] = atomicName;

    addHandlers(el.querySelectorAll(`.${RADIO_CLASS}__input`), events);
    appendChild(parent, el);

    return el;
}

function generateList(list) {
    let text = '';
    list.forEach((radio, i) => {
        text += `<input id="${i + radio.name + radio.value + radio.text}" class="${RADIO_CLASS}__input" type="radio" name="${radio.name}" value="${radio.value}" ${radio.checked ? 'checked': ''}>
            <label class="${RADIO_CLASS}__label" for="${i + radio.name + radio.value + radio.text}">
                <span class="${RADIO_CLASS}__icon" ></span>
                <p class="${RADIO_CLASS}__text" >${radio.text}</p>
            </label>`;
    });

    return text;
}


function getData(el) {
    const inputs = el.querySelectorAll('input');
    let checkedVal = '';

    [...inputs].forEach((input) => {
       if(input.checked) {
            checkedVal =  input.value;
       }
    });

    return checkedVal;
}





