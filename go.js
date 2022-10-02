// const users = [
//     {
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
//     },
//     {
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
//     },
//     {
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
//     },
//     {
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
//     },
//     {
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
//     },
// ]

// const obj = {}

// const fmA = Object.keys(users[0])

// for (const key of fmA) {
//     obj[key] =[]
// }

// for (const key in obj) {
//     for (const user of users) {
//         obj[key].push(user[key])
//     }
// }

// console.log(obj)

// Write a function that converts the argument values.
// If it will be a string, convert it to number and wise versa.
// It should return an array of converted values.

// Написати функцію, яка перетворює значення аргументів.
// Якщо це буде рядок, перетворити його на число і навпаки.
// Він має повернути масив перетворених значень.

// console.log(convert(1, '2', 3));
// [‘1’, 2, ‘3’]

// function convert(...args) {
//   return args.map(arg => {
//     if (typeof arg === 'number') {
//       return arg.toString();
//     }
//     return Number(arg);
//   });
// }

// function convert(...args) {args.map(typeof arg === 'number' ? arg.toString() : Number(arg);
//     };

// Write a function - positiveSum 
// It should accept an array of numbers and return a result of their addition. But you must calculate only positive numbers and omit negative if any presents. 
// For example: 
// console.log (positiveSum([2, 4, 6, 8]))   // => 20 
// console.log (positiveSum([0, -3, 5, 7])) // => 12

// // function positiveSum (array) {
// //     const positiveArr = array.filter(value => value > 0);
// //     return positiveArr.reduce((total, el)=>(total += el), 0);
// // }


// function positiveSum (array) {
//     return array.reduce((total, el)=>(el > 0 ? total += el : total ), 0);
// }


// Write a function – letterCount 
// It accepts two string arguments and returns an integer of the count of occurrences the 2nd argument is found in the first one. 
// If no occurrences can be found, a count of 0 should be returned. 
// For example: 

// console.log (letterCount("Maggy", "g")) // => 2 
// console.log(letterCount("Barry", "b") )// => 1 
// console.log(letterCount("", "z"))     // => 0

// function letterCount(string, letter) {
//     return [...string.toLowerCase()].reduce((total, el)=>(el === letter ? total+=1 : total), 0);
// }

// function letterCount(string, letter) {
//     return [...string.toLowerCase()].filter((el)=>(el === letter)).length;
// }

Our football team completed the championship. The result of each match look like "x:y". 
Results of all matches are recorded in the collection like this: ["3:1", "2:2", "0:1", ...] 
 
Write a function – countPoints 
It should accept a collection of backetball games scores and count the points of our team in the championship. 
Rules for counting points for each match: 
• if x > y   - 3 points 
• if x < y   - 0 point 
• if x = y   - 1 point 
 
For example: 
console.log(countPoints(['3:1', '1:0', '0:0', '1:2', '4:0', '2:3', '1:1', '0:1', '2:1', '1:0']))  // => 17 
countPoints(['1:1', '1:2', '2:0', '4:2', '0:1', '2:3', '1:1', '0:1', '1:1', '3:0']) // => 12

function countPoints(array) {
    const totalarr = array.map(el => el.split(':'));
    const winArr = totalarr.filter((el) => el[0] > el[1] ).length*3
    const noWinArr = totalarr.filter((el) => el[0] === el[1] ).length

    return winArr + noWinArr
}