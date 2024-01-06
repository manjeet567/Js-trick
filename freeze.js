const person1={
    "name":"manjeet",
    "mobile":9783266449
}

const person2={
    "name":"gourav",
    "mobile":6367450036
}

//person1=person2 //Error :Assignment to constant variable.

let person3={
    "name":"kaushal",
    "mobile":9783266448
}

let person4={
    "name":"gourav",
    "mobile":6367450030
}

Object.freeze(person3)
// in Object.freeze make a object immutable. we can't change its properties
person3.name="manjeet choudhary"
person1.name="manjeet choudhary"
console.log(person3) // output=={ name: 'kaushal', mobile: 9783266448 }
console.log(person1) // output=={ name: 'manjeet choudhary', mobile: 9783266449 }