/**
 *  Write a program in the following steps
 *  a. Roll a die and find the number between 1 to 6
 *  b. Repeat the Die roll and find the result each time
 *  c. Store the result in a dictionary
 *  d. Repeat till any one of the number has reached 10 times
 *  e. Find the number that reached maximum times and the one that was for
 *     minimum times 
 *
 * @author : Sadanand Pandey
 * */

//empty object
const dice = {};
const dieRoll = 10;

//dice number 
let oneCount=1;
let twoCount=1;
let threeCount=1;
let fourCount=1;
let fiveCount=1;
let sixCount=1;

let key=0;

//assigning key and values to the dice object
while ((oneCount < dieRoll) && (twoCount < dieRoll) && (threeCount < dieRoll) && (fourCount < dieRoll) && (fiveCount < dieRoll) && (sixCount < dieRoll)){
	let value = Math.floor((Math.random() * 6) + 1);
	dice[key] = value;

    switch(value){
        case 1:
			console.log(value +" ");
			oneCount++;
            break;
        case 2:
			console.log(value +" ");
			twoCount++;
            break;
		case 3:
			console.log(value +" ");
			threeCount++;
            break;
		case 4:
			console.log(value +" ");
			fourCount++;
            break;
		case 5:
			console.log(value +" ");
			fiveCount++;
            break;
		case 6:
			console.log(value +" ");
			sixCount++;
            break;
    }
	key++;
}

console.log();
console.log('Dice number counts : \none : ' + oneCount, '\ntwo : ' + twoCount ,'\nthree : ' + threeCount, '\nfour : ' + fiveCount,'\nfive : ' +fiveCount,'\nsix :' + sixCount);
console.log();

//check for maximum
if ( oneCount == dieRoll ) {
    console.log ("1 has maximum count.");
}
else if( twoCount == dieRoll ) {
    console.log ("2 has maximum count.");
}
else if( threeCount == dieRoll ) {
    console.log ("3 has maximum count.");
}
else if( fourCount == dieRoll ) {
    console.log ("4 has maximum count.");
}
else if( fiveCount == dieRoll ) {
    console.log ("5 has maximum count.");
}
else if( sixCount == dieRoll ) {
    console.log ("6 has maximum count.");
}

//check for minimum
if ( (oneCount < twoCount) && (oneCount < threeCount) && (oneCount < fourCount) && (oneCount < fiveCount) && (oneCount < sixCount) ) {
    console.log ("1 has minimum count.");
}
else if( (twoCount < oneCount) && (twoCount < threeCount) && (twoCount < fourCount) && (twoCount < fiveCount) && (twoCount < sixCount) ) {
    console.log ("2 has minimum count.");
}
else if( (threeCount < oneCount) && (threeCount < twoCount) && (threeCount < fourCount) && (threeCount < fiveCount) && (threeCount < sixCount) ) {
    console.log ("3 has minimum count.");
}
else if( (fourCount < oneCount) && (fourCount < twoCount) && (fourCount < threeCount) && (fourCount < fiveCount) && (fourCount < sixCount) ) {
    console.log ("4 has minimum count.");
}
else if( (fiveCount < oneCount) && (fiveCount < twoCount) && (fiveCount < threeCount) && (fiveCount < fourCount) && (fiveCount < sixCount) ) {
    console.log ("5 has minimum count.");
}
else if( (sixCount < oneCount) && (sixCount < threeCount) && (sixCount < fourCount) && (sixCount < fiveCount) && (sixCount < twoCount) ) {
    console.log ("6 has minimum count.");
}