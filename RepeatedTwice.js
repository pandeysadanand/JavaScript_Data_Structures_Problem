

let arrr = [];
let num;
for( num = 0; num <= 100; num++ ){
    if(num > 10){
        const reverse = (num) => parseInt(String(num)
        .split("")
        .reverse()
        .join(""), 10);  
            if(num == reverse(num)){
                arrr.push(reverse(num));
            }   
        }
    }

console.log(`Repeted digits are : ${arrr}`);