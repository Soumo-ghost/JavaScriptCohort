const user={
    username:"Soumo",
    price:156,
    welcome:function(){
        console.log(`${this.username},welcome to website`);//this is a current context which is in scope
        console.log(this);
        
    }
}
// user.welcome();
// user.username="Sam"//Context change
// user.welcome();
console.log(this);
// if we run js in browser this has a global context which is Window
// but for standalone enviroment this with out global variable gives empty objects
//  function chai(){
//     let username="soumasish"
//     console.log(this.username);//this is undifined as function dose not allow this
    
//  }
//Arrow Function
 const Chai= ()=>{
    let username="soumasish"
    console.log(this.username)//this swill give empty objects
 }
Chai()
//Explicit writing
// const addTwo=(num1, num2)=>{
//     return num1+num2
// }
//This is implit Writing ------------####-------------
// const addTwo=(num1, num2)=>(num1+num2)
const addTwo=(num1, num2)=>({username:"soumo"})// to Retue=rn an Object We must need to pass with Paranthesis , if not it will give undifined


console.log(addTwo(5,7));
const Myarr=[1,2,34,5,6,7]
// Myarr.forEach()