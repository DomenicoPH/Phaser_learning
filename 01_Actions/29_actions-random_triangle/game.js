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
        const group = this.add.group({ key: 'orb', frameQuantity: 300 });

        const triangle = new Phaser.Geom.Triangle.BuildEquilateral(400, 100, 380);  // triángulo equilátero / origin: vértice superior
        // var triangle = new Phaser.Geom.Triangle.BuildRight(200, 400, 300, 200);  // triángulo rectángulo / origin: vértice inferior izquierdo

        //  Randomly position the sprites within the triangle
        Phaser.Actions.RandomTriangle(group.getChildren(), triangle);   // Distribuye aleatoriamente los hijos del grupo 'group' en el area del triángulo 'triangle'
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