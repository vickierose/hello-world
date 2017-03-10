//1
var double = function (value) { return value * 2; };
console.log(double(2));
//2
var greeting = function (name) {
    if (name === void 0) { name = "Max"; }
    return "hello, " + name;
};
console.log(greeting());
console.log(greeting("Hannah"));
//3
var numbers = [-3, 33, 38, 5];
console.log(Math.min.apply(Math, numbers));
//4
var newArray = [55, 20].concat(numbers);
console.log(newArray);
//5
var testResults = [3.89, 2.99, 1.38];
var result1 = testResults[0], result2 = testResults[1], result3 = testResults[2];
console.log(result1, result2, result3);
//6
var scientist = { firstname: "Will", experience: 12 };
var firstname = scientist.firstname, experience = scientist.experience;
console.log(firstname, experience);
