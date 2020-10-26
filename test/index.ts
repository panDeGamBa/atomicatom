import {button, radioButton, checkBox, select, input, container, img, link, text, list, textarea, getData} from '../src/components';

container({
    type: 'div',
    container: ['container1','container2','container3']
});

button({
    parent: '#container1',
    atomicName: 'button',
    className:'ss',
    text: 'hello',
    events: {
        click: () => console.log(getData())
    }
});

radioButton({
    parent: '#container1',
    className: 'hello eoo',
    atomicName: 'radio',
    list: [{
        name: 'aaaaaaa',
        text: 'hello',
        value: '1',
        checked: true
    },{
        name: 'aaaaaaa',
        text: 'ssss',
        value: '2',
        checked: false
    }],
    events: {
        click: (e) => console.log(e.target.parentElement.getValue())
    }
});

checkBox({
    parent: '#container1',
    className: 'hello eoo',
    atomicName: 'checkBoxer',
    list: [{
        text: 'hello',
        value: '1',
          checked: true
    },{
        text: 'ssss',
        value: '2',
          checked: true
    }], 
    events: {
        click: (e) => console.log(e.target.parentElement.getValue())
    }
});

select({
    parent: '#container1',
    className: 'ssss',
    atomicName: 'select',
    options: [{
        text: 'opt1',
        value: '1',
        selected: false
    },{
        text: 'opt2',
        value: '2',
        selected: false
    }],
    events: {
        change: (e) => console.log(e.target.value)
    }
});

input({
    parent: '#container1',
    className: 'ssss',
    atomicName: 'input',
    type:'text',
    value:'value',
    placeholder:'Placeholder', 
    events: {
        change: (e) => console.log(e.target.value)
    }
});

input({
    parent: '#container1',
    className: 'ssss',
    atomicName: 'inputFile',
    type:'file',
    value:'value',
    placeholder:'Placeholder', 
    events: {
        change: (e) => console.log(e.target.value)
    }
});

img({
    parent: '#container1',
    className: 'ssss',
    atomicName: 'img',
    src:'https://res.cloudinary.com/glovoapp/w_1200,f_auto,q_auto/Stores/gfcwneqwjwva7whbg8oa',
    alt: 'heheeh',
    events: {
        change: (e) => console.log(e.target.value)
    }
});

link({
    parent: '#container1',
    text: 'linker',
    atomicName: 'link',
    className: 'ssss',
    href:'https://res.cloudinary.com/glovoapp/w_1200,f_auto,q_auto/Stores/gfcwneqwjwva7whbg8oa',
    title: 'heheeh',
    target: '_blank',
    events: {
        change: (e) => console.log(e.target.value)
    }
});

text({
    parent: '#container1',
    className: 'ssss',
    atomicName: 'text',
    title: 'heheeh', 
    type: 'h1',
    events: {
        change: (e) => console.log(e.target.value)
    }
});

list({
    parent: '#container1',
    className: 'ssss',
    atomicName: 'list',
    list: [{
        text: 'helo',
        id: '1'
    },{
        text: 'uuuu',
        id: '2'
    }], 
    events: {
        click: (e) => console.log(e.target)
    }
});

textarea({
    parent: '#container1',
    className: 'textarea',
    atomicName: 'textarea',
    value:'value',
    placeholder:'Placeholder', 
    events: {
        change: (e) => console.log(e.target.value)
    }
});