// Task 1.Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method. 
Ans:

function reverseString(inputStr) {
  let reversedStr = '';
  for (let i = inputStr.length - 1; i >= 0; i--) {
    reversedStr += inputStr.charAt(i);
  }
  return reversedStr;
}
console.log(reverseString("hello world"));

// Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array. 

function sumOfPositiveNumbers(number) {

  let positiveSum = 0;
  for (let i = 0; i < number.length; i++) {
    const num = number[i];
    if (num > 0) {
      positiveSum += num;
    }
  }
  return positiveSum;
}
const numbers = [1, -2, 3, 4, -5, 6];
const result = sumOfPositiveNumbers(numbers)
console.log(result);

// Task 3: Write a JavaScript program to find the most frequent element in an array and return it. 

function findMostFrequentElement(arr) {
  const frequencyCounter = {};
  for (const num of arr) {
    frequencyCounter[num] = (frequencyCounter[num] || 0) + 1;

  }
  let mostFrequentElement;
  let maxFrequency = 0;

  for (const num in frequencyCounter) {
    if (frequencyCounter[num] > maxFrequency) {
      mostFrequentElement = num;
      maxFrequency = frequencyCounter[num];
    }
  }
  return parseInt(mostFrequentElement, 10);
}

const arr = [3, 5, 2, 5, 3, 3, 1, 4, 5]
const mostFrequent = findMostFrequentElement(arr);
console.log('Most frequent element', mostFrequent);

// Task 4: Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.

function twoSumSorted(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const currentSum = arr[left] + arr[right];

    if (currentSum === target) {
      return [left, right];
    }
    else if (currentSum < target) {
      left++;

    }
    else {
      right--;

    }
  }
  return [];
}

const sortedArray = [1, 3, 6, 8, 11, 15];
const targetValue = 16;
const resultIndices = twoSumSorted(sortedArray, targetValue);
console.log(resultIndices);

// Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.

function calculator(num1, num2, operator) {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      return num1 / num2;
  }
}

console.log(calculator(5, 3, '+'));

// Task 6: Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.

function generateRandomPassword(length) {
  const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowercaseLetter = 'abcdefghijklmnopqrstuvwxyz'
  const numbers = '0123456789';
  const specialCharacters = '!@#$%^&*()_-+=<>?/[]{},.:;';

  const allCharacters = uppercaseLetters + lowercaseLetter + numbers + specialCharacters;

  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allCharacters.length);
    password += allCharacters.charAt(randomIndex);
  }
  return password;
}

const passwordLength = 12;
const password = generateRandomPassword(passwordLength);
console.log('Generated password:', password);

// Task 7: Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.

function romanToInteger(romanNumeral) {
  const romanNumerals = {
    'I': 1,
    'V': 5,
    'X': 10,

  }
  let result = 0;
  let preValue = 0;

  for (let i = romanNumeral.length - 1; i >= 0; i--) {
    const currentChar = romanNumeral[i];
    const currentValue = romanNumerals[currentChar];

    if (currentValue < preValue) {
      result -= currentValue;
    } else {
      result += currentValue;
    }

    preValue = currentValue;
  }

  return result;
}
console.log(romanToInteger("IX"));