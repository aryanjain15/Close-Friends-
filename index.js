var input_1 = prompt("Input the first number with spaces.")
var input_2 = prompt("Input the second number with spaces.")
var value = input_1,
    sum = value
        .toString()
        .split('')
        .map(Number)
        .reduce(function (a, b) {
            return a + b;
        }, 0);

var value2 = input_2,
    sum2 = value2
        .toString()
        .split('')
        .map(Number)
        .reduce(function (a, b) {
            return a + b;
        }, 0);

if (sum - sum2 <= 2)  {
    console.log("These numbers are close friends")
} 
else {
    console.log("These numbers asre not close friends.")
    }