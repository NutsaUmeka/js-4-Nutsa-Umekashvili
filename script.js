//1
const add = (a,b) => a+b;

console.log(add(4,8));

//2
const substraction = function (a,b) {
    return a - b
}
console.log(substraction(173, 49));


//3
const isEven = (num) => num % 2 === 0;

console.log(isEven(77));

//4
function Number1(callback) {
    const num = 6
    return callback(num)
}
function Number2(num) {
    return num * 3
}
console.log(Number1(Number2));

//5
const isPositive = (num) => num > 0

console.log(isPositive(3));

//6
const multiply = function(num){
    return num * 2
}
console.log(multiply(2));

//7
function Number(callback) {
    const num = 9
    return callback(num)
}
function double(num) {
    return num * 2
}
console.log(Number(double));

//8
const isDivisibleByThree = (num) => num % 3 === 0

console.log(isDivisibleByThree(15));

//9
function Number(callback) {
    const num = 11
    return callback(num)
}
function isDivisibleByTwo(num) {
    return num % 2 === 0
}
console.log(Number(isDivisibleByTwo));

//10
const cube = (num) => num * num * num

console.log(cube(6));

//11
function number(callback) {
    const num1 = 4
    const num2 = 3
    return callback(num1, num2)
} 
function num1TimesNum2(num1, num2) {
    return num1 * num2
}
console.log(number(num1TimesNum2));

//12
const isGraterThanZero = (num) => num > 0
console.log(isGraterThanZero(-2));

//13
const divide = function(num) {
    return num / 2
}
console.log(divide(56));

//14
function number(callback) {
    const num1 = 45
    const num2 = 55
    return callback(num1, num2)
}
function num1PlusNum2(num1, num2) {
    return num1 + num2
}
console.log(number(num1PlusNum2));

//15
const square = (num) => num * num

console.log(square(14));