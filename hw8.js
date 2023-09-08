// Функція конструктор для об'єктів User
function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

// Створення масиву з 10 об'єктами User
const usersArray = [];
for (let i = 1; i <= 10; i++) {
    const user = new User(i, Name${i}, Surname${i}, email${i}@example.com, 123-456-${i});
    usersArray.push(user);
}
console.log(usersArray);

// Відфільтрований масив з парними id
const evenIdUsers = usersArray.filter(user => user.id % 2 === 0);
console.log(evenIdUsers);

// Відсортований масив по id по зростанню
const sortedUsersById = usersArray.slice().sort((a, b) => a.id - b.id);
console.log(sortedUsersById);

// Клас для об'єктів Client
class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

// Створення масиву з 10 об'єктами Client
const clientsArray = [];
for (let i = 1; i <= 10; i++) {
    const client = new Client(i, Name${i}, Surname${i}, email${i}@example.com, 123-456-${i}, ['item1', 'item2']);
    clientsArray.push(client);
}
console.log(clientsArray);

// Відсортований масив по кількості товарів в полі order по зростанню
const clientsSortedByOrder = clientsArray.slice().sort((a, b) => a.order.length - b.order.length);
console.log(clientsSortedByOrder);

// Клас для об'єктів Car
function Car(model, manufacturer, year, maxSpeed, engineVolume) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineVolume = engineVolume;

    this.drive = function() {
        console.log(Їдемо зі швидкістю ${this.maxSpeed} на годину);
    };

    this.info = function() {
        for (const key in this) {
            if (this.hasOwnProperty(key)) {
                console.log(${key} - ${this[key]});
            }
        }
    };

    this.increaseMaxSpeed = function(newSpeed) {
        this.maxSpeed += newSpeed;
    };

    this.changeYear = function(newValue) {
        this.year = newValue;
    };

    this.addDriver = function(driver) {
        this.driver = driver;
    };
}

// Клас для об'єктів Prince
class Prince {
    constructor(name, age, foundShoe) {
        this.name = name;
        this.age = age;
        this.foundShoe = foundShoe;
    }
}

// Клас для об'єктів Cinderella
class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

// Створення масиву попелюшок
const cinderellasArray = [];
for (let i = 1; i <= 10; i++) {
    const cinderella = new Cinderella(Cinderella${i}, i + 20, i + 34);
    cinderellasArray.push(cinderella);
}

// Створення принца
const prince = new Prince('Prince Charming', 25, 37);

// Знаходження попелюшки, яка підходить до принца
for (const cinderella of cinderellasArray) {
    if (cinderella.footSize === prince.foundShoe) {
        console.log(The prince found his Cinderella: ${cinderella.name});
        break;
    }
}

// Знаходження попелюшки за допомогою методу find
const foundCinderella = cinderellasArray.find(cinderella => cinderella.footSize === prince.foundShoe);
console.log(Found Cinderella: ${foundCinderella.name});
