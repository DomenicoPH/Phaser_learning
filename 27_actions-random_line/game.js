class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.image('orb', 'assets/orb-blue.png');
    }

    create ()
    {
        const group = this.add.group({ key: 'orb', frameQuantity: 300 });   // group: grupo de 300 'orbs'

        const line = new Phaser.Geom.Line(200, 200, 500, 400);
        // line: parámetros de linea (200: punto inicial en x / 200: punto inicial en y / 500: punto final en x / 400: punto final en y)

        //  Randomly position the sprites on the line
        Phaser.Actions.RandomLine(group.getChildren(), line);   // Posiciona aleatoriamente los 'orbs' a lo largo de la linea.
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