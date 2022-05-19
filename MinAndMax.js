/**
 * @Author : Sadanand Pandey
 * Step1 : Finding 3 digit numbers using ramdom funtion
 * Step2 : Stroring that numbers into a array
 * Step3 : Finding 2nd largest and 2nd Smallest number 
 */

let maxCount = 10;
let count = 0;
const number = [];

//Generating 3 digits numbers and storing in array
while(count < maxCount){
    number[count] = Math.floor(Math.random() * 900) + 100; 
    count++;
}

console.log(number);

let max = secondMax = number[1];
let min = secondMin = number[1];
for(i = 0 ; i < number.length; i++){

    //finding 2nd largest number from array
    if(number[i] > max){
        secondMax = max; 
        max = number[i];
    }
    else if(number[i] > secondMax && number[i] != max){
        secondMax = number[i];
    } 
    
    //finding 2nd smallest number from array
    if(number[i] < min){
        secondMin = min; 
        min = number[i];
    }
    else if(number[i] < secondMin && number[i] != min){
        secondMin = number[i];
    }
}

// sorting array
let temp;
for(i = 0; i < maxCount; i++){
    for(j = i; j<maxCount; j++){
        if(number[i] > number[j] ){
            temp =number[i];
            number[i]= number[j];
            number[j] = temp;
        }
    }
}
//printing required output
console.log('Sorted numbers are :' + number);
console.log('Second largest number : ' + number[number.length-2]);
console.log('Second smallest number : ' + number[1]);


