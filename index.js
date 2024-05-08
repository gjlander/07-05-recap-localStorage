//setItem()
//accepts two arguments key, value
// localStorage.setItem('myThing', "Look Ma, I've been set in localstorage!");

// //using same key will override existing key
// localStorage.setItem('myThing', "I've been overwritten!");

// //getItem()
// //one argument: key returns: value
// const myNewThing = localStorage.getItem('myThing');
// console.log('value of newThing: ', myNewThing);

//removeItem()
//one argument: key, removes item from localstorage
// localStorage.setItem('newThing', 'Look Ma, I set something in localStorage!');
// localStorage.setItem(
//     'secondThing',
//     'Look Ma, I set something else in localStorage!'
// );
// localStorage.setItem(
//     'thirdThing',
//     'Look Ma, I set a third thing in localStorage!'
// );

// setTimeout(() => {
//     localStorage.removeItem('newThing');
//     console.log('after removing', localStorage.getItem('myThing'));
//     console.log('variable after removing: ', myNewThing);
// }, 2000);

//undefined
// let somethingUndefined;
// let somethingNull = null;

// //clear()
// localStorage.setItem('newThing', 'Look Ma, I set something in localStorage!');
// localStorage.setItem(
//     'secondThing',
//     'Look Ma, I set something else in localStorage!'
// );
// localStorage.setItem(
//     'thirdThing',
//     'Look Ma, I set a third thing in localStorage!'
// );
// setTimeout(() => {
//     localStorage.clear();
// }, 2000);

//what about a number?
// localStorage.setItem('num', 1);
// const storageNum = localStorage.getItem('num');
// console.log('storageNum: ', storageNum);
// console.log(1);
// console.log('storageNum type: ', typeof storageNum);

//more complex data
// localStorage.setItem('Hamed', { name: 'Hamed', age: 29 });
// const hamed = localStorage.getItem('Hamed');
// console.log('Hamed: ', hamed);
// console.log('Hamed type: ', typeof hamed);

//JSON.stringify
// localStorage.setItem('Hamed', JSON.stringify({ name: 'Hamed', age: 29 }));
// const hamed = localStorage.getItem('Hamed');
// console.log('Hamed: ', hamed);
// console.log('Hamed type: ', typeof hamed);

//JSON.parse()
// const parsedHamed = JSON.parse(hamed);
// console.log('parsedHamed: ', parsedHamed);
// console.log('parsedHamed type: ', typeof parsedHamed);
// console.log('parsedHamed age: ', parsedHamed.age);

//several items
// const people = [
//     { id: 1, name: 'Jason', age: 23 },
//     { id: 2, name: 'Sally', age: 42 },
//     { id: 3, name: 'Hannah', age: 47 },
// ];

// localStorage.setItem('people', JSON.stringify(people));

//add a person

// const addPerson = (newPerson) => {
//     people.push(newPerson);
//     localStorage.setItem('people', JSON.stringify(people));
//     console.log(people);
// };

// addPerson({ id: 4, name: 'Bashar', age: 72 });

//check for initial value in localStorage
// const addPerson = (newPerson) => {
//     const storedPeople = JSON.parse(localStorage.getItem('people')) || [];
//     storedPeople.push(newPerson);
//     localStorage.setItem('people', JSON.stringify(storedPeople));
//     console.log(storedPeople);
// };

// addPerson({ id: 5, name: 'Vladimir', age: 28 });

//do it with a form
//display with UI

const newPersonForm = document.querySelector('#new-person-form');
const peopleList = document.querySelector('.people-list');

const handleAddPerson = (e) => {
    e.preventDefault();
    const nameInput = document.querySelector('#name');
    const ageInput = document.querySelector('#age');
    const storedPeople = JSON.parse(localStorage.getItem('people')) || [];
    const newPerson = {
        id: crypto.randomUUID(),
        name: nameInput.value,
        age: ageInput.value,
    };
    storedPeople.push(newPerson);
    localStorage.setItem('people', JSON.stringify(storedPeople));
    console.log(storedPeople);
    nameInput.value = '';
    ageInput.value = '';
    const personLi = document.createElement('li');
    personLi.innerText = `${newPerson.name} is ${newPerson.age} years old`;
    peopleList.appendChild(personLi);
};

newPersonForm.addEventListener('submit', handleAddPerson);

//display with  UI from initial value

const showPeopleOnLoad = () => {
    const storedPeople = JSON.parse(localStorage.getItem('people'));
    if (storedPeople) {
        storedPeople.forEach((person) => {
            const personLi = document.createElement('li');
            personLi.innerText = `${person.name} is ${person.age} years old`;
            peopleList.appendChild(personLi);
        });
    }
};
showPeopleOnLoad();
