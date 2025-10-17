//For of loops
//array specific rule
["",""]
[{},{}]//objects in array
const array=[1,2,3,4,5];
for (const i of array) {
 console.log(i);
    
}
//Thois can be get anything like stringe
 
const hello="griying"
for (const j of hello) {
    console.log(`Each char  ius ${j}`);
}
//Maps
const map= new Map()
map.set('IN','India')
map.set('FR','fndia')
map.set('AN','andia')
console.log(map);
//map is for unique values
for (const [g,value] of map) {
    console.log(g, ';',value);

    
}
const Object={
    'gane1':'NFS',
'gane2':'COD'
}
for (const [key, value] of object) {
    console.log(key,':-',value);
}
// objects can not iratable in this form
 const myObject={
    js: 'Javascript',
    cpp:'C ++',
    rb:'Rubby',
    swift:'Swift for apple'
 }
 for (const key in myObject) {
    console.log(myObject[key]);
    

 }
 const proh=['js','cpp','rb','java']
 for (const key in proh) {
   console.log(key);
   
 }
 //Maps are not iritable
 //for each loops
const codding=["js","cpp","rb"]
codding.forEach(function (item){
     console.log(item);
} )
// codding.forEach((value)=>{
// console.log(value);

// })
function printme(item){
    console.log(item);
    
}
codding.forEach(printme)

codding.forEach((item, index, arr)=>{
    console.log(item,index,arr);
})
const mtcose=[
    {
        lan:"java",
        file:"java"
    },
    {
        lan:"cpp",
        file:"jsss"
    }
]
mtcose.forEach((item)=>{
    console.log(item.lan);
    
})