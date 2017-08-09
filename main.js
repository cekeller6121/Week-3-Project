// *** Chad's calculator:

// This is my first JavaScript project at The Iron Yard
// Project start date: 6/9/17
// TIY start date: 5/22/17

var result = [];
var values1 = [];
var values2 = [];

// These are my flag variables; they tell the program when an operator
// has been pressed, and what operator it is. Then when the equals button
// is pressed at the end of the equation, it knows what to do.
var flag;
var flagAdd;
var flagsubtract;
var flagMultiply;
var flagDivide;
var six_counter = 0;

// This function resets all flags so that we can continue to do operations
// after the equals operation is completed.

function operatorFlagsFalse() {
  flag = false;
  flagAdd = false;
  flagsubtract = false;
  flagMultiply = false;
  flagDivide = false;
};

// *** Number button assignments ***
var button = document.getElementsByClassName('button');
var zero_button = document.getElementById('zero-button');
var one_button = document.getElementById('one-button');
var two_button = document.getElementById('two-button');
var three_button = document.getElementById('three-button');
var four_button = document.getElementById('four-button');
var five_button = document.getElementById('five-button');
var six_button = document.getElementById('six-button');
var seven_button = document.getElementById('seven-button');
var eight_button = document.getElementById('eight-button');
var nine_button = document.getElementById('nine-button');

// *** Operator button assignments ***
var add_button = document.getElementById('add-button');
var subtract_button = document.getElementById('subtract-button');
var multiply_button = document.getElementById('multiply-button');
var divide_button = document.getElementById('divide-button');
var equals_button = document.getElementById('equals-button');
var clear_button = document.getElementById('clear-button');

// *** Number button event listeners ***

zero_button.addEventListener('click', function zeroClick () {
  console.log("zero button click");
  let zero_button = 0;
  if (flag === true) {
    values2.push(zero_button);
  } else {
    values1.push(zero_button);
  }
});

one_button.addEventListener('click', function oneClick() {
  console.log("one button click");
  //  *** Every number button has this function: we're defining the variable
  //      to equal the cooresponding number. Below that we say if the flag
  //      is true, which means an operator button has been pressed, we are
  //      going to store that button press in our values2 array. Else means
  //      that number is a part of a number before we choose an operator
  //      and needs to be stored in the first array which is values1.
  let one_button = 1;
  document.getElementById('output').innerHTML = one_button;
    if (flag === true) {
      values2.push(one_button);
    } else {
      values1.push(one_button);
}
});

two_button.addEventListener('click', function twoClick() {
  console.log("two button click");
  let two_button = 2;
  document.getElementById('output').innerHTML = two_button;
  if (flag === true) {
    values2.push(two_button);
  } else {
    values1.push(two_button);
  }
});

three_button.addEventListener('click', function threeClick () {
  console.log("three button click");
  let three_button = 3;
  document.getElementById('output').innerHTML = three_button;
  if (flag === true) {
    values2.push(three_button);
  } else {
    values1.push(three_button);
  }
});

four_button.addEventListener('click', function fourClick () {
  console.log("four button click");
  let four_button = 4;
  document.getElementById('output').innerHTML = four_button;
  if (flag === true) {
    values2.push(four_button);
  } else {
    values1.push(four_button);
  }
});

five_button.addEventListener('click', function fiveClick () {
  console.log("five button click");
  let five_button = 5;
  document.getElementById('output').innerHTML = five_button;
  if (flag === true) {
    values2.push(five_button);
  } else {
    values1.push(five_button);
  }
});

six_button.addEventListener('click', function sixClick () {
  console.log("six button click");
  let six_button = 6;
  six_counter += 1;
  document.getElementById('output').innerHTML = six_button;
  if (flag === true) {
    values2.push(six_button);
  } else {
    values1.push(six_button);
  }
  if (six_counter === 3) {
    document.getElementById('output').innerHTML = "ruh roh!";
  }
});

seven_button.addEventListener('click', function sevenClick () {
  console.log("seven button click");
  let seven_button = 7;
  document.getElementById('output').innerHTML = seven_button;
  if (flag === true) {
    values2.push(seven_button);
  } else {
    values1.push(seven_button);
  }
});

eight_button.addEventListener('click', function eightClick() {
  console.log("eight button click");
  let eight_button = 8;
  document.getElementById('output').innerHTML = eight_button;
  if (flag === true) {
    values2.push(eight_button);
  } else {
    values1.push(eight_button);
  }
});

nine_button.addEventListener('click', function nineClick() {
  console.log("nine button click");
  let nine_button = 9;
  document.getElementById('output').innerHTML = nine_button;
  if (flag === true) {
    values2.push(nine_button);
  } else {
    values1.push(nine_button);
  }
});

// *** Operator button event listeners ***

clear_button.addEventListener('click', function clearAll () {
  console.log("clear button click");
  location.reload(); // Reloads the page...pure laziness :)
});

equals_button.addEventListener('click', function equalsClick() {
  console.log("equals button click");
  values2 = values2.join("");
  values2 = Number(values2);

  function resultTooBig() {
    if (result.length > 10) {
      alert(result);
      document.getElementById('output').innerHTML = "Big number, whooo!";
    }
  };

  if (flagAdd === true) {
    result = values1 + values2;
    console.log(result);
    document.getElementById('output').innerHTML = result;
  } else if (flagsubtract === true) {
    result = values1 - values2;
    console.log(result);
    document.getElementById('output').innerHTML = result;
  } else if (flagMultiply === true) {
    result = values1 * values2;
    console.log(result);
    resultTooBig();
    document.getElementById('output').innerHTML = result;
  } else if (flagDivide === true) {
    result = values1 / values2;
    console.log(result);
    resultTooBig();
    document.getElementById('output').innerHTML = result;
  }
    operatorFlagsFalse();
    values1 = [];
    values2 = [];
    values1.push("" + result);
    result = 0;
});

add_button.addEventListener('click', function addOperator() {
  console.log("add button click");
  flag = true;
  flagAdd = true;
  values1 = values1.join("");
  values1 = Number(values1);
  document.getElementById('output').innerHTML = values1;
});

subtract_button.addEventListener('click', function subtractOperator () {
  console.log("subtract button click");
  flag = true;
  flagsubtract = true;
  values1 = values1.join("");
  values1 = Number(values1);
  document.getElementById('output').innerHTML = values1;
});

multiply_button.addEventListener('click', function multiplyOperator () {
  console.log("multiply button click");
  flag = true;
  flagMultiply = true;
  values1 = values1.join("");
  values1 = Number(values1);
  document.getElementById('output').innerHTML = values1;
});

divide_button.addEventListener('click', function divideOperator() {
  console.log("divide button click");
  flag = true;
  flagDivide = true;
  values1 = values1.join("");
  values1 = Number(values1);
  document.getElementById('output').innerHTML = values1;
});









// *** intenional white space ***
