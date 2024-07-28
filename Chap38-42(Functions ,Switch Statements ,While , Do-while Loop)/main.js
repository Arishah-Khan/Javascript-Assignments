// 1. Write a custom function power ( a, b ), to calculate the value of
// a raised to b.

// function powerFunction(a,b){
   
//     var result = a**b;
//     return result;
// };

// var raisedValue = powerFunction(4,6);

// console.log(raisedValue);  // Output: 4096


// 2. Any year is entered through the keyboard. Write a function to
// determine whether the year is a leap year or not.
// Leap years ..., 2012, 2016, 2020, …

// var userPrompt = parseInt(prompt("Enter the leap year?"));

// function checkLeapYear(userPrompt){

//     switch(userPrompt){
//         case 2000:
//             return "2000 is a leap year.";
//         case 2004:
//             return "2004 is a leap year.";
//         case 2008:
//             return "2008 is a leap year.";
//         case 2012:
//             return "2012 is a leap year.";
//         case 2016:
//             return "2016 is a leap year.";
//         case 2020:
//             return "2020 is a leap year.";
//         default:
//             return "The entered year is not a leap year.";
//     }
// };

// document.write(checkLeapYear(userPrompt));  

// 3. If the lengths of the sides of a triangle are denoted by a, b, and
// c, then area of triangle is given by
// area = S(S − a)(S − b)(S − c)
// where, S = ( a + b + c ) / 2
// Calculate area of triangle using 2 functions


// var a = parseInt(prompt("Enter first side value"));

// var b = parseInt(prompt("Enter second side value"));

// var c = parseInt(prompt("Enter third side value"));

// function calculateDistance(a, b, c){

//     var s = (a + b + c) / 2;

//     return s;
// };

// function calculateTriangleArea(a, b, c){

//     var s = calculateDistance(a, b, c);

//     var area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

//     return area;
// };

// document.write("Triangle area is: " + calculateTriangleArea(a, b, c));


// 4. Write a function that receives marks received by a student in 3
// subjects and returns the average and percentage of these
// marks. there should be 3 functions one is the mainFunction
// and other are for average and percentage. Call those functions
// from mainFunction and display result in mainFunction.


// var marks1 = parseInt(prompt("Enter marks in subject 1"));

// var marks2 = parseInt(prompt("Enter marks in subject 2"));

// var marks3 = parseInt(prompt("Enter marks in subject 3"));

// function calculateAverage(marks1, marks2, marks3){

//     var average = (marks1 + marks2 + marks3) / 3;

//     return average;
// };

// function calculatePercentage(average){

//     var percentage = (average / 100) * 100;

//     return percentage;
// };

// function mainFunction(){

//     var averages = calculateAverage(marks1, marks2, marks3);

//     var percentages = calculatePercentage(averages);

//     document.write("Average marks: " + averages + "<br>");

//     document.write("Percentage: " + percentages + "%");
// };

// mainFunction();


// 5. You have learned the function indexOf. Code your own custom
// function that will perform the same functionality. You can code
// for single character as of now.


// var string = "Hello World";

// var character = "o";

// function customIndexOf(string, character){

//     for(var i = 0; i < string.length; i++){

//         if(string[i] === character){

//             return i;
//         };

//     }

//     return -1;
// };

// document.write(customIndexOf(string, character));


// 6. Write a function to delete all vowels from a sentence. Assume
// that the sentence is not more than 25 characters long.


// var userPrompt = prompt("Enter a sentence with vowels included, but not more than 25 characters long.");

// function removeVowels(userPrompt){

//     var vowels = ['a', 'e', 'i', 'o', 'u'];

//     var newString = userPrompt.split('');

//     var remove = "";

//     var i = 0;

//     while(i < newString.length){

//         if(vowels.indexOf(newString[i].toLowerCase()) === -1){

//             remove += newString[i];
//         }
//         i++;

//     }

//     return remove

// };

// var result = removeVowels(userPrompt);


// document.write("This sentence is without vowels: " + result);



// 7. Write a function with switch statement to count the number of
// occurrences of any two vowels in succession in a line of text.
// For example, in the sentence

// “Pleases read this application and give me gratuity”
// Such occurrences are ea, ea, ui.

// var sentence = "Pleases read this application and give me gratuity";

// function countVowelPairs(sentence) {
//     var vowels = ['a', 'e', 'i', 'o', 'u'];
//     var count = 0;
//     var i = 0;

//     while (i < sentence.length - 1) {
//         if (vowels.indexOf(sentence[i].toLowerCase()) !== -1 && vowels.indexOf(sentence[i + 1].toLowerCase()) !== -1) {
//             count++;
//         }
//         i++;
//     }

//     return count;
// }

// var result = countVowelPairs(sentence);
// document.write("Number of occurrences of two consecutive vowels in the sentence: " + result);


// 8. The distance between two cities (in km.) is input through the
// keyboard. Write four functions to convert and print this
// distance in meters, feet, inches and centimeters.


// var userPrompt = parseFloat(prompt("Enter the distance between two cities in kilometers"));

// function convertKilometersToMeters(kilometers) {
//     return kilometers * 1000;
// }

// function convertKilometersToFeet(kilometers) {
//     return kilometers * 3280.84;
// }

// function convertKilometersToInches(kilometers) {
//     return kilometers * 39370.1;
// }

// function convertKilometersToCentimeters(kilometers) {
//     return kilometers * 100000;
// }

// var meters = convertKilometersToMeters(userPrompt);
// var feet = convertKilometersToFeet(userPrompt);
// var inches = convertKilometersToInches(userPrompt);
// var centimeters = convertKilometersToCentimeters(userPrompt);

// document.write("The distance between two cities is " + userPrompt + " kilometers, which is equal to:<br>" +
//                meters + " meters,<br>" +
//                feet + " feet,<br>" +
//                inches + " inches,<br>" +
//                centimeters + " centimeters.");


// 9. Write a program to calculate overtime pay of employees.
// Overtime is paid at the rate of Rs. 12.00 per hour for every hour
// worked above 40 hours. Assume that employees do not work
// for fractional part of an hour.

// var userPrompt = parseInt(prompt("Enter the number of hours worked by the employee"), 10);

// function calculateOvertimePay(hoursWorked) {
//     if (hoursWorked > 40) {
//         var overtimeHours = hoursWorked - 40;
//         var overtimePay = overtimeHours * 12.00;
//         return overtimePay;
//     } else {
//         return 0;
//     }
// }

// var overtimePay = calculateOvertimePay(userPrompt);

// document.write("The employee's overtime pay is Rs. " + overtimePay);


// 10. A cashier has currency notes of denominations 10, 50 and
// 100. If the amount to be withdrawn is input through the
// keyboard in hundreds, find the total number of currency notes
// of each denomination the cashier will have to give to the
// withdrawer


// var userPrompt = parseInt(prompt("Enter the amount to be withdrawn in hundreds"));

// function calculateCurrencyNotes(amount) {
//     var note10 = 0;
//     var note50 = 0;
//     var note100 = 0;

//     // Calculate 100 denomination notes
//     while (amount >= 100) {
//         note100++;
//         amount -= 100;
//     }

//     // Calculate 50 denomination notes
//     while (amount >= 50) {
//         note50++;
//         amount -= 50;
//     }

//     // Calculate 10 denomination notes
//     while (amount >= 10) {
//         note10++;
//         amount -= 10;
//     }

//     return {
//         note10: note10,
//         note50: note50,
//         note100: note100
//     };
// }

// var result = calculateCurrencyNotes(userPrompt);

// document.write("You will have: <br>");
// document.write( result.note100 + " Hundred Notes "+ "<br>");
// document.write( result.note50 + " Fifty Notes " + "<br>");
// document.write( result.note10 + " Ten Notes " + "<br>");



