const array = [1, 'text', true, null, { key: 'value' }, [1, 2, 3], 5.67, undefined, false, 'another text'];

for (const element of array) {
  console.log(element);
}

const book1 = {
  title: 'Book 1',
  pageCount: 300,
  genre: 'Fantasy',
};

const book2 = {
  title: 'Book 2',
  pageCount: 250,
  genre: 'Mystery',
};

const book3 = {
  title: 'Book 3',
  pageCount: 400,
  genre: 'Science Fiction',
};

const author1 = {
  name: 'Author 1',
  age: 40,
};

const author2 = {
  name: 'Author 2',
  age: 35,
};

const bookWithAuthors1 = {
  title: 'Book with Authors 1',
  pageCount: 280,
  genre: 'Adventure',
  authors: [author1, author2],
};

const bookWithAuthors2 = {
  title: 'Book with Authors 2',
  pageCount: 320,
  genre: 'Historical Fiction',
  authors: [author2],
};

const bookWithAuthors3 = {
  title: 'Book with Authors 3',
  pageCount: 220,
  genre: 'Romance',
  authors: [author1],
};

const users = [
  { name: 'User 1', username: 'user1', password: 'pass123' },
  { name: 'User 2', username: 'user2', password: 'secure456' },
  { name: 'User 3', username: 'user3', password: 'mysecret' },
  // Додайте ще користувачів тут
];

for (const user of users) {
  console.log(user.password);
}

const x = 1;

if (x !== 0) {
  console.log('Вірно');
} else {
  console.log('Невірно');
}

const time = 30;

if (time < 15) {
  console.log('Перша чверть години');
} else if (time < 30) {
  console.log('Друга чверть години');
} else if (time < 45) {
  console.log('Третя чверть години');
} else {
  console.log('Четверта чверть години');
}

const day = 20;

if (day <= 10) {
  console.log('Перша декада місяця');
} else if (day <= 20) {
  console.log('Друга декада місяця');
} else {
  console.log('Третя декада місяця');
}

const dayOfWeek = 3;

switch (dayOfWeek) {
  case 1:
    console.log('Понеділок');
    break;
  case 2:
    console.log('Вівторок');
    break;
  case 3:
    console.log('Середа');
    break;
  // Додайте інші дні тижня тут
  default:
    console.log('Невірний день тижня');
}

const num1 = 5;
const num2 = 8;

const maxNum = num1 >= num2 ? num1 : num2;
console.log('Максимальне число:', maxNum);

let xValue = null;

xValue = xValue || 'default';
console.log('Значення xValue:', xValue);

const coursesAndDurationArray = [
  { course: 'Course 1', duration: 4 },
  { course: 'Course 2', duration: 6 },
  { course: 'Course 3', duration: 3 },
  // Додайте інші курси тут
];

for (const course of coursesAndDurationArray) {
  if (course.duration > 5) {
    console.log('Супер:', course.course);
  }
}
