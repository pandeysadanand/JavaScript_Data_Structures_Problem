/**
 * @Author : Sadanand Pandey
 * Finding sum of three numbers to Zero
 */

const readline = require('readline-sync');
let num1 = Number(readline.question('Enter first number : '));
let num2 = Number(readline.question('Enter first number : '));
let num3 = Number(readline.question('Enter first number : '));
let sum;
sum = ((num1) + (num2) + (num3));
if(sum == 0){
    console.log(`Sum of three numbers is : ${sum}`);
}
else{
    console.log(`No number foud ☻`);
}