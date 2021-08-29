import Phaser from 'phaser';
import config from './config';
import Game from './scenes/Game';

new Phaser.Game({...config, scene: [Game]});
