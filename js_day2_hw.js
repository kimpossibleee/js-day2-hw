/*
Q1:
Use the array of shop items provided and present the the information in the following format

```
=======================================
Name: 	 Air Max 97
Price: 	 130
About: 	 The design of the shoe is commonly thought to be inspired by the bullet trains of Japan, but the design was inspired by mountain bikes.
Category: shoes
=======================================
Name: 	 Adidas NMD R1
Price: 	 128
About: 	 New-wave classics, with a timeless vintage design: men’s NMD R1 gear is the ultimate go-anywhere shoe. Vibrant styles and soft cushioning will have you gliding through life, wherever it may take you.
Category: shoes
=======================================
Name: 	 Gucci Oversize T-shirt with Interlocking G
Price: 	 580
About: 	 The now recognizable oversize Gucci T-shirt continues to evolve with each new collection, the Interlocking G print is influenced by an '80s design from the archives. Streetwear continues to be a defining feature of Gucci's collections and is often juxtaposed by tailored separates.
Category: shirts
=======================================
Name: 	 Nike Sportswear Club
Price: 	 18.97
About: 	 The Nike Sportswear Club T-Shirt is made with our everyday cotton fabric and a classic fit for a familiar feel right out of the bag. An embroidered Futura logo on the chest provides a signature Nike look.
Category: shirts
=======================================
Name: 	 Spanx Flare Jeans, Vintage Indigo
Price: 	 148
About: 	 These 70s inspired flare jeans are the perfect wear everywhere with anything style. Designed with premium stretch denim, high-rise coverage and hidden core shaping technology, this jean puts a new twist on a retro silhouette.
Category: pants
=======================================
Name: 	 Bonobos Premium Stretch Jeans
Price: 	 69
About: 	 Resilient stretch denim made incredibly soft. Yes, jeans can be unbelievably comfortable.
Category: pants
```
*/
const shopItems=[{
    id:1,
    name:"Air Max 97",
    price:130.00,
    desc:"The design of the shoe is commonly thought to be inspired by the bullet trains of Japan, but the design was inspired by mountain bikes. ",
    category:"shoes"
},{
    id:2,
    name:"Adidas NMD R1",
    price:128,
    desc:"New-wave classics, with a timeless vintage design: men’s NMD R1 gear is the ultimate go-anywhere shoe. Vibrant styles and soft cushioning will have you gliding through life, wherever it may take you.",
    category:"shoes"
},{
    id:3,
    name:"Gucci Oversize T-shirt with Interlocking G",
    price:580,
    desc:"The now recognizable oversize Gucci T-shirt continues to evolve with each new collection, the Interlocking G print is influenced by an '80s design from the archives. Streetwear continues to be a defining feature of Gucci's collections and is often juxtaposed by tailored separates.",
    category:"shirts"
},{
    id:4,
    name:"Nike Sportswear Club",
    price:18.97,
    desc:"The Nike Sportswear Club T-Shirt is made with our everyday cotton fabric and a classic fit for a familiar feel right out of the bag. An embroidered Futura logo on the chest provides a signature Nike look.",
    category:"shirts"
},{
    id:5,
    name:"Spanx Flare Jeans, Vintage Indigo",
    price:148,
    desc:"These 70s inspired flare jeans are the perfect wear everywhere with anything style. Designed with premium stretch denim, high-rise coverage and hidden core shaping technology, this jean puts a new twist on a retro silhouette.",
    category:"pants"
},{
    id:6,
    name:"Bonobos Premium Stretch Jeans",
    price:69,
    desc:"Resilient stretch denim made incredibly soft. Yes, jeans can be unbelievably comfortable.",
    category:"pants"
}]

const printShopItems = function(arrayOfItems) {for (let item of arrayOfItems){
    console.log('=======================================')
    console.log(`Name:      ${item.name}`)
    console.log(`Price:     ${item.price}`)
    console.log(`About:     ${item.desc}`)
    console.log(`Category:  ${item.category}`)
}};
console.log(printShopItems(shopItems));

/*
Question 2:
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
```
pizza contains:
Deep Dish
South Side Thin Crust
tacos contains:
Anything not from Taco bell
burgers contains:
Portillos Burgers
ice_cream contains:
Chocolate
Vanilla
Oreo
shakes contains:
oberwise contains:
Chocolate
dunkin contains:
Vanilla
culvers contains:
All of them
mcDonalds contains:
Sham-rock-shake
cupids_candies contains:
Chocolate Malt
```
Note:  The solution should work on any object with values of strings, numbers, objects, and arrays not just this specific object
*/

const hwPerson = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

console.log(Object.entries(hwPerson));

const iterateThroughList = function(anyList) {
    for (let key in anyList){
        console.log(`${key} contains:`)
        if (Array.isArray(anyList[key])){
            for (let example of anyList[key]){
                if (typeof example === "object"){
                    iterateThroughList(example)
                }
                else {
                    console.log(`       ${example}`)
                }
            }
        }
        else if (typeof anyList[key] === "object"){
            iterateThroughList(anyList[key])
        }
        else{
            console.log(`       ${anyList[key]}`)
        }
    }
}
iterateThroughList(hwPerson);
/*
Question 3:

Create a Promised based function that will check a string to determine if it's length is greater than 10.

If the length is greater than 10 then resolve it and console log "Big word".

If the length of the string is less than 10 then reject it and  console log "Small String"
*/

function checkStringLength(str) {
    return new Promise((resolve, reject) => {
      if (str.length > 10) {
        resolve("Big word");
      } else {
        reject("Small String");
      }
    });
  }

/*
Question 4:
Create a base class of GameMember and 2 children classes of Dealer, Player

both dealer and player have:

hand : array of 2 numbers (1-13) ex: [5, 12] which starts with 2 random numbers

hit() : ability to add  a random number [1-13] to their hand

When a Dealer trys to hit he can only hit if he has his hand adds up to less than a total of 17 (so 16 and under)

When a Player hits they can hit as long as their total is under 21

Use the randomNumber function provided below to gernerate a random number 1-12
 */

// Function to generate a random number between min and max (inclusive)
// Function to generate a random number between min and max (inclusive)
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  class GameMember {
    constructor() {
      this.hand = [randomNumber(1, 13), randomNumber(1, 13)];
    }

    hit() {
      throw new Error("hit() method must be implemented in the child class.");
    }
  }

  class Dealer extends GameMember {
    hit() {
      const handSum = this.hand.reduce((sum, card) => sum + card, 0);
      if (handSum <= 16) {
        const newCard = randomNumber(1, 13);
        this.hand.push(newCard);
        console.log("Dealer hits and receives card:", newCard);
      } else {
        console.log("Dealer cannot hit as hand sum is 17 or above.");
      }
    }
  }

  class Player extends GameMember {
    hit() {
      const handSum = this.hand.reduce((sum, card) => sum + card, 0);
      if (handSum < 21) {
        const newCard = randomNumber(1, 13);
        this.hand.push(newCard);
        console.log("Player hits and receives card:", newCard);
      } else {
        console.log("Player cannot hit as hand sum is 21 or above.");
      }
    }
  }

/*
Question 5:

Complete 3 Codewars problems using JavaScript, start with ones you have already solved in python.  Paste a link here to the 3 questions you completed

1: https://www.codewars.com/kata/550f22f4d758534c1100025a

const opposite = {
  'NORTH': 'SOUTH',
  'EAST': 'WEST',
  'SOUTH': 'NORTH',
  'WEST': 'EAST'
};

function dirReduc(plan) {
  const new_plan = [];
  for (const d of plan) {
    if (new_plan.length > 0 && new_plan[new_plan.length - 1] === opposite[d]) {
      new_plan.pop();
    } else {
      new_plan.push(d);
    }
  }
  return new_plan;
}

2: https://www.codewars.com/kata/514b92a657cdc65150000006

function solution(number) {
  let sum = 0;
  for (let x = 0; x < number; x++) {
    if (x % 3 === 0 || x % 5 === 0) {
      sum += x;
    }
  }
  return sum;
}

3: https://www.codewars.com/kata/52685f7382004e774f0001f7
*/

// function makeReadable(s) {
//   const hours = Math.floor(s / 3600);
//   const minutes = Math.floor((s % 3600) / 60);
//   const seconds = s % 60;

//   return `${twoDigitFormat(hours)}:${twoDigitFormat(minutes)}:${twoDigitFormat(seconds)}`;
// }
