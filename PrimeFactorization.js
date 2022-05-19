/**
 * @Author : Sadanand Pandey
 * Finding prime factors of a given number N and storinng in a array
 */

const readline = require('readline-sync');
let number = Number(readline.question('Enter your number : '));

let primeNumber  = [];
for( i = 2; i <= number; i++){
    while(number % i == 0){
        number = number / i;
        console.log(i);
        primeNumber.push(i);
    }
}
if(number != 1){
    console.log(number);
}
console.log(`Prime factors are ${primeNumber } `);``