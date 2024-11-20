class Example extends Phaser.Scene
{
    constructor ()
    {
        super();

        this.y = 0;
        this.blocks = [];
    }

    preload ()
    {
        this.load.image('head', 'assets/pokey_head.png');
        this.load.image('block', 'assets/pokey_block.png');
    }

    create ()
    {
        //  This is our 'lead' Sprite, the first one in the array
        this.blocks.push(this.add.sprite(200, 300, 'head').setScale(2.3,2).setSize(35,30));

        for (let i = 0; i < 8; i++)
        {
            //  All of the blue blocks will be aligned to the right of the red gem
            this.blocks.push(this.add.sprite(0, 0, 'block').setScale(2.3,2).setSize(35,30));
        }
    }

    update ()
    {
        Phaser.Actions.AlignTo(this.blocks, Phaser.Display.Align.RIGHT_CENTER, 0, Math.sin(this.y) * 8);

        this.y += 0.1;
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);