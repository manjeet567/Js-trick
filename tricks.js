let a='manjeet';
let d='gourav'
let b={a,d}  // let b={a}
let c=[a,d]
console.log(b) //output--{a:"manjeet",x:"gourav"}
console.log(b.a) //output--manjeet
console.log(c) //output--['manjeet', 'gourav' ]


let m=[1,2,3,4,5,6]
let n=m.find((i)=>i>2)
console.log(n)  //output--3
console.log(m[n]) //output--4


let a1=[1,2]
let a2=[3,4]
let a3=[...a1,...a2]
console.log(a3)  //output---[ 1, 2, 3, 4 ]
console.log(a3[1])  //output--- 2



let x=[1,2,3]
let y=x.map((n)=>n*n)
console.log(y)
console.log(x[1]*y[1])//output--- 8
console.log(x[1]**y[1])//output--- 16
console.log(x[1]**y[2])//output--- 512



let p=[1,2,3]
let q=p.map((num)=>num.toString())
let r=q.join("_")
console.log(r.length)//output--- 5



let sentence='hello world, this is a test world'
let remove='world';

function removeWordFromSentence(sentence,word){
    //return sentence.replace(word,'')  //output---'hello , this is a test world'
   // let regex=new RegExp(word,'g')
    let regex=new RegExp(word,'gi')  //i for case insensitive
    return sentence.replace(regex,'')    //output---'hello , this is a test'
}
console.log(removeWordFromSentence(sentence,remove)) //output---'hello , this is a test'






const person1={
    "name":"manjeet",
    "mobile":9783266449,
    "age":undefined
}

let age=person1.age
console.log(age)