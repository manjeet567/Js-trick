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