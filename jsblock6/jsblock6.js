function pow(x, n) {
    let result = 1;
  
    // умножаем result на x n раз в цикле
    for (let i = 0; i < n; i++) {
      result *= x;
    }
  
    return result;
  }
  
  alert( pow(2, 3) ); // 8

let company = { // тот же самый объект, сжатый для краткости
    sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600 }],
    development: {
      sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }],
      internals: [{name: 'Jack', salary: 1300}]
    }
  };
  
  // Функция для подсчёта суммы зарплат
function sumSalaries(department) {
    if (Array.isArray(department)) { // случай (1)
      return department.reduce((prev, current) => prev + current.salary, 0); // сумма элементов массива
    } else { // случай (2)
      let sum = 0;
      for (let subdep of Object.values(department)) {
        sum += sumSalaries(subdep); // рекурсивно вызывается для подотделов, суммируя результаты
      }
      return sum;
    }
  }
  
  alert(sumSalaries(company)); // 6700

function showName(firstName, lastName, ...titles) {
    alert( firstName + ' ' + lastName ); // Юлий Цезарь
  
    // Оставшиеся параметры пойдут в массив
    // titles = ["Консул", "Император"]
    alert( titles[0] ); // Консул
    alert( titles[1] ); // Император
    alert( titles.length ); // 2
  }
  
  showName("Юлий", "Цезарь", "Консул", "Император");

  function makeCounter() {
    let count = 0;
  
    return function() {
      return count++; // есть доступ к внешней переменной "count"
    };
  }
  
  let counter = makeCounter();
  
  alert( counter() ); // 0
  alert( counter() ); // 1
  alert( counter() ); // 2

  let value = "Сюрприз!";

function f() {
  let value = "ближайшее значение";

  function g() {
    debugger; // в консоли: напишите alert(value); Сюрприз!
  }

  return g;
}

let g = f();
g();