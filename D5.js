/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- The solution must be available for the tutors by the end of the day (5PM CET)
- You can Google / use StackOverflow BUT we suggest you to use just the material provided
*/

/* EXERCISE 1
Write a function "area" which receives 2 parameters (l1,l2) and calculates the area of the associated rectangle.
*/


const area = function(l1, l2) {
  return calculatedArea = l1*2 + l2*2
}

/* EXERCISE 2
Write a function "crazySum" which receives two integers. It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/

const crazySum = function(integerOne, integerTwo) {
  if(integerOne === integerTwo) {
    let sum = (integerOne + integerTwo) * 3
    return sum
  } else {
    let sum = integerOne + integerTwo
    return sum
  }
}

/* EXERCISE 3
Write a function "crazyDiff" that computes the absolute difference between a given number and 19. 
It should return triple their absolute difference if the given number is greater than 19.
*/

const crazyDiff = function (number) {
  if(number > 19) {
    tripledValue = (number - 19) * 3
    return tripledValue
  } else {
    return "This number is less than 19, no need to worry."
  }
}

/* EXERCISE 4
Write a function "boundary" which accept an integer n and returns true if n is within 20 and 100 (included) or if it's equal to 400.
*/

const boundary = function(n) {
  if(n >= 20 && n<= 100) {
    return true
  } else if (n === 400) {
    return true
  } else {
    return false
  }
}

/* EXERCISE 5
Write a function "strivify" which accepts a string.
It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/

const strivify = function (string) {
  if(string === "Strive"){
    return string
  } else {
    return "Strive" + " " + string
  }
}

// repeats Strive twice if given string begins with strive and has other words

/* EXERCISE 6
Write a function "check3and7" which accepts a positive number and check if it is a multiple of 3 or a multiple of 7.
HINT: Module Operator
*/

const check3and7 = function(positiveNumber) {

  if (positiveNumber % 3 == 0 && positiveNumber > 0 || positiveNumber % 7 == 0 && positiveNumber > 0) {
  return true
  } else {
  return false
  }
}

/* EXERCISE 7
Write a function "reverseString" to programmatically reverse a given string (es.: Strive => evirtS).
*/

const reverseString = function(stringToReverse) {
  let reversedString = ""
  for(let i = stringToReverse.length - 1; i >=0; i--) {
    reversedString += stringToReverse[i]
  }
  return reversedString
}

/* EXERCISE 8
Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as a parameter.
*/

const upperFirst = function(stringToCapitalize) {
}

/* EXERCISE 9
Write a function "cutString" to create a new string without the first and last character of a given string.
*/

/* WRITE YOUR CODE HERE */

/* EXERCISE 10
Write a function "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

/* WRITE YOUR CODE HERE */

/* WHEN YOU ARE FINISHED
Commit and push the code to your personal GitHub repository and share the link to your commit in Eduflow.
*/