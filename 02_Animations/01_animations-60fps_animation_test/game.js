class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.atlas('walker', 'assets/walker.png', 'assets/walker.json');
        this.load.image('sky', 'assets/ms3-sky.png');
        this.load.image('trees', 'assets/ms3-trees.png');
    }

    create ()
    {
        this.bg = this.add.tileSprite(0, 38, 800, 296, 'sky').setOrigin(0, 0);
        this.trees = this.add.tileSprite(0, 280, 800, 320, 'trees').setOrigin(0, 0);

        const animConfig = {
            key: 'walk',
            frames: 'walker',
            frameRate: 60,
            repeat: -1
        };

        this.anims.create(animConfig);

        const sprite = this.add.sprite(400, 484, 'walker', 'frame_0000');

        sprite.play('walk');
    }

    update ()
    {
        this.bg.tilePositionX -= 2;
        this.trees.tilePositionX -= 6;
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    backgroundColor: '#304858',
    scene: Example
};

const game = new Phaser.Game(config);