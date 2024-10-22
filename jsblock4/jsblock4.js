let user = {
    name: "Danir",
    age: 18,
    surname: "Ibragimov"
  };
  
  let key = prompt("Что вы хотите узнать о создателе сайта?", "name", "age", "secondname");
  
  // доступ к свойству через переменную
  alert( user[key] );

