//Promise are represent eventually completion or faluer
const P1=new Promise(function(resolve, reject){
    //DO an Async Task 
    //dB calls
    //cryptograpgy, network
setTimeout(function(){
console.log('Task is complete');
resolve()
},1000)
})
P1.then(function(){
   console.log("Promise Consumed");
                 
})
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async Task 2");
        resolve()
        
    },1000)

}).then(function(){
    console.log("Task 2 is done");
    
})
const P3=new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("promise 3 is starting");
resolve({username:"chai",email:"chai@email"})        
    },1000)
})
P3.then(function(user){
    console.log(user);
    
})
const P4=new Promise(function(resolve,reject){
    setTimeout(function(){
let erroer=false
if(!erroer){
    resolve({username:"Soumo",sre:"fello"})
}
else{
reject('Error :Somting went Wrong')
}
    },1000)
})
const username=P4.then((user)=>{
    console.log(user);
    return user.username
    
}).then((username)=>{
console.log(username);

}).catch(function(err){
    console.log(err);
    
}).finally(()=>{
    console.log("The Promise is Either resolve or rejected");
    
})
 const P5=new Promise(function(resolve,rejected){
    setTimeout(function(){
let erroer=false
if(!erroer){
    resolve({username:"Soumasish",sre:"Hello"})
}
else{
reject('Error :JS went Wrong')
}
    },1000)
 })      
  
async function consume(){
   try{
    const response=await P5
    console.log(response);
    
    
   }
   catch(erroer){
    console.log(erroer);
    
   }
    
}
  consume();

//   async function getallusers() {
//     try{
//         const response=fetch('https://soumo.com')
//     const data= await response.json()
//     console.log(data);
    
//     }
//     catch(error){
//         console.log(error);
        
//     }
//   }

//   getallusers()

fetch('url').then((response)=>{
    return response.json
}).then((data)=>{
    console.log(data);
    
})
.catch((err)=>{
console.log(err);

})