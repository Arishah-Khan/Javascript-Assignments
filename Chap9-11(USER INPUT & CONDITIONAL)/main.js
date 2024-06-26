// 1. Write a program to take “city” name as input from user. If
// user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”

var city = prompt("Enter your city name");

if (city == "Karachi") {
    alert("Welcome to city of lights");
};

// 2. Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning Ma’am.

var gender = prompt("Enter your gender");

if (gender == "male") {
    alert("Good Morning Sir");
} else if (gender == "female") {
    alert("Good Morning Ma'am");
};


// 3. Write a program to take input color of road traffic signal
// from the user & show the message according to this table:
// Signal color Message
// Red Must Stop
// Yellow Ready to move
// Green Move now

var color = prompt("Enter the color of road traffic signal");

if (color == "red"){
    alert("Must Stop");
}
else if (color == "yellow"){
    alert("Ready to move");
}

else if (color == "green"){
    alert("Move now");
}

// 4. Write a program to take input remaining fuel in car (in
//     litres) from user. If the current fuel is less than 0.25litres,
//     show the message “Please refill the fuel in your car”

var fuel = +prompt("Enter the remaining fuel in car (in litres)");

if (fuel < 0.25){
    alert("Please refill the fuel in your car");
}

// 5. Run this script, & check whether alert message would be
// displayed or not. Record the outputs.
// a. var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
// b. var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
// c. var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
// d. var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
// e. if (true){
// alert("True");
// }
// if (false){
// alert("False");
// f. if("car" < "cat"){
//     alert("car is smaller than cat");
//     }

// part a:

var a = 4;

if (++a === 5){
    alert("given condition for variable a is true")
};

// part b:

  var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}

//part c:

var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}

if (c === 13){
alert("condition 2 is true");
}

if (++c < 14){
alert("condition 3 is true");
}

if(c === 14){
alert("condition 4 is true");
}

// part d:

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}

// part e:

if (true){
alert("True");
}

if (false){
alert("False");
}

// part f:

if("car" < "cat"){
alert("car is smaller than cat");
}

// 6. Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute
// grade as per following table:

// Show the total marks, marks obtained, percentage, grade &
// remarks like:

var sub1 = +prompt("Enter the marks obtained in subject 1");

var sub2 = +prompt("Enter the marks obtained in subject 2");

var sub3 = +prompt("Enter the marks obtained in subject 3");

var totalMarks = 300;

var obtainedMarks = sub1 + sub2 + sub3;

var percentage = obtainedMarks / totalMarks * 100;

var grade;

var remarks;

if (percentage >= 80){
    grade = "A-one";
    remarks = "Excellent";
}

else if (percentage >= 70){
    grade = "A";
    remarks = "Good";
}

else if (percentage >= 60){
    grade = "B";
    remarks = "You need to improve";
}

else if (percentage >= 50){
    grade = "C";
    remarks = "You need to improve";
}

else if (percentage >= 40){
    grade = "D";
    remarks = "You need to improve";
}

else{
    grade = "F";
    remarks = "Sorry";
}

document.write("Total marks: " + totalMarks + "<br>");

document.write("Marks obtained: " + obtainedMarks + "<br>");

document.write("Percentage: " + percentage + "<br>");

document.write("Grade: " + grade + "<br>");

document.write("Remarks: " + remarks + "<br>");





// 7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.

var secretNumber = 5;
var guessNumber = +prompt("Guess the secret number");

if (guessNumber == secretNumber){
    alert("Bingo! Correct answer");
}

else if (guessNumber + 1 == secretNumber){
    alert("Close enough to the correct answer");
}

// 8. Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number
// is divisible by 3.

var number = +prompt("Enter a number");

if (number % 3 == 0){
    alert("The number is divisible by 3");
}

// 9. Write a program that checks whether the given input is an
// even number or an odd number.

var number = +prompt("Enter a number");

if (number % 2 == 0){
    alert("The number is even");
}

else{
    alert("The number is odd");
}

// 10. Write a program that takes temperature as input and
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”

var temperature = +prompt("Enter the temperature");

if (temperature > 40){
    alert("It is too hot outside.");
}

else if (temperature > 30){
    alert("The Weather today is Normal.");
}

else if (temperature > 20){
    alert("Today’s Weather is cool.");
}

else if (temperature > 10){
    alert("OMG! Today’s weather is so Cool.");
}

// 11. Write a program to create a calculator for +,-,*, / & %
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.

var firstNumber = +prompt("Enter the first number");
var secondNumber = +prompt("Enter the second number");
var operation = prompt("Enter the operation (+, -, *, /, %)");

if (operation == "+"){
    alert(firstNumber + secondNumber);
}

else if (operation == "-"){
    alert(firstNumber - secondNumber);
}

else if (operation == "*"){
    alert(firstNumber * secondNumber);
}

else if (operation == "/"){
    alert(firstNumber / secondNumber);
}

else if (operation == "%"){
    alert(firstNumber % secondNumber);
}

