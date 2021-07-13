# JAVASCRIPT CHEATSHEET
> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide
---
<details>
<summary>Table of Contents</summary>

- [JAVASCRIPT CHEATSHEET](#javascript-cheatsheet)
  - [> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide](#-httpsdevelopermozillaorgen-usdocswebjavascriptguide)
  - [</details>](#details)
  - [comments](#comments)
  - [printing/console logging](#printingconsole-logging)
  - [Variables](#variables)
    - [hoisting](#hoisting)
  - [* can refer to variable declared **later** without getting an exception](#-can-refer-to-variable-declared-later-without-getting-an-exception)
  - [Data structures and types](#data-structures-and-types)
  - [8. Object](#8-object)
  - [Type conversion](#type-conversion)
    - [using arithmetic operators](#using-arithmetic-operators)
    - [`parseInt` and `parseFloat`](#parseint-and-parsefloat)
  - [* `pasreFloat(string)` converts `string` to floating point number](#-pasrefloatstring-converts-string-to-floating-point-number)
  - [Literals](#literals)
    - [template literals, string interpolation and tagged templates [#TODO-still don't really get tagged templates]](#template-literals-string-interpolation-and-tagged-templates-todo-still-dont-really-get-tagged-templates)
  - [Operators (Highest to Lowest precedence)](#operators-highest-to-lowest-precedence)
  - [Conditionals](#conditionals)
    - [if...else if...else](#ifelse-ifelse)
  - [`switch` statement](#switch-statement)
  - [Loops](#loops)
    - [](#)
  - [Exception handling](#exception-handling)
    - [`throw` statement](#throw-statement)
    - [`try..catch` statement](#trycatch-statement)
- [REACT](#react)
</details>
---
## comments
* `// single line comment`
* `/* multi-line comment */`

## printing/console logging
* `console.log()`

## Variables
* `var` local and global variables, depending on the execution context
* `let` local to function
* `const` declaring constants (cannot change)
### hoisting
* can refer to variable declared **later** without getting an exception
---
## Data structures and types
1. Boolean: `true`, `false`
   * `Boolean(thing)` returns boolean value of thing
2. `null`
3. `undefined`
4. Number: `42`, `3.14159`, etc.
5. BigInt: integer with arbitrary precision (`9007199254740992n`)
6. String
7. Symbol: data type whose instances are unique and immutable
8. Object
---
## Type conversion
### using arithmetic operators
* `"<string>" + <int>` converts <int> to string; outcome is string
  * `'37' + 7 // "377"`
* `"<string>" <other operator> <int>` converts string to integer
  * `'37' - 7 // 30`

### `parseInt` and `parseFloat`
* `parseInt(string, radix*)` converts `string` to (whole number) integer with base `radix*`
* `pasreFloat(string)` converts `string` to floating point number
---
## Literals
* fixed values that you *literally* provide
1. Array literals
2. Boolearn literals
3. Floating-point literals
4. Numeric literals
5. Object literals
6. RegExp literals
7. String literals
###  template literals, string interpolation and tagged templates [#TODO-still don't really get tagged templates]
* `template literal`
* `${expression}`
``` javascript
let name = 'Bob';
let myTag = (str, name, age) => `${str[0]}${name}${str[1]}${age}${str[2]}`;
let [name, age] = ['Mika', 28];
myTag`Participant "${ name }" is ${ age } years old.`;
// Participant "Mika" is 28 years old. 
```
* escape charcter: `\`

---
## Operators (Highest to Lowest precedence)
* Arithmetic Operators
  * `+` addition
  * `-` subtraction
  * `*` multiplication
  * `**` exponentiation
  * `/` division
  * `%` modulus (division remainder)
  * `++` increment
  * `--` decrement
* Assignment Operators
  * `=`, `+=`, `-=`, `*=`, ...
* Comparison Operators
  * `==` equal to
  * `===` equal value and equal type
  * `!==` not equal
  * `>` not equal value or not equal type
  * `<` greater than
  * `<=` less than
  * `>=` greater than or equal to
  * `<=` less than or equal to
  * `?` ternary (conditional) operator
    * `if...else` shortcut
    ```javascript
    // condition ? expressionIfTrue : expressionIfFalse

    let beverage = (age >= 21) ? '🍺' : '🧃'
    ```
    * `if..else if...else` shortcut
    ```javascript
    function example(…) {
    return condition1 ? value1 // if condition1
         : condition2 ? value2 // else if condition2
         : condition3 ? value3 // else if ...
         : value4; // else
    ```
* Logical Operators
  * `&&` and
  * `||` or
  * `!` not
* Type Operators
  * `typeof` returns the type of a variable
  * `instanceof` returns true if an object is an instance of an object type
* Bitwise Operators
  * ...


---
## Conditionals
### if...else if...else
```javascript
if (condition1){
    //statements/operations to execute if condition1 is true
} else if (condition2){
    //statements/operations to execute if condition1 is true
} else {
    //statements/operations to execute if all conditionals above are false
}
```
* falsy values
  * `false`
  * `undefined`
  * `null`
  * `0`
  * `NaN`
  * `""` (empty string)

## `switch` statement
```javascript
switch (expression/variable) {
  case label_1:
    //statements_1
    break;
  case label_2:
    //statements_2
    break;
    …
  default:
    //statements_def
    break;
}

```

---
## Loops
### 


---
## Exception handling
### `throw` statement
### `try..catch` statement


# REACT
* components
  * function components
    * hooks
      * `useState`, `useEffect`, `useContext`, ...
  * class coponents
* states
  * app state
  * global state

