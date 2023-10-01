//Q1. Write a program to find all pairs of an integer array whose sum is equal to a given number?
function findPairsWithSum(arr, targetSum) {
    const pairs = [];
  
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] + arr[j] === targetSum) {
          pairs.push([arr[i], arr[j]]);
        }
      }
    }
  
    return pairs;
  }
  
 
  const integerArray = [1, 2, 3, 4, 5, 6];
  const targetSum = 7;
  
  const result = findPairsWithSum(integerArray, targetSum);
  console.log(result);


// Q2. Write a program to reverse an array in place? In place means you cannot create a new array. You have to update the original array.
function reverseArrayInPlace(arr) {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
   
    const temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;

    
    start++;
    end--;
  }
}


const myArray = [1, 2, 3, 4, 5];
reverseArrayInPlace(myArray);
console.log(myArray); 


//3 Write a program to check if two strings are a rotation of each other?

function areRotations(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  const concatenatedStr = str1 + str1;

  if (concatenatedStr.includes(str2)) {
    return true;
  }

  return false;
}

const string1 = "hello";
const string2 = "lohel";

if (areRotations(string1, string2)) {
  console.log(`${string1} and ${string2} are rotations of each other.`);
} else {
  console.log(`${string1} and ${string2} are not rotations of each other.`);
}


//Q4. Write a program to print the first non-repeated character from a string?

function firstNonRepeatedCharacter(str) {
  const charCount = {};

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    charCount[char] = (charCount[char] || 0) + 1;
  }

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (charCount[char] === 1) {
      return char;
    }
  }

  return null;
}

const inputString = "programming";
const firstNonRepeated = firstNonRepeatedCharacter(inputString);

if (firstNonRepeated !== null) {
  console.log(`The first non-repeated character in "${inputString}" is "${firstNonRepeated}".`);
} else {
  console.log("No non-repeated character found in the string.");
}

//Q5. Read about the Tower of Hanoi algorithm. Write a program to implement it.
function towerOfHanoi(n, sourceRod, auxiliaryRod, targetRod) {
  if (n === 1) {
    console.log(`Move disk 1 from rod ${sourceRod} to rod ${targetRod}`);
    return;
  }

  towerOfHanoi(n - 1, sourceRod, targetRod, auxiliaryRod);
  console.log(`Move disk ${n} from rod ${sourceRod} to rod ${targetRod}`);
  towerOfHanoi(n - 1, auxiliaryRod, sourceRod, targetRod);
}

const numberOfDisks = 3;
const source = "A";
const auxiliary = "B";
const target = "C";

console.log(`Tower of Hanoi with ${numberOfDisks} disks:`);
towerOfHanoi(numberOfDisks, source, auxiliary, target);
//6 Read about infix, prefix, and postfix expressions. Write a program to convert postfix to prefix expression.

function isOperator(char) {
  return "+-*/^".includes(char);
}

function postfixToPrefix(postfix) {
  const stack = [];

  for (let token of postfix) {
    if (!isOperator(token)) {
      stack.push(token);
    } else {
      const operand2 = stack.pop();
      const operand1 = stack.pop();
      const prefixExpression = token + operand1 + operand2;
      stack.push(prefixExpression);
    }
  }

  return stack.pop(); 
}


const postfixExpression = "23"



// 7  Write a program to convert prefix expression to infix expression.

function isOperator(char) {
  return "+-*/^".includes(char);
}

function prefixToInfix(prefix) {
  const stack = [];

  for (let i = prefix.length - 1; i >= 0; i--) {
    const currentChar = prefix[i];

    if (!isOperator(currentChar)) {
      stack.push(currentChar);
    } else {
      const operand1 = stack.pop();
      const operand2 = stack.pop();
      const infixExpression = `(${operand1}${currentChar}${operand2})`;
      stack.push(infixExpression);
    }
  }

  return stack.pop(); 
}


const prefixExpression = "+*23/456";
const infixExpression = prefixToInfix(prefixExpression);
console.log("Infix Expression:", infixExpression); 


//  8  Write a program to check if all the brackets are closed in a given code snippet.
function areBracketsBalanced(code) {
  const stack = [];
  const brackets = {
    '(': ')',
    '[': ']',
    '{': '}',
  };

  for (let char of code) {
    if (brackets[char]) {
      
      stack.push(char);
    } else if (Object.values(brackets).includes(char)) {
      
      const topOfStack = stack.pop();
      if (brackets[topOfStack] !== char) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

const codeSnippet = "{[()]}";
const results = areBracketsBalanced(codeSnippet);

if (results) {
  console.log("All brackets are closed.");
} else {
  console.log("Not all brackets are closed.");
}

// 9. . Write a program to reverse a stack.
class Stack {
  constructor() {
    this.items = [];
  }

  push(item) {
    this.items.push(item);
  }

  pop() {
    if (!this.isEmpty()) {
      return this.items.pop();
    }
    return null;
  }

  peek() {
    if (!this.isEmpty()) {
      return this.items[this.items.length - 1];
    }
    return null;
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

function reverseStack(stack) {
  const reversedStack = new Stack();

  while (!stack.isEmpty()) {
    reversedStack.push(stack.pop());
  }

  return reversedStack;
}


const originalStack = new Stack();
originalStack.push(1);
originalStack.push(2);
originalStack.push(3);
originalStack.push(4);

const reversedStack = reverseStack(originalStack);

console.log("Reversed Stack:");
while (!reversedStack.isEmpty()) {
  console.log(reversedStack.pop());
}


// 10. Write a program to find the smallest number using a stack.

class Stack {
  constructor() {
    this.items = [];
  }


  push(item) {
    this.items.push(item);
  }

  pop() {
    if (!this.isEmpty()) {
      return this.items.pop();
    }
    return null;
  }

 
  peek() {
    if (!this.isEmpty()) {
      return this.items[this.items.length - 1];
    }
    return null;
  }


  isEmpty() {
    return this.items.length === 0;
  }
}

function findSmallestNumber(stack) {
  if (stack.isEmpty()) {
    return null;
  }

  let smallest = stack.peek(); 

  while (!stack.isEmpty()) {
    const current = stack.pop();
    if (current < smallest) {
      smallest = current;
    }
  }

  return smallest;
}

const numberStack = new Stack();
numberStack.push(4);
numberStack.push(2);
numberStack.push(9);
numberStack.push(1);
numberStack.push(5);

const smallestNumber = findSmallestNumber(numberStack);
console.log("Smallest Number:", smallestNumber);
