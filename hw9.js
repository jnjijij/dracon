const block = document.createElement('div');
block.classList.add('wrap', 'collapse', 'alpha', 'beta');
block.style.backgroundColor = 'lightblue';
block.style.color = 'white';
block.style.fontSize = '18px';
document.body.appendChild(block);

const clonedBlock = block.cloneNode(true);
document.body.appendChild(clonedBlock);

const menuItems = ['Main', 'Products', 'About us', 'Contacts'];
const ul = document.createElement('ul');

for (const item of menuItems) {
    const li = document.createElement('li');
    li.textContent = item;
    ul.appendChild(li);
}

document.body.appendChild(ul);

const coursesAndDurationArray = [
    { title: 'JavaScript Complex', monthDuration: 5 },
    { title: 'Java Complex', monthDuration: 6 },
    { title: 'Python Complex', monthDuration: 6 },
    { title: 'QA Complex', monthDuration: 4 },
    { title: 'FullStack', monthDuration: 7 },
    { title: 'Frontend', monthDuration: 4 }
];

for (const course of coursesAndDurationArray) {
    const div = document.createElement('div');
    div.textContent = Title: ${course.title}, Duration: ${course.monthDuration} months;
    document.body.appendChild(div);
}

const simpsons = require('./arrays'); // Підставте шлях до файлу arrays.js

for (const member of simpsons) {
    const div = document.createElement('div');
    div.classList.add('member');
    div.textContent = ${member.name}, ${member.age}, ${member.job};
    document.body.appendChild(div);
}

const coursesArray = require('./arrays'); // Підставте шлях до файлу arrays.js

for (const course of coursesArray) {
    const div = document.createElement('div');
    div.classList.add('item');

    const heading = document.createElement('h1');
    heading.classList.add('heading');
    heading.textContent = course.title;

    const description = document.createElement('p');
    description.classList.add('description');
    description.textContent = course.monthDuration;

    div.appendChild(heading);
    div.appendChild(description);

    const modulesList = document.createElement('ul');
    for (const module of course.modules) {
        const moduleItem = document.createElement('li');
        moduleItem.textContent = module;
        modulesList.appendChild(moduleItem);
    }
    div.appendChild(modulesList);

    document.body.appendChild(div);
}
