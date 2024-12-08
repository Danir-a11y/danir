try {

    alert('Начало блока try');  // (1) <--
  
    // ...код без ошибок
  
    alert('Конец блока try');   // (2) <--
  
} catch(err) {
  
    alert('Catch игнорируется, так как нет ошибок'); // (3)
  
}

try {

    alert('Начало блока try');  // (1) <--

    lalala; // ошибка, переменная не определена!

    alert('Конец блока try (никогда не выполнится)');  // (2)

} catch(err) {

    alert(`Возникла ошибка!`); // (3) <--

}

try {
    lalala; 
} catch(err) {
    alert(err.name); 
    alert(err.message);
    alert(err.stack);  

    alert(err); 
}

let json = "{ некорректный JSON }";

try {

  let user = JSON.parse(json); 
  alert( user.name ); 

} catch (e) {

  alert( "Извините, в данных ошибка, мы попробуем получить их ещё раз." );
  alert( e.name );
  alert( e.message );
}

