// 1. Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122).

var character = "A";

var asciiCode = character.charCodeAt(0);

if (asciiCode >= 65 && asciiCode <= 90) {
    console.log(character + " is an uppercase letter");
} else if (asciiCode >= 97 && asciiCode <= 122) {
    console.log(character + " is a lowercase letter");
} else if (asciiCode >= 48 && asciiCode <= 57) {
    console.log(character + " is a number");
} else {
    console.log(character + " is a special character");
}

// 2. Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.

var num1 = 20;

var num2 = 25;

if (num1 > num2) {

    console.log(num1 + " is greater than " + num2);
} else if (num1 < num2) {

    console.log(num2 + " is greater than " + num1);
} else {

    console.log(num1 + " is equal to " + num2);
}

// 3. Write a program that takes input a number from user &
// state whether the number is positive, negative or zero.


var num = +prompt("Enter a number");

if (num > 0) {
    console.log(num + " is a positive number");
} else if (num < 0) {
    console.log(num + " is a negative number");
} else {
    console.log(num + " is zero");
}

// 4. Write a program that takes a character (i.e. string of
//     length 1) and returns true if it is a vowel, false otherwise

var vowel = prompt("Enter a vowel character (string of length 1):");

if (vowel == "a" || vowel == "e" || vowel == "i" || vowel == "o" || vowel == "u") {
    console.log(vowel + " is a vowel");
} else {
    console.log(vowel + " is not a vowel");
};

// 5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are
// same, show message “Correct! The password you
// entered matches the original password”. Show
// “Incorrect password” otherwise.


var password = "123";

var userPassword = prompt("Enter your password");

if (userPassword === "") {
    console.log("Please enter your password");
} else if (userPassword === password) {
    console.log("Correct! The password you entered matches the original password");
} else {
    console.log("Incorrect password");
}


// 6. This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }

var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
};

console.log(greeting);


// 7. Write a program that takes time as input from user in 24
// hours clock format like: 1900 = 7pm. Implement the
// following case using if, else & else if statements


var time = +prompt("Enter time in 24 hours clock format (i.e 1900 = 7pm");

if (time >= 0 && time < 1200) {

    console.log("Good Morning");

} else if (time >= 1200 && time < 1700) {

    console.log("Good Afternoon");

} else if (time >= 1700 && time < 2100) {

    console.log("Good Evening");

} else if (time >= 2100 && time <= 2359) {

    console.log("Good Night");

} else {

    console.log("Invalid time");
};

