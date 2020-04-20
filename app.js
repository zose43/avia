// fetch()

function getPost(id) {
  return new Promise((resolve, reject) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((resp) => resp.json())
      .then((post) => resolve(post))
      .catch((err) => reject(err));
  });
}
//getPost(4).then(post => console.log(post));
function getPost2(id) {
  const [type, idUser] = id.split("-");
  return fetch(
    `https://jsonplaceholder.typicode.com/posts/${idUser}`
  ).then((resp) => resp.json());
}
// getPost2("user-1")
//   .then(post => console.log(post))
//   .catch(err => console.log(err));
async function getPost3(id) {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    console.log(res.json());
  } catch (error) {
    return Promise.reject();
  }
}
//getPost3(6).catch(err => console.log(err));

async function getAll() {
  const [resp, resp1] = await Promise.all([getPost3(3), getPost3(6)]);
  console.log(resp, resp1);
}
getAll();

// oop
function Product(brand, price, discount) {
  this.brand = brand;
  this.price = price;
  this.discount = discount;
  console.log(this);
}
const apple = new Product("apple", 75000, 10);
const samsung = new Product("samsung", 100000, 20);
Product.prototype.getPriceWithDisc = function () {
  return (this.price / 100) * this.discount;
};
Product.prototype.setPrice = function (newPrice) {
  this.price = newPrice;
};
// Object.create()
const protoExample = {
  sayHello() {
    return `HELLO WORLD!`;
  },
};
const objExample = Object.create(protoExample, {
  surname: {
    value: `Zorin`,
  },
});

// function User(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }
// User.prototype.getFullName = function() {
//   return `${this.firstName} ${this.lastName}`;
// };
// User.prototype.say = function() {
//   return `Hello, ${this.firstName} ${this.lastName}`;
// };
// const user = new User("kirill", "zorin");
// // customer
// function Customer(firstName, lastName, membership) {
//   User.apply(this, arguments);
// }
// Customer.prototype = Object.create(User.prototype);
// Customer.prototype.cunstructor = Customer;
// const customer = new Customer("olya", "podykova");
// ES6
const methodName = "setNewPrice";
class ProductES {
  constructor(brand, price, discount) {
    this.brand = brand;
    this.price = price;
    this.discount = discount;
  }
  getPriceWithDisc() {
    (this.price / 100) * this.discount;
  }

  [methodName](newPrice) {
    this.price = newPrice;
  }

  get brnd() {
    return this.brand;
  }

  set brnd(name) {
    return (this.brand = name);
  }

  static plus(str) {
    return str.toUpperCase();
  }
}
const newProduct = new ProductES("samsung", 50000, 20);

// class UserES {
//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   }
//   sayHello() {
//     return `Hello, ${this.firstName} !`;
//   }
// }
// const userES = new User("Vova", "Zorin");

// class CustomerES extends UserES {
//   constructor(firstName, lastName, membership) {
//     super(firstName, lastName);
//     this.membership = membership;
//   }

//   set surname(name) {
//     return (this.lastName = name);
//   }
// }
// const customerES = new CustomerES("olya", "podykova", 3);

class Component {
  constructor(tagName = "div") {
    this.tagName = tagName;
    this.node = document.createElement(tagName);
  }
  setText(text) {
    this.node.textContent = text;
  }
  addToPage() {
    document.body.appendChild(this.node);
  }
}
const comp = new Component("p");
// comp.setText("i will a new work soon");
// comp.addToPage();
class Calculator {
  constructor(num = 1) {
    this._num = num;
    if (typeof num !== "number")
      throw new Error(alert(`${num} is not a number!`));
  }
  _happyNumber = 21;
  #numberOfDevil = 666;
  get numberOfDevil() {
    return this.#numberOfDevil;
  }
  set happyNumber(num) {
    if (num < 10 || num > 21) {
      alert(`${num} is not happy!`);
    }
    this._happyNumber = num;
  }
  get happyNumber() {
    return this._happyNumber;
  }
  addict(num = 1) {
    if (typeof num !== "number") {
      return alert(`${num} is not a number!`);
    }
    const resp = Number((num + this._num).toFixed(2));
    console.log(resp);
  }
  subtract(num = 1) {
    if (typeof num !== "number") {
      return alert(`${num} is not a number!`);
    }
    const resp = Number((this._num - num).toFixed(2));
    console.log(resp);
  }
  multiplay(num = 1) {
    if (typeof num !== "number") {
      return alert(`${num} is not a number!`);
    }
    const resp = Number((this._num * num).toFixed(2));
    console.log(resp);
  }
  divide(num = 1) {
    if (typeof num !== "number" || num === 0) {
      return alert(`${num} is not a number or number is 0`);
    }
    const resp = Number((this._num / num).toFixed(2));
    console.log(resp);
  }
  set number(num) {
    this._num = num;
  }
  get number() {
    return this.num;
  }
}
const calc = new Calculator();

class Planet {
  constructor(name) {
    this.name = name;
  }
  get planet() {
    return `This planet is ${this.name}`;
  }
  set planet(name) {
    return (this.name = name);
  }
}
const planet = new Planet("Jupiter");

class PlanetWithSatellite extends Planet {
  constructor(name, sattelite) {
    super(name);
    this.sattelite = sattelite;
  }
  getPlanetSattelite() {
    return `${super.planet}, this sattelite is ${this.sattelite}`;
  }
}
const planetSattelite = new PlanetWithSatellite("Jupiter", "Titan");

class Task {
  constructor(name) {
    this.name = name;
    this._floors = 18;
  }
  get floor() {
    return `${this._floors}`;
  }
  set floor(amount) {
    if (typeof amount !== "number" || amount <= 0)
      throw new Error(`${amount} is not number or < 0`);
    return (this._floors = amount);
  }
}
class House extends Task {
  constructor(name, flatOnFloor) {
    super(name);
    this.flatOnFloor = flatOnFloor;
  }
  getFlatOnFloor() {
    return `${this.flatOnFloor} flat on floor`;
  }
  getAmontOfFloors() {
    return {
      Floors: super.floor,
      "All flat": super.floor * this.flatOnFloor,
    };
  }
}
const house = new House("Zavodskaya", 15);

class SaleBuilding extends Task {
  constructor(name, shops) {
    super(name);
    this.shops = shops;
  }
  getShopsOnFloor() {
    return `${this.shops} shops on floor`;
  }
  getAmountOfShops() {
    return {
      Floors: super.floor,
      "All shops": super.floor * this.shops,
    };
  }
}
const saleBuilding = new SaleBuilding("Kristall", 17);

class Furniture {
  constructor(name = "", price = 1) {
    this.name = name;
    this.price = price;
    if (typeof price !== "number") throw new Error(`${price} is not a number!`);
  }
  _availabilityAcomputerTable = `a computer table is not in a availability`;
  _availabilityAlongSofa = `a long sofa in availability`;
  getInfoHouse() {
    console.log(`${this.name}, ${this.price}, ${this._availabilityAlongSofa}`);
  }
  getInfoOffice() {
    console.log(
      `${this.name}, ${this.price}, ${this._availabilityAcomputerTable}`
    );
  }
}
const furnitureForHouse = new Furniture("chair", 1700);
const furnitureForOffice = new Furniture("table", 2500);

class User {
  constructor(name, dateOfRegistr) {
    this.name = name;
    this.dateOfRegistr = dateOfRegistr;
  }
  getInfo() {
    return `${this.name}, ${this.dateOfRegistr}`;
  }
}
class Admin extends User {
  constructor(name, dateOfRegistr) {
    super(name, dateOfRegistr);
  }
  #superAdmin = false;

  info() {
    return `${super.getInfo()}, ${this.#superAdmin}`;
  }
}
class Guest extends User {
  constructor(name, dateOfRegistr, validDate) {
    super(name, dateOfRegistr);
    this.validDate = validDate;
  }
  info() {
    return `${super.getInfo()}, ${this.validDate}`;
  }
}

const admin = new Admin("olya podykova", "14.02.2018");
const guest = new Guest("liza zorina", "23.05.2019", "31.08.2019");

/**
 * protectValue
 * privateValue
 */
function User88(name) {
  let _username = name;
  return Object.freeze({
    getName() {
      return _username;
    },
    setName(name) {
      return (_username = name);
    },
  });
}
const user88 = new User88("kira");
