// function sync() {
//     console.log('first');
// }
// sync();

// console.log("second");


// setTimeout(function () {
//     console.log("third");
// },3000)

// function sync() {
//     console.log("First");
// }

// sync();
// console.log("second");


// let meraPromise = new Promise(function (resolve,reject) {
//     console.log("I am inside promise");
// }
// )
// console.log("pehla");

// let meraPromise = new Promise(function (resolve, rejct) {
//     setTimeout(function () {
//         console.log("I am inside Promise");
//     }, 5000);
//     // resolve(279879);
//     reject(new Error("Bhai sahab error aye hai"))
// });
// console.log("Pehla");

// let myPromise2 = new Promise(function(resolve,reject) {
//     setTimeout(function () {
//         console.log("I am inside promise 2");
//     }, 8000);
//     // reject(new. Error("Error Found"));
// });

// console.log("Phela");

// let myPromise1 = new Promise(function (resolve,reject) {
//     setTimeout(function () {
//         console.log("I am inside promise 1");
//     }, 5000);
//     // reject(new Error("Error found"))
//     return 2;
// });

// myPromise1.then((value) => { console.log(value) });

// let myPromise1 = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         console.log("I am inside promise 1");
//         resolve(2);  // Resolving the promise with value 2
//     }, 5000);
// });

// myPromise1.then((value) => {
//     console.log(value); // This will print 2 after 5 seconds
// }).catch((error) => {
//     console.log("Error:", error);
// });

// let myPromise1=new Promise(function (resolve,reject) {
//     setTimeout(()=> {
//         console.log("I am inside promise 1");
//     }, 5000);
// })

// myPromise1.then(() => {
//     let myPromise2 = new Promise(function (resolve, reject) {
//         resolve("Promise1 is  completed");
//     })
//     return myPromise2;
// }).then((value) => console.log(val));

// let myPromise1 = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         console.log("I am inside promise 1");
//         resolve();  // Resolving the first promise
//     }, 5000);
// });

// myPromise1
//     .then(() => {
//         let myPromise2 = new Promise(function (resolve, reject) {
//             resolve("Promise1 is completed");
//         });
//         return myPromise2;
//     })
//     .then((value) => console.log(value));  // Corrected `val` to `value`
 
// async function abcd() {
//     return 7;
// }

// async function utility() {

//     let delhiMausam = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Delhi mein bahut garmi hai");
//         }, 1000)
//     });

//     let hyderabadMausam = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Hyderabad is cool");
//         }, 1000)
//     });

//     let dm = delhiMausam;
//     let hm = hyderabadMausam;
// }


// async function utility() {
//     let delhiMausam = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Delhi mein bahut garmi hai");
//         }, 1000);
//     });

//     let hyderabadMausam = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Hyderabad is cool");
//         }, 1000);
//     });

//     let dm = await delhiMausam;  // Awaiting resolution
//     let hm = await hyderabadMausam;  // Awaiting resolution

//     console.log(dm);
//     console.log(hm);

//     return { dm, hm }; // Return the resolved values
// }

// // Call the function
// utility();

 
