// LESSON-3 Code
let horseName = "Benjicles";
console.log(horseName);
horseName = "Wilberama";
console.log(horseName);
let horseAge = 14;
console.log(horseAge);
let isHorseInside = true;
console.log(isHorseInside);

//LESSON-4 Code
console.log(typeof horseName)
console.log(typeof horseAge)
const STABLE_MONTHLY_FEE = 100; //uppercase when using const
console.log(STABLE_MONTHLY_FEE);
console.log(STABLE_MONTHLY_FEE / 2);
console.log(STABLE_MONTHLY_FEE * 4);
console.log("hello " + 8);
console.log("The stable monthly fee is " + STABLE_MONTHLY_FEE);
console.log(`My horse's name is "${horseName}" and costs $${STABLE_MONTHLY_FEE} to board him`);


//Lab4 partner
let horseNickname = "Willy";
let monthlyDiscount = 70;
console.log(`Hello, meet my darling baby "${horseName}" and his nickname is "${horseNickname}"`);
console.log(STABLE_MONTHLY_FEE * 3)*.1;
console.log(monthlyDiscount * 3)*.1;
console.log("Save around 10% if you have a 3 month stay in the stables.");

//LESSON-5 Code/ Lab 5
if(isHorseInside) {
    console.log(`${horseName} is inside`);
}
else { 
    console.log(`${horseName} is outside`); }

//LESSON-6 Code
let word = "Wilberama";
console.log(word.charAt(4));

let horseNames = ["Timothy", horseName, "Lester"];
let horseAges = [4, horseAge, 10, 5];
let horseLocations = [false, isHorseInside, true, false];
let crazyArray = ["hello", [1, 2, 4]];

console.log(`Welcome to my stables. There are ${horseNames.length} horses staying here! Their names are: ${horseNames[0]}, ${horseNames[1]}, ${horseNames[2]}`);

console.log(horseNames.length);

console.log(horseNames[1]);
console.log(horseAges[1]);
console.log(horseLocations[1]);

if(horseNames[0] === "Timothy") {
    console.log("Hi Timothy")
}

if(horseNames.length < 5) {
    console.log("These stables are unpopular")
}

//Lab 6
console.log(`Welcome to my stables. There are ${horseNames.length} horses staying here! Their names are: ${horseNames[0]}, ${horseNames[1]}, ${horseNames[2]}`);
if(horseLocations[0]) {
    console.log(horseNames[0] + " is inside");
} else {
    console.log(horseNames[0] + " is outside");
}
if(horseLocations[1]) {
    console.log(horseNames[1] + " is inside");
} else {
    console.log(horseNames[1] + " is outside");
}
if(horseLocations[2]) {
    console.log(horseNames[2] + " is inside");
} else {
    console.log(horseNames[2] + " is outside");
}