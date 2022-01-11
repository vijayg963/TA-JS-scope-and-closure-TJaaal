1. Convert the function below into different forms of function expression.

```js
function percentage(marks, total) {
  return (marks * 100) / total;
}

// Your code goes here
let findPercentage = function (marks, total) {
  return (marks * 100) / total;
};
```

2. Write Function Declaration or Function Expression next to the function.

```js
function percentage(marks, total) {
  return (marks * 100) / total;
}
// Your answer
// Function Declaration
```

```js
let percentage = function (marks, total) {
  return (marks * 100) / total;
};

// Function Expression
```

```js
let percentage = function (marks, total) {
  return (marks * 100) / total;
};

// Function Expression
```

```js
let percentage = (marks, total) => {
  return (marks * 100) / total;
};
// Function Expression or Arrow Function
```

```js
let percentage = (marks, total) => (marks * 100) / total;
// Function  Expression or Arrow Function
```

3. Why is a function definition an expression in JavaScript? Give one example of function expression.

```js
//We need function expression to pass in other function to call it like Callback function.

let fullname = function (firstname, lastname) {
  return `${firstname} ${lastname}`;
};
```

4. Why is a function call an expression in JavaScript?

```js
// Because to write a funtion again and again is harder then to call a function a Expression.
```

5. Write VALID and INVALID next to each example below with the reason.

```js
function add(a, b) {
  return a + b;
}

let five = add(2, 3); // 5
five = add; // function defination
five = five(10, 11); // 21
five = function () {
  return "Hello";
}; // Function defination
```

6. What is the difference between function definition and function call? Explain with an example.

```js
// Function defination is complete funtion that  and  function call is call function by variable.
// 1.function defination
function multiply(a, b) {
  return a * b;
}
//2.Function call
let mul = function (a, b) {
  return a * b;
};
//this is function call
mul(2, 3);
```

7. What is the similarities between function definition and function call?

```js
// Both give use desire output
```

8. Is the code below valid or invalid. Explain with reason.

```js
function hello() {
  console.log("Hello World!");
}

// Hello World!

hello.user = "Sam"; // valid
```

9. What is higher order function explain with an example.

```js
// When a function call in a function that is higher order funtion
function add(a, b) {
  return a + b;
}
function average(a, b) {
  return add(a, b) / 2;
}
```

10. Explain what is callback function. Why you can pass a function inside a function?

```js
// Callback funtion is use to make a funtion as higher order function  when a funtion need to oprate other funtion then we use callback funtion to reduce the repetation of funtion.
```
