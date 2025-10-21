const num=[1,2,3]
// const total=num.reduce(function(acc,cur){
// console.log(`acc iu s${acc}, current value is ${cur}`);
//     return acc+cur
// },0)
// 0is initial value is need to get first accumulator thenresult get accumeter
const total=num.reduce((acc, cur)=acc+cur,0)



console.log(total);
const shopping=[

    {
        item:"jsstore",
        price:1234
    },
    {
        item:"data science",
        price:4555
    },
    {
        item:"mobile dev",
        price:6777
    }
]
const pricetag=shopping.reduce((acc,item)=>acc+item.price, 0);
console.log(pricetag);
