console.log('Welcome to Space Battle');


// COMMENTS USED FOR REFERENCE 
//Not the final product




// class alienShip = {
//     name:"Alien Ship",
//     hull: 3-6,

// }
 

//-----------PLAYER
//we are going to need a player with properties
//the player must have
//hull
//firepower
//accuracy
//ACTIONS
//fire lazer
//

const player = {
	name: 'USS Schwartz',
	hull: 20,
	firepower: 5,
	accuracy: 0.7,
	attack() {
		if (Math.random() < player.accuracy) {
			game.currentAlien.hull -= this.firepower
			console.log(`${player.name} is being attacked ${game.printAlienStats()}`)
		} else {
			return 'missed shot!';
		}
	}
	isDead() {}
}

class Alien {
	constructor(name, hull, firepower, accuracy) {
		this.name = name;
		this.hull = hull;
		this.firepower = firepower;
		this.accuracy = accuracy;
	}
	fireLazer(firepower) {
		console.log('pew pew')
		return game.currentAlien.firepower -= player.hull
	}
	isDead() {
		if (currentAlien.hull <= 0) {
			deadAliens += 1
			return true;
		} else {
			return false;
		}
	}
}
