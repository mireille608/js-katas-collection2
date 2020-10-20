console.log('hi mireille')

console.log("add");
function add(a, b){
    result = a + b;
    return result;
}
console.log(add(2, 4));

console.log("multilply");
function multilply(a, b){
    let result=0
    let count = 0
    while(count <b){
        result = add(result,a)
        
    count++;
    
    }
  return result
}
let answer = multilply(4, 6)
console.log(answer)

  
console.log("exponentiation"); 
function power(a, b){
    let result = 1
    let count = 0
    while(count <b){
        result = multilply(result,a)

        count++;
    }
    return result
}
let respond = power(3, 4)
console.log(respond)


console.log("factorial");

function factorial(n){
let result = 1
if (n == 0|| n == 1 ) {
    return result;
} else{
    for ( let count = n; count >= 1; count --){
        result = multilply(result, count);
    } return result

}
    
}
 
let view = factorial(4)
console.log(view)





 console.log("fibonacci");

 function fibonacci(n){
     let result= 1; b = 1; c = 1;
     let count =0
    
   for(result =1; count <=n;){
       
       count++
       result = b;
       b = c;
        c= add(result,b,c);
        count =b,c
        
         }
         return b;
    }
    
 
 console.log(fibonacci(8))
 


  


    








