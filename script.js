// Array is a collection of similar data, separated by commas and enclosed in square brackets. It can hold multiple values under a single name, and you can access the values by referring to an index number.

// const cars = ["Volvo", "Benz", "Maybach"," ", "Lamborghini", 
//     { name: "Bugatti", 
//     year: 2026, 
//     color: "Black"
// }, "Cybertruck"
// ]

// console.log(cars[4].name)
// console.log(cars[4].year)
// console.log(cars[4].color)

// const country = "Nigeria";

// console.log(country.includes("ige"))
// console.log("A".charCodeAt(0))

// console.log('z'.charCodeAt(0))

// const money = "100"
// console.log(money.padEnd(6,'.00'))


// console.log(fullName.includes("medDav"))
// console.log(fullName.trimStart())
// console.log(fullName.trimEnd())
// console.log(fullName.trim())

// console.log(fullName.toUpperCase())
// // console.log(fullName.toLowerCase())
// const fullName = '  Ahmed Davids  ';

// // console.log(fullName.slice(2,7))
// // console.log(fullName.slice(5))
// // console.log(fullName.split(""))
// // console.log(fullName.split(" "))
// console.log(fullName.startsWith(" "))
// console.log(fullName.endsWith(" "))

// Functions are blocks of code designed to perform a particular task. A function is executed when "something" invokes it (calls it).
// Types of Functions
// 1. Function Declaration
// 2. Function Expression
// 3. Arrow Function
// 4. Anonymous Function
// 5. IIFE (Immediately Invoked Function Expression)
// Function Declaration (Supports Hoisting)
// function myFunction (a){
//     const result = a.padEnd(7, '0');
//     return `$${result}`
// }

// // console.log(myFunction('1'));
// const money = myFunction('1');
// console.log(money)

// Function Expression
// const addition = function (a, b) {
//     return a + b
// }

// console.log(addition(78, 909))

// Arrow Function
// const simplify = (num, num1, num2) => {
//     return num * num1 + num2
// }

// console.log(simplify(34, 65, 23))
const cars = ["Volvo", "Benz", "Maybach", " ", "Lamborghini",
    {
        name: "Bugatti",
        year: 2026,
        color: "Black"
    }, "Cybertruck"
]

// Anonymous Function
// () => {}
// console.log(cars.find((e) => e == "Lamborghini"))

// const names = ['naomi', 'bright', 'chikodi', 'jessica', 'elijah', 'omotayo', 'victor', 'naomi', 'naomi', 'emmanuel'];

// const result = names.filter((element)=> element === 'naomi' || element === 'emmanuel')
// const arrow = (element)=> {
//     return element === 'naomi' || element === 'emmanuel'
// }
// const result = names.filter(arrow)
// console.log('Result: ', result);

// const transform = (data)=> {
//     return data.startsWith('v')
// }

// const result = names.filter(transform)
// console.log('Result: ', result);

const names = ['naomi', 'bright', 'chikodi', 'jessica', 'elijah', 'tayo', 'victor', 'naomi', 'naomi', 'emmanuel'];


// const check = (string) => {
//     return string.includes('t')
// }

// console.log(names.filter(check))

const name = 'ikEchUkWu';
// const firstLetter = name.slice(0, 1)
// const updatedFirstLetter = firstLetter.toUpperCase()
const firstLetter = name.slice(0, 1).toUpperCase()
// console.log(firstLetter)

const remainingLetters = name.slice(1).toLowerCase()
// console.log(remainingLetters)

// console.log('Result: ',firstLetter +remainingLetters);

// const titleCase = (string) => {
//     const trimmed = string.trim();
//     return `${trimmed.slice(0, 1).toUpperCase()}${trimmed.slice(1).toLowerCase()}`
// }

// // console.log(titleCase('   fabian   '))

// const result = names.map(titleCase);

// // console.log("Result: ", result)

// // PROMISES
// let run = true;

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (run == true) {
//             resolve(result)
//         } else {
//             reject('Could not perform operation')
//         }
//     }, 4000)
// })

// promise.then((data) => console.log(data))
//     .catch((err) => console.log(err))
//     .finally(() => console.log('Promise Ran Successfully'))

const fs = require('fs');

// fs.writeFile('./text.txt', `${names}`, (err, data) => {
//     if (err) {
//         console.log('Error writing to File')
//     } else {
//         console.log('File written successfully')
//     }
// });

// const readFile = (path) => {
//     fs.readFile(path, 'utf8', (err, data) => {
//         if (err) {
//             console.log('Error reading File')
//         } else {
//             console.log(data)
//         }
//     })
// }

// readFile('./text.txt');

const readFile = (path) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            fs.readFile(path, 'utf8', (err, data) => {
                if (err) {
                    reject('Fail to read file')
                } else {
                    resolve(data)
                }
            })
        }, 3000)
    })
}

// readFile('./text.txt')
// .then((data)=> console.log(data))
// .catch((e)=> console.log(e))
const writeToFile = (path, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(path, data, (err, data) => {
            if (err) {
                reject('Error writing to File')
            } else {
                resolve('File written successfully')
            }
        });
    })
}
// Async Await 
// const runCode = async () => {
//     try {
//         // console.log( readFile('./text.txt'));
//         const data = await readFile('./text.txt')
//         console.log(data);
//         await writeToFile('jexxica.txt', data);
//         console.log('successful');
//     } catch (error) {
//         console.log(error)
//     }
// }

// runCode()