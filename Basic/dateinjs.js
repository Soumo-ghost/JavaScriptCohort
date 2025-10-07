let mydate= new Date()
console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toLocaleString());
console.log(typeof mydate);
let mycdate= new Date(2023,0,23);
console.log(mycdate.toDateString());
let datee=new Date("01-14-2023");

let timestamp= Date.now()
console.log(timestamp);
console.log(timestamp.getTime());
console.log(Math.floor(Date.now()));

let newdate= new datee();
console.log(newdate);
console.log(newdate.getMonth());
console.log(newdate.getDay());

//
newdate.toLocaleString('default',{
    weekday:"long",
})






