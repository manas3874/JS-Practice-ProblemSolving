// ! 1*****************************************************************************************************************
// ! make an array of all the values of this object
var obj = {
  a: 1,
  b: 2,
  c: 4,
};

let arr = [];
for (item in obj) {
  arr.push(obj[item]);
}

console.log(arr);
// ! 2*****************************************************************************************************************
// ! reverse a string

let x = "hello";
var y = x.split("");
var revArr = [];
let i = 0;
while (i < x.length) {
  revArr.push(y.pop());
  i++;
}
console.log(revArr.join(""));
// ! 3*****************************************************************************************************************
// ! SIMPLER ONE LINER IN ES6 to reverse a string

var stringRev = (str) => str.split("").reverse().join("");
console.log(stringRev(x));
// ! 4*****************************************************************************************************************
// ! run two functions of an object together

var obj2 = {
  a: 1,
  b: 5,
  meth1() {
    console.log(this.a);
    // ! important to return this
    return this;
  },
  meth2() {
    console.log(this.b);
    // return this;
  },
};

obj2.meth1().meth2();
// ? meth2 was not able to access this from within meth1 hence we returned this from meth1 to meth2
// ! 5*****************************************************************************************************************
// ! Make a print() function for array object that will print out the entire internal array
// ! eg. arr=[1,2,3,4] then it should print 1,2,3,4

arr = [1, 2, 3, 4];

Array.prototype.print = function () {
  let result = [];
  // ! this points to the current array
  this.forEach((item) => {
    result.push(item + ",");
  });
  // ! replacing the last comma with nothing
  let x = result[result.length - 1].replace(",", "");
  result.pop();
  result.push(x);
  // ! Update: we can simply pop the last element because it is a comma
  return result.join("");
};

// * console.log(arr.print());
// ? or we can simply make it a string using String(arr)

// ! 6*****************************************************************************************************************
// ! inherit a property from a parent constructor

var a = function (x) {
  this.x = x;
};
var b = function (x, y) {
  a.call(this, x);
  this.y = y;
};

let p = new a(1);
let q = new b(3, 4);
console.log(p, q);

// ! 7*****************************************************************************************************************
// ! Clone an object
// ! Then change the value inside the clone
// ! the value inside the initial obj should not change

obj = {
  a: {
    b: {
      c: 1,
    },
  },
};

let cloneStr = JSON.stringify(obj);
const clone = JSON.parse(cloneStr);
clone.a.b.c = 3;
console.log(clone, obj);

// ! 8*****************************************************************************************************************
// ! join two arrays and keep them sorted

a = [2, 4, 5, 3, 12, 8, 90];
b = [3, 5, 8, 12, 1, 44];

var c = a.concat(b);

console.log(
  // ! normal sort works on string sorting
  // ! use the comparison function to sort the array of numbers
  c.sort((a, b) => a - b) //b-a for descending
);

// ! 9*****************************************************************************************************************
// ! write a function which will give the correct output for these two types of calls

// ? add(a,b)
// ? add(a)(b) basically add(a) returns another function which will take b as a parameter
// ! function returning a function

function add(num1, num2) {
  if (num1 && num2) {
    return num1 + num2;
  } else {
    return function (num3) {
      return num1 + num3;
    };
  }
}
console.log(add(4)(5));

// ! 10*****************************************************************************************************************
// ! there is an array of numbers from 1-10 where one number is missing. find that number
// ! BRUTE FORCE solution
// let dummyArr = [];
// for (let i = 0; i < 10; i++) {
//   dummyArr[i] = i + 1;
// }
// quesArr = [10, 2, 8, 4, 9, 6, 3, 5, 1];
// let found;

// dummyArr.forEach((item) => {
//   for (let i = 0; i < quesArr.length; i++) {
//     counter = 0;
//     if (!(item == quesArr[i])) {
//       counter += 1;
//       if (counter == 9) {
//         found = item;
//         break;
//       } else {
//         continue;
//       }
//     } else {
//       break;
//     }
//   }
// });
// console.log(found);
// ! 11*****************************************************************************************************************
// ! there is an array of numbers from 1-10 where one number is missing. find that number
// ! BRUTE FORCE solution 2 using string includes
// ! Better solution

let dummyArr = [];
for (let i = 0; i < 10; i++) {
  dummyArr[i] = i + 1;
}
quesArr = [10, 2, 8, 4, 9, 6, 3, 5, 1];
let found;
let quesStr = String(quesArr);

dummyArr.forEach((item) => {
  if (!quesStr.includes(item)) {
    found = item;
  }
});
console.log(found);

// ! 12*****************************************************************************************************************
// ! we have an unsorted array of any length
// ! we can remove any number from the array and have the sum of the rest of the items
// ! write a function that will return an array of the minimum possible sum and maximum possible sum

quesArr = [10, 2, 8, 4, 7, 9, 6, 3, 5, 1]; //? 1-10 unsorted
function minMax(ary) {
  let sum = 0;
  ary.forEach((item) => {
    sum += item;
  });
  // ! use the spread operator to expand the contents of your array to pass into another function which does not take array as an arg but the components of an array
  // ! here Math.max/Math.min does not take an array but the components of an array
  return [sum - Math.max(...ary), sum - Math.min(...ary)];
}

console.log(minMax(quesArr));

// ! 13*****************************************************************************************************************
//! Find the length of this number without converting it into a string

let z = 1234545;

function findLength(num) {
  let length = 0;

  // ! First method using while loop
  while (z > 1) {
    z /= 10;
    length++;
  }
  // ! second method by incrementing the divisor
  // for (i = 10; i < 1000000000; i *= 10) {
  //   if (num / i > 1) {
  //     length += 1;
  //   } else {
  //     length += 1;
  //     break;
  //   }
  // }
  return length;
}

console.log(findLength(z));

// ! 14*****************************************************************************************************************
// ! given an array, make another array with squares of the given array

let arrx = [1, 2, 4, 5, 7, 8];
// ! used map function and arrow function
// ! map takes one compulsory argument and one optional argument that is the index
// ? Array.map() takes two arguments, 1. item of the array 2. (optional) index of that item
let arry = arrx.map((item) => item * item);

console.log(arry);

// ! 15*****************************************************************************************************************
// ! Make a click counter
var clickCounter = 0;
document.getElementById("clicker").addEventListener("click", (ev) => {
  clickCounter += 1;
  console.log(clickCounter, ev.target);
});

// ! 16*****************************************************************************************************************
// ! FizzBuzz

function FizzBuzz() {
  for (let i = 0; i < 101; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log(i, "FizzBuzz");
    } else if (i % 3 == 0) {
      console.log(i, "Fizz");
    } else if (i % 5 == 0) {
      console.log(i, "Buzz");
    }
  }
}

//* FizzBuzz();

// ! 17*****************************************************************************************************************
// ! how IIFE protects the data within it
var foo = "Hello";
(function () {
  var bar = " World";
  // alert(foo + bar);
})();
// ? bar is undefined
// alert(foo + bar);

// ! 18*****************************************************************************************************************
// ! IN WHAT ORDER WILL THE OUTPUT BE PRINTED
// console.log("one");
// setTimeout(function () {
//   console.log("two");
// }, 0);
// Promise.resolve().then(function () {
//   console.log("three");
// });
// console.log("four");

// ! 19*****************************************************************************************************************
// ! FIBONACCI algo using recursive functions
function fibonacci(n) {
  if (n <= 1) return n;
  else return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(12));

// ! 20*****************************************************************************************************************
// ! Count the number of times a word is present in a string (hello)

let str =
  "hello manas how are hello you, what HELLO is your hello plan for hello today"; //? 5

function stringWordCounter(strng) {
  let counter = 0;
  for (i = 0; i < strng.length; i++) {
    if (strng.toLowerCase().includes("hello")) {
      counter += 1;
      strng = strng.toLowerCase().replace("hello", " ");
    } else {
      break;
    }
  }
  return counter;
}
console.log(stringWordCounter(str));

// ! simple one liner
// str.toLowerCase().split("hello").length - 1;

// ! 21*****************************************************************************************************************
// ! Find the count of

let numArray = [1, 2, 2, 4, 2, 4, 8, 8, 8, 8];
let maxNum = String(Math.max(...numArray));
function countOfMax(ary) {
  strng = String(ary);
  counter = 0;
  for (i = 0; i < strng.length; i++) {
    if (strng.includes(maxNum)) {
      counter += 1;
      strng = strng.replace(maxNum, "");
    } else {
      return counter;
    }
  }
}

console.log(countOfMax(numArray));
// ! 22*****************************************************************************************************************
// ! What will be the output of this code
// arr = [5, 120, 15, 21];
// for (let i = 0; i < arr.length; i++) {
//   setTimeout(() => {
//     console.log(`Index: ${i} and element: ${arr[i]}`);
//   }, arr[i]);
// }
// 0,5
// 2,15
// 3,21
// 1,120
// ! 23*****************************************************************************************************************
// ! Sort the array using setTimeout

arr = [1, 4, 2, 5, 6, 3, 8];
let sortedArr = [];
for (let i = 0; i < arr.length; i++) {
  setTimeout(() => {
    sortedArr.push(arr[i]);
  }, arr[i]);
}
console.log(sortedArr);
// ! 24*****************************************************************************************************************
// ! Convert the Timeformat from 12hr to 24hr
let time = "11:03pM";
time = time.toLowerCase();

function formatTime(time12) {
  if (time12 == "12:00am") {
    return "00:00";
  } else if (time12 == "12:00pm") {
    return "12:00";
  } else if (time12.endsWith("pm")) {
    return `${Number(time12.slice(0, 2)) + 12}:${time12.slice(3, 5)}`;
  } else if (time12.endsWith("am")) {
    return `${time12.slice(0, 2)}:${time12.slice(3, 5)}`;
  }
}

console.log(formatTime(time));

// ! 25*****************************************************************************************************************
// ! Method chaining
let obj4 = {
  a() {
    return this;
  },
  b() {
    return this;
  },
};
obj4.a().b().a().a();

// ! 26*****************************************************************************************************************
// ! convert decimal to hex
num = 12;
console.log();
// ! 27*****************************************************************************************************************
// ! to edit the content of any website enter this in the console

// document.body.contentEditable=true;
// ! 28*****************************************************************************************************************
// ! find the number of arguments in a function

function xyz(x, y, z) {
  return arguments.length;
}
console.log(xyz(1, 2, 3));
// ! 29*****************************************************************************************************************
// ! Tricky question (What will be the output)
arr = [1, 2, 3, 4];
arr[-1] = 45; //? a separate index of -1 will be made and assigned 45
console.log(x[x.indexOf(100)]); //? an index of non existent entry results in -1 and x[-1] results the value we assigned that is 45

// ! 30*****************************************************************************************************************
// ! Find the sum of all the numbers on the perimeter of a 2D array
arr = [
  [1, 1, 1, 5],
  [1, 1, 1, 7],
  [1, 1, 1, 3],
  [1, 5, 1, 3],
];

sum = 0;
function summer(aryy) {
  // sum of first row

  aryy[0].forEach((item) => {
    sum += item;
  });

  // sum of last row
  aryy[aryy.length - 1].forEach((item) => {
    sum += item;
  });
  // sum of  first and last elements of all the rows in between
  for (i = 1; i < aryy.length - 1; i++) {
    sum += aryy[i][0] + aryy[i][aryy[i].length - 1];
  }

  return sum;
}

console.log(summer(arr));
// ! 31*****************************************************************************************************************
function divisibleSumPairs(n, k, ar) {
  //Sorting the array
  //  ar=ar.sort((a,b)=>a-b);
  var count = 0;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (ar[i] < ar[j] && (ar[i] + ar[j]) % k == 0) {
        count++;
      }
    }
  }
  console.log(count);
}
divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2]);

// ! 32*****************************************************************************************************************

function counterAB(str) {
  // let strForAB=str.toLowerCase();
  // let strForBA=str.toLowerCase();
  let countAB = 0;
  let countBA = 0;
  for (let i; i < str.length; i++) {
    if (str.includes("AB")) {
      countAB += 1;
      str = str.replace("AB", "");
    } else {
      break;
    }
  }
  for (let i; i < str.length; i++) {
    if (str.includes("BA")) {
      countBA += 1;
      str = str.replace("BA", "");
    } else {
      break;
    }
  }

  return (countAB + countBA) * 2;
}
let xyzq = "ABABABAB";
console.log(counterAB(xyzq));
// ! 33*****************************************************************************************************************
// ! Rest parameters
function xyzi(...args) {
  args.forEach((item) => console.log(item));
}

xyzi(...arry);
// ! 34*****************************************************************************************************************
// ! Array.reduce()

let numb = [1, 2, 3, 4];
let tot = numb.reduce((acc, item) => {
  return acc + item;
}, 0);


// ! 35*****************************************************************************************************************
// ! 36*****************************************************************************************************************
// ! 37*****************************************************************************************************************
// ! 38*****************************************************************************************************************
// ! 39*****************************************************************************************************************
// ! 40*****************************************************************************************************************
