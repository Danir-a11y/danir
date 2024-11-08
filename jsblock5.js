let str = "Привет";

alert( str.toUpperCase() ); // из привет получается ПРИВЕТ //

let string = "Привет";

string.test = 5; // (*)

alert(string.test);

let st = "ПРИВЕТ";

alert( st.toLowerCase() ); // наоборот //

let billion = 1e9;  // 1 миллиард, буквально: 1 и 9 нулей

alert( 7.3e9 );  // 7.3 миллиарда (7,300,000,000)

let thousand = 1e3;

alert( 234.5e3 );

let a = 0b11111111; // двоичная (бинарная) форма записи числа 255

let b = 0o377; // восьмеричная форма записи числа 255

alert( a == b ); // true, с двух сторон число 255

let num = 255;

alert( num.toString(16) );  // ff

alert( num.toString(2) );   // 11111111

alert( num.toString(3) );

alert( 123456..toString(36) ); // 2n9c

function sum(a, b) {

    return a + b;

  }
  
alert(`1 + 2 = ${sum(1, 2)}.`); // 1 + 2 = 3.

let arr = [ "Я", "изучаю", "JavaScript", "прямо", "сейчас" ];

arr.splice(0, 3, "Давай", "танцевать");

alert( arr ) // теперь ["Давай", "танцевать", "прямо", "сейчас"]

let range = {

  from: 1,

  to: 5

};

// 1. вызов for..of сначала вызывает эту функцию

range[Symbol.iterator] = function() {

  // ...она возвращает объект итератора:

  // 2. Далее, for..of работает только с этим итератором,

  // запрашивая у него новые значения

  return {

    current: this.from,

    last: this.to,

    // 3. next() вызывается на каждой итерации цикла for..of

    next() {
      // 4. он должен вернуть значение в виде объекта {done:.., value :...}

      if (this.current <= this.last) {

        return { done: false, value: this.current++ };

      } else {

        return { done: true };

      }

    }

  };

};

// теперь работает!

for (let number of range) {

  alert(number); // 1, затем 2, 3, 4, 5

}

let map = new Map();

map.set("1", "str1");    // строка в качестве ключа

map.set(1, "num1");      // цифра как ключ

map.set(true, "bool1");  // булево значение как ключ

// помните, обычный объект Object приводит ключи к строкам?

// Map сохраняет тип ключей, так что в этом случае сохранится 2 разных значения:

alert(map.get(1)); // "num1"

alert(map.get("1")); // "str1"

alert(map.size); // 3

let recipeMap = new Map([

  ["огурец", 500],

  ["помидор", 350],

  ["лук",    50]

]);

// перебор по ключам (овощи)

for (let vegetable of recipeMap.keys()) {

  alert(vegetable); // огурец, помидор, лук

}

// перебор по значениям (числа)

for (let amount of recipeMap.values()) {

  alert(amount); // 500, 350, 50

}

// перебор по элементам в формате [ключ, значение]

for (let entry of recipeMap) { // то же самое, что и recipeMap.entries()

  alert(entry); // огурец,500 (и так далее)
  
}

let visitedSet = new WeakSet();

let john = { name: "John" };

let pete = { name: "Pete" };

let mary = { name: "Mary" };

visitedSet.add(john); // John заходил к нам

visitedSet.add(pete); // потом Pete

visitedSet.add(john); // John снова

// visitedSet сейчас содержит двух пользователей

// проверим, заходил ли John?

alert(visitedSet.has(john)); // true

// проверим, заходила ли Mary?

alert(visitedSet.has(mary)); // false

john = null;

// структура данных visitedSet будет очищена автоматически (объект john будет удалён из visitedSet)

let messages = [

  {text: "Hello", from: "John"},

  {text: "How goes?", from: "John"},

  {text: "See you soon", from: "Alice"}

];

let readMap = new WeakMap();

readMap.set(messages[0], new Date(2017, 1, 1));

// Объект Date мы рассмотрим позднее

let user = new Map();

user.set("name", "John");

user.set("age", "30");

// Map перебирает как пары [ключ, значение], что очень удобно для деструктурирования

for (let [key, value] of user) {

  alert(`${key}:${value}`); // name:John, затем age:30
  
}