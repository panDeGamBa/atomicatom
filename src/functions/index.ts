export function getData() {
    const atomicAtoms = document.querySelectorAll('.atomicAtom');
    const atomicObject = {};

    [...atomicAtoms].forEach((el) => {
        atomicObject[el['atomicName']] = switchAtomicAtoms(el, el.classList[0]);
    });

    return atomicObject;
}

function switchAtomicAtoms(el, key) {
    switch (key) {
        case 'radioButton':
            return el.getValue();
        case 'checkBox':
            return el.getValue();
        case 'select':
            return el.value;
        case 'input':
            return el.value;
        case 'textarea':
            return el.value;
        default:
            return;
    }
}
