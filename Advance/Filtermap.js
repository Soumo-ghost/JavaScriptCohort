// const codding=["js","cpp","rb"]
// const value= codding.forEach((iteam)=>{
// console.log(iteam);
// return iteam
// })
//for each does not  reture any value
// console.log(value);
const nums=[1,2,3,4,5,6]
const newnum=nums.filter((num)=>num>4
//return values that meet criteris
)
console.log(newnum);
const nums33=nums.filter((num)=>{
    return num>4
})
//upper has a scope so need a ret
console.log(nums33);
const newname=[]
nums.forEach((num)=>{
    if(num>4){
        newname.push(num)
    }
})
console.log(newname);
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];
let userbooks=books.filter((bk)=>bk.genre==='History')
console.log(userbooks);
//leran this it need leter
userbooks=books.filter((bkf)=>{return bkf.publish>=2000})


// new=====
const Mynum=[1,2,3,4,5,6,78]
const newnum1= Mynum.map((num)=>num+10)
console.log(newnum1);
//chaining
const newnumbers=Mynum
.map((n)=>n*10)
.map((n)=>n+1)//this n is n*10
.filter((n)=>n>=40)
console.log(newnumbers);

