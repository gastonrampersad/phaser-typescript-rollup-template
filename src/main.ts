import 'phaser';
 
class Game extends Phaser.Scene {
    constructor() {
        super("Game");
    }
    preload() {
    }
    create() {
    }
    update() {
    }
}
 
let config = {
    width: 800,
    height: 600,
    parent: 'game',
    scene: Game
};
 
new Phaser.Game(config);
