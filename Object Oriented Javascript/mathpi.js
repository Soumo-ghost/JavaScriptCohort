console.log(Math.PI);

const descripet=Object.getOwnPropertyDescriptor(Math, "PI")
const chai ={
name:'giger',
price:345,
isavaiabel:true,
orderchai:function(){
    console.log(`code fat gaya`);
    
}
} 

console.log(Object.getOwnPropertyDescriptor(chai, "name"));
Object.definePropertie(chai, "name", {
    Writable: false,
    enumerable:false
})

for (let [key, value] of Object.entries(chai)) {
    if(typeof value !=='function')
        {console.log(`${key}: ${value}`);}
    
}
