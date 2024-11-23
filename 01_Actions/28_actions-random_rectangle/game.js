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
        const group = this.add.group({ key: 'orb', frameQuantity: 300 });   // crea un grupo de 300 orbs

        const rect = new Phaser.Geom.Rectangle(300, 300, 300, 100); // crea un rectangulo con su origen (esquina sup. izq.) en x:300 y:300 / ancho: 300px alto: 100px

        //  Randomly position the sprites within the rectangle
        Phaser.Actions.RandomRectangle(group.getChildren(), rect);  // distribuye aleatoriamente los elementos del grupo en el area del rectángulo
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