function addd(n){
    function add(x){
        return n+x;
    }
    return add;
}

var plusone=addd(1)
var plusten=addd(10)

console.log(plusone(3))
console.log(plusten(10))


let arr=[]
for(var i=0;i<3;i++){
    arr[i]=function(){
        console.log("my value:",i)
    }
}
// The var keyword has function-level scope, not block-level scope. Therefore, the variable i is shared across all iterations of the loop.
// When the functions inside the array are executed (arr[0](), arr[1](), arr[2]()), they all refer to the same variable i from the outer scope, which has the final value of 3 after the loop completes. So, all three functions will output "my value: 3".
arr[0]() //output--3
arr[1]() //output--3
arr[2]() //output--3


let a=[]
for(let i=0;i<3;i++){
    a[i]=function(){
        console.log("my value:",i)
    }
}
// The let keyword has block-level scope, which means it creates a new i variable for each iteration of the loop.
// When the functions inside the array are executed, each one refers to its own lexical scope, capturing the correct value of i at the time the function was created. So, the output will be "my value: 0", "my value: 1", and "my value: 2" for the respective function calls.
a[0]() //output--0
a[1]() //output--1
a[2]() //output--2


function fetchData(url,callback){

    setTimeout(() => {
        let data="data form url"+url
        callback(data)
    }, 2000);
    
    }
    
    function processingData(data){
        console.log("processing data:",data)
    }
    
    fetchData('http://futureclubs.in',processingData)