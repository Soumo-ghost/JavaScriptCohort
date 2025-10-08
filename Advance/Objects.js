//Singleton
//when it made using constructor
Object.create//its a process to cretare singleton

//object literal
const sym=Symbol("Kay")
const JsUser={
name:"Soumasish",
age:18,
loc:"rampuehat",
email:"Sou asishs@ggg.com",
isLofin:false,
lastLog:["sunday","monday"],
"fullName":"soumasish chgakraborty",
[sym]:"MyKey",
}
arr=["a","b","c"]
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["fullName"]);
// console.log(typeof JsUser[sym]);
// console.log(JsUser[sym]);
JsUser.email="Soumao@chatgpt.com";
// Object.freeze(JsUser);
JsUser.email="Soumo@gggsoumo";
// console.log(JsUser);

JsUser.greetings=function(){
    console.log("hi Js");
    
}
console.log(JsUser.greetings);
JsUser.greetings2=function(){
    console.log(`hi Js ${this.name}`);   
}
console.log(JsUser.greetings2());

//objects using singelton
const tinder=new Object()
console.log(tinder);
tinder.Userid="12323";
tinder.name="Soumasoshidshidbb";
tinder.weesi=false;
const regular={
     email:"SoumodDDDsoYUJKSHHSGGH",
     Full:{
        Userfull:"Soumasisn",
        Lastname:"Soumasish Chakraborty",
     }
}
console.log(regular.Full.Lastname);


//objets Menupulation
const Obj={1:"a",2:"b"}
const Obj2={2:"d",4:"dd"}
// const obj3={Obj, Obj2}
// const Obj3=Object.assign({}, Obj,Obj2)//mind it
// console.log(Obj3);
const Obj3={...Obj,...Obj2}
console.log(Obj3);
//Spredding same as array


const Users=[
    {
        id:12,
        email:"sssss",
    },
    {
        id:14,
        email:"sggssss",
    },
    {
        id:142,
        email:"sgggssss",
    }
]
Users[12].email
console.log(tinder);
console.log(Object.keys(tinder));
console.log(Object.values(tinder));
console.log(Object.entries(tinder));

console.log(tinder.hasOwnProperty('wessi'));
const course={
    coursename:"WebDEV",
    price:"99999",
    instructer:"Hitesh",
}
const {instructer}=course
console.log(instructer);


// const navbar=({company})=>{

// }
// navbar(company="soiumo")
//destructrering 
//--------------------JSON------------------------
// {
//     name : "soumo",
//     Cname : "JS in us",
// price : "f5rree"
// }
//API can also get As array
//=========================To Study Api REsponse use JSON Formatter=================
