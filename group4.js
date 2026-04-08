import { add } from "./math.js";

const player = {
	username: "PixelHero",
	level: 5,
	inventory: ["sword", "shield", "health potion"],
	stats: {
		health: 100,
		mana: 50,
	},
};

player.level = 6;
player.inventory.push("magic map");

console.log(player.username);
console.log(player.inventory[1]);
console.log(player.inventory[3]);
console.log(player.stats.health);
console.log(player.level);
console.log(player.stats.stamina);

const enemy = {};
console.log(enemy.level);

const marketingTeam = ["Alice", "Bob"];
const salesTeam = ["Charlie", "Diana"];
const allAttendees = [...marketingTeam, ...salesTeam, "Eve"];
console.log(allAttendees);

function assignMedals(gold, silver, ...everyoneElse) {
	console.log("Gold goes to: " + gold);
	console.log("Silver goes to: " + silver);
	console.log("Thanks for participating: " + everyoneElse);
}

assignMedals("Alice", "Bob", "Charlie", "Diana", "Eve");
add(10, 20);

// https://www.geeksforgeeks.org/javascript/difference-between-default-named-exports-in-javascript/
