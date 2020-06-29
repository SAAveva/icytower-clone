// base config
const BASE_URL = 'http://localhost:8080/src/';

//
const HERO_SLIDING = -1;
const HERO_IDLE = -2;
const HERO_DEAD = -3;

const preload = function() {
	this.load.setBaseURL(BASE_URL);

	this.load.image('hero', 'assets/hero/_PNG/3_ORK/IDLE/IDLE_000.png');
}

const create = function() {
	//this.add.image(100, 100, 'hero');

	/*
	var particles = this.add.particles('red');

	var emitter = particles.createEmitter({
		speed: 200,
		scale: { start: 1, end: 0 },
		blendMode: 'ADD'
	});
	*/
	let logo = this.physics.add.image(50, 50, 'hero');

	logo.setScale(0.3);
	logo.setVelocity(10, 10);
	logo.setBounce(1,1);
	logo.setCollideWorldBounds(true);
	
	//emitter.startFollow(logo);

};

let config = {
    type: Phaser.AUTO,
	width: 800,
	height: 600,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 200 }
		}
	},
	scene: {
		preload: preload,
		create: create
	}
};


var game = new Phaser.Game(config);
