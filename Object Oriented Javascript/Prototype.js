let Myname="Soumasish    "
let myclannel="TEa   "

console.log(Myname.length);
console.log(Myname.trim().length);//can be used

let Myhero=["spiderman","Superman"]

let heroPower={
    thor:"HAmmer",
    superman:"Sling",
    getSuperman: function(){
        console.log(`superman has power`);
        
    }
}
Object.prototype.hitesh=function(){
    console.log(`hitesh is present in all objects`);
    
}
heroPower.hitesh()
Array.prototype.heyhitesh=function(){
    console.log("Hitesh Say HEllo");
    
}



//Inheritance
const user={
    name:"Username",
    Email:"Chai.com"
}

const teacher={
    make:true
}
const teching={
    isavail: false
}
const Ta={
    makeassi:"js Assisgnement",
    fulltime:true,
    __proto__: teching
}
teacher.__proto__=user
//Morden Syntax of Inheritance
Object.setPrototypeOf(teching , teacher)
let Anotheruser="Chaior           "

String.prototype.truelength=function(){
    console.log(`${this}`);
    console.log(`true length is:${this.trim().length}`); 
}
"hitesh".truelength()

