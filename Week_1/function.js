// function sum(a,b){
//     //do thing with the input and return an output
//     const sumValue= a+b;
//     return sumValue;
// }
// const value = sum(1,2)
// console.log(value);

//callback

// function sum(num1,num2){
//     let result=num1+num2;
//     return result;
// }
// function displayResult(data){
//     console.log("Result of the sum is : " + data);
// }
// function displayResultPassive(data){
//     console.log("Sum's result is : "+ data);
// }
// const ans=sum(1,2);

function calculateArithmetic(a,b,arithmeticFinalFunction){
    const ans=arithmeticFinalFunction(a,b);
    return ans;
}
function sum(a,b){
    return a+b;
}
const value=calculateArithmetic(1,2,sum);
console.log(value);