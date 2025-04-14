// ading the 100para codes

// for (let i = 0; i < 100; i++) {
//     let newElment = document.querySelector('p');
//     newElement.textContent = 'This is the Para' + i;

//     document.body.appendChild(newElement);
// }

// Optimising a bit
// let myDiv = document.createElement('div');

// for (let i = 1; i < 100; i++){
//     let element = document.createElement('p');
//     element.textContent = 'This is Para' + i;

//     myDiv.appendChild(element);
// }

// document.body.appendChild(myDiv);

// for getting the time of the code to run

// const t1 = performance.now();

// let myDiv = document.createElement('div');

// for (let i = 1; i < 100; i++){
//     let element = document.createElement('p');
//     element.textContent = 'This is Para' + i;

//     myDiv.appendChild(element);
// }

// document.body.appendChild(myDiv);

// const t2 = performance.now();

// console.log("This code took: " + (t2 - t1) + "time.");

// code with the help of fragments

// let fragment = document.createDocument();

// for (let i = 1; i < 100; i++){
//     let element = document.createElement('p');
//     element.textContent = 'This is Para' + i;

//     myDiv.appendChild(element);
// }

// function addPara() {
//     let para = document.createElement('p');
//     para.textContent = "Js is a single threaded language";
//     document.body.appendChild(para);
// }

// function addMessage() {
//     let para = document.createElement('p');
//     para.textContent = "Kya haal chal hai, app log kaise hai?";
//     document.body.appendChild(para);
// }

// addPara();
// addMessage();

