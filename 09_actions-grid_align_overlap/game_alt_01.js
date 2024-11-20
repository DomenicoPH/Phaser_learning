class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.image('bg', 'assets/deepblue.png');
        this.load.atlas('cards', 'assets/cards.png', 'assets/cards.json');
    }

    create ()
    {
        this.add.image(400, 300, 'bg');

        const frames = this.textures.get('cards').getFrameNames();

        const cards = [];

        //  Create 8 cards and push them into an array

        for (var i = 0; i < 8; i++)
        {
            cards.push(this.add.sprite(0, 0, 'cards', Phaser.Math.RND.pick(frames)));
        }

        //  The cards are 140x190 in size

        Phaser.Actions.GridAlign(cards, {
            width: 4,               // 4 columnas
            height: 2,              // 2 filas
            cellWidth: 150,         // ancho de celda: 150px
            cellHeight: 200,        // alto de celda: 200px
            x: 105,                 // posicionamiento en x
            y: 80                   // posicionamiento en y
        });
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