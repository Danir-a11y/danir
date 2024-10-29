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