//functon are like a pakage that we can use multiple time
function sayMyName(){
    console.log("Soumasish");
}
sayMyName()//It called execution
sayMyName//it is referance
// function addtwoNum(num1, num2){//parameter are need


//     console.log(num1+num2);
// }
//calling
// addtwoNum(2,4);//argumnet are passed
// //parameter and argument
// const result=addtwoNum(3, 5);
// console.log(result);
function addtwoNumber(num1, num2){
    let result=num1+num2;
    return result
}
const result=addtwoNumber(3,5);
// console.log(result);
function login(username="sam"){//it now never is empty becuse it has a value if we give it externaly then privious value get repleced
    if(username===undefined){//if(!username) can also be used good programing
        console.log("plese enter user name");
        return
    }
return `${username} jus tloged in`
}
console.log(login("Soumo"));//if no value is passed user is undifined

//####---------------------------###
function calculateCartPrice(...n1){// thi sis rest operator mind it rest and spered
return n1
}
console.log(calculateCartPrice(200, 400, 600));
 const user={
    username:"soumosa",
    price:178
 }
 function handel(any) {
    console.log(`Username is${any.username} and price si ${any.price}`);
    
 }
handel({
    username:"Sou",
    price:189
})

const myarr=[200,399,789];
function returnsecond(getArray) {
return getArray[1]    
}
// console.log(returnsecond(myarr));
console.log(returnsecond([100,200,300,500,578]));
