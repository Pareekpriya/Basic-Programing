function checkPrime(num){
    for(let i=2;i<=num-1;i++){
        if(num%i==0){
            return false
        }
    }
    return true
};

console.log(checkPrime(3));


function evenOdd(num){
    if(num%2==0){
        return true
    }
    false
};
