let x=0.2+0.1;
let y=0.3;
console.log(x==y)// output ---may be false or true
console.log(x,y)
let a=2+1;
let b=3;
console.log(a==b)// output --- true


let arr=[1,5,7,4,2,3,6,4,1,2,5,4,1,2,9,8,7,4,1,3,5,2,1,4,6]
let kk={}
arr.map((n)=>{
    if(kk[n]){
        kk[n]++
    }else{
        kk[n]=1
    }
})
console.log(kk)
// output --{
//   '1': 5,
//   '2': 4,
//   '3': 2,
//   '4': 5,
//   '5': 3,
//   '6': 2,
//   '7': 2,
//   '8': 1,
//   '9': 1
// }

let uniqueArray = arr.filter((value, index, self) => {
  return self.indexOf(value) === index;
});
console.log(uniqueArray);
// output ---[
//     1, 5, 7, 4, 2,
//     3, 6, 9, 8
//   ]

let uniqueArrayy = arr.reduce((accumulator, currentValue) => {
  if (!accumulator.includes(currentValue)) {
    accumulator.push(currentValue);
  }
  return accumulator;
}, []);
console.log(uniqueArrayy);
// output ---[
//     1, 5, 7, 4, 2,
//     3, 6, 9, 8
//   ]

let dd=arr.reduce(function(acc,current){
   if(!acc.includes(current)){
    acc.push(current)
   }
   return acc;
}, []);
console.log('dd',dd)
// output ---[
//     1, 5, 7, 4, 2,
//     3, 6, 9, 8
//   ]