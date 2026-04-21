var firstname="Makilini";
var lastname="Ravichchandran";
var country="Srilanka";
var city="Kilinochchi";
var age=20;
var isMarried="false";
var year=2026;
console.log(typeof firstname);
console.log(typeof lastname);
console.log(typeof country);
console.log(typeof city);
console.log(typeof age);
console.log(typeof isMarried);
console.log(typeof year);

//Q2
console.log("10"===10);
//Q3
console.log(parseInt(9.8)===10);
//Q4
console.log(Boolean("hi"));
console.log(Boolean(20));
console.log(10>5);

console.log(Boolean(""));
console.log(Boolean(0));
console.log(Boolean(NaN));
//Q5
console.log(4 > 3);
console.log(4 >= 3);
console.log(4 < 3);
console.log(4 <= 3);
console.log(4 == 4);
console.log(4 === 4);
console.log(4 != 4);
console.log(4 !== 4);
console.log(4 != '4');
console.log(4 == '4');
console.log(4 === '4');
let word="python";
let word1="jargon";
console.log(word.length);
console.log(word1.length);
console.log(word.length !== word1.length);

//Q6
console.log(4 > 3 && 10 < 12);
console.log(4 > 3 && 10 > 12);
console.log(4 > 3 || 10 < 12);
console.log(4 > 3 || 10 > 12);
console.log(!(4 > 3));
console.log(!(4 < 3));
console.log(!(false));
console.log(!(4 > 3 && 10 < 12));
console.log(!(4 > 3 && 10 > 12));
console.log(!(4 === '4'));

console.log(!("dragon".includes("on") && "python".includes("on")));
//Q7
let today = new Date();
console.log(today.getFullYear());
console.log(today.getMonth());
console.log(today.getDate());
console.log(today.getDay());
console.log(today.getHours());
console.log(today.getMinutes());
console.log(Date.now());

//exercise2
let base = prompt("Enter base:20 ");
let height = prompt("Enter height:10 ");
let area = 0.5 * base * height;
console.log("The area of the triangle is " + area);

let a = parseFloat(prompt("Enter side a: "));
let b = parseFloat(prompt("Enter side b: "));
let c = parseFloat(prompt("Enter side c: "));
let perimeter = a + b + c;
console.log("The perimeter of the triangle is " + perimeter);

let length = parseFloat(prompt("Enter length: "));
let width = parseFloat(prompt("Enter width: "));
let area = length * width;
let perimeter = 2 * (length + width);
console.log("Area of rectangle: " + area);
console.log("Perimeter of rectangle: " + perimeter);

let r = parseFloat(prompt("Enter radius: "));
let pi = 3.14;
let area = pi * r * r;
let circumference = 2 * pi * r;
console.log("Area of circle: " + area);
console.log("Circumference: " + circumference);

let x = 1;
let y = 2 * x - 2;
console.log("Slope (m) = 2");
console.log("x-intercept = 1");
console.log("y-intercept = -2");

let x1 = 2, y1 = 2;
let x2 = 6, y2 = 10;
let slope = (y2 - y1) / (x2 - x1);
console.log("Slope: " + slope);

let slope1 = 2;
let slope2 = 2;
if (slope1 === slope2) {
  console.log("Slopes are equal");
} else {
  console.log("Slopes are different");
}
for (let x = -10; x <= 10; x++) {
  let y = x * x + 6 * x + 9;
  console.log("x=" + x + " y=" + y);
}

let hours = parseFloat(prompt("Enter hours: "));
let rate = parseFloat(prompt("Enter rate per hour: "));
let pay = hours * rate;
console.log("Your weekly earning is " + pay);

let name = ("vimal");
if (name.length > 7) {
  console.log("Your name is long");
} else {
  console.log("Your name is short");
}
console.log(name);


let firstName = "kamal";
let lastName = "ranvir";
if (firstName.length > lastName.length) {
  console.log("Yourfirst Name,"+ firstName + "is longer than your family name,"+ lastName);
} else if (firstName.length < lastName.length) {
  console.log("Your family name,"+ lastName+ "is longer than your first name,"+ firstName);
} else {
  console.log("Your first name and family name have equal length");
}

let myAge = 75;
let yourAge = 25;
if (myAge > yourAge) {
  console.log("I am" + myAge - yourAge+ "years older than you.");
} else if (myAge < yourAge) {
  console.log("I am"+ yourAge - myAge+ "years younger than you.");
} else {
  console.log("We are the same age.");
}

let birthYear = prompt("Enter birth year:");
let currentYear = new Date().getFullYear();
let age = currentYear - birthYear;
if (age >= 18) {
  console.log("You are"+ age +". You are old enough to drive");
} else {
  let yearsLeft = 18 - age;
  console.log("You are"+ age+". You will be allowed to drive after ${yearsLeft} years.");
}


let years = 2026;
let secondsInYear = 365 * 24 * 60 * 60;
let totalSeconds = years * secondsInYear;
console.log(`You lived ${totalSeconds} seconds.`);

let now = new Date();
let year = now.getFullYear();
let month = String(now.getMonth() + 1).padStart(2, "0");
let day = String(now.getDate()).padStart(2, "0");
let hours = String(now.getHours()).padStart(2, "0");
let minutes = String(now.getMinutes()).padStart(2, "0");
let format1 = `${year}-${month}-${day} ${hours}:${minutes}`;
console.log(format1);
let format2 = `${day}-${month}-${year} ${hours}:${minutes}`;
console.log(format2);
let format3 = `${day}/${month}/${year} ${hours}:${minutes}`;
console.log(format3);

//Exercise3
let now = new Date();
let year = now.getFullYear();
let month = String(now.getMonth() + 1).padStart(2, "0");
let day = String(now.getDate()).padStart(2, "0");
let hours = String(now.getHours()).padStart(2, "0");
let minutes = String(now.getMinutes()).padStart(2, "0");
let formattedTime = `${year}-${month}-${day} ${hours}:${minutes}`;
console.log(formattedTime);

//Exercise4
let age = prompt("Enter your age:");
if (age >= 18) {
  console.log("You are old enough to drive.");
} else {
  let yearsLeft = 18 - age;
  console.log(`You are left with ${yearsLeft} years to drive.`);
}


let myAge = 25;
let yourAge = "Enter your age:";
if (yourAge > myAge) {
  console.log("You are"+ yourAge - myAge + "years older than me.");
} else if (yourAge < myAge) {
  console.log("I am" +myAge - yourAge+ "years older than you.");
} else {
  console.log("We are the same age.");
}

let a = 4;
let b = 3;
if (a > b) {
console.log(a + " is greater than " + b);
} else {
  console.log(a+ "is less than"+ b);
}


let num = "Enter a number:";
if (num % 2 === 0) {
  console.log(num + " is an even number");
} else {
  console.log(num + " is an odd number");
}

let score=85
if (score>=80){
    console.log("Grade A")
}
else if(score>=70){
    console.log("Grade B");
}
else if(score>=60){
    console.log("Grade C");
}
else if(score>=50){
    console.log("Grade D");
}
else if(score>=0){
    console.log("Grade F");
}
console.log(score);



let month = prompt("Enter a month:").toLowerCase();

let autumn = ["september", "october", "november"];
let winter = ["december", "january", "february"];
let spring = ["march", "april", "may"];
let summer = ["june", "july", "august"];
if (autumn.includes(month)) {
  console.log("The season is Autumn");
} else if (winter.includes(month)) {
  console.log("The season is Winter");
} else if (spring.includes(month)) {
  console.log("The season is Spring");
} else if (summer.includes(month)) {
  console.log("The season is Summer");
} else {
  console.log("Invalid month");
}


let day = prompt("What is the day today?");
let lower = day.toLowerCase();
let formatted = lower.charAt(0).toUpperCase() + lower.slice(1);
if (lower === "saturday" || lower === "sunday") {
  console.log(formatted+ "is a weekend.");
} else if (
  ["monday", "tuesday", "wednesday", "thursday", "friday"].includes(lower)
) {
  console.log(formatted+ "is a working day.");
} else {
  console.log("Invalid day");
}


let month = prompt("Enter a month:");
let lowerMonth = month.toLowerCase();
let formattedMonth = lowerMonth.charAt(0).toUpperCase() + lowerMonth.slice(1);
if (
  ["january", "march", "may", "july", "august", "october", "december"]
    .includes(lowerMonth)
) {
  console.log(formattedMonth,+" has 31 days.");
} else if (
  ["april", "june", "september", "november"].includes(lowerMonth)
) {
  console.log(formattedMonth,+ "has 30 days.");
} else if (lowerMonth === "february") {
  console.log(formattedMonth+"has 28 days.");
} else {
  console.log("Invalid month");
}