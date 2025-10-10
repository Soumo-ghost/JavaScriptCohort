//Immediately Invoked Function Expressions (IIFE)
//Name IIFE
(function chai(){
console.log("Db Connected");

})();//it must to add semicollon
//first pernthesis is for function 2nd is for execution

//to remove globel scope polution we use iife  
// no name iife
(()=>{
    console.log(`Db COnneted ${name}`);
    
})('Soumo')
