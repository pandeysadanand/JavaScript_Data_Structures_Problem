/**
 *  Write a Program to generate a birth month of 50 individuals
 *  between the year 92 & 93. Find all the individuals having birthdays
 *  in the same month. Store it to finally print. 
 *
 * @author : Sadanand Pandey
 * */

//map declaration
let birthMonth = new Map();
let count = 1;
let numOfPeople = 50;

//store birth months of 50 people in map
while ( count <= numOfPeople ) {
    //generate random number for month
    let month = Math.floor(( Math.random() * 12 ) + 1);

    //set birth month
    switch(month){
        case 1:
            birthMonth.set(count, 'January');
            break;
        case 2:
            birthMonth.set(count, 'February');
            break;
        case 3:
            birthMonth.set(count, 'March');
            break;
        case 4:
            birthMonth.set(count, 'April');
            break;
        case 5:
            birthMonth.set(count, 'May');
            break;
        case 6:
            birthMonth.set(count, 'June');
            break;
        case 7:
            birthMonth.set(count, 'July');
            break;
        case 8:
            birthMonth.set(count, 'August');
            break;
        case 9:
            birthMonth.set(count, 'September');
            break;
        case 10:
            birthMonth.set(count, 'October');
            break;
        case 11:
            birthMonth.set(count, 'November');
            break;
        default:
            birthMonth.set(count, 'December');
    }
    count++;
}

console.log("Printing birth month of 50 individuals");
console.log(birthMonth);

//get people in same birth month
getByValue(birthMonth, 'February');

function getByValue(birthMonth, monthValue) {
    console.log("Person no whoes birthday are in " + monthValue);
    console.log(monthValue);
    //array declaration to store birth in same month
    let peopleArr = [];
    i = 0;
    for (let [key, value] of birthMonth.entries()) {
      if (value == monthValue) {
        peopleArr[i] = key;
        i++;
      }
    }
    console.log(peopleArr);
}