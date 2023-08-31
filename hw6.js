// Завдання 1-3
const strings = ['hello world', 'lorem ipsum', 'javascript is cool'];

const lengths = strings.map(str => str.length);
console.log(lengths);

const uppercaseStrings = strings.map(str => str.toUpperCase());
console.log(uppercaseStrings);

const lowercaseStrings = strings.map(str => str.toLowerCase());
console.log(lowercaseStrings);

// Завдання 4
let str = ' dirty string   ';
const cleanedStr = str.trim();
console.log(cleanedStr);

// Завдання 5
function stringToarray(str) {
    return str.split(' ');
}
let strToSplit = 'Ревуть воли як ясла повні';
let arr = stringToarray(strToSplit);
console.log(arr);

// Завдання 6
const numbers = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
const stringNumbers = numbers.map(num => num.toString());
console.log(stringNumbers);

// Завдання 7
function sortNums(arr, direction) {
    if (direction === 'ascending') {
        return arr.slice().sort((a, b) => a - b);
    } else if (direction === 'descending') {
        return arr.slice().sort((a, b) => b - a);
    } else {
        return arr;
    }
}
let nums = [11, 21, 3];
console.log(sortNums(nums, 'ascending'));
console.log(sortNums(nums, 'descending'));

// Завдання 8
let coursesAndDurationArray = [
    { title: 'JavaScript Complex', monthDuration: 5 },
    { title: 'Java Complex', monthDuration: 6 },
    { title: 'Python Complex', monthDuration: 6 },
    { title: 'QA Complex', monthDuration: 4 },
    { title: 'FullStack', monthDuration: 7 },
    { title: 'Frontend', monthDuration: 4 }
];

const sortedCourses = coursesAndDurationArray.slice().sort((a, b) => b.monthDuration - a.monthDuration);
console.log(sortedCourses);

const longCourses = coursesAndDurationArray.filter(course => course.monthDuration > 5);
console.log(longCourses);

const transformedCourses = coursesAndDurationArray.map((course, index) => {
    return { id: index + 1, title: course.title, monthDuration: course.monthDuration };
});
console.log(transformedCourses);

// Завдання 9
const cardDeck = [];
const suits = ['spade', 'diamond', 'heart', 'clubs'];
const values = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];
const colors = { spade: 'black', diamond: 'red', heart: 'red', clubs: 'black' };

for (const suit of suits) {
    for (const value of values) {
        cardDeck.push({ cardSuit: suit, value: value, color: colors[suit] });
    }
}
console.log(cardDeck);

const spadeAce = cardDeck.find(card => card.cardSuit === 'spade' && card.value === 'ace');
console.log(spadeAce);

const sixes = cardDeck.filter(card => card.value === '6');
console.log(sixes);

const redCards = cardDeck.filter(card => card.color === 'red');
console.log(redCards);

const clubsCards = cardDeck.filter(card => card.cardSuit === 'clubs');
console.log(clubsCards);

const highSpades = cardDeck.filter(card => card.cardSuit === 'spade' && parseInt(card.value) >= 9);
console.log(highSpades);

// Завдання 10
const packedBySuits = cardDeck.reduce((result, card) => {
    result[card.cardSuit].push(card);
    return result;
}, { spade: [], diamond: [], heart: [], clubs: [] });
console.log(packedBySuits);

// Завдання 11
// Припустимо, що масив coursesArray знаходиться у файлі arrays.js в папці 2023 plan
// Імпортуємо його тут для прикладу
const coursesArray = require('./2023 plan/arrays');

const coursesWithSass = coursesArray.filter(course => course.modules.includes('sass'));
console.log(coursesWithSass);

const coursesWithDocker = coursesArray.filter(course => course.modules.includes('docker'));
console.log(coursesWithDocker);
