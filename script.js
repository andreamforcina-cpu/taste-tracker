
let favoriteTeam = "Sky";
const sport = "Basketball";

console.log("Favorite Team:", favoriteTeam);
console.log("Sport:", sport);


let player = {
    name: "Kahleah Copper",
    position: "Guard",
    pointsPerGame: 18.7
};

player.gamesPlayed = 25;
console.log("Player Object:", player);


let favFoods = ["Pizza", "Sushi", "Burger", "Pasta"];
console.log("Favorite Foods:", favFoods);


favFoods.push("Ice Cream");


favFoods[1] = "Ramen";

favFoods.pop();

console.log("Updated Foods:", favFoods);
console.log("Number of Foods:", favFoods.length);


function rateSong(songName, rating) {
    if (rating >= 4) {
        console.log(songName + " is awesome!");
    } else if (rating >= 2) {
        console.log(songName + " is okay.");
    } else {
        console.log(songName + " not my favorite.");
    }
}

rateSong("Blinding Lights", 5);
rateSong("Song X", 2);


let mySongs = ["Song A", "Song B", "Song C"];

for (let i = 0; i < mySongs.length; i++) {
    console.log(mySongs[i] + " is a jam!");
}
