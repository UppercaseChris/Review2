"use strict";
//Comment Example 1
/*Comment Example 2*/ 

//Step 1: Prompt the user to enter a whole a whole number, than convert that string value into an integer.
let number = parseInt(prompt("Type a whole number."));
//Step 1.2: Check if the input is valid
while (isNaN(number))
    {
        number = parseInt(prompt("I'm sorry, please enter a number."));
    }





            //-- At this point it should be confirmed if the number entered is indeed a whole number, if not than prompt again.
//Step 2: Perfrom the calculations ( For the sake of displaying each step of the process on the webpage, I made a variable to hold each step.)
const step1 = number + 9;
const step2 = step1 * 2;
const step3 = step2 - 4;
const step4 = step3 / 2
const newNumber = step4 - number;

//Step 3: Write the final results to the html page.
document.write("<h3>You choose the number " + number + ".</h3>");
document.write("<ul><li>First I added 9 to " + number + ". The new number is " + step1 + "</li><li>Than I multiplied " + step1 + " by 2. The new number is " + step2 + ".</li><li>I than subtracted 4 from " + step2 + ". The new number is " + step3 + ".</li><li>After that I divded " + step3 + " by 2. The new number is " + step4 + ".</li><li>Next I subtracted your orignal number of " + number + " from " + step4 + "</li></ul>");
document.write("<h3>You're final number is " + newNumber + "!</h3>");

//Christopher Lessig - September 11th, 2021

                    
                    
                    
                    
                    
                
                
                



//1. Choose any number and add 9 to it.
    //prompt();
        //Check if it's an integer
//2. Multiply this number by 2.
//3.Subtract this number by 4.
//4.Divide the remainder by 2.
//5.Subtract the number you first picked.
//6.Display Answer.
    //alert()
        //to display the final number. (should be 7)
    //document.write()
        //to show each calulation