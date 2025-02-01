let target = {};
let proxy = new Proxy(target, {}); // пустой handler

proxy.test = 5; // записываем в прокси (1)
alert(target.test); // 5, свойство появилось в target!

alert(proxy.test); // 5, мы также можем прочитать его из прокси (2)

for(let key in proxy) alert(key); // test, итерация работает (3)

let dictionary = {
    'Hello': 'Hola',
    'Bye': 'Adiós'
};
  
  dictionary = new Proxy(dictionary, {
    get(target, phrase) { // перехватываем чтение свойства в dictionary
        if (phrase in target) { // если перевод для фразы есть в словаре
            return target[phrase]; // возвращаем его
        } else {
        // иначе возвращаем непереведённую фразу
            return phrase;
        }
    }
});
  
// Запросим перевод произвольного выражения в словаре!
// В худшем случае оно не будет переведено
alert( dictionary['Hello'] ); // Hola
alert( dictionary['Welcome to Proxy']); // Welcome to Proxy (нет перевода)

let numbers = [];

numbers = new Proxy(numbers, { // (*)
  set(target, prop, val) { // для перехвата записи свойства
    if (typeof val == 'number') {
      target[prop] = val;
      return true;
    } else {
      return false;
    }
  }
});

numbers.push(1); // добавилось успешно
numbers.push(2); // добавилось успешно
alert("Длина: " + numbers.length); // 2

numbers.push("тест"); // TypeError (ловушка set на прокси вернула false)

alert("Интерпретатор никогда не доходит до этой строки (из-за ошибки в строке выше)")

let user = {
    name: "Вася",
    _password: "***"
  };
  
  user = new Proxy(user, {
    get(target, prop) {
      if (prop.startsWith('_')) {
        throw new Error("Отказано в доступе");
      } else {
        let value = target[prop];
        return (typeof value === 'function') ? value.bind(target) : value; // (*)
      }
    },
    set(target, prop, val) { // перехватываем запись свойства
      if (prop.startsWith('_')) {
        throw new Error("Отказано в доступе");
      } else {
        target[prop] = val;
        return true;
      }
    },
    deleteProperty(target, prop) { // перехватываем удаление свойства
      if (prop.startsWith('_')) {
        throw new Error("Отказано в доступе");
      } else {
        delete target[prop];
        return true;
      }
    },
    ownKeys(target) { // перехватываем попытку итерации
      return Object.keys(target).filter(key => !key.startsWith('_'));
    }
  });
  
  // "get" не позволяет прочитать _password
  try {
    alert(user._password); // Error: Отказано в доступе
  } catch(e) { alert(e.message); }
  
  // "set" не позволяет записать _password
  try {
    user._password = "test"; // Error: Отказано в доступе
  } catch(e) { alert(e.message); }
  
  // "deleteProperty" не позволяет удалить _password
  try {
    delete user._password; // Error: Отказано в доступе
  } catch(e) { alert(e.message); }
  
  // "ownKeys" исключает _password из списка видимых для итерации свойств
  for(let key in user) alert(key); // name
  function curry(f) { // curry(f) выполняет каррирование
    return function(a) {
      return function(b) {
        return f(a, b);
      };
    };
  }
  
  // использование
  function sum(a, b) {
    return a + b;
  }
  
  let curriedSum = curry(sum);
  
  alert( curriedSum(1)(2) ); // 3
  
  alert( "\u{20331}" );
  alert( "\u00A9" ); // ©, то же самое, что \xA9, используя 4-значную шестнадцатеричную нотацию
alert( "\u044F" ); // я, буква кириллического алфавита
alert( "\u2191" ); // ↑, символ стрелки вверх