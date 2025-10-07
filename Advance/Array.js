//array
const arr=[0, 1, 2, 4, 6];
//arrays are resizabel mix of different data
//array aoutput
console.log(arr[0]);
//shallow copy of an objects
//learn above topic and deep copy
const hero=["saktiman","nagarjun"];
const arr2= new Array(1,2,3,4,5,6,7);
console.log(arr2[3]);


//array Methods
arr.push(6);//add value
console.log(arr);
arr.pop();//last value removed
console.log(arr);
arr.unshift(0);//insert at starting position
console.log(arr);
arr.shift();// to remove 1st element
console.log(arr);

console.log(arr.includes(9));// Gives a boolean ans of qustion eg- arr contains '9' value
console.log(arr.indexOf(3));//give index an
const newarr= arr.join()
console.log(arr);
console.log(newarr);//its a string in data type
console.log(typeof(newarr));

// Slice , Splice
console.log("A", arr);
const my1=arr.slice(1,3);
console.log(my1);
console.log("B",arr);
const my2=arr.splice(1,3);
console.log(my2);
console.log("C",arr);
//Splice vs Slice
//Splice changes the original array it get value and delete it from original array
//slice olny copy the elemts of original array did not modify anything

const mh=["thor", "Iron","spider"]
const dh=["super","batman"]
// mh.push(dh);
//it will ad array into array
// console.log(mh[3][1]);//bad typr
// const allh=mh.concat(dh);
// console.log(allh);
const allnh=[...mh,...dh];
//it is like a glass bottel saterring concept
const anoarr=[1,2,3,[4,5,6],7,[6,7,[4,5]]];
const useable=anoarr.flat(Infinity);
console.log(useable);

console.log
(Array.isArray("soumo"));
console.log
(Array.from("soumo"));
console.log
(Array.from({name:"Sopumo"}));//interesting case for interview it will give empty array
let score=100
let score2=200
let score3=300
console.log(Array.of(score,score2,score3));
//will make a new array from data
