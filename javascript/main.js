var config = {
    type: Phaser.AUTO,
    width: 1350,
    height: 650,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);
var stars;

function preload (){
    this.load.image('sky', 'images/xpos.png');
    this.load.image('star', 'images/star.png')
}

function create (){
    this.add.image(675, 325, 'sky');
    stars = this.physics.add.staticGroup();

    stars.create(Math.floor(Math.random() * 1350 + 1), Math.floor(Math.random() * 650 + 1), 'star').setScale(2).refreshBody();

}

function update (){

}