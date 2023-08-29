// Функція обчислення площі прямокутника
const rectangleArea = (a, b) => a * b;

// Функція обчислення площі кола
const circleArea = r => Math.PI * r * r;

// Функція обчислення площі циліндра
const cylinderArea = (h, r) => 2 * Math.PI * r * (h + r);

// Функція виводу масиву
const printArray = arr => arr.forEach(element => console.log(element));

// Функція створення параграфу з текстом
const createParagraph = text => `<p>${text}</p>`;

// Функція створення списку ul з однаковими елементами li
const createList = (text, count) => {
  let listHTML = '<ul>';
  for (let i = 0; i < count; i++) {
    listHTML += `<li>${text}</li>`;
  }
  listHTML += '</ul>';
  return listHTML;
};

// Функція створення списку ul з вказаною кількістю елементів li та однаковим текстом
const createDynamicList = (text, count) => {
  let listHTML = '<ul>';
  for (let i = 0; i < count; i++) {
    listHTML += `<li>${text}</li>`;
  }
  listHTML += '</ul>';
  return listHTML;
};

// Функція створення списку для масиву примітивів
const createPrimitiveList = arr => {
  let listHTML = '<ul>';
  arr.forEach(item => {
    listHTML += `<li>${item}</li>`;
  });
  listHTML += '</ul>';
  return listHTML;
};

// Функція створення блоків для об'єктів з полями id, name, age
const createObjectBlocks = arr => {
  let blocksHTML = '';
  arr.forEach(obj => {
    blocksHTML += `<div>ID: ${obj.id}<br>Name: ${obj.name}<br>Age: ${obj.age}</div>`;
  });
  return blocksHTML;
};

// Функція пошуку найменшого числа в масиві
const findMinNumber = arr => Math.min(...arr);

// Функція підрахунку суми елементів масиву
const sum = arr => arr.reduce((total, current) => total + current, 0);

// Функція обміну значень за індексами у масиві
const swap = (arr, index1, index2) => {
  [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
  return arr;
};

// Функція обміну валюти
const exchange = (sumUAH, currencyValues, exchangeCurrency) => {
  const exchangeRate = currencyValues.find(currency => currency.currency === exchangeCurrency).value;
  const exchangedAmount = sumUAH / exchangeRate;
  return exchangedAmount;
};
