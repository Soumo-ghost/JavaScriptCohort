// const codding=["js","cpp","rb"]
// const value= codding.forEach((iteam)=>{
// console.log(iteam);
// return iteam
// })
// console.log(value);
const nums=[1,2,3,4,5,6]
const newnum=nums.filter((num)=>num>4
//return values that meet criteris
)
console.log(newnum);
const nums33=nums.filter((num)=>{
    return num>4
})
console.log(nums33);
const newname=[]
nums.forEach((num)=>{
    if(num>4){
        newname.push(num)
    }
})
console.log(newname);
