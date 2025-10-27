
let myFavoriteFoods = ["Pizza", "Sushi", "Pasta", "Tacos", "Ice Cream"];
console.log("My Favorite Foods:", myFavoriteFoods);


let popularFoods = ["Burgers", "Fries", "Pizza", "Hot Dogs", "Salad", "Ice Cream", "Fried Chicken", "Sushi", "Tacos", "Steak"];
console.log("Popular Foods:", popularFoods);


console.log("Looping through my favorite foods:");
for (let i = 0; i < myFavoriteFoods.length; i++) {
    console.log(myFavoriteFoods[i]);
}


function findSharedFoods(myFoods, popFoods) {
    let shared = [];
    for (let i = 0; i < myFoods.length; i++) {
        if (popFoods.includes(myFoods[i])) {
            shared.push(myFoods[i]);
        }
    }
    return shared;
}

let sharedFoods = findSharedFoods(myFavoriteFoods, popularFoods);
console.log("Shared favorite & popular foods:", sharedFoods);


if (sharedFoods.length > 0) {
    console.log("We have similar tastes!");
} else {
    console.log("Our tastes are totally unique!");
}


if (myFavoriteFoods.length > popularFoods.length) {
    console.log("I have more favorite foods than the popular list!");
} else if (myFavoriteFoods.length === popularFoods.length) {
    console.log("Our food lists are the same length!");
} else {
    console.log("The popular food list is longer than mine.");
}

myFavoriteFoods.push("Ramen");
console.log("Added a new favorite food:", myFavoriteFoods);


myFavoriteFoods.pop();
console.log("After removing last food:", myFavoriteFoods);

function rateFood(food, rating) {
    if (rating >= 4) {
        console.log(food + " is amazing!");
    } else if (rating >= 2) {
        console.log(food + " is decent.");
    } else {
        console.log(food + " is not for me.");
    }
}


rateFood("Pizza", 5);
rateFood("Salad", 2);
rateFood("Hot Dogs", 1);
