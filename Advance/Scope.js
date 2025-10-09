// let a=10
// const b=20
// var c =30

if (true) {
   let a=10
    const b=20
    var c =30 
}



//console.log(a);// a and b dose ton print
//console.log(b);
console.log(c);//but c can mind it

function one() {
    const username= "soumo"
    function two(){
        const websites="youtube"
        console.log(username);
    }
    //console.log(websites);//it cannot be acssed and get error
 two()   
}
//one()
if (true) {
    const username="soumo"
    if (username==="soumo") {
        const web="websites"
        console.log(username+ web);
    }
    console.log(web);//error
    
}
console.log(username);//erroe


//+++++++++++++++++++++++++++++++ Intersting++++++++++++++++++++++++
//Normal Function
function addone(value){
    return value+1
}

console.log(addone(5));
//
const addtwo=function(num){
    return num+2
}
addtwo(5)
// it must have to acsess after it decleration becaue of const  topic is hoisting
