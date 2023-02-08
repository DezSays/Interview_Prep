
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






// **********************************************************************************

// Given a string of words or phrases, count the number of vowels.

// const getVowelCount = (string) => {
//     let count = 0
//     for(let i = 0; i <= string.length; i++){
//         if(string[i] == 'a' || string[i] == 'e' || string[i] == 'i' || string[i] == 'o' || string[i] == 'u' ){
//             count++
//         }
//     }
//     return count
// };

// console.log(getVowelCount("hello world"));






// **********************************************************************************

// Given an array of items, reverse the order.

// function reverseArray(array) {
//   let newArr = []
//   for(let num = array.length - 1; num >= 0; num--){
//     newArr.push(array[num])
//   } 
//   return newArr
// }

// const arrayToReverse = [ 1, 2, 3, 4 ];
// const result = reverseArray(arrayToReverse);

// console.log(result);






// **********************************************************************************

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

//  Example:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// let nums = [2,7,11,15]
// let target = 9

// const twoSum = (nums, target) => {
//     for(let i = 0; i<=nums.length; i++){
//         if(nums[i] + nums[i+1] == target){
//             return [i, i+1]
//         }
//     }
// };
// let result = twoSum(nums,target)
// console.log(result)






// **********************************************************************************
// Given a phrase, reverse the order of the characters of each word.


// const reverseWords = (words) => {
//     let newWord = ''
//     for(i=words.length - 1; i>=0;i--){
//         let val = words[i]
//         newWord+=val
//     }
//     return newWord
// }
// let result = reverseWords('howdy')
// console.log(result)






// **********************************************************************************

// TODO Need to create a question for this solution


// Option 1, the older way
// function Office(city,state) {
//     this.city = city;
//     this.state = state;
// }

// Office.prototype.printIntro = function () {
//     const message = `Welcome to the ${this.city} Office in ${this.state}!`
//     console.log(message)
// }

// const scrantonOffice = new Office("Scranton", "PA")
// const albanyOffice = new Office("Albany", "NY")

// albanyOffice.printIntro()
// scrantonOffice.printIntro()

// Option 2, the newer way
// class Office {
//     constructor (city,state) {
//         this.isOpen = true;
//         this.city = city;
//         this.state = state;
//     }
//     printIntro(){
//         const message = `Welcome to the ${this.city} Office in ${this.state}!`
//         console.log(message)
//     }
//     isOpenBranch(){
//         if(this.isOpen){
//             console.log(`The ${this.city} branch looks good!`)
//         }
//         else{
//             console.log(`${this.city} branch has been shut down.`)
//         }
//     }
// }



// const scrantonOffice = new Office("Scranton", "PA")
// const albanyOffice = new Office("Albany", "NY")
// const stamfordOffice = new Office("Stamford", "CT")
// stamfordOffice.isOpen = false;

// albanyOffice.isOpenBranch()
// scrantonOffice.isOpenBranch()
// stamfordOffice.isOpenBranch()






// **********************************************************************************

// Given a phrase, capitalize the first letter of each word.

// Input: 'I want to ride my bicycle.'
// Output: 'I Want To Ride My Bicycle.;

// Method 1
// const capitalize = (phrase) => {
//     let newPhrase = ''
//     let firstLetter = phrase[0].toUpperCase();
//     newPhrase+=firstLetter
//     for(i=1; i<phrase.length; i++){
//         if(phrase[i-1] == ' '){
//             let upperVal = phrase[i].toUpperCase()
//             newPhrase+=upperVal
//         }
//         else{
//             newPhrase+=phrase[i]
//         }
//     }
//     return newPhrase
// }

// console.log(capitalize('I want to ride my bicycle.'));
// capitalize('I want to ride my bicycle.')

// Method 2

// const capitalize = (phrase) => {
//     const capitalizeArr = []
//     const phraseArr = phrase.split(' ')

//     console.log(phraseArr)

//     // loop here
//     for(let word of phraseArr){
//         const capitalizeFirstLetter = word[0].toUpperCase();
//         const restOfWord = word.slice(1);
//         const newWord = capitalizeFirstLetter+restOfWord
//         capitalizeArr.push(newWord)
//     }
//     const capitalizePhrase = capitalizeArr.join(' ');

//     return capitalizePhrase
// }
// console.log(capitalize('i want to ride my bicycle.'));



 
// ***********************************************************************

//Given two strings a and b check if the strings are both the same length, and if they have repeating characters that they are in the same position


// function validateStrings(str1,str2){

// /* Calling the function getIndexString and passing in the string str1. */
//     const str1String = getIndexString(str1);

// /* Creating a function called str2String that is calling the getIndexString function and passing in the
// str2 variable. */
//     const str2String = getIndexString(str2);

//     console.log(str1String)
//     console.log(str2String)

// /* Comparing the two strings to see if they are equal. */
//     return str1String == str2String;
// }



// function getIndexString(string){

//     const mapThroughString = new Map();
//     /* The above code is creating a new Map object. */

// /* Looping through the string and printing out the index value of each character in the string. */
//     for(indexValue in string){

//         if(mapThroughString.has(string[indexValue])){
//             mapThroughString.get(string[indexValue]).push(indexValue);
//         }
//         /* The above code is checking if the mapThroughString has the value of the string at the indexValue. If
//         it does, it will push the indexValue into the array. */
        
//         else{
//             let newArr = [];
//             newArr.push(indexValue);
//             mapThroughString.set(string[indexValue],newArr);
//         }
//         /* The above code is checking if the character is already in the map. If it is, it will push the index
//         value into the array. If it is not, it will create a new array and push the index value into the
//         array. */
//     }
//     let newArr = [];

// /* Taking the array of arrays and joining them into a single array. */
//     mapThroughString.forEach((value)=>{
//         newArr.push(value.join(''))
//     })cinema: Class Zoom: https:\\bit.ly\3p41Imk pw: builderCanvas: shorturl.at\jmM29Class Repo: https:\\github.com\DigitalCraftsStudents\web-ft-11-22:books: TA Office: https:\\bit.ly\DC-OH-Zoom pw: builder22Loading history...Jessika (she\her)  4:11 PMoh snap!Adam Wright  4:12 PMWhat's the full problem
//     return newArr.join(' ');

// }

// const flag = validateStrings('egg','add');
// console.log(flag);

// Remove duplicates from an array?


// Method 1, using set 

// const array = [1, 2, 3, 4, 5, 3, 4];

// let removeDuplicates = [...new Set(array)]

// console.log(removeDuplicates); // [ 1, 2, 3, 4, 5 ];



// Method 2, using filter

// const array = [1, 2, 3, 4, 5, 3, 4];
// let uniqueArr = array.filter((item, index) => {
//     return array.indexOf(item) === index;
// });
// console.log(uniqueArr); // [ 1, 2, 3, 4, 5 ];



// Method 3, forEach and Includes 

// const array = [1, 2, 3, 4, 5, 3, 4];
// let noDuplicateArray = [];
// array.forEach((item) => {
//     if (!noDuplicateArray.includes(item)) {
//         noDuplicateArray.push(item);
//     }
// });
// console.log(noDuplicateArray);



 
// ***********************************************************************


// Translate a phrase into Pig Latin.

// input: Learning JavaScript is so much fun
// output: earningLay avaScriptJay siay osay uchmay unfay

// const translateIntoPigLatin = (phrase) => {
//     let splitPhrase = phrase.split(' ');
//     let result = [];
//     for(let word of splitPhrase){
//         let firstLetter = word.substring(0,1);
//         let restOfWord = word.substring(1);
//         let newWord = restOfWord + firstLetter + 'ay';
//         result.push(newWord);
//     }
//     return result.join(' ');

// };

// console.log(translateIntoPigLatin('Learning JavaScript is so much fun'));





// ***********************************************************************





// For a given number of steps, print out a staircase using hashes.

// input: 4

// output:
// #
// ##
// ###
// ####

// Option 1 
// const printStaircase = (steps) => {
//     for(let i=0; i < steps; i++){
//         let val = '#'.repeat(i)
//         console.log(val)
//     }
// };

// printStaircase(4);

// Option 2

// const printStaircase = (steps) => {
//     let stairs = ''
//     for(let i=0; i < steps; i++){
//         stairs += '#'
//         console.log(stairs)
//     }
// };

// printStaircase(4);