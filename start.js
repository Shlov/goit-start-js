// const numbers = [];

// numbers.push(1);
// console.log(numbers); // [1]

// numbers.push(2);
// console.log(numbers); // [1, 2]

// numbers.push(3);
// console.log(numbers); // [1, 2, 3]

// numbers.push(4);
// console.log(numbers); // [1, 2, 3, 4]

// // numbers.push(5);
// console.log(numbers.push(5)); // Повертає довжину масиву після додавання елементів - 5 (повертає число!).
// console.log(numbers); // [1, 2, 3, 4, 5]

// 

// let ttt = 6
// console.log(ttt)
// let yyy = '6'
// console.log(yyy)

// 

// const numbers = [1, 2, 3, 4, 5];

// console.log(numbers.pop()); //  5
// console.log(numbers); // [1, 2, 3, 4]

// console.log(numbers.pop(5)); //  4
// console.log(numbers); // [1]

// console.log(numbers.pop()); //  1
// console.log(numbers); // []

//

// Як працює splice
// const scores = [1, 2, 3, 4, 5];

// // Видаляємо три елементи масиву, починаючи з першого елемента (індекс 0)
// // const deletedScores = scores.splice(0, 3);

// // 

// // Тепер масив scores містить два елементи
// console.log(scores.splice(0, 3)); // [1, 2, 3]
// console.log(scores); // [4, 5] те що залишається в масиві після виділення через splice


// let oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
// const newClients = ["Monkong", "Singu"];

// oldClients = oldClients.concat(newClients);
// // console.log(allClientsWithOldFirst); // ["Mango", "Ajax", "Poly", "Kiwi", "Monkong", "Singu"]

// console.log (newClients.concat(oldClients));
// // console.log(allClientsWithNewFirst); // ["Monkong", "Singu", "Mango", "Ajax", "Poly", "Kiwi"]

// console.log(oldClients); // ["Mango", "Ajax", "Poly", "Kiwi"]
// console.log(newClients); // ["Monkong", "Singu"]


// 

// function getExtremeElements(array) {
//     // Change code below this line
//   // const ttt = [];
//   //   ttt.push(array[0]);
//   //   ttt.push(array[array.length - 1]);
//     // array.splice(1, array.length - 2);
//     // array.slice(1)
//     // console.log(array.slice(array.length - 1))
//     array.splice(1, array.length - 2);
//     const firstAndLast = array
//     console.log(firstAndLast);

//     console.log(array)
//     // Change code above this line  
//   }

//   getExtremeElements([1, 2, 3, 4, 5])
//   getExtremeElements(["Earth", "Mars", "Venus"])



//   const mes = 'dfd dlkj ijlkm poijm';
//   console.log(mes.split(' ').length);


// 


// function slugify(title) {
//     // Change code below this line
//   let slug;
//   slug = title.toLowerCase().split(' ').join('-');
//   console.log(slug)
//   return slug
  
//     // Change code above this line
//   }

//   slugify("Arrays for begginers")

//   slugify("English for developer")

//   title = 'fsdf fsFDDFF FDSfsdf FSDF';

//   let slug = title.toLowerCase();
//   console.log(slug)


// 

// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// // Change code below this line
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, fruits.length - 1);
// const lastThreeEls = fruits.slice(-3);

// console.log(firstTwoEls);
// console.log(nonExtremeEls);
// console.log(lastThreeEls);


// 


// const firstArray = ["Mango", "Poly", "Houston"];
// const secondArray = ["Mango", "Poly", "Houston"];
// const newArray = firstArray.concat(secondArray);
// console.log(newArray)


// function makeArray(firstArray, secondArray, maxLength) {
//     // Change code below this line
//     const newArray = firstArray.concat(secondArray);
//     const indxNewArray = newArray.length;
//     if (indxNewArray <= maxLength) {
//         return newArray
//     }
//     console.log('newArray -',newArray)
//     const newShortArray = newArray.slice(0, indxNewArray);
//     console.log('newShortArray -', newShortArray)
//     return newShortArray;
  

//     // Change code above this line
//   }
  

//   makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)
//   makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)

// function calculateTotal(number) {
//     // Change code below this line
//     let total = 0;
//         for (let i = 1; i <= number; i += 1) {
//         total += i;    
//         }
//         console.log(total);
//     return total;
//      // Change code above this line
//    }
// calculateTotal(1)
// calculateTotal(3)
// calculateTotal(7) 
// calculateTotal(18)
// calculateTotal(24)


// function multiply() {
//     let total = 1;
  
//     for (const argument of arguments) {
//       total *= argument;
//     }
  
//     return total;
//   }
  
//   console.log(multiply(1, 2, 3)); //  6
//   console.log(multiply(1, 2, 3, 4)); //  24
//   console.log(multiply(1, 2, 3, 4, 5)); //  120



// 

// function calculateTotalPrice(order) {
//     let total = 0;
//     // Change code below this line
//       for (let oneOrder of order) {
//         total += oneOrder
//       }
//     // Change code above this line
//     return total;
//   }


// calculateTotalPrice([164, 48, 291]) 
// calculateTotalPrice([412, 371, 94, 63, 176])
// console.log(calculateTotalPrice([12, 85, 37, 4]))

// 


// function findLongestWord(string) {
//     // Change code below this line
//     const arrString = string.split(' ')
//     let longestWord = arrString[0]
//     for (let word of arrString) {
//       if (word.length > longestWord.length) {
//         longestWord = word;
        
//       }
      
//     }
//     return longestWord
  
//     // Change code above this line
//   }
//     // console.log(arrString);
//     console.log(findLongestWord("The quick brown fox jumped over the lazy dog"))
//     console.log(findLongestWord("Google do a roll"))
//     console.log(findLongestWord("May the force be with you"))


// 

// function filterArray(numbers, value) {
//     // Change code below this line
//      let numbersValue = []
//      for (let number of numbers) {
//        if (number > value) {
//          numbersValue.push(number);
         
//        }
//     }
//     return numbersValue
 
 
//    // Change code above this line
//  }

//  console.log(filterArray([1, 2, 3, 4, 5], 3))
//  console.log(filterArray([1, 2, 3, 4, 5], 4))
//  console.log(filterArray([1, 2, 3, 4, 5], 3))


// 


// function includes(array, value) {
//     // Change code below this line
//     for (let element of array) {
//         if (element === value) {
//             return true
//         }
//     }
//     return false
//     // Change code above this line
//   }
  
//   console.log(includes([1, 2, 3, 4, 5], 3))
//   console.log(includes([1, 2, 3, 4, 5], 17))
//   console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter"))
// //   console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus"))


// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     rating: 8.38,
//   };
  
//   for (const key in book) {
//     // Ключ
//     console.log(key);
//     // Значення властивості з таким ключем
//     console.log(book[key]);
//   }


  // const book = {
  //   title: "The Last Kingdom",
  //   author: "Bernard Cornwell",
  //   genres: ["historical prose", "adventure"],
  //   rating: 8.38,
  // };
  
  // for (const key in book) {
  //   // Якщо це власна властивість - виконуємо тіло if
  //   if (book.hasOwnProperty(key)) {
  //     console.log(key);
  //     console.log(book[key]);
  //   }
  
  //   // Якщо це невласна властивість - нічого не робимо
  // }


  // const animal = {
  //   legs: 4,
  // };
  // const dog = Object.create(animal);
  // dog.name = "Манго";
  
  // console.log(dog); // {name: 'Манго'}
  // console.log(dog.name); // 'Манго'
  // console.log(dog.legs); // 4
  // console.log(animal.legs); // 4


  // 

  // function multiply(firstNumber, secondNumber, ...ot) {
  //   console.log(firstNumber); // Значення першого аргументу
  //   console.log(secondNumber); // Значення другого аргументу
  //   console.log(ot); // Масив інших аргументів
  // }
  
  // // multiply(1, 2);
  // // multiply(1, 2, 3);
  // multiply(1, 2, 3, 4); 



  // 

  

//   // Колбек-функція
// function greet(name) {
//   console.log(`Ласкаво просимо ${name}.`);
// }

// // Функція вищого порядку
// function registerGuest(name, callback) {
//   console.log(`Реєструємо гостя ${name}.`);
//   callback(name);
// }

// registerGuest("Манго", greet);


// 

// 


// 

// const numbers = [1, 2, 3, 4, 5];
// const filteredNumbers = numbers.filter(i => i > 3);
// console.log(filteredNumbers); // [4, 5]



// const users = [
//   {
//     id: "701b29c3-b35d-4cf1-a5f6-8b12b29a5081",
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     skills: ["ipsum", "lorem"],
//     gender: "male",
//     age: 37,
//   },
//   {
//     id: "249b6175-5c30-44c6-b154-f120923736f5",
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     skills: ["adipisicing", "irure", "velit"],
//     gender: "female",
//     age: 21,
//   },
//   {
//     id: "334f8cb3-eb04-45e6-abf4-4935dd439b70",
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     skills: ["ex", "culpa", "nostrud"],
//     gender: "male",
//     age: 27,
//   },
//   {
//     id: "150b00fb-dd82-427d-9faf-2879ea87c695",
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     skills: ["non", "amet", "ipsum"],
//     gender: "male",
//     age: 38,
//   },
//   {
//     id: "e1bf46ab-7168-491e-925e-f01e21394812",
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     skills: ["lorem", "veniam", "culpa"],
//     gender: "female",
//     age: 39,
//   },
// ]

// const obj = {}

// const fmA = Object.keys(users[0])

// for (cont key fo fmA) {
//   obj[key] =[]
// }

// console.log(obj)



// const arry = {
//   id: [],
//   name: [],
//   email: [],
//   eyeColor: [],
//   friends: [],
//   isActive: [],
//   balance: [],
//   skills: [],
//   gender: [],
//   age: [],
// }


// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
  
// };

// apartment.owner = {
//   name: "Henry",
//   phone: "982-126-1588",
//   email: "henry.carter@aptmail.com",
//   }

// console.log(apartment)
// console.log(apartment.price)




// 

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };
// apartment.price = 5000;
// apartment.rating = 4.7;
// apartment.owner['name'] = 'Henry Sibola';
// apartment.tags.push('trusted');
// // Change code below this line
// console.log(apartment)
// console.log(apartment['name'])
// console.log(apartment.owner.name)




// 

// const emailInputName = "email";
// const passwordInputName = "password";

// const credentials = {
//   // Change code below this line
//   [emailInputName] : "henry.carter@aptmail.com",
//   [passwordInputName] : 'jqueryismyjam',  


//   // Change code above this line
// };

// console.log(credentials.email)




// 


// const animal = {
//   legs: 4,
// };
// const dog = Object.create(animal);
// dog.name = "Mango";

// console.log(dog); // {name: 'Mango'}
// console.log(dog.name); // 'Mango'
// console.log(dog.legs); // 4



const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

// function getAllPropValues(propName) {
//   // Change code below this line
//   const value = []
//   for (let product of products) {
//     const keys = Object.keys(product)
//     console.log(keys)
//     console.log(keys.includes(propName))
//     if (Object.keys(product).includes(propName)) {
//       value.push(product[propName])
//     }
    
//     return value
//   }


//   // Change code above this line
// }



// function getAllPropValues(propName) {
//   // Change code below this line
//   const value = []
//   for (let product of products) {
//     for (key in product)
//       if (key === propName) {
//       value.push(product[key])
//       }
//     }
//     return value
//   // Change code above this line
// }

// function getAllPropValues(propName) {
//   // Change code below this line
//   const value = []
//   for (let product of products) {
    
//       if (product.hasOwnProperty(propName)) {
//       value.push(product[propName])
//       }
//     }
//     return value
//   // Change code above this line
// }



// console.log(getAllPropValues("name"));
// console.log(getAllPropValues("quantity"));
// console.log(getAllPropValues("price"));
// console.log(getAllPropValues("category"))


// function makeTask(data) {
//   const completed = false;
//   const category = "General";
//   const priority = "Normal";
//   // Change code below this line
//   return {completed, category, priority, ...data}
//   // Change code above this line
// }


// console.log(makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" }))
// console.log(makeTask({ category: "Finance", text: "Take interest" }))
// console.log(makeTask({ priority: "Low", text: "Choose shampoo" }))
// console.log(makeTask({ text: "Buy bread" }))





// 

// const atTheOldToad = {
//   // Change code below this line
//   potions() {
//     return []
//   }

//   // Change code above this line
// };




// console.log(atTheOldToad.potions())

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: 'Dragon breath', price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     for (let potion of this.potions) {
//       console.log(potion.name === newPotion.name)
//       if (potion.name === newPotion.name) {
//         console.log(potion.name)
//         console.log(newPotion.name)
//         return `Error! Potion ${newPotion.name} is already in your inventory!`;
//       }
//     }
//     console.log(this.potions.push(newPotion));
//     this.potions.push(newPotion);
//     return this
//   },
//   removePotion(potionName) {

//     for (let potion of this.potions) {
//       for (let key in potion) {
//         if (potion[key] === potionName) {
//           this.potions.splice(this.potions.indexOf(potion), 1);
//         }
//       }
//     }
//     return `Potion ${potionName} is not in inventory!`;

//   },
//   updatePotionName(oldName, newName) {
//     for (let potion of this.potions) {
//       for (let key in potion) {
//         if (potion[key] === oldName) {
//         return potion.name = newName;
//         }
//       }    
//     }
//     return `Potion ${oldName} is not in inventory!`;
//   },
//   // Change code above this line
// };


// console.log(atTheOldToad.addPotion({ name: 'Dragon breath', price: 700 }))
// console.log(atTheOldToad.addPotion({ name: 'Power potion', price: 270 }))
// console.log()
// // console.log(atTheOldToad.removePotion('Speed potion'))



// 

// const students = [
//   { name: "Манго", courses: ["математика", "фізика"] },
//   { name: "Полі", courses: ["інформатика", "математика"] },
//   { name: "Ківі", courses: ["фізика", "біологія"] },
// ];

// const allCourses = students.flatMap(student => student.courses);
// // ['математика', 'фізика', 'інформатика', 'математика', 'фізика', 'біологія'];

// const uniqueCourses = allCourses.filter(
//   (course, index, array) => array.indexOf(course) === index
// );

// // const uniqueCourses = allCourses.filter(
// //   (course, index, array) => {
// //     if (array.indexOf(course) === index) {
      
// //     }
    
// //   };
// //   )





// 


// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// const getTags = tweets =>
//   tweets.reduce((allTags, tweet) => {
//     allTags.push(...tweet.tags);

//     return allTags;
//   }, []);

// const tags = getTags(tweets);

// console.log('tags',tags)

// // Винесемо callback-функцію окремо, а в reducе передамо посилання на неї.
// // Це стандартна практика, якщо callback-функція досить велика.

// // Якщо в об'єкті-акумуляторі acc відсутня своя властивість з ключем tag,
// // то створюємо її і записуємо їй значення 0.
// // В іншому випадку збільшуємо значення на 1.
// const getTagStats = (acc, tag) => {
//   if (!acc.hasOwnProperty(tag)) {
//     acc[tag] = 0;
//     console.log(tag)
//   }

//   acc[tag] += 1;

//   return acc;
// };

// // Початкове значення акумулятора - це порожній об'єкт {}
// const countTags = tags => tags.reduce(getTagStats, {});

// const tagCount = countTags(tags);
// console.log(tagCount);





// 


// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   // Change code below this line

//   firstArray.forEach( function (el) {
//     console.log(secondArray.includes(el))
//     console.log(el)
//     if (secondArray.includes(el)) {
      
//       return ;
//     }
//     console.log(commonElements)
//   })
//   return commonElements
// }



// console.log(getCommonElements([1, 2, 3], [2, 4]))




// 

// function changeEven(numbers, value) {
//   // Change code below this line
//   const newNumbers = []
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] % 2 === 0) {
//       newNumbers.push(numbers[i] + value);
//     } else {
//       newNumbers.push(numbers[i]);
//     }
//   }
//   return newNumbers;
//   // Change code above this line
// }


// console.log(changeEven([1, 2, 3, 4, 5], 10))




// 


// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     skills: ["ipsum", "lorem"],
//     gender: "male",
//     age: 37,
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//     gender: "female",
//     age: 34,
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     skills: ["nulla", "anim", "proident", "ipsum", "elit"],
//     gender: "male",
//     age: 24,
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     skills: ["adipisicing", "irure", "velit"],
//     gender: "female",
//     age: 21,
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     skills: ["ex", "culpa", "nostrud"],
//     gender: "male",
//     age: 27,
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     skills: ["non", "amet", "ipsum"],
//     gender: "male",
//     age: 38,
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     skills: ["lorem", "veniam", "culpa"],
//     gender: "female",
//     age: 39,
//   },
// ];

// // Change code below this line
// const getUserNames = users => {
//   return users.map(({name}) => name);
// };
// // Change code above this line


// console.log(getUserNames(users))





// 




// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction", "mysticism"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism", "adventure"],
//   },
// ];
// // Change code below this line
// const allGenres = books.flatMap(({genres}) => genres);
// const uniqueGenres = allGenres.filter((genre, i , arr) => {
//   console.log(arr)
//   console.log(genre)
//   console.log(arr.indexOf(genre))
//   console.log(i)
//   if (arr.indexOf(genre) === i) {
//     return arr.push(genre)
//   }
// });


// console.log(allGenres)
// console.log(uniqueGenres)




// 


// [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//     age: 37
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//     age: 34
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//     age: 24
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//     age: 21
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//     age: 27
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//     age: 38
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//     age: 39
//   }
// ]

// // // Change code below this line
// // const getActiveUsers = (users) => {
// //   users.filter(({isActive}) => isActive)
// // };
// // // Change code above this line



// console.log(getActiveUsers(users))


// // Change code below this line
// const getUserWithEmail = (users, email) => {
//   users.find(user => user.email === email)
// };
// // Change code above this line

// console.log(getUserWithEmail (users, 'shereeanthony@kog.com'))







// 

// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];
// // Change code below this line

// // const totalAveragePlaytimePerGame = players.reduce((total, {playtime, gamesPlayed}) => total += playtime / gamesPlayed);
// const totalAveragePlaytimePerGame = players.reduce((total, player) => total + player.playtime / player.gamesPlayed);


// console.log(totalAveragePlaytimePerGame)




// 


// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// // Change code below this line

// const sortedByAuthorName = books.sort((authorFir, authorSec) => authorFir.author.localeCompare(authorSec.author));

// const sortedByReversedAuthorName = books.sort((authorFir, authorSec) => authorSec.author.localeCompare(authorFir.author));

// const sortedByAscendingRating = books.sort((a, b) => b.rating - a.rating);

// const sortedByDescentingRating = books.sort((a, b) => a.rating - b.rating);

// console.log(sortedByAuthorName)
// console.log()
// console.log(sortedByAscendingRating)
// console.log(sortedByDescentingRating)



// 




// Change code below this line
const getTotalBalanceByGender = (users, gender) => {
  return users.filter(user => user.gender === gender).reduce((total, user) => total + user.balance, 0);
};
// Change code above this line

const users = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male"
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female"
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male"
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female"
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
    isActive: true,
    balance: 3951,
    gender: "male"
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman", "Adrian Cross", "Solomon Fokes"],
    isActive: false,
    balance: 1498,
    gender: "male"
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female"
  }
]

console.log(getTotalBalanceByGender(users, male))