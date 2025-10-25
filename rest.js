// let runningSum = function(nums) {
//     const arr=[];
//     for(let i=0;i<nums.length;i++){
//         if(i==0){
//             arr[i]=nums[i];
//         }
//         else{
//             arr[i]=nums[i]+arr[i-1];
//         }
    
//     }
//     return arr
// };
// const a=[[1,2],[5,6],[6,8]];
// const b=runningSum(a)
// console.log(b);
// // console.log(a.length);

// let maximumWealth = function(accounts) {
    
// };
// let a=1;
// for(let i=1;i<=1;i++){
//     a=a*i;
// }
// console.log(a);
let totalMoney = function(n) {
    let a=0;
    let count=0;
    let c=1;
    for(let i=1;i<=n;i++){
        if(i>=8){
            count=parseInt(i/7)
            for(c;c<=count;c++){
                a=a+c;
            }
            
            }
    
        else if(i<8){
            a=a+i;
        }
        c=0;
    }
    return a;
};
const c=totalMoney(20);
console.log(c);//96



