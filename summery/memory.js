//memory two type stack and heap
//stack used in Primitive,  heap used in non Primitive
//from heap always give referance
let mysou="soumasish.com"
let aname= mysou;
aname="soumasish"
console.log(aname);
console.log(mysou);

let user1={
    email:"emai@dd.com",
    upi:6785554894
}
console.log(user1.email);

 let user2=user1;
 user2.email="user@ghg.com";
 console.log(user1.email);
 console.log(user2.email);
 
 