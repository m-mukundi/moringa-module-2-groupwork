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
