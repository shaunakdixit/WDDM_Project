// Declaration of variables using 'var' and 'let'
var x;
let y;

// How to use variables:
x = 5;
y = 6;
let z = x + y;

// Constants cannot be reassigned
const PI = 3.141592653589793;

// Attempting to reassign a constant (this code will not work)
// PI = 10;

// Logging the value of PI
console.log("PI: " + PI);

// Constants must be assigned a value (this code will not work)
// const PI2;
// PI2 = 3.14159265359;

// Always use 'const' when you know the value should not be changed
// Using camelCase for variable names is common
var firstName = "Shaunak";
var lastName = "Dixit";

// Combining first and last names to create 'fullName'
let fullName = firstName + " " + lastName;

// Logging first name, last name, and full name
console.log("First Name: " + firstName + " Last Name: " + lastName);
console.log("Full Name: " + fullName);

// Logging values of x, y, and z
console.log("X: " + x + "\n" + "Y: " + y + "\n" + "Z: " + z);

// Concatenating strings with an integer (z)
console.log("This is a combined string with an integer: " + z);

// Incrementing a number and logging it
let incrementNum = 0;
console.log("The number: " + incrementNum);
incrementNum++;
console.log("The incremented number: " + incrementNum);

// Function to toggle dark mode
function toggleDarkMode() {
    // Get the <body> element
    var body = document.body;
  
    // Toggle the 'dark-mode' class on the <body> element
    body.classList.toggle('dark-mode');
  
    // Toggle dark mode for specific elements with class names
    var darkModeElements = document.querySelectorAll('.dark-mode-toggle');
    darkModeElements.forEach(function (element) {
      element.classList.toggle('dark-mode');
    });
    console.log("Dark mode button clicked");
}
