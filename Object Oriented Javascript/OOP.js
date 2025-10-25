const user={
username:"Soumasish",
logincount:8,
signedin:true,
//this are Porperties
getUserdetails:function(){
    console.log("Got User details from detabase");
console.log(this.username);
//this is used for execution context
console.log(this);
//will give the object as whole
}

}
//this is Object Literal

console.log(user.username);

console.log(user.getUserdetails());

console.log(this);
//will give variabel global objects
//in web give manyresults 

//--------------Constructer Function-------------
const p1=new Promise()
const date=new Date()
//New Keyword is use for context making known as constructer Function
function User(username, logc, islogin){
    this.username=username
    this.logc=logc;
this.islogin=islogin;
this.gretings=function(){
    console.log(`Welcome${this.username}`);
    
}
return this//this is implicitly define
}
const UserOne=new User("soumo",12,True)
// const UserTwo=User("chaiAUrCOde", 11, false)//this willOverwrite the value Bad ######3
const UserTwo=new User("chaiAUrCOde", 11, false)
//constructer Fx Give new Instance

console.log(UserOne.constructor);

