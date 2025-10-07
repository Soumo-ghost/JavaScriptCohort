const name="soumo"
const repo=8
console.log(name + repo+ "val");
//dont use previous use next one
console.log(`Hello i am ${name} and repo is${repo}`);
const cname= new String('gcet-tb')
console.log(cname[0]);
console.log(cname.length);
console.log(cname.toUpperCase());
console.log(cname.charAt(4));
console.log(cname.indexOf('t'));
const newString=cname.substring(0,4)

console.log(newString);
const anosting=cname.slice(-5,4)//only slice can take -value
console.log(anosting);
const news1="      soumo      ";
console.log(news1);
console.log(news1.trim);
//trim start and end exist
const url="https://soumo.com/soumo%20chakraborty"
console.log
(url.replace('%20', '-'));
console.log(url.includes('abcd'));
const gamename='soumo-ee-22-ggoi'
console.log(gamename.split('-'));
//There are many string methods to learn