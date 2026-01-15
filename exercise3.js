//Number 11
let mark = 85;
if(mark >= 90 && mark <= 100){
    console.log("Your Grade is A");
}
else if(mark >= 80 && mark <= 89){
    console.log("Your Grade is B");
}
else if(mark >= 70 && mark <= 79){
    console.log("Your Grade is C");
}
else if(mark >= 60 && mark <= 69){
    console.log("Your Grade is D");
}
else{
    console.log("Your Grade is F");
}

//Number 12
let length = 5;
let width = 10;

let area = length * width;
let perimeter = 2 * (length + width);
console.log("Area is " + area);
console.log("Perimeter is " + perimeter);

//Number 13

function isLeapYear(year){
    return (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0)
}
console.log(isLeapYear(2024));

//Number 14
let number = 47;

if(number % 3 == 0){
    console.log("number is divisible by 3")
}
else if(number % 5 == 0){
    console.log("number is divisible by 5")
}
else if(number % 3 == 0 && number % 5 == 0){
    console.log("number is divisible by 3 and 5")
}
else{
    console.log("number not divisible by 3 and 5")
}


//Number 15
let subject1 = 75;
let subject2 = 85;
let subject3 = 92;

let average = (subject1 + subject2 + subject3) / 3;
console.log("Average is " + average)

if(average >= 90){
    console.log("Excellent")
}
else if(average >= 75){
    console.log("Good")
}
else if(average >= 60){
    console.log("Average")
}
else{
    console.log("Need Improvement")
}
