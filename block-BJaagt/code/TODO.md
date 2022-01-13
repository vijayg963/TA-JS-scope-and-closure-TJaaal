Go through the code below and write down the process of making decision about looking for the variable. Also write the output of the code below.

Example:

```js
function hello() {
  var username = "Arya";
}
console.log(useranme); // error (usernam in function we can't call it)
```

In above code we are looking for the variable named `usename`. There is no variable named `username` in the global scope. The variable is inside the function named `hello` and we can't access the variable defined inside a function from outside.

The above code will throw an error `Reference Error username is not defined`.

2. Go through the code below and write down the process of making decision about looking for the variable. Also write the output of the code below.

```js
{
  const username = "Arya";
}
console.log(useranme);

// In above code we are looking for the variable named `usename`. There is no variable named `username` in the global scope. The variable is inside the block scope and we can't access the variable defined inside a block from outside.

// The above code will throw an error `Reference Error username is not defined`.
```

3. Go through the code below and write down the process of making decision about looking for the variable. Also write the output of the code below.

```js
if (true) {
  let username = "Arya";
}
console.log(useranme);

// In above code we are looking for the variable named `usename`. There is no variab  le named `username` in the global scope. The variable is inside the block scope and we can't access the variable defined inside a block from outside.

// The above code will throw an error `Reference Error username is not defined`.
```

4. Go through the code below and write down the process of making decision about looking for the variable. Also write the output of the code below.

```js
if (true) {
  var username = "Arya";
}
console.log(useranme); // Arya

// In above code we are looking for the variable named `usename`. There is variable named `username` in the global scope because var is not block . The variable is inside the block scope and we can access the variable defined inside a block from outside.

// The above code output will be 'Arya'.
```

5. Go through the code below and write down the process of making decision about looking for the variable. Also write the output of the code below.

```js
let username = "John";
if (true) {
  var username = "Arya";
}
console.log(useranme);

// In above code we are looking for the variable named `usename`. There is two times it is define so that's why it show error (var is not a block level so both are globle scope with same name ).

// The above code will throw an error `SyntaxError username is already beeb declared`.
```

6. Go through the code below and write down the process of making decision about looking for the variable. Also write the output of the code below.

```js
let username = "John";
if (true) {
  let username = "Arya";
}
console.log(useranme); // John
//  In above code we are looking for the variable named `usename`. There are both variable in diffrent socpe so  we can access it.
```

7. Go through the code below and write down the process of making decision about looking for the variable. Also write the output of the code below.

```js
let username = "John";
function sayHello() {
  let username = "Arya";
}
sayHello();
console.log(useranme); // John
//   In above code we are looking for the variable named `usename`. that is define outside the funtion. so after function exicution cosole.log give use output.
```

8. Go through the code below and write down the process of making decision about looking for the variable. Also write the output of the code below.

```js
for (var i = 0; i < 10; i++) {
  console.log(i, "First"); //  In above code we are lop over less then ten so it will give the output with 0 to 9 with "First".
}
console.log(i, "Second"); // 10 'Second' because we are using for the loop var the is not block scope so it can access by lop.
```

9. Go through the code below and write down the process of making decision about looking for the variable. Also write the output of the code below.

```js
for (let i = 0; i < 10; i++) {
  console.log(i, "First"); //  In above code we are lop over less then ten so it will give the output with 0 to 9 with "First".
}
console.log(i, "Second"); // ReferenceError i is not defined.
```
