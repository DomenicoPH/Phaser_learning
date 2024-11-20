class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {

        // Precarga de sprites (front + back)
        this.load.image('image1', 'assets/nes_front.png');
        this.load.image('image2', 'assets/nes_back.png');

    }

    create ()
    {
        this.add.rectangle(0, 500, 800, 100, 0x9d2d9d).setOrigin(0, 0);

        const sprites = [];

        for (let i = 1; i < 3; i++)
        {
            // Renderiza los dos sprites (front + back) escala: 5 / bloque: w:100px h:100px
            sprites.push(this.add.sprite(150, 493, `image${i}`).setScale(5).setSize(100, 100));

            // Renderiza los dos sprites (front + back) escala: 4 / bloque: w:100px h:50px
            sprites.push(this.add.sprite(150, 493, `image${i}`).setScale(4).setSize(100, 50));
        }

        //  Align all of the sprites against the first one, using RIGHT_BOTTOM
        Phaser.Actions.AlignTo(sprites, Phaser.Display.Align.RIGHT_BOTTOM);
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    pixelArt: true,
    scene: Example
};

const game = new Phaser.Game(config);