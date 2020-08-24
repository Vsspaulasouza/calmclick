var config = {
    type: Phaser.AUTO,
    width: 1350,
    height: 650,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

function preload (){
    this.load.image('sky', 'images/xpos.png');
    this.load.image('star', 'images/star.png')
}

function create (){
    this.add.image(675, 325, 'sky');
    this.add.image(Math.floor(Math.random() * 1350 + 1), Math.floor(Math.random() * 650 + 1), 'star');

}

function update (){

}