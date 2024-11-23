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
        //  Create 300 sprites (they all start life at 0x0)
        const group = this.add.group({ key: 'orb', frameQuantity: 300 });   // crea 300 copias de 'orb'

        this.ellipse = new Phaser.Geom.Ellipse(400, 300, 100, 200);     // crea una figura elíptica en las coordenadas x:400 y:300, con un ancho de 100px y una altura de 200px

        //  Randomly position the sprites within the ellipse
        Phaser.Actions.RandomEllipse(group.getChildren(), this.ellipse);    // distribuye aleatoriamente los hijos del grupo 'group' en el interior de la elipse 'this.ellipse'
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