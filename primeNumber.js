function primeNumber(num){
    if(num<2){
        return console.log(`${num} is a prime Number`);
    }else{
        for(let i=2;i<=Math.sqrt(num);i++){
            if(num % i== 0){
                return console.log(`${num} is a not a prime Number`);
            }
        }
        return console.log(`${num} is a prime Number`);
    }
}
primeNumber(2)