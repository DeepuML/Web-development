// console.log("Hello, you have clicked on the webpage.");

// wrong method for removing
// document.addEventListener('click', function () {
//     console.log("You have clicked on the webpage.");
// })

// documnet.removeEventListener('click',function () {
//     console.log("You have clicked on the webpage.");
// })

// function print() {
//     console.log("You clicked on the document. ");
// }

// document.addEventListener('click', print);
// documnet.removeEventListener('click', print);

// function print() {
//     console.log("You clicked on the document.");
// }

// document.addEventListener('click', print);
// document.removeEventListener('click', print);

// const content = document.querySelector('#wrapper');

// content.addEventListener('click', function (event) {
//     console.log(event);
// })

// let links = document.querySelectorAll('a');
// let thirdLink = links[2];

// if (thirdLink) { // Ensure the third link exists
//     thirdLink.addEventListener('click', function (event) {
//         event.preventDefault(); // Prevents default link behavior
//         console.log("Maza aya, accha laga");
//     });
// }

// let myDiv = document.createElement('div');

// for (let i = 1; i < 100; i++){
//     let newElement = document.createElement('p');
//     newElement.textContent = 'This is para' + i;

//     newElement.addEventListener('click', function (event) {
//         console.log('I have clicked on para');
//     });
//     myDiv.appendChild(newElement);
// }
// document.body.appendChild(myDiv);


// let myDiv = document.createElement('div');
// let fragment = document.createDocumentFragment(); // Use a document fragment for better performance

// for (let i = 1; i < 100; i++) {
//     let newElement = document.createElement('p');
//     newElement.textContent = 'This is para ' + i;
//     newElement.setAttribute('data-index', i); // Optional: Store index for debugging
//     fragment.appendChild(newElement);
// }

// myDiv.appendChild(fragment); // Append everything at once
// document.body.appendChild(myDiv);

// // Event Delegation: Attach one event listener to myDiv
// myDiv.addEventListener('click', function (event) {
//     if (event.target.tagName === 'P') {
//         console.log('I have clicked on para', event.target.textContent);
//     }
// });
