class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.image('ball', 'assets/shinyball.png');    // precarga de imagen: key, url
    }

    create ()
    {
        const rect = new Phaser.Geom.Rectangle(100, 100, 256, 256); // nuevo rectángulo: pos. 'x', pos. 'y', ancho en px, alto en px

        const group = this.add.group({ key: 'ball', frameQuantity: 32 }); // crea un grupo de 32 unidades a partir del key 'ball'

        Phaser.Actions.PlaceOnRectangle(group.getChildren(), rect); // distribuye las 32 unidades de 'group' en 'rect'
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