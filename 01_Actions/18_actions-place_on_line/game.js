class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.image('ball', 'assets/shinyball.png');
    }

    create ()
    {
        const line = new Phaser.Geom.Line(100, 200, 600, 400);
            /* Crea una nueva linea:
                Punto inicial en 'x': 100
                Punto inicial en 'y': 200
                Punto final en 'x': 600
                Punto final en 'y': 400
            */
        const group = this.add.group({ key: 'ball', frameQuantity: 32 });
            // Crea un grupo con 32 bolas

        Phaser.Actions.PlaceOnLine(group.getChildren(), line);
            // Distribuye las 32 bolas del grupo a lo largo de la linea.
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