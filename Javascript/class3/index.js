// console.log("Welcome to the Javascript");

// let lastname="deepu";

// let firstname=new String("HEllo ji");

// let message=`
// Hello Love,
// Thanks for the oppturnity,
// Regards,
// Babbar`;

// let words=message.split(' ');
// console.log(words);

   
// let date=new  Date();
// console.log(date);

// let date2=new Date(`Saturday Jun 20 1998 07:12:00`);
// console.log(date2);

// let date3=new Date(1998,6,20, 7);
// console.log(date3);

// Arrays
//-> Creation of array
// let numbers=[1,2,3,4,5,6];

//1.Adding new elements

// let numbers=[1,4,5,7];
// console.log(numbers);
// console.log(numbers[0]);
// console.log(numbers[1]);
// console.log(numbers[2]);
// console.log(numbers[3]);

// ///insertion
// numbers.push(9);
// console.log(numbers);
// numbers.unshift(22);
// console.log(numbers);
// numbers.splice(3, 0, 'a', 'b', 33);
// console.log(numbers);

let numbers = [1, 2, 3, 4, 5];
console.log(numbers);
// //searching
// console.log(numbers.indexOf(4));
// console.log(numbers.indexOf(8));

// we want to check if a number exit or not in an array
if (numbers.indexOf(4) != -1) {
    console.log("presents");
}
console.log(numbers.includes("90"));
// console.log(numbers);
//2.Finding elements
//3.Removing Elements
//4.Spitting Elements
//5.Combining Elements