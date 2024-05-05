// 1. Write a program that take two numbers & add them in a
// new variable. Show the result in your browser.

var num1 = 3;

var num2 = 5;

var resultAdd = num1 + num2;

document.write(`Sum of ${num1} and ${num2} is ${resultAdd}.`);

// 2. Repeat task1 for subtraction, multiplication, division &
// modulus.

// Subtraction: 

var resultSub = num1 - num2;

document.write(`Subtraction of ${num1} and ${num2} is ${resultSub}.`);

// Multiplication:

var resultMul = num1 - num2;

document.write(`Multiplication of ${num1} and ${num2} is ${resultMul}.`);

// Division:

var resultDiv = num1 - num2;

document.write(`Division of ${num1} and ${num2} is ${resultDiv}.`);

// Modulus:

var resultMod = num1 - num2;

document.write(`Modulus of ${num1} and ${num2} is ${resultMod}.`);

// 3. Do the following using JS Mathematic Expressions
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value
// after variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial
// value: 5”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value
// after increment is: 6”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value
// after addition is: 13”.
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value
// after decrement is: 12”.
// k. Show the remainder after dividing the variable’s value
// by 3.
// l. Output : “The remainder is : 0”.

var num ;


document.write("Value after variable declaration is: " + num + "<br>");


num = 5;

document.write("Initial value: " + num + "<br>");


num++;


document.write("Value after increment is: " + num + "<br>");

num += 7;

document.write("Value after addition is: " + num + "<br>");

num--;

document.write("Value after decrement is: " + num + "<br>");

var remainder = num % 3;

document.write("The remainder is: " + remainder + "<br>");

// 4. Cost of one movie ticket is 600 PKR. Write a script to
// store
// ticket price in a variable & calculate the cost of buying 5
// tickets
// to a movie. Example output:

var ticketPrice = 600;

var totalCost = ticketPrice * 5;

document.write("Total cost to buy 5 tickets to a movie is " + totalCost + "PKR");

// 5. Write a script to display multiplication table of any
// number in your browser. 


document.write("Table Of 4");

document.write("<br>");

document.write("4 x 1 = 4");

document.write("<br>");

document.write("4 x 2 = 8");

document.write("<br>");

document.write("4 x 3 = 12");

document.write("<br>");

document.write("4 x 4 = 16");

document.write("<br>");

document.write("4 x 5 = 20");

document.write("<br>");

document.write("4 x 6 = 24");

document.write("<br>");

document.write("4 x 7 = 28");

document.write("<br>");

document.write("4 x 8 = 32");

document.write("<br>");

document.write("4 x 9 = 36");

document.write("<br>");

document.write("4 x 10 = 40");

// 6. The Temperature Converter: It’s hot out! Let’s make a
// converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.

var celsiusTemp = 25;

var fahrenheitTemp = (celsiusTemp * 9/5) + 32;
console.log(celsiusTemp + "°C is " + fahrenheitTemp + "°F");

var fahrenheitTemp2 = 70;

var celsiusTemp2 = (fahrenheitTemp2 - 32) * 5/9;
console.log(fahrenheitTemp2 + "°F is " + celsiusTemp2 + "°C");


// 7. Write a program to implement checkout process of a
// shopping cart system for an e-commerce website. Store
// the following in variables

// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges
// Compute the total cost & show the receipt in your browser.

var priceOfItem1 = 650;

var priceOfItem2 = 100;

var orderedQuantityOfItem1 = 3;

var orderedQuantityOfItem2 = 7;

var shippingCharges = 100;

var totalCost = priceOfItem1 * orderedQuantityOfItem1 + priceOfItem2 * orderedQuantityOfItem2 + shippingCharges;

document.write("<h1>Shopping Cart</h1>")

document.write("Price of item 1 is " + priceOfItem1 + "<br>");

document.write("Price of item 2 is " + priceOfItem2 + "<br>");

document.write("Ordered quantity of item 1 is " + orderedQuantityOfItem1 + "<br>");

document.write("Ordered quantity of item 2 is " + orderedQuantityOfItem2 + "<br>");

document.write("Shipping charges " + shippingCharges + "<br>");

document.write("Total cost of your order is " + totalCost);

// 8. Store total marks & marks obtained by a student in 2

// variables. Compute the percentage & show the result in

// your browser

var totalMarks = 980;

var marksObtained = 804;

var percentage = (marksObtained / totalMarks) * 100;

document.write("<h1>Marks Sheet</h1>");


document.write("Total marks: " + totalMarks + "<br>");

document.write("Marks obtained: " + marksObtained + "<br>");

document.write("Percentage: " + percentage + "%");

// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a
// script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
// and 1 Saudi Riyal = 28 Pakistani Rupee)


document.write("<h1>Currency In PKR</h1>");

var usDollar = 10;

var saudiRiyal = 25;

var totalCurrency = (usDollar * 104.80) + (saudiRiyal * 28);

document.write("Total Currency in PKR: " + totalCurrency);


// 10. Write a program to initialize a variable with some
// number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression


var num = 10;

var numAdd = num + 5;

var numMul = numAdd * 10;

var numDiv = numMul / 2;

console.log(num + " + 5 = " + numAdd + "<br>");

console.log(numAdd + " * 10 = " + numMul + "<br>");

console.log(numMul + " / 2 = " + numDiv);

// 11. The Age Calculator: Forgot how old someone is?
// Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored
// values.
// Output them to the screen like so: “They are either NN or NN
// years old”.


document.write("<h1>Age Calculator</h1>")

var currentYear = 2016;

var birthYear = 1992;

var age1 = currentYear - birthYear;

document.write("Current Year: " + currentYear + "<br>");

document.write("Birth Year: " + birthYear + "<br>");

document.write("Your Age is: " + age1);

// 12. The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable 
// b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142)

document.write("<h1>The Geometrizer</h1>");

var radius = 20;

var circumference = 2 * 3.142 * radius;

var area = 3.142 * (radius * radius);

document.write("Radius of a circle: " + radius + "<br>");

document.write("The circumference is: " + circumference + "<br>");

document.write("The area is: " + area);

// 13. The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is?
// Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life.
// Output the result to the screen like so: “You will need
// NNNN to last you until the ripe old age of NN”.


document.write("<h1>The Lifetime Supply Calculator</h1>");

var favSnack = "Chocolate Chip";

var currentAge = 15;

var maxAge = 65;

var amountPerDay = 3;

var totalAmount = (maxAge - currentAge) * 365 * amountPerDay;

document.write("Favourite Snack: " + favSnack + "<br>");

document.write("Current Age: " + currentAge + "<br>");

document.write("Estimated Maximum Age: " + maxAge + "<br>");

document.write("Amount per day: " + amountPerDay + "<br>");

document.write("You will need " + totalAmount + " " + favSnack + " to last you until the ripe old age of " + maxAge);

















