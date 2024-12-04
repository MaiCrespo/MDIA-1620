console.log(`
    ____________
   /            \
  /              \
 /_______Mai______\
|  _  __  __  _  |
| | ||  ||  || | |
| | ||  ||  || | |    
|___||__||__||__ 🐎🐎🐎🐎
`);

//------------------------- Seting up shop -------------------------//

let horses = [];
let welcomeMessage = "Welcome to the 'Mai's Stables'! Do you want to meet our horses?";
console.log(welcomeMessage)
let latePaymentFee = 50;
let availableStalls = 10; 

//------------------------- First day -------------------------//

function Horse(name, nickname, favoriteTreat, age, rent, location, personality, color) {
  this.name = name;
  this.nickname = nickname;
  this.favoriteTreat = favoriteTreat;
  this.age = age;
  this.monthlyRent = rent;
  this.location = location; 
  this.personality = personality;
  this.color = color;
   


  this.introduce = function() {
    console.log(`Hi! I'm ${this.name}, also known as ${this.nickname}. My coat color is ${this.color}. I'm ${this.age} years old, and my favorite treat is ${this.favoriteTreat}. I feel ${this.personality}`);
  };

  this.changeLocation = function() {
    if (this.location) {
      console.log(`${this.name} is inside the stable.`);
    } else {
      console.log(`${this.name} is outside in the field.`);
    }
  };
}

let wilberama = new Horse("Wilberama", "Willy", "fried chicken", 8, 250, true, "Playful", "Cream");
let lester = new Horse("Lester", "Lesty", "korean barbeque", 6, 230, false, "Loyal", "Black");
let benjicles = new Horse("Benjicles", "Ben", "ice cream", 7, 240, true, "Gentle", "Brown");


horses.push(wilberama, lester, benjicles);

let flash = {
  name: "Flash",
  nickname: "F",
  favoriteTreat: "Godiva Chocolate",
  age: 5,
  monthlyRent: 220,
  location: false,
  personality: "high energy",
  color: "dark blue",
  isHungry: true,
  introduce: function() {
    console.log(`Hi! I'm ${this.name}, also known as ${this.nickname}. My coat color is ${this.color}. I'm ${this.age} years old, and my favorite treat is ${this.favoriteTreat}. I feel ${this.personality}`);
  },
  changeLocation: function() {
    if (this.location) {
      console.log(`${this.name} is inside the stable.`);
    } else {
      console.log(`${this.name} is outside in the field.`);
    }
  }
};

horses.push(flash);

Horse.isHungry = false;
horses.forEach((horse) => { 
  horse.introduce(); 
  horse.changeLocation();
  console.log(`Is ${horse.name} hungry? ${horse.isHungry ? 'Yes' : 'No'}`);
});

//------------------------- Stable roster -------------------------//
/* 
// Horses data structure (example representation):
horses = [
  {
    name: "Wilberama", 
    nickname: "Willy",
    favoriteTreat: "fried chicken",
    age: 8,
    monthlyRent: 250,
    location: true,
    personality: "Playful",
    color: "Cream",
    isHungry: false,
    introduce: Hi! I'm Wilberama, also known as Willy. My coat color is Cream. I'm 8 years old, and my favorite treat is fried chicken. I feel Playful,
    changeLocation: Wilberama is inside the stable.
  },
  {
    name: "Lester",
    nickname: "Lesty",
    favoriteTreat: "korean barbeque",
    age: 6,
    monthlyRent: 230,
    location: false,
    personality: "Loyal",
    color: "Black",
    isHungry: false,
    introduce: Hi! I'm Lester, also known as Lesty. My coat color is Black. I'm 6 years old, and my favorite treat is korean barbeque. I feel Loyal,
    changeLocation: Lester is outside in the field.
  },
  {
    name: "Benjicles",
    nickname: "Ben",
    favoriteTreat: "ice cream",
    age: 7,
    monthlyRent: 240,
    location: true,
    personality: "Gentle",
    color: "Brown",
    isHungry: true,
    introduce: Hi! I'm Benjicles, also known as Ben. My coat color is Brown. I'm 7 years old, and my favorite treat is ice cream. I feel Gentle,
    changeLocation: Benjicles is inside the stable.
  },
  {
    name: "Flash",
    nickname: "F",
    favoriteTreat: "Godiva Chocolate",
    age: 5,
    monthlyRent: 220,
    location: false,
    personality: "high energy",
    color: "dark blue",
    isHungry: true,
    introduce: Hi! I'm Flash, also known as F. My coat color is dark blue. I'm 5 years old, and my favorite treat is Godiva Chocolate. I feel high energy,
    changeLocation: Flash is outside in the field.
  }
];
*/

//---------------------- Growing business ----------------------//

availableStalls -= horses.length;
console.log(`Stalls available: ${availableStalls}`);


if (availableStalls < 4) {
  console.log("We need to build more stalls.");
} else {
  console.log(`We have ${availableStalls} available stalls!`);
}

function lateFee(horse) {
  let totalFee = horse.monthlyRent + latePaymentFee;
  console.log(`When riding ${horse.name}, customers will owe $${totalFee} if the rent is paid late.`);
}

lateFee(wilberama);

function checkTreat(treat) {
  for (let i = 0; i < horses.length; i++) {
    if (horses[i].favoriteTreat === treat) {
      console.log(`${horses[i].name} likes the treat!`);
      return; 
    } else {
      console.log(`${horses[i].name} doesn't like that treat.`);
    }
  }
}

checkTreat("korean barbeque");

function getNickname(horse) {
  return horse.nickname;
}

let nickname = getNickname(lester);
console.log(`Lester's nickname is ${nickname}.`);

//------------------------- Day to day operations -------------------------//


function checkHorseProperty(horse) {
  if (horse.personality === "Playful") {
    console.log(`${horse.name} is feeling playful today!`);
  }
}


checkHorseProperty(wilberama);


function moveHorsesOutside() {
  horses.forEach(horse => {
    horse.location = false; 
    console.log(`${horse.name} has been moved outside to enjoy the sun.`);
  });
}

moveHorsesOutside();

function moveInside (horse) { 
  if (horse.location === false) {
    console.log(`${horse.name} has been called inside.`);
  } else {
    console.log(`${horse.name} is already inside.`);
  }
}

moveInside(wilberama);
moveInside(lester);
moveInside(benjicles);
moveInside(flash)

function feedHorses() {
  horses.forEach(horse => {
    if (horse.location === false) {
      moveInside(horse); /*I have been stuck in this function for 2 days :(*/
    }
    console.log(`${horse.name} is being fed a delicious treat!`);
  });
}

feedHorses();

function moveHorsesForBedtime() {
  horses.forEach(horse => {
    if (horse.location === false) {
      moveInside(horse); 
      console.log(`${horse.name} is brought inside for the night.`);
    }
  });
}

moveHorsesForBedtime();

