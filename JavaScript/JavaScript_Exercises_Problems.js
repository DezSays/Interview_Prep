
//* Exercise 1: Print numbers from 1 to 10. *


//* Exercise 2: Print the odd numbers less than 100. *


//* Exercise 3: Calculate the sum of numbers from 1 to 10. *


//* Exercise 4: Calculate the sum of odd numbers greater than 10 and less than 30. *


//* Exercise 5: Calculate the sum of numbers in an array of numbers. *


// * Exercise 6: Calculate the average of the numbers in an array of numbers. *


// * Exercise 7: Create a function that receives an array of numbers and returns an array containing only the positive numbers *


//* Exercise 8: Find the maximum number in an array of numbers. *


//* Exercise 9: Reverse an array. *


//* Exercise 10: Reverse a string. *


//* Exercise 11: Create a function that will merge two arrays and return the result as one new array. *


//* Exercise 12: Implement the bubble sort algorithm to sort an array of numbers from least to greatest. *


//* Exercise 13: Using the given JavaScript_Exercises.html, highlight all of the words over 8 characters long in the paragraph text (with a yellow background) *


//* Exercise 14: Using the given JavaScript_Exercises.html, add a link back to the source of the text after the paragraph tag. (https://forcemipsum.com/) *


//* Exercise 15: Using the given JavaScript_Exercises.html, split each new sentence on to a separate line in the paragraph text. A sentence can be assumed to be a string of text terminated with a period (.) *


//* Exercise 16: Using the given JavaScript_Exercises.html, count the number of words in the paragraph tag and display the count afer the heading. You can assume that all words are separated by one singular whitespace. *


//* Exercise 17: Using the given JavaScript_Exercises.html, replace all question marks (?) with thinking faces (🤔) and exclamation marks (!) with astonished faces (😲) *


//* Exercise 18: Using the includes method, return whether or not the list contains the number 2. *
// * const nums = [1,2,3,4,5]


//* Exercise 19: Using the reduce method, return the total price if someone were to purchase all of the items in our store. *

// const shop = [
//     { name: 'computer', price: 1000 },
//     { name: 'keyboard', price: 50 },
//     { name: 'mouse', price: 25 },
//     { name: 'printer', price: 300 },
//     { name: 'usb', price: 10 },
//     { name: 'monitor', price: 200 },
//     { name: 'ink', price: 100 },
//     { name: 'paper', price: 10 },
//     { name: 'mouse pad', price: 20 },
//     { name: 'chair', price: 15 }
// ]


//* Exercise 20: Using the some method, display whether or not we have items priced at $500 or more in our store. *

// const shop = [
//     { name: 'computer', price: 1000 },
//     { name: 'keyboard', price: 50 },
//     { name: 'mouse', price: 25 },
//     { name: 'printer', price: 300 },
//     { name: 'usb', price: 10 },
//     { name: 'monitor', price: 200 },
//     { name: 'ink', price: 100 },
//     { name: 'paper', price: 10 },
//     { name: 'mouse pad', price: 20 },
//     { name: 'chair', price: 15 }
// ]


//* Exercise 21: Using the every method, display whether or not our store contains only items priced at $1000 or less. *

// const shop = [
//     { name: 'computer', price: 1000 },
//     { name: 'keyboard', price: 50 },
//     { name: 'mouse', price: 25 },
//     { name: 'printer', price: 300 },
//     { name: 'usb', price: 10 },
//     { name: 'monitor', price: 200 },
//     { name: 'ink', price: 100 },
//     { name: 'paper', price: 10 },
//     { name: 'mouse pad', price: 20 },
//     { name: 'chair', price: 15 }
// ]


//* Exercise 22: Using the forEach method, print out only the names of the items in our shop *

// const shop = [
//     { name: 'computer', price: 1000 },
//     { name: 'keyboard', price: 50 },
//     { name: 'mouse', price: 25 },
//     { name: 'printer', price: 300 },
//     { name: 'usb', price: 10 },
//     { name: 'monitor', price: 200 },
//     { name: 'ink', price: 100 },
//     { name: 'paper', price: 10 },
//     { name: 'mouse pad', price: 20 },
//     { name: 'chair', price: 15 }
// ]


//* Exercise 23: Using the find method, display the information for the item: computer *

// const shop = [
//     { name: 'computer', price: 1000 },
//     { name: 'keyboard', price: 50 },
//     { name: 'mouse', price: 25 },
//     { name: 'printer', price: 300 },
//     { name: 'usb', price: 10 },
//     { name: 'monitor', price: 200 },
//     { name: 'ink', price: 100 },
//     { name: 'paper', price: 10 },
//     { name: 'mouse pad', price: 20 },
//     { name: 'chair', price: 15 }
// ]


//* Exercise 24: Using the filter method, return all items priced at $100 or less *

// const shop = [
//     { name: 'computer', price: 1000 },
//     { name: 'keyboard', price: 50 },
//     { name: 'mouse', price: 25 },
//     { name: 'printer', price: 300 },
//     { name: 'usb', price: 10 },
//     { name: 'monitor', price: 200 },
//     { name: 'ink', price: 100 },
//     { name: 'paper', price: 10 },
//     { name: 'mouse pad', price: 20 },
//     { name: 'chair', price: 15 }
// ]



//* Exercise 25: Using the map method, display only the names of items that are priced at $200 or less *

// const shop = [
//     { name: 'computer', price: 1000 },
//     { name: 'keyboard', price: 50 },
//     { name: 'mouse', price: 25 },
//     { name: 'printer', price: 300 },
//     { name: 'usb', price: 10 },
//     { name: 'monitor', price: 200 },
//     { name: 'ink', price: 100 },
//     { name: 'paper', price: 10 },
//     { name: 'mouse pad', price: 20 },
//     { name: 'chair', price: 15 }
// ]





// **********************************************************************************************

// # Write a short program that prints each number from 1 to 100 on a new line. 
// # For each multiple of 3, print "Fizz" instead of the number. 
// # For each multiple of 5, print "Buzz" instead of the number. 
// # For numbers which are multiples of both 3 and 5, print "FizzBuzz" instead of the number.

// const fizzbuzz = (maxNum) => {
//     for(let num = 1; num <= maxNum; num++){
//         if(num % 15 == 0){
//             console.log('FizzBuzz')
//         }
//         else if(num % 5 == 0){
//             console.log('Buzz')
//         }
//         else if(num % 3 == 0){
//             console.log('Fizz')
//         }
//         else{
//             console.log(num)
//         }
//     }
// }
// fizzbuzz(100)



// Given a string of characters as input, write a function that returns it with the characters reversed.

// const backwards = (str) =>{
//     for(let i = str.length - 1; i >= 0; i--){
//        let val = str[i]
//        console.log(val)
//     }
// }

// backwards('Dez')




// A palindrome is a word or phrase that reads the same backward as forward. Write a function that checks for this.

// const palindrome = (word) =>{
//     const wordArray = word.split('');
//     const reversedArray = wordArray.reverse();
//     const reversedWord = reversedArray.join('')
//     if(reversedWord == word){
//         return true 
//     }
//     else{
//         return false
//     }
// }

// let result = palindrome('racecar')
// console.log(result)







// **********************************************************************************

// Given an integer, reverse the order of the digits. (This solution has the steps broken down, but can do this much shorter. See next solution.)

// const reverseInt = (num) => {
//     const numStr = num.toString()
//     const numArray = numStr.split('');
//     const reversedArray = numArray.reverse();
//     const reversedNum = reversedArray.join('')
//     num = parseInt(reversedNum)  
//     return reversedNum    
// }

// let result = reverseInt(12345)
// console.log(result)


// const reverseInt = (num) => {
//     const numVal = num.toString().split('').reverse().join('')
//     num = parseInt(numVal)  
//     return numVal    
// }

// let result = reverseInt1(54321)
// console.log(result) 
