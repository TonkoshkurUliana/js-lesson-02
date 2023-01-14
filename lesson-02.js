"use stric"
//Task1
var user = {};
user.name = "Pilip";
user.surname = "Shevshenko";
console.log(user);
user.name = "Sergiy";
console.log(user);
delete user.name;
console.log(user);

//Task2
var employeeSalaries = { user1: '500$',
                         user2: '900$',
                         user3: '400$',
                         user4: '600$',
                         user5: '800$',
                         user6: '300$',
                         user7: '400$',
 }

 if (Object.keys(employeeSalaries).length == 0) {
    console.log("0");
 } else{
    for(var key in employeeSalaries){
    	console.log('Key : ' + key + ' || Value: ' + employeeSalaries[key]);
    }
 }

// Task3

function calc(num1,num2,symbol) {
    if (symbol== "+"){
         addition = num1 + num2;
         console.log(num1 + ' + ' + num2 + ' = ' + addition);}
    else if (symbol== "-"){
         addition = num1 - num2;
         console.log(num1 + '-' + num2 + ' = ' + addition);}
    else if (symbol== "*"){
         addition = num1 * num2;
         console.log(num1 + '*' + num2 + ' = ' + addition);}
    else if (symbol== "/"){
         addition = num1 / num2;
         console.log(num1 + '/' + num2 + ' = ' + addition);}
	}

	try {
	let num1 = 3;
    let num2 = 5;
    let symbol = '+';
    let arr = ["+","-","*", "/"];

	  if (num1 <= 0 || num2 <= 0) {
             throw new Error("Operation '/' can not work with number 0 or < 0!");
         }else if(typeof num2 != "number" || typeof num1 != "number"){
             throw new Error("num1 or num2 is not number!");
         } else  if(arr.indexOf(symbol) == -1 ){
      		throw new SyntaxError('symbol error');
      	}
      	else{
      	calc(num1, num2, symbol);
      	}
	}
	catch(err){
	    console.log('error happend---->' + err);
	}
	finally {
        console.log("Function was finished!");
     }

