export function html(element, className, content) {
    const el = document.createElement(element);
    addClass(el, className);
    el.innerHTML = content;

    return el;
}

export function addHandlers(el, handlers, forceIndividual = false){
    if(forceIndividual) {
        Object.keys(handlers).forEach(action => {
            el.addEventListener(action, (e) => {
                handlers[action](e);
            })
        });
    }else{
        if(isNodelist(el)) {
            [...el].forEach(selector => {
                Object.keys(handlers).forEach(action => {
                    selector.addEventListener(action, (e) => {
                        handlers[action](e);
                    })
                });
            });
        } else {
            Object.keys(handlers).forEach(action => {
                el.addEventListener(action, (e) => {
                    handlers[action](e);
                })
            });
        }
    }
}

function isNodelist(el) {
    return typeof el.length != 'undefined' &&
        typeof el.item != 'undefined';
}

function addClass(element, classes) {
    const classSplited = classes.split(' ');

    classSplited.forEach(el => {
        element.classList.add(el);
    });
}

export function appendChild(parent, child) {
    const parentEl = document.querySelector(parent);

    parentEl.appendChild(child);
}