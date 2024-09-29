
let a = 35;
console.log(typeof a);

a = "Fahim khan";
console.log(typeof a);

a = true;
console.log(typeof a);

a = undefined;
console.log(typeof a);


let student = {
    Name: "Fahim",
    Address: "Mumbai",
    Contact: "+919876543210",
    Email: "abc@gmail.com"
};


console.log("Information of variable student:", student);

console.log("Type of variable student:", typeof student);


function multiply(num1, num2) {
    return num1 * num2;
}

let x = 2;
let y = 3;

console.log("Multiplication of", x,
    "and", y, "is", multiply(x, y));
