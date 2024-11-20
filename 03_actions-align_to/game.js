class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.image('head', 'assets/pokey_head.png');
        this.load.image('block', 'assets/pokey_block.png');
    }

    create ()
    {
        const blocks = [];

        //  This is our 'lead' Sprite, the first one in the array

        blocks.push(this.add.sprite(200, 300, 'head').setScale(2.3,2).setSize(35,30));

        for (let i = 0; i < 8; i++)
        {
            //  All of the block blocks will be aligned to the right of the head
            blocks.push(this.add.sprite(0, 0, 'block').setScale(2.3,2).setSize(35,30));
        }

        Phaser.Actions.AlignTo(blocks, Phaser.Display.Align.RIGHT_CENTER);
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