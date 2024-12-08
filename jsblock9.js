class Clock {
constructor({ template }) {
  this.template = template;
}

render() {
  let date = new Date();

  let hours = date.getHours();
  if (hours < 10) hours = '0' + hours;

  let mins = date.getMinutes();
  if (mins < 10) mins = '0' + mins;

  let secs = date.getSeconds();
  if (secs < 10) secs = '0' + secs;

  let output = this.template
    .replace('h', hours)
    .replace('m', mins)
    .replace('s', secs);

  console.log(output);
}

stop() {
  clearInterval(this.timer);
}

start() {
  this.render();
  this.timer = setInterval(() => this.render(), 1000);
}
}


let clock = new Clock({template: 'h:m:s'});
clock.start();
class Animal {

constructor(name) {
  this.speed = 0;
  this.name = name;
}

run(speed) {
  this.speed = speed;
  alert(`${this.name} бежит со скоростью ${this.speed}.`);
}

stop() {
  this.speed = 0;
  alert(`${this.name} стоит.`);
}

}

class Rabbit extends Animal {
hide() {
  alert(`${this.name} прячется!`);
}

stop() {
  super.stop(); // вызываем родительский метод stop
  this.hide(); // и затем hide
}
}

let rabbit = new Rabbit("Белый кролик");

rabbit.run(5); // Белый кролик бежит со скоростью 5.
rabbit.stop(); // Белый кролик стоит. Белый кролик прячется!

class PowerArray extends Array {
  isEmpty() {
    return this.length === 0;
  }

  // встроенные методы массива будут использовать этот метод как конструктор
  static get [Symbol.species]() {
    return Array;
  }
}

let arr = new PowerArray(1, 2, 5, 10, 50);
alert(arr.isEmpty()); // false

// filter создаст новый массив, используя arr.constructor[Symbol.species] как конструктор
let filteredArr = arr.filter(item => item >= 10);

// filteredArr не является PowerArray, это Array
alert(filteredArr.isEmpty()); // Error: filteredArr.isEmpty is not a function

class Animal {}
class Rabbit extends Animal {}



let sayMixin = {
  say(phrase) {
    alert(phrase);
  }
};

let sayHiMixin = {
  __proto__: sayMixin, // (или мы можем использовать Object.setPrototypeOf для задания прототипа)

  sayHi() {
    // вызываем метод родителя
    super.say(`Привет, ${this.name}`); // (*)
  },
  sayBye() {
    super.say(`Пока, ${this.name}`); // (*)
  }
};

class User {
  constructor(name) {
    this.name = name;
  }
}

// копируем методы
Object.assign(User.prototype, sayHiMixin);

// теперь User может сказать Привет
new User("Вася").sayHi(); // Привет, Вася!