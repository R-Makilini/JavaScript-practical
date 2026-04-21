//comments can make code readable
//Welcome to learn javascript
/*comments can make code readable, easy to reuse and informative*/

//Q4
let name="Shara";
let x=true;
let y;
let z;null

//Q5
console.log(typeof name); //string
console.log(typeof x); //boolean
console.log(typeof y); //undefined
console.log(typeof z); //object

//Q6
let a;
let b;
let c;
let d;
console.log(a);

//Q7
let s=10;
let colour="Blue";
let length=16
let t=50

//Q8
let firstname="John";
let lastname="Doe";
let maritalstatus="single";
let country="Londaon";
let age=25

//Q9
let Firstname="Makilini", Lastname="Ravichchandran", Maritalstatus="single", Country="Srilanka" , Age=20;

//Q10
let myage=20;
let yourage=22;
console.log("I am" +myage +"years old.");
console.log("You are" + yourage + "years old.");

//Exercises 2
//Q1
let challenge="learn javascript";
console.log(challenge);
console.log(challenge.length);
console.log(challenge.toUpperCase());
console.log(challenge.toLowerCase());
console.log(challenge.substring(0,5));
let phrase="Days of Javascript";

console.log(challenge.includes("script"));
console.log(challenge.split(""));

//Q11
let companies="Facebook ,Google,Microsoft,Apple,IBM,Oracle,Amazon";
console.log(companies.split(","));

//Q12
console.log(challenge.replace("Javascript","Python"));
//Q13
console.log(challenge.charAt(15));
//Q14
console.log(challenge.charCodeAt(challenge.indexOf("J")));
console.log(challenge.indexOf("a"));
console.log(challenge.lastIndexof("a"));
//Q17
let sentence="You cannot end a sentence with because because because is a conjunction";
console.log(sentence.indexOf("because"));
//Q18
console.log(sentence.lastIndexof("because"));
console.log(sentence.search("because"));
//Q20
let messy="learn Javascript";
console.log(messy.trim());
//Q21
console.log(challenge.startsWith("learn"));
console.log(challenge.endsWith("Javascript"));
console.log(challenge.match(/a/g));
//Q24
let word1="30 Days of";
let word2="Javascript";
console.log(word1.concat(word2));
//Q25
console.log(challenge.repeat(2));

//Exercise3
console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.");
console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.");
//Q3
let u="10";
if (u ==10){
    u=Number(value)
}
console.log(value===10);
//Q4
let num=parseFloat("9.8");
if (num ==10){
    num=10;
}
console.log(num);

//Q5
let letter1="python";
let letter2="jargon";
console.log(letter1.includes("on")&&letter2.includes("on"));

//Q6
let p="I hope this course is not full of jargon";
console.log(p.includes("jargon"));

//Q7
let random1=Math.floor(Math.random()*100);
console.log(random1);
//Q8
let random2=Math.floor(Math.random()*51)+50;
console.log(random2);
//Q9
let random3=Math.floor(Math.random()*254);
console.log(random3);
//Q10
let v="javascript";
let randomindex=Math.floor(Math.random()* structuredClone.length);
console.log(str[randomindex]);

//Q11
console.log("11111");
console.log("21248");
console.log("313927");
console.log("4141664");
console.log("51525125");

//Q12
let sentence2="You cannot end a sentence with because because because is a conjunction'";
let result=sentence2.substr(31,23);
console.log(result);

//Exercises 4
let sentence3="Love is the best thing in this world. Some found their love and some are still looking for their love.";
let count=sentence3.toLowerCase().match(/love/g).length;
console.log(count)

let text="You cannot end a sentence with because because because is a conjunction";
let countBecause=text.match(/because/g).length;
console.log(countBecause);



let income="He earns 50000 Rs from salary per month, 10000 Rs annual bonus, 15000 Rs online courses per month.'";
let Number=income.match(/\d+/g).map(Number);
let salary=numbers[0]*12;
let bonus=numbers[1];
let online=numbers[2]*12;
let totalIncome=salary+bonus+online;
console.log(totalIncome);


