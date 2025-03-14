/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/

                                // This one seems to have the right results, but
let result = Number("5") - 2;           // Assuming the intent is to make sure this 5 acts as an integer in this program, 
                                // I will just turn the string into a number with the number() function. 
console.log("The result is: " + result);

let isValid = false;// here the boolean is reading false as a string "false", making the program run it as a truthy statement
                              // It seems like they were looking for a "This is invalid' response 
                              // I will take the quotes away from "false" to make it a boolean falsy statemtn
                              // I will also remove the boolean() function as it is not needed.  
if (isValid) {
    console.log("This is valid!");
}else{                        // Added else function to clarify what happens when isValid is false
  console.log("This is invalid!");
}

let age = Number("25");
let totalAge = age + 5;
console.log("Total Age: " + totalAge);// Here the program is converting the number into a string because of the + sign 
                                      // I will fix this by turning the 25 into a number. number()
                                      // This will make the numbers the same type, allowing them to be added together for a sum  
         
                                      
let implicitExample = "10" - 2; // Implicit Example String turns into a number when - function is used  
console.log(
"The Implicit conversion is " + implicitExample + ", which is a " + typeof implicitExample );
    
  let explicitExample = Number("42"); // Explicit conversion of a string to a number
console.log(
  "The explicit conversion is " + explicitExample + ", which is a " + typeof explicitExample
);  
let explicitExampleNan = NaN; // NaN is explicitly checked as a falsy value

if (explicitExampleNan) {
  console.log(explicitExampleNan + " is truthy");
} else {
  console.log(explicitExampleNan + " is falsy");
}