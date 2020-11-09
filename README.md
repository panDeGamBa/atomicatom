
<img src="https://raw.githubusercontent.com/panDeGamBa/atomicatom/main/src/assets/img/logo.png" width="120"/>

# Atomic Atom
A small library for little components based in atomic design
## Install
To install the library, run on terminal

    npm i atomicatom

Make sure that you have installed type script loader.

## Import
To import an atomicatom in your project

    import {button} from 'atomicatom';

## All components
All the components have 3 params in common that you must pass when instanciate the component. This params are:
#### parent 
Is the parent container of component. When the component will be creted, will do into parent.

example: 
    
    parent: '#container1'

#### className
Class name that you would add to component. Separate with space.

example:
    
    className: 'myClass1 myClass2'

#### events
It's an object with the events that you want to add in the component.

example:

    events: {
        click: (e) => 
            console.log('click', e.target.value),
        change: (e) => 
            console.log('change', e.target.value),
    }

--------

### Container
This component is a little different than the others. Component doesn't accept className and events. The component only creates an array of container that displays into parent.

    container({
        type: 'div',
        parent: 'body',        container: ['container1','container2','container3']
    });

### Button
    import {button} from 'atomicatom';

example:

    button({
        parent: '#container1',
        className:'login__button',
        atomicName: 'button', // optional
        text: 'Login',
        events: {
            click: () =>
                console.log('hello world')
        }
    });

### Radio button

    import {radioButton} from 'atomicatom';

example:

    radioButton({
        parent: '.genders',
        className: 'gender__radio',
        atomicName: 'radioButtons', // optional
        list: [{
            name: 'gender',
            text: 'male',
            value: '1',
            checked: true
        },{
            name: 'gender',
            text: 'female',
            value: '2',
            checked: false
        }],
        events: {
            click: (e) => console.log(e.target.parentElement.getValue())
        }
    });

### Checkbox
    import {checkBox} from 'atomicatom';

example

    checkBox({
        parent: '#container1',
        className: 'hello eoo',
        atomicName: 'checkBoxers', // optional
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

### Select
    import {select} from 'atomicatom';

example

    select({
        parent: '#container1',
        className: 'class',
        atomicName: 'selector', // optional
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

### Input
    import {input} from 'atomicatom';
example

    input({
        parent: '#container1',
        className: 'ssss',
        atomicName: 'input', // optional
        type:'text',
        value:'value',
        placeholder:'Placeholder', 
        events: {
            change: (e) => console.log(e.target.value)
        }
    });

### Textarea
    import {textarea} from 'atomicatom';
example

    input({
        parent: '#container1',
        className: 'ssss',
        atomicName: 'textarea', // optional
        value:'value',
        placeholder:'Placeholder', 
        events: {
            change: (e) => console.log(e.target.value)
        }
    });

### Img
    import {img} from 'atomicatom';

example

    img({
        parent: '.img',
        className: 'myClass',
        atomicName: 'img', // optional
        src:'https://res.cloudinary.com/glovoapp/w_1200,f_auto,q_auto/Stores/gfcwneqwjwva7whbg8oa',
        alt: 'myAlt',
        events: {
            change: (e) => console.log(e.target.value)
        }
    });

### Link
    import {link} from 'atomicatom';
example

    link({
        parent: '#container1',
        className: 'classer',
        atomicName: 'link', // optional
        text: 'My link text',
        href:'https://res.cloudinary.com/glovoapp/w_1200,f_auto,q_auto/Stores/gfcwneqwjwva7whbg8oa',
        title: 'My link title',
        target: '_blank',
        events: {
            change: (e) => console.log(e.target.value)
        }
    });

### Text
    import {text} from 'atomicatom';
example

    text({
        parent: '#container1',
        className: 'ssss',
        atomicName: 'text', // optional
        title: 'My title', 
        type: 'h1',
        events: {
            change: (e) => console.log(e.target.value)
        }
    });

### List
List component has a data-id to identify each li element.

    import {list} from 'atomicatom';
example


    list({
        parent: '#container1',
        className: 'ssss',
        atomicName: 'list', // optional
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

## Events
### getData
When this function is triged, all atomicAtom in document put their data into an object with their atomicName. 

example

    import {button, getData} from 'atomicAtom';

    button({
        parent: '#container1',
        className:'login__button',
        atomicName: 'button', // optional
        text: 'Login',
        events: {
            click: () => getData()
        }
    });

output

    {
        checkBox: (2) ["1", "2"]
        input: "value"
        inputFile: ""
        radio: "1"
        select: "1"
        textarea: "value"
    }

----------

### Thank you :)