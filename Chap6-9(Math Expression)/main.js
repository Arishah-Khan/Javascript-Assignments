// 1. Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// browser:

var a = 10;

document.write("Result: <br>");

document.write("The value of a is: " + a + "<br>");

document.write(".................................................<br>");

document.write("The value of ++a is: " + ++a + "<br>");

document.write("Now the value of a is: " + a + "<br>");

document.write("The value of a++ is: " + a++ + "<br>");

document.write("Now the value of a is: " + a + "<br>");

document.write("The value of --a is: " + --a + "<br>");

document.write("Now the value of a is: " + a + "<br>");

document.write("The value of a-- is: " + a-- + "<br>");

document.write("Now the value of a is: " + a + "<br>");

// 2. What will be the output in variables a, b & result after
// execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;

var a = 2, b = 1;

var result = --a - --b + ++b + b--;

document.write("a is: " + a + "<br>");

document.write("b is: " + b + "<br>");

document.write("result is: " + result + "<br>");

// 3. Write a program that takes input a name from user &
// greet the user.

var name = prompt("Enter your name: ");

alert("Hello " + name);

// 5. Write a program to take input a number from user &
// display it’s multiplication table on your browser. If user
// does not enter a new number, multiplication table of 5
// should be displayed by default.

var num = prompt("Enter a number: ");

if (num == "") {
    num = 5;
}

for (var i = 1; i <= 10; i++) {
    document.write(num + " x " + i + " = " + num * i + "<br>");
};

// 6. Take
// a) Take three subjects name from user and store them in 3
// different variables.
// b) Total marks for each subject is 100, store it in another
// variable.
// c) Take obtained marks for first subject from user and
// stored it in different variable.
// d) Take obtained marks for remaining 2 subjects from user
// and store them in variables.
// e) Now calculate total marks and percentage and show the
// result in browser like this.(Hint: user table)


var sub1 = prompt("Enter first subject name: ");

var sub2 = prompt("Enter second subject name: ");

var sub3 = prompt("Enter third subject name: ");

var totalMarks = 100;

var sub1Marks = prompt("Enter first subject marks: ");

var sub2Marks = prompt("Enter second subject marks: ");

var sub3Marks = prompt("Enter third subject marks: ");

var total = sub1Marks + sub2Marks + sub3Marks;

var percentage = (total / 300) * 100;

document.write("<h1>Subject Total Marks Obtained Marks Percentage</h1>");

document.write("<table>");

document.write("<tr>");

document.write("<th>Subject</th>");

document.write("<th>Total Marks</th>");

document.write("<th>Obtained Marks</th>");

document.write("<th>Percentage</th>");

document.write("</tr>");

document.write("<tr>");

document.write("<td>" + sub1 + "</td>");

document.write("<td>" + totalMarks + "</td>");

document.write("<td>" + sub1Marks + "</td>");

document.write("<td>" + percentage + "</td>");

document.write("</tr>");

document.write("<tr>");

document.write("<td>" + sub2 + "</td>");

document.write("<td>" + totalMarks + "</td>");

document.write("<td>" + sub2Marks + "</td>");

document.write("<td>" + percentage + "</td>");

document.write("</tr>");

document.write("<tr>");

document.write("<td>" + sub3 + "</td>");

document.write("<td>" + totalMarks + "</td>");

document.write("<td>" + sub3Marks + "</td>");

document.write("<td>" + percentage + "</td>");

document.write("</tr>");

document.write("<tr>");

document.write("<td>Total</td>");

document.write("<td>" + totalMarks + "</td>");

document.write("<td>" + total + "</td>");

document.write("<td>" + percentage + "</td>");

document.write("</tr>");

document.write("</table>");


