// 3 lesson
// Symbol();
// let personality = { name: "Lola", age: 24 };
// personality.work = "progger";
// const user = {};

// user.name1 = 'Kirill';
// user.name2 = 'Lola';
// user.name3 = 'Liza';

// user.age1 = 23;
// user.age2 = 36;
// user.age3 = 12;

// console.table(user);

// let arr = ['black', 'blue', 'white', 'green', 'pink'];
// let value = Math.abs(Math.round(Math.random() * arr.length-1));
// console.log(value, arr[value]);

// console.log(Math.PI.toFixed(2));
// console.log(Math.max(15, 11, 16, 12, 51, 12, 13, 51), Math.min(15, 11, 16, 12, 51, 12, 13, 51));

// console.log((Math.random() * 5).toFixed())
// console.log(Math.round(0.6 + 0.7));
// let message =  'My love is Lola!';
// let result = 0;
// for (let i = 0; i < message.length; i++) {
//     if (message[i] === 'l') {
//         result += String(message[i].toUpperCase());
//     }
// }
// console.log(message.replace('l', 'L'))

// const name = "Kirill";
// const surname = "Zorin";
// const age = 24;
// let str = a;
// str = `<ul>
//             <li>name: ${name}</li>
//             <li>surname: ${surname}</li>
//             <li>age: ${age}</li>
//       </ul>`;
// document.body.innerHTML = str;
// const user = {};

// user.name = "Kira";
// user.surname = "Zorin";
// user.age = 24;
// user.isAdmin = true;
// user["user-adress"] = {
//   city: "Kirov",
//   street: "Zavodskaya",
//   house: 10,
//   flat: 229
// };
// user.skills = ["html", "css", "js", "sql"];
// user["user-adress"].country = "Russia";
// const product = {};
// product.product = 'iphone';
// product.price = 1000;
// product.currency = 'dollar';
// product.detalis = {
//     model: 'se',
//     color: 'white'
// };

// let car = {};

// car.name = "bmv";
// car.age = 10;
// car.create = 2008;
// car.needRepair = false;

// if (car.age > 5) {
//   car.needRepair = true;
//   console.log("needRepair");
// } else {
//   console.log("its`s ok!");
// }

// let item = {};

// item.name = "intelCore i7";
// item.price = "2000";
// item.discount

// if (item.discount && (item.discount !== undefined || item.discount !== null)) {
//   item.priceWithDiscount =
//     item.price - (Number(item.price) / 100) * Number(item.discount);
//   console.log(item.priceWithDiscount);
// } else {
//   console.log(item.price);
// }

// const product = {};

// product.name = 'apple';
// product.price = '21';

// let min = 10;
// let max = 20;

// if (product.price >= min && product.price <= max) {
//   console.log(product.name);
// }
// else {
//   console.log('this product doesen`t find');
// }

// let color = 'pink';

// switch(color) {
//   case 'yellow':
//     console.log('color is yellow');
//     break;
//   case 'red':
//     console.log('color is red');
//     break;
//   default:
//     console.log('empty');
// }

// let a = 'inline';

// switch (a) {
//   case 'block':
//     console.log('block');
//     break;
//   case 'none':
//     console.log('none');
//     break;
// }

// a = a === 'inline' ? console.log('inline') : console.log('other');

// const color = [];
// color.push('h');
// color.push('e');
// color.push('l');
// color.push('l');
// color.push('o');

// let result = '';

// for (let i = color.length-1; i >= 0; i--) {
//   result += color[i];
//   console.log(result);
// }

// console.log(color.reverse().toString());

function getNameAge() {
  console.log(this.name, this.age);
}

// const usersObj = {};

// for (let i = 0; i < users.length; i++) {
//   usersObj[users[i].name] = users[i];
//   console.log(users[i].name, users[i].age);
// }

// for (let item in color) {
//   console.log(color[item]);
// }

// str = "i am in the easycode";
// let result = "";
// for (let i = 0; i < str.length; i++) {
//   if (str[i - 1] === " " || i === 0) {
//     result += str[i].toUpperCase();
//   } else {
//     result += str[i];
//   }
// }
// console.log(result);

// const toUpStr = str => {
//   let result = "";
//   for (let i = 0; i < str.length; i++) {
//     if (str[i - 1] === " " || i === 0) {
//       result += str[i].toUpperCase();
//     } else {
//       result += str[i];
//     }
//   }
//   return result;
// };

// let str = "tseb eht ma i";
// let result = "";
// for (let i = str.length - 1; i >= 0; i--) {
//   result += str[i];
// }
// console.log(result);

// let num = 15;
// let result = 1;
// for (let i = num; i > 0; i--) {
//   result *= i;
// }
// console.log(result)

// let str = "JavaScript is a pretty good language";
// let result = "";
// for (let i = 0; i < str.length; i++) {
//   if (str[i] === " ") {
//     continue;
//   }
//   if (str[i - 1] === " " || i === 0) {
//     result += str[i].toUpperCase();
//   } else {
//     result += str[i];
//   }
// }
// console.log(result);

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// for (let value of arr) {
//   if (arr[value] % 2 === 0) {
//     console.log(arr[value]);
//   }
// }

// let list = {};
// list.name = "Kirill";
// list.work = "easyCode";
// list.age = 24;

// for (let value in list) {
//   if (typeof list[value] === typeof "") {
//     console.log(list[value].toUpperCase());
//   }
// }

// console.error('pidar!!')

// function multiplay() {
//   if (arguments.length === 0) {
//     return 0;
//   }
//   let result = 1;
//   for (let i = 0; i < arguments.length; i++) {
//     result *= arguments[i];
//   }
//   return result;
// }

// const reverse = str => {
//   let result = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     result += str[i];
//   }
//   return result;
// };

// console.log(reverse("kirA"));

// const number = str => {
//   let result = "";
//   for (let i = 0; i < str.length; i++) {
//     result += `${str[i].charCodeAt()} `;
//   }
//   return result.slice(0, result.length - 1);
// };

// const guessNumber = num => {
//   if (num >= 11 || num <= 0) {
//     return console.error("fuck!!");
//   }
//   let lottery = Math.ceil(Math.random() * 10);
//   lottery;
//   if (num === lottery) {
//     return console.log("You are win!");
//   } else {
//     return console.log(
//       `You are loose, your num is ${num}, but lottery num is ${lottery}`
//     );
//   }
// };

const getArr = num => {
  let result = [];
  for (let i = 1; i <= num; i++) {
    result.push(i);
  }
  return result;
};

const doubleArray = arr => {
  return arr.concat(arr);
};

function changeCollections() {
  let arr = [];
  for (let i = 0; i < arguments.length; i++) {
    arr.push(arguments[i].splice(1));
  }
  return arr;
}

const funcGetUsers = (arr, key, value) => {
  for (let i = 0; i < arr.length; i++) {
    if (!arr[i].key) {
      arr[i].key = "value";
    }
  }
  console.log(arr);
};

const arr = [];
arr.push("Liza");
arr.push("Lola");
arr.push("Sveta");
arr.push("Nata");

// let res = [];
// for (let i = 0; i < arr.length; i++) {
//   res.push(arr[i].length);
//   console.log(res);
// }

function newArr(arr, fn) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(fn(arr[i]));
  }
  console.log(newArr);
  return newArr;
}

const nameLength = el => {
  return el.length;
};

const upperCase = el => {
  return el.toUpperCase();
};

const question = job => {
  let libraryJob = {
    developer: `what do you know about JS?`,
    teacher: `what do you know about school?`,
    driver: `what do you know about cars`
  };
  return function appeal(name) {
    return `${name}, ${libraryJob[job]}`;
  };
};

let arrDelirium = ["i`m", "in", "love"];
let obj = [
  { age: 45, name: "Jhon" },
  { age: 20, name: "Aaron" }
];
let arrRev = ["abc", "123"];

function getArray(arr, handler) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    res.push(handler(arr[i]));
  }
  return `New value: ${res.join(", ")}`;
}
const arrJoin = el => {
  return el;
};
const arrJoin2 = el => {
  return el * 10;
};
const arrJoinObj = el => {
  return `${el["name"]} is ${el["age"]}`;
};
// не получилось с reverse
const arrReverse = el => {
  el.reverse();
};
//

// every
function every(arr, callback) {
  let res = [];
  if (Array.isArray(arr) === false) {
    console.error(`${arr} is not an array`);
    return `error`;
  }
  if (typeof callback !== "function") {
    console.error(`${callback} is not a function`);
    return `error`;
  }
  for (let i = 0; i < arr.length; i++) {
    res.push(callback(arr[i]));
    if (callback(arr[i]) === false) {
      return false;
    }
  }
  return true;
}
const test = el => {
  if (el < 5) {
    return false;
  }
};

let num = [5, 20, 5];

//This
const getThis = () => {
  console.log(this);
};
// console.log(window);
// console.log(window.getThis);
function getInfo() {
  console.log(this.information);
}
const prod1 = {
  name: `Intel`,
  price: 100,
  getName() {
    return this.name;
  },
  getPrice: function() {
    console.log(this.price);
  },
  info: {
    information: [`2.3ghz`],
    getInfo
  }
};

prod2 = {
  name: "AMD",
  price: 70
};
prod2.getName = prod1.getName;

function getProcessor() {
  console.log(`very quick ${this.processor}`);
  return this;
}
function getGraphicsCard() {
  console.log(`better, than more ${this.graphicsCard}`);
  return this;
}

const prod3 = {
  name: "ARM",
  price: 80,
  processor: "core i7",
  getProcessor,
  graphicsCard: `Nvidia`,
  getGraphicsCard
};

// const getProcessorBind = prod3.getProcessor.bind(prod3, `$`);
// console.log(setTimeout(alert(`Hi! how are you?`), 3000));

const rectangle = {
  a: 12,
  h: 6,
  getSquare() {
    console.log(`Square is ${this.a * this.h}`);
    return this;
  }
};
function getPrice() {
  console.log(`price is ${this.price}`);
  return this;
}
function getPriceWithDisc(sign = "%") {
  console.log(
    `With ${this.discount} ${sign} : ${this.price -
      (this.price * this.discount) / 100}`
  );
  return this;
}
const prod = {
  name: "ritterSpot",
  price: 150,
  discount: 50,
  getPrice,
  getPriceWithDisc
};

const heigh = {
  h: 21,
  addHeigh() {
    return (this.h += 1);
  },
  turnDownHeigh() {
    return (this.h -= 1);
  }
};
const calc = {
  value: 1,
  double() {
    console.log(this.value * 2);
    return this;
  },
  addValue() {
    console.log((this.value += 1));
    return this;
  },
  turnDownValue() {
    console.log((this.value -= 1));
    return this;
  }
};
function totalPrice() {
  console.log(`total price is: ${this.price * this.amount}`);
  return this;
}
const prod4 = {
  price: 350,
  amount: 6,
  totalPrice
};
const detail = {
  amount: 50,
  price: 350
};
detail.totalPrice = prod4.totalPrice;
const sizes = { width: 5, height: 10 },
  getSquare = function() {
    return this.width * this.height;
  };
const square = getSquare.call(sizes);
// const element = {
//   height: 25,
//   getHeight: function() {
//     return this.height;
//   }
// };
// const getElHeight = element.getHeight();
// let element = {
//   height: 25,
//   getHeight: function() {
//     console.log(arguments);
//     return this.height;
//   }
// };

// let getElementHeight = element.getHeight.bind(element);
// getElementHeight();

// const retObj = (str = "") => {
//   return {
//     value: str,
//     length: str.length
//   };
// };

//getElementHeight(1, 3, "hell");

function sum() {
  const params = Array.prototype.slice.call(arguments);

  if (params.length) {
    return params.reduce((acc, add) => acc + add);
  }
  return 0;
}

// const users = [
//   {
//     name: "Lola",
//     gender: female,
//     age: 36,
//     familyPosition: "married",
//     hobby: "sleeping",
//     getNameAge,
//     favouriteDink: "coffee"
//   },
//   {
//     name: "Liza",
//     gender: female,
//     age: 13,
//     familyPosition: "notMarried",
//     hobby: "paint",
//     getNameAge,
//     favouriteDink: "juice"
//   },
//   {
//     name: "Nata",
//     gender: female,
//     age: 51,
//     familyPosition: "notmarried",
//     hobby: "reading",
//     getNameAge,
//     favouriteDink: "blacktea"
//   },
//   {
//     name: "Dasha",
//     gender: female,
//     age: 4,
//     familyPosition: "notMarried",
//     hobby: "games",
//     getNameAge,
//     favouriteDink: "milk"
//   },
//   {
//     name: "Kirill",
//     gender: male,
//     age: 24,
//     familyPosition: "Married",
//     hobby: "photograph",
//     getNameAge,
//     favouriteDink: "gainer"
//   }
// ];
//users.forEach((el, i, arr) => console.log(el));

// const Less30 = users.filter(el => el.age < 30);
// //console.log(Less30)

// const usersName = users.map(user => user.age);
// //console.log(usersName);

// const totalAge = users.reduce((user, userAdd) => user + userAdd.age, 0);
// //console.log(totalAge);

// const newUsers = users.reduce((acc, user) => {
//   acc[user.name] = user;
//   return acc;
// }, {});

const gainer = [
  {
    brand: "dymatize",
    flavour: "chocolate",
    price: 1500,
    weight: 5,
    id: 01
  },
  {
    brand: "san",
    flavour: "vanile",
    price: 2700,
    weight: 3.5,
    id: 02
  },
  {
    brand: "bsn",
    flavour: "banan",
    price: 4000,
    weight: 4.2,
    id: 03
  },
  {
    brand: "ultimationNutrition",
    flavour: "strawberry",
    price: 3500,
    weight: 3,
    id: 04
  }
];

const flavourGainer = gainer.every(el => el.flavour === "strawberry");
const priceGainer = gainer.every(el => el.price >= 1500);

//console.log(priceGainer);

const findWeight = gainer.find(el => el.weight === 3);

//console.log(findWeight);

// sort

const nameArr = ["Kira", "Lola", "Liza", "Vova", "Anna"];
const numArr = [12, 4, 50, 1, 0, 18, 40];

const numObj = numArr.map(el => ({ digit: el, isEven: !(el % 2) }));

const is0 = numArr.some(el => el === 0);

const strArr = ["yes", "hello", "no", "easycode", "what"];

const isMoreLength = strArr.some(el => el.length > 8);

const rebus = [
  { char: "a", index: 12 },
  { char: "w", index: 8 },
  { char: "Y", index: 10 },
  { char: "p", index: 3 },
  { char: "p", index: 2 },
  { char: "N", index: 6 },
  { char: " ", index: 5 },
  { char: "y", index: 4 },
  { char: "r", index: 13 },
  { char: "H", index: 0 },
  { char: "e", index: 11 },
  { char: "a", index: 1 },
  { char: " ", index: 9 },
  { char: "!", index: 14 },
  { char: "e", index: 7 }
];

const collectRebus = rebus.sort((prev, next) => prev.index - next.index);

const arrOfArr = [[14, 45], [1], ["a", "c", "d"]];
const sortArr = arrOfArr.sort((prev, next) => prev.length - next.length);

const intel = [
  { cpu: "intel", info: { cores: 2, сache: 3 } },
  { cpu: "intel", info: { cores: 4, сache: 4 } },
  { cpu: "amd", info: { cores: 1, сache: 1 } },
  { cpu: "intel", info: { cores: 3, сache: 2 } },
  { cpu: "amd", info: { cores: 4, сache: 2 } }
];
const intelSort = intel.sort((prev, next) => prev.info.cores - next.info.cores);
nameArr.sort();

let products = [
  { title: "prod1", price: 5.2 },
  { title: "prod2", price: 0.18 },
  { title: "prod3", price: 15 },
  { title: "prod4", price: 25 },
  { title: "prod5", price: 18.9 },
  { title: "prod6", price: 8 },
  { title: "prod7", price: 19 },
  { title: "prod8", price: 63 }
];

function rangePrice(arr, price1, price2) {
  const rangeFilter = arr.filter(
    el => el.price >= price1 && el.price <= price2
  );
  const rangeSort = rangeFilter.sort((prev, next) => prev.price - next.price);
  return rangeSort;
}

numArr.sort((prev, next) => prev - next);

const gainPriceSort = gainer.sort(
  (elPrev, elNext) => elPrev.price - elNext.price
);
//console.log(gainPriceSort);

let obj1 = {
  name: "Lola",
  type: "crazy",
  info: ["html", "css", "js"]
};
let obj2 = {
  name: "kira"
};

let newObj = Object.assign({}, obj1);
const objJson = JSON.stringify(obj1);
newObj = JSON.parse(objJson);
console.log(newObj);

const obj2000 = {
  name: "Kira",
  age: 24,
  info: ["js", "css", "html"]
};
const obj1995 = {
  age: 36,
  name: "Lola"
};

const newObj2000 = JSON.parse(JSON.stringify(obj2000));

let obj2000Keys = Object.keys(obj2000);
let obj2000Value = Object.values(obj2000);
let obj2000Entries = Object.entries(obj2000);
let obj2000FromEntries = Object.fromEntries([
  ["name", "kira"],
  ["age", 24]
]);

const user21 = {
  firstName: "Kirill",
  lastName: "Zorin",
  info: {
    skills: ["css", "html"],
    work: "freeLance"
  },
  family: ["mom", "father", "sister", "jess"]
};

// const { firstName: name, lastName, age = 24 } = user21;
// console.log(name);
const {
  info: { work = "calls", skills },
  family
} = user21;
//console.log(work, skills, family);

const cars = ["audi", ["bmv", "lada"], "citroen"];
const [a, ...other] = cars;
console.log(other, a);
const [...newCars] = cars;

const colors = ["red", "green", "black", "blue"];

const colorsCars = [...colors, ...cars];
const newUser21 = { ...user21 };

const {
  info: {
    skills: [css, html]
  }
} = newUser21;

function myPerson({
  firstName = "",
  lastName = "",
  info: { skills } = ""
} = {}) {
  console.log(firstName, lastName, skills);
}

myPerson(user21);

const num1 = [1, 2, 3, 4, 5, 6, 7, 8];
function getNum1(arr) {
  console.log(...arr);
}
getNum1(num1);

function getArr1() {
  return {
    first: arguments[0],
    other: [...arguments].slice(1)
  };
}
getArr1(1, 2, 3, 4, 5);

const organization = {
  nameCompany: "google",
  info: {
    employees: ["vlad", "olga"],
    partners: ["microsoft", "facebook", "xing"]
  }
};

function getInfo1({
  nameCompany = "Unknown",
  info: {
    partners: [mc, fb]
  }
} = {}) {
  console.log(`Name: ${nameCompany}\nPartners: ${mc}, ${fb}`);
}
getInfo1(organization);

const car1 = {
  brand: "lada",
  year: 2019,
  get age() {
    return `year is ${this.year}`;
  },
  set age(value) {
    return (this.year = value);
  }
};
Object.defineProperty(car1, "age", {
  // configurable: false,
  // enumerable: false,
  // writable: false
  // get: function() {
  //   return `Car was made in ${this.year}`;
  // }
});

function foo() {
  return (globalVar = 10);
}

// Object.defineProperty(window, "globalVar", {
//   set: function(value) {
//     console.log(value);
//     debugger;
//   }
// });

let str = "hello world";
console.dir(String("hello").toUpperCase());

const strObj = new String("hello");

console.dir(Number);

const div = document.getElementsByTagName("div");
const div1 = document.querySelector("div");
const title = document.querySelectorAll("h1");

const titles = document.getElementsByClassName("title");
// Дделать функцию!!
function isParent(parent, child) {
  const trueParent = child.parentElement;
  return !(trueParent === parent);
}
const titlee = document.querySelector("h1");
const span = document.createElement("span");
span.classList.add("text");
span.textContent = " span is active";
//titlee.appendChild(span);

const fragment = document.createDocumentFragment();
console.log(fragment);

const p = document.querySelector("p");
//console.log(p.textContent);

function getNodeInfo(objNode) {
  return {
    nodeType: objNode.nodeType,
    tagName: objNode.tagName,
    nodeChild: objNode.childNodes
  };
}
const ul = document.querySelector("ul");
function getTextFromUl() {
  return ul.innerText.split("\n");
}

//const p = document.querySelector("p");
const body = document.querySelector("body");
const link = document.querySelector("a");

// link[0].classList.add("custom-link");
// link[1].classList.add("custom-link");
// link[2].classList.add("custom-link");
// link[3].classList.add("custom-link");
// link[4].classList.add("custom-link");
// link[5].classList.add("custom-link");

// const h3 = document.createElement("h2");
// h3.innerText = "Hello,kira";
// h3.className = "greeting";
// titlee.appendChild(h3);

//const container = document.querySelector(".container");

const btn = document.querySelector("button");
// btn.addEventListener("click", function(e) {
//   console.log(e);
// });
// btn.addEventListener(`click`, e => {
//   const div = document.createElement("div");
//   const nestedBtn = document.createElement("button");
//   div.textContent = Math.random();
//   nestedBtn.textContent = "button";
//   div.appendChild(nestedBtn);
//   container.appendChild(div);
// });

// link.addEventListener("click", function(e) {
//   e.preventDefault();
//   console.log(`click`);
// });

// container.addEventListener("click", e => {
//   console.dir(e.target);
// });

// const li = document.createElement("li");
// const li1 = document.createElement("li");
// li.textContent = `item ${document.querySelectorAll("li").length}`;
// li1.textContent = `item ${document.querySelectorAll("li").length}`;
// li.classList.add("new-item");
// li1.classList.add("new-item");
// fragment.appendChild(li);
// fragment.appendChild(li1);
// ul.appendChild(fragment);

// const li = document.createElement("li");
// li.classList.add("new-item");
// li.textContent = `item ${document.querySelectorAll("li").length + 1}`;
// ul.appendChild(li);

// const li1 = document.createElement("li");
// li1.classList.add("new-item");
// li1.textContent = `item ${document.querySelectorAll("li").length + 1}`;
// ul.appendChild(li1);
// const li2 = document.createElement("li");
// li2.classList.add("new-item");
// li2.textContent = `item ${document.querySelectorAll("li").length + 1}`;
// ul.appendChild(li2);
// const trueLi = document.querySelectorAll("li");

// trueLi[0].insertAdjacentHTML("beforebegin", "<strong> </strong>");
// trueLi[1].insertAdjacentHTML("beforebegin", "<strong> </strong>");
// trueLi[2].insertAdjacentHTML("beforebegin", "<strong> </strong>");
// trueLi[3].insertAdjacentHTML("beforebegin", "<strong> </strong>");
// trueLi[4].insertAdjacentHTML("beforebegin", "<strong> </strong>");
// trueLi[5].insertAdjacentHTML("beforebegin", "<strong> </strong>");
// trueLi[6].insertAdjacentHTML("beforebegin", "<strong> </strong>");

const picture = document.createElement("img");
body.insertAdjacentElement("beforebegin", picture);
picture.setAttribute("src", "picture.jpg");
picture.setAttribute("alt", "picture");

// const mark = document.querySelector("mark");
// mark.innerText += " green";
// mark.classList.add("green");

const users = [
  {
    balance: 2853.33,
    name: "Buckner Osborne",
    email: "bucknerosborne@empirica.com"
  },
  {
    balance: 1464.63,
    name: "Rosalie Smith",
    email: "rosaliesmith@katakana.com"
  },
  {
    balance: 2823.39,
    name: "Estrada Davenport",
    email: "estradadavenport@ebidco.com"
  }
];
const userss = [
  {
    balance: 2853.33,
    name: "Buckner Osborne",
    email: "bucknerosborne@empirica.com"
  },
  {
    balance: 1464.63,
    name: "Rosalie Smith",
    email: "rosaliesmith@katakana.com"
  },
  {
    balance: 2823.39,
    name: "Estrada Davenport",
    email: "estradadavenport@ebidco.com"
  }
];

const users2 = Object.assign({}, users);

const thTitle = Object.keys(users2[1]);

const balanceBigger = users.sort((prev, next) => prev.balance - next.balance);

const balanceSmaller = userss.sort((prev, next) => next.balance - prev.balance);

const table = document.createElement("table");
const buttonBalance = document.createElement("button");

const trTh = document.createElement("tr");

const trTdfir = document.createElement("tr");
const trTdsec = document.createElement("tr");
const trTdthr = document.createElement("tr");

const trBalance = document.createElement("tr");

const th0 = document.createElement("th");
const th1 = document.createElement("th");
const th2 = document.createElement("th");

const td0 = document.createElement("td");
const td00 = document.createElement("td");
const td000 = document.createElement("td");

const td1 = document.createElement("td");
const td11 = document.createElement("td");
const td111 = document.createElement("td");

const td2 = document.createElement("td");
const td22 = document.createElement("td");
const td222 = document.createElement("td");

const tdB = document.createElement("td");

table.appendChild(trTh);

table.insertAdjacentElement("afterbegin", buttonBalance);

table.appendChild(trTdfir);
table.appendChild(trTdsec);
table.appendChild(trTdthr);

table.appendChild(trBalance);

trTh.appendChild(th0);
trTh.appendChild(th1);
trTh.appendChild(th2);

trTdfir.appendChild(td0);
trTdfir.appendChild(td00);
trTdfir.appendChild(td000);

trTdsec.appendChild(td1);
trTdsec.appendChild(td11);
trTdsec.appendChild(td111);

trTdthr.appendChild(td2);
trTdthr.appendChild(td22);
trTdthr.appendChild(td222);

trBalance.appendChild(tdB);

table.setAttribute("border", "0");

buttonBalance.textContent = "sort";
buttonBalance.classList.add("colorBtn");

const tdArr = [td000, td111, td222];

buttonBalance.addEventListener("click", e => {
  console.log(balanceSmaller);
});

th0.textContent = thTitle[1];
th1.textContent = thTitle[2];
th2.textContent = thTitle[0];

td0.textContent = users2[0].name;
td00.textContent = users2[0].email;
td000.textContent = users2[0].balance;

td1.textContent = users2[1].name;
td11.textContent = users2[1].email;
td111.textContent = users2[1].balance;

td2.textContent = users2[2].name;
td22.textContent = users2[2].email;
td222.textContent = users2[2].balance;

tdB.textContent =
  "Total balance: " +
  (users2[0].balance + users2[2].balance + users2[1].balance).toFixed(2);

fragment.appendChild(table);
body.appendChild(fragment);

// const btnMsg = document.querySelector("#btn-msg");
// const tag = document.querySelector("#tag");
// btnMsg.addEventListener("click", function() {
//   alert(btnMsg.getAttribute("data-text"));
// });

// btnMsg.addEventListener("mouseover", function() {
//   btnMsg.classList.add("color");
// });
// btnMsg.addEventListener("mouseout", function() {
//   btnMsg.classList.remove("color");
// });
// // document.addEventListener("click", e => {
// //   const div0 = document.createElement("div");
// //   tag.appendChild(div0);
// //   div0.innerHTML = e.target;
// // });
// const btnGenerate = document.querySelector("#btn-generate");
// btnGenerate.addEventListener("click", e => {
//   const li = document.createElement("li");
//   li.textContent = `Item ${ul.childElementCount + 1}`;
//   ul.appendChild(li);
// });

// first project
const tasks = [
  {
    _id: "5d2ca9e2e03d40b326596aa7",
    completed: true,
    body:
      "Occaecat non ea quis occaecat ad culpa amet deserunt incididunt elit fugiat pariatur. Exercitation commodo culpa in veniam proident laboris in. Excepteur cupidatat eiusmod dolor consectetur exercitation nulla aliqua veniam fugiat irure mollit. Eu dolor dolor excepteur pariatur aute do do ut pariatur consequat reprehenderit deserunt.\r\n",
    title: "Eu ea incididunt sunt consectetur fugiat non."
  },
  {
    _id: "5d2ca9e29c8a94095c1288e0",
    completed: false,
    body:
      "Aliquip cupidatat ex adipisicing veniam do tempor. Lorem nulla adipisicing et esse cupidatat qui deserunt in fugiat duis est qui. Est adipisicing ipsum qui cupidatat exercitation. Cupidatat aliqua deserunt id deserunt excepteur nostrud culpa eu voluptate excepteur. Cillum officia proident anim aliquip. Dolore veniam qui reprehenderit voluptate non id anim.\r\n",
    title:
      "Deserunt laborum id consectetur pariatur veniam occaecat occaecat tempor voluptate pariatur nulla reprehenderit ipsum."
  },
  {
    _id: "5d2ca9e2e03d40b3232496aa7",
    completed: true,
    body:
      "Occaecat non ea quis occaecat ad culpa amet deserunt incididunt elit fugiat pariatur. Exercitation commodo culpa in veniam proident laboris in. Excepteur cupidatat eiusmod dolor consectetur exercitation nulla aliqua veniam fugiat irure mollit. Eu dolor dolor excepteur pariatur aute do do ut pariatur consequat reprehenderit deserunt.\r\n",
    title: "Eu ea incididunt sunt consectetur fugiat non."
  },
  {
    _id: "5d2ca9e29c8a94095564788e0",
    completed: false,
    body:
      "Aliquip cupidatat ex adipisicing veniam do tempor. Lorem nulla adipisicing et esse cupidatat qui deserunt in fugiat duis est qui. Est adipisicing ipsum qui cupidatat exercitation. Cupidatat aliqua deserunt id deserunt excepteur nostrud culpa eu voluptate excepteur. Cillum officia proident anim aliquip. Dolore veniam qui reprehenderit voluptate non id anim.\r\n",
    title:
      "Deserunt laborum id consectetur pariatur veniam occaecat occaecat tempor voluptate pariatur nulla reprehenderit ipsum."
  }
];

(function(arrOfTasks) {
  const objOfTasks = arrOfTasks.reduce((acc, task) => {
    acc[task._id] = task;
    return acc;
  }, {});
  console.log(objOfTasks);

  const themes = {
    default: {
      "--base-text-color": "#212529",
      "--header-bg": "#007bff",
      "--header-text-color": "#fff",
      "--default-btn-bg": "#007bff",
      "--default-btn-text-color": "#fff",
      "--default-btn-hover-bg": "#0069d9",
      "--default-btn-border-color": "#0069d9",
      "--danger-btn-bg": "#dc3545",
      "--danger-btn-text-color": "#fff",
      "--danger-btn-hover-bg": "#bd2130",
      "--danger-btn-border-color": "#dc3545",
      "--input-border-color": "#ced4da",
      "--input-bg-color": "#fff",
      "--input-text-color": "#495057",
      "--input-focus-bg-color": "#fff",
      "--input-focus-text-color": "#495057",
      "--input-focus-border-color": "#80bdff",
      "--input-focus-box-shadow": "0 0 0 0.2rem rgba(0, 123, 255, 0.25)"
    },
    dark: {
      "--base-text-color": "#212529",
      "--header-bg": "#343a40",
      "--header-text-color": "#fff",
      "--default-btn-bg": "#58616b",
      "--default-btn-text-color": "#fff",
      "--default-btn-hover-bg": "#292d31",
      "--default-btn-border-color": "#343a40",
      "--default-btn-focus-box-shadow":
        "0 0 0 0.2rem rgba(141, 143, 146, 0.25)",
      "--danger-btn-bg": "#b52d3a",
      "--danger-btn-text-color": "#fff",
      "--danger-btn-hover-bg": "#88222c",
      "--danger-btn-border-color": "#88222c",
      "--input-border-color": "#ced4da",
      "--input-bg-color": "#fff",
      "--input-text-color": "#495057",
      "--input-focus-bg-color": "#fff",
      "--input-focus-text-color": "#495057",
      "--input-focus-border-color": "#78818a",
      "--input-focus-box-shadow": "0 0 0 0.2rem rgba(141, 143, 146, 0.25)"
    },
    light: {
      "--base-text-color": "#212529",
      "--header-bg": "#fff",
      "--header-text-color": "#212529",
      "--default-btn-bg": "#fff",
      "--default-btn-text-color": "#212529",
      "--default-btn-hover-bg": "#e8e7e7",
      "--default-btn-border-color": "#343a40",
      "--default-btn-focus-box-shadow":
        "0 0 0 0.2rem rgba(141, 143, 146, 0.25)",
      "--danger-btn-bg": "#f1b5bb",
      "--danger-btn-text-color": "#212529",
      "--danger-btn-hover-bg": "#ef808a",
      "--danger-btn-border-color": "#e2818a",
      "--input-border-color": "#ced4da",
      "--input-bg-color": "#fff",
      "--input-text-color": "#495057",
      "--input-focus-bg-color": "#fff",
      "--input-focus-text-color": "#495057",
      "--input-focus-border-color": "#78818a",
      "--input-focus-box-shadow": "0 0 0 0.2rem rgba(141, 143, 146, 0.25)"
    }
  };
  let lastSelectedTheme = localStorage.getItem("app_theme") || "default";

  // Elements UI

  const listContainer = document.querySelector(".list-group");

  const form = document.forms["addTask"];

  const inputTitle = form.elements["title"];

  const inputBody = form.elements["body"];

  const themeSelect = document.querySelector("#themeSelect");

  // Events

  setTheme(lastSelectedTheme);
  renderAllTask(objOfTasks);
  form.addEventListener("submit", onFormSubmitHandler);
  listContainer.addEventListener("click", onDeleteHandler);
  themeSelect.addEventListener("change", onThemeSelectorHandler);

  function renderAllTask(tasksList) {
    if (!tasksList) {
      console.error("where tasks?");
      return;
    }
    const fragment = document.createDocumentFragment();

    Object.values(tasksList).forEach(task => {
      const li = listItemTemplate(task);
      fragment.appendChild(li);
    });
    listContainer.appendChild(fragment);
  }

  function listItemTemplate({ _id, title, body } = {}) {
    const li = document.createElement("li");
    li.classList.add(
      "list-group-item",
      "d-flex",
      "align-items-center",
      "flex-wrap",
      "mt-2"
    );
    li.setAttribute("data-task-id", _id);
    const span = document.createElement("span");
    span.textContent = title;
    span.style.fontWeight = "bold";

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("btn", "btn-danger", "ml-auto", "delete-btn");
    deleteBtn.textContent = "delete";

    const article = document.createElement("p");
    article.classList.add("mt-2", "w-100");
    article.textContent = body;

    li.appendChild(span);
    li.appendChild(deleteBtn);
    li.appendChild(article);

    return li;
  }

  function onFormSubmitHandler(e) {
    e.preventDefault();
    const titleValue = inputTitle.value;
    const bodyValue = inputBody.value;

    if (!titleValue || !bodyValue) {
      alert("Please, enter title and body");
      return;
    }

    const task = createNewTask(titleValue, bodyValue);

    const listItem = listItemTemplate(task);
    listContainer.insertAdjacentElement("afterbegin", listItem);
    form.reset();
  }

  function createNewTask(title, body) {
    const newTask = {
      title,
      body,
      completed: false,
      _id: `task - ${Math.random()}`
    };

    objOfTasks[newTask._id] = newTask;

    return { ...newTask };
  }

  function onDeleteHandler(e) {
    if (e.target.classList.contains("delete-btn")) {
      const parent = e.target.closest("[data-task-id]");
      const id = parent.dataset.taskId;
      const confirmed = deleteTask(id);
      deleteTaskFromHtml(confirmed, parent);
    }
  }

  function deleteTaskFromHtml(confirmed, el) {
    if (!confirmed) return;
    el.remove();
  }

  function deleteTask(id) {
    const { title } = objOfTasks[id];
    const isConfirm = confirm(`Delete this file? ${title}`);

    if (!isConfirm) return isConfirm;
    delete objOfTasks[id];
    return isConfirm;
  }

  function onThemeSelectorHandler(e) {
    const selectedTheme = themeSelect.value;
    const isConfirmed = confirm(`Set this theme "${selectedTheme}" ?`);

    if (!isConfirmed) {
      themeSelect.value = lastSelectedTheme;
      return;
    }
    setTheme(selectedTheme);
    lastSelectedTheme = selectedTheme;
    localStorage.setItem("app_theme", selectedTheme);
  }

  function setTheme(name) {
    const selectedThemeObj = themes[name];
    Object.entries(selectedThemeObj).forEach(([key, value]) =>
      document.documentElement.style.setProperty(key, value)
    );
  }
})(tasks);

// AJAX

function getPosts(cb) {
  const xhr = new XMLHttpRequest();
  xhr.open("get", "https://jsonplaceholder.typicode.com/posts");
  xhr.addEventListener("load", () => {
    const response = JSON.parse(xhr.responseText);
    cb(response);
  });
  xhr.addEventListener("error", () => {
    console.log("request error");
  });
  xhr.send();
}

function cardTemplate(post) {
  const fragment = document.createDocumentFragment();
  const card = document.createElement("div");
  card.classList.add("card");
  const cardbody = document.createElement("div");
  cardbody.classList.add("card-body");
  const title = document.createElement("h5");
  title.classList.add("card-title");
  title.textContent = post.title;
  const article = document.createElement("p");
  article.classList.add("card-text");
  article.textContent = post.body;
  cardbody.appendChild(title);
  cardbody.appendChild(article);
  card.appendChild(cardbody);

  return card;
}

function renderPost() {
  getPosts(response => {
    response.forEach(post => {
      const card = cardTemplate(post);
      fragment.appendChild(card);
    });
    containerAjax.appendChild(fragment);
  });
}
const containerAjax = document.querySelector(".container");
const fullUserCont = document.querySelector(".fullUserCont");
const sendRequest = document.querySelector(".getPostBtn");
sendRequest.addEventListener("click", renderPost);

// homeWork
function getUser(cb) {
  const xhr = new XMLHttpRequest();
  xhr.open("get", "https://jsonplaceholder.typicode.com/users");
  xhr.addEventListener("load", () => {
    const response = JSON.parse(xhr.responseText);
    cb(response);
  });
  xhr.send();
}

function renderUserList() {
  const fragment = document.createDocumentFragment();
  getUser(response => {
    response.forEach(user => {
      const card = document.createElement("div");
      card.classList.add("card");
      const cardbody = document.createElement("div");
      cardbody.classList.add("card-body");
      const title = document.createElement("h5");
      title.classList.add("card-title");
      title.textContent = user.name;
      cardbody.appendChild(title);
      card.appendChild(cardbody);
      fragment.appendChild(card);
      containerAjax.appendChild(fragment);
      title.addEventListener("click", rederFullUserCont);
    });
  });
}

function rederFullUserCont(e) {
  getUser(response => {
    response.find(user => {
      if (e.target.textContent === user.name) {
        const fragment = document.createDocumentFragment();
        const card = document.createElement("div");
        card.classList.add("card");
        const cardbody = document.createElement("div");
        cardbody.classList.add("card-body");
        const title = document.createElement("h5");
        title.classList.add("card-title");
        title.textContent = user.name;
        const article = document.createElement("p");
        article.classList.add("card-text");
        article.textContent = user.username;
        const article1 = document.createElement("p");
        article1.classList.add("card-text");
        article1.textContent = user.email;
        const article2 = document.createElement("p");
        article2.classList.add("card-text");
        article2.textContent = user.id;
        const article3 = document.createElement("p");
        article3.classList.add("card-text");
        article3.textContent = user.address.street;
        const article4 = document.createElement("p");
        article4.classList.add("card-text");
        article4.textContent = user.address.suite;
        const article5 = document.createElement("p");
        article5.classList.add("card-text");
        article5.textContent = user.address.city;
        const article6 = document.createElement("p");
        article6.classList.add("card-text");
        article6.textContent = user.address.zipcode;
        const article7 = document.createElement("p");
        article7.classList.add("card-text");
        article7.textContent = user.address.geo.lat;
        const article8 = document.createElement("p");
        article8.classList.add("card-text");
        article8.textContent = user.address.geo.lng;
        cardbody.appendChild(title);
        cardbody.appendChild(article);
        cardbody.appendChild(article1);
        cardbody.appendChild(article2);
        cardbody.appendChild(article3);
        cardbody.appendChild(article4);
        cardbody.appendChild(article5);
        cardbody.appendChild(article6);
        cardbody.appendChild(article7);
        cardbody.appendChild(article8);
        card.appendChild(cardbody);
        fragment.appendChild(card);
        fullUserCont.appendChild(fragment);
      }
    });
  });
}

const sendRequest1 = document.querySelector(".getUserBtn");
sendRequest1.addEventListener("click", renderUserList);

// createPost
function createPost(body, cb) {
  const xhr = new XMLHttpRequest();
  xhr.open("post", "https://jsonplaceholder.typicode.com/posts");
  xhr.addEventListener("load", () => {
    const response = JSON.parse(xhr.responseText);
    cb(response);
  });
  xhr.setRequestHeader("content-type", "application/json; charset=UTF-8");
  xhr.send(JSON.stringify(body));
}

const addbtn = document.querySelector(".addPostBtn");
addbtn.addEventListener("click", e => {
  const newPost = {
    title: "foo",
    body: "bar",
    id: 1
  };
  createPost(newPost, response => {
    const card = cardTemplate(response);
    fragment.appendChild(card);
  });
});

// usersForm
const form = document.forms["addUser"];

function formSubmitHandler(e) {
  e.preventDefault();
  const inputName = form.elements["name"];
  const inputEmail = form.elements["email"];
  const inputUsername = form.elements["username"];
  const inputPhone = form.elements["phone"];
  const inputCity = form.elements["city"];
  const arrUser = {};
  arrUser.name = inputName.value;
  arrUser.email = inputEmail.value;
  arrUser.username = inputUsername.value;
  arrUser.phone = inputPhone.value;
  arrUser.city = inputCity.value;
  createUserForm(arrUser, userCardTemplate);
}

function userCardTemplate(response) {
  const fragment = document.createDocumentFragment();
  const card = document.createElement("div");
  card.classList.add("card");
  const cardbody = document.createElement("div");
  cardbody.classList.add("card-body");
  const title = document.createElement("h5");
  title.classList.add("card-title");
  title.textContent = response.name;
  const article = document.createElement("p");
  article.classList.add("card-text");
  article.textContent = response.email;
  const article1 = document.createElement("p");
  article1.classList.add("card-text");
  article1.textContent = response.username;
  const article2 = document.createElement("p");
  article2.classList.add("card-text");
  article2.textContent = response.phone;
  const article3 = document.createElement("p");
  article3.classList.add("card-text");
  article3.textContent = response.city;
  cardbody.appendChild(title);
  cardbody.appendChild(article);
  cardbody.appendChild(article1);
  cardbody.appendChild(article2);
  cardbody.appendChild(article3);
  card.appendChild(cardbody);
  fragment.appendChild(card);
  fullUserCont.appendChild(fragment);
}

function createUserForm(body, cb) {
  const xhr = new XMLHttpRequest();
  xhr.open("post", "https://jsonplaceholder.typicode.com/users");
  xhr.addEventListener("load", () => {
    const response = JSON.parse(xhr.responseText);
    cb(response);
  });
  xhr.setRequestHeader("content-type", "application/json; charset=utf-8");
  xhr.send(JSON.stringify(body));
}

form.addEventListener("submit", formSubmitHandler);

// function myHttpRequest({ method, url } = {}, cb) {
//   try {
//     const xhr = new XMLHttpRequest();
//     xhr.open(method, url);
//     xhr.addEventListener("load", () => {
//       if (Math.floor(xhr.status / 100) !== 2) {
//         cb(`Error.status: ${xhr.status}`, xhr);
//         return;
//       }
//       const response = JSON.parse(xhr.responseText);
//       cb(null, response);
//     });
//     xhr.addEventListener("error", () => {
//       cb(`Error.status: ${xhr.status}`, xhr);
//     });
//     xhr.send();
//   } catch (error) {
//     cb(error);
//   }
// }

function http() {
  return {
    get(url, cb) {
      try {
        const xhr = new XMLHttpRequest();
        xhr.open("get", url);
        xhr.addEventListener("load", () => {
          if (Math.floor(xhr.status / 100) !== 2) {
            cb(`Error.status: ${xhr.status}`, xhr);
            return;
          }
          const response = JSON.parse(xhr.responseText);
          cb(null, response);
        });
        xhr.addEventListener("error", () => {
          cb(`Error.status: ${xhr.status}`, xhr);
        });
        xhr.send();
      } catch (error) {
        cb(error);
      }
    },
    post(url, body, headers, cb) {
      try {
        const xhr = new XMLHttpRequest();
        xhr.open("post", url);
        xhr.addEventListener("load", () => {
          if (Math.floor(xhr.status / 100) !== 2) {
            cb(`Error.status: ${xhr.status}`, xhr);
            return;
          }
          const response = JSON.parse(xhr.responseText);
          cb(null, response);
        });
        xhr.addEventListener("error", () => {
          cb(`Error.status: ${xhr.status}`, xhr);
        });
        Object.entries(headers).forEach(([key, value]) => {
          xhr.setRequestHeader(key, value);
        });
        xhr.send(JSON.stringify(body));
      } catch (error) {
        cb(error);
      }
    }
  };
}
const myHttp = http();
myHttp.post(
  "https://jsonplaceholder.typicode.com/users",
  {
    title: "foo",
    body: "bar",
    id: 1
  },
  { "content-type": "application/json" },
  (err, resp) => {
    console.log(err, resp);
  }
);

// project news app
