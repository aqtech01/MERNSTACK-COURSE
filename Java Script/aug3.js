"use strict";

console.log("Hello, This is Sparta!");

// Data Types----->

// <------Primitive Data Types----------->
// Numbers
// let num = 24;
// console.log(typeof num);

// // String
// let name = "AQ";
// console.log(typeof name);
// // Boolean
// let isLoggedIn = true;
// console.log(typeof isLoggedIn);

// // null
// let n = null;
// console.log(typeof n);

// // undefined
// let un;
// console.log(typeof un);

// // BigInt
// let bgInt = 1243236471893419741741414617617n;
// console.log(typeof bgInt);
// // Symbol
// let Sm = Symbol(12312312);
// console.log(typeof Sm);

// Truthy False

// let isActive = false;
// if (isActive) {
//   console.log("Your Account is active");
// } else {
//   console.log("Your Account is Deactivate");
// }

// let stock;
// console.log(Number(stock));
// if (stock) {
//   console.log("True");
// } else {
//   console.log("False");
// }
// x = Number(1);
// console.log(x);

// let name = " ";
// if (name) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// let stock = 10 / "abc";
// if (stock) {
//   console.log("true");
// } else {
//   console.log("False");
// }
// console.log(stock);
// console.log(typeof stock);

// let a = "";
// console.log(Number(a));
// if (a == true) {
//   console.log("True");
// } else {
//   console.log("False");
// }
// let stock = 10 / 0;
// if (stock) {
//   console.log("true");
// } else {
//   console.log("False");
// }
// console.log(typeof stock);

// Collections
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arr[15] = 10;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] != undefined) {
    console.log(arr[i]);
  }
}
// console.log(arr);
// Arrays Objects
// let marks = [12, 33, 44, 5, 55, 6];

// console.log(marks);

// object with keys and NO values
// const myObject = {
//   id: "",
//   name: "",
// };
// console.log(Object.values(myObject));
// let x = Object.values(myObject).length;
// console.log(x);
// if (x) console.log("Key with No Values is TRUE");
// else console.log("Key with No Value is FALSE");
// console.log("-------------------");
