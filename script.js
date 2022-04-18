// //Условия
// if (1) { 
//     console.log("Great!");
// }else {
//     console.log("bad( ");
// };
//  num = 50;
//  if( num < 10) {
//      console.log('Error');
//  } else if ( num >100 ){
//  } else {
//      console.log('ok!');
//  }
//  //тернарный
//  let num = 10;
//  (num === 50) ? console.log('Ok!') : console.log('Error');

//  //Switch
//  switch (1){
//      case 0:
//          console.log('no!');
//          break;
//          case 51:
//             console.log('no!');
//             break;
//              case 50: 
//              console.log("Right");
//              break;
//              default:
//                  console.log('Not Today!')
//                  break;
//  }
// //Циклы
// //While
// let num = 50;
// while (num <= 55) {
//     console.log(num);
//     num++;
// }
// //do
// let num = 50;
// do {
//     console.log(num);
//     num++;
// }
// while (num < 55);

// //for 

// let num = 50;

// for (let i = 1; i <= 8; i++){
//     console.log(num);
//     num++;
    
// }

// for (let i =1;i < 10;i++){
//     if (i === 6){
//         break;//оператор позволяет прервать цикл до 6.
//     }
//     console.log(i);
// }

// for (let i =1;i < 10;i++){
//     if (i === 6){
//         continue;//оператор позволяет пропустить шаг но не прерывает цикл.
//     }
//     console.log(i);
// }
// практика 2 
 " use strict";

 
let numberOfFilms;

 function start(){
     numberOfFilms = +prompt ('Сколько фильмов уже гялнул?');
    
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
         numberOfFilms = +prompt ('Сколько фильмов уже гялнул?');
    }
 }
start();

 const personalMovieDB = {
     count: numberOfFilms,
     movies: {},
     actors:{},
     genres:[],
     private: false
 };

function rememberMyFilms(){
for(let i = 0; i < 2; i++) {

    const a = prompt('Один из последних фильмов'),
          b = prompt('Оценка');

    if (a != null && b != null && a != '' && b != '' && a.length  < 50){
        personalMovieDB.movies[a] = b;
    } else {
        console.log("Попробуй ещё раз");
        i--;
    }
}
}

rememberMyFilms();
function detectedPersonalLevel(){
if (personalMovieDB.count < 10){
    console.log("мало фильмов");
} else if  (personalMovieDB.count >= 10 && personalMovieDB.count  < 30){
    console.log("Классика ");
} else if  (personalMovieDB.count >= 30 ){
    console.log("Любите фильмы! ");
}else {
    console.log("Печально, это ошибка ");
}
}

detectedPersonalLevel();

function showMyDB (hidden){
    if (!hidden){
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.private);

function writeYourGenres(){
    for(let i = 1; i <= 3; i++){
        const genre = prompt(`Ваш любимый жанр под номером ${i}`);
        personalMovieDB.genres[i -1] = genre;
    }
}
writeYourGenres();
// //Функции 
// //Function Declaration где угодно можно обьявить
//  function showFirstMessage(text){
//      console.log(text);
//  }

//  showFirstMessage("hello");

 
//  function calc(a, b){
//      return(a * b + 10);
//  }
//  console.log(calc(2,2));

//  function ret(){
//      let num = 50;
//      return(num);
//  }
//  const anotherNum = ret();

//  console.log(anotherNum);

//  // function Exspression 
//  //Можно вызвать только когда доходит код 

//  const logger = function (){
//    console.log("hello");  
//  };
//  logger();

//  //Стрелочная функция 
//   const calk = (a, b) => { return a + b};

//   console.log(calk(5,6));

// //Методы и свойства строк и чисел
// const str ="str";
// console.log(str[2]);

// let arr = [1, 2, 3, 4];
// console.log(arr[2] = "a");
// console.log(arr);

// const texst = "teSt";
// console.log(texst.toUpperCase());

// let fruit = "Some fruit";//поиск под строки

// console.log(fruit.indexOf("f"));

// const logg ="Hello World";
// console.log(logg.slice(6));

// //числа
//  const num =12.4;
//  console.log(Math.round(num));

//  const nam ="12.9px";
//  console.log(parseInt(nam));

//  const nem ="12.9px";d
//  console.log(parseFloat(nem));

