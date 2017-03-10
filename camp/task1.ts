//1
let double = (value:number): number => value*2;
console.log(double(2));

//2
let greeting = (name: string = "Max"): string => `hello, ${name}`
console.log(greeting());
console.log(greeting("Hannah"));

//3
let numbers: number[] = [-3, 33, 38, 5];
console.log(Math.min(...numbers));

//4
let newArray: number[] = [55, 20, ...numbers];
console.log(newArray);

//5
let testResults: number[] = [3.89, 2.99, 1.38];
let [result1, result2, result3] = testResults;
console.log(result1, result2, result3);

//6
let scientist: {firstname: string, experience: number} = {firstname: "Will", experience: 12}
let {firstname, experience} = scientist;
console.log(firstname, experience);
