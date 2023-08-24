function rectangleArea(a, b) {
    return a * b;
}

function circleArea(r) {
    return Math.PI * r * r;
}

function cylinderArea(r, h) {
    return 2 * Math.PI * r * (r + h);
}

function printArrayElements(arr) {
    arr.forEach(element => {
        console.log(element);
    });
}

function createParagraph(text) {
    return `<p>${text}</p>`;
}

function createListWithEqualLi(text, count) {
    let list = '<ul>';
    for (let i = 0; i < count; i++) {
        list += `<li>${text}</li>`;
    }
    list += '</ul>';
    return list;
}

function createObjectList(objects) {
    let result = '<ul>';
    objects.forEach(obj => {
        result += `<li>${obj.id}, ${obj.name}, ${obj.age}</li>`;
    });
    result += '</ul>';
    return result;
}

function findMinimumNumber(arr) {
    return Math.min(...arr);
}

function sum(arr) {
    return arr.reduce((total, current) => total + current, 0);
}

function swap(arr, index1, index2) {
    const temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
    return arr;
}

function exchange(sumUAH, currencyValues, exchangeCurrency) {
    const exchangeRate = currencyValues.find(currency => currency.currency === exchangeCurrency).value;
    return sumUAH / exchangeRate;
}

const objects = [
    { id: 1, name: 'John', age: 25 },
    { id: 2, name: 'Alice', age: 30 },
    { id: 3, name: 'Bob', age: 22 }
];

console.log(rectangleArea(5, 10));
console.log(circleArea(7));
console.log(cylinderArea(5, 10));
printArrayElements([1, 2, 3, 4, 5]);
console.log(createParagraph('Hello, world!'));
console.log(createListWithEqualLi('Item', 3));
console.log(createObjectList(objects));
console.log(findMinimumNumber([10, 5, 8, 3, 12]));
console.log(sum([1, 2, 10]));
console.log(swap([11, 22, 33, 44], 0, 1));
console.log(exchange(10000, [{ currency: 'USD', value: 40 }, { currency: 'EUR', value: 42 }], 'USD'));
