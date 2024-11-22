class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.image('bg', 'assets/neoncircle.png');
        this.load.image('particle', 'assets/particle1.png');
    }

    create ()
    {
        this.add.image(400, 300, 'bg'); // imagen de fondo en el centro.

        //  Create our sprites to place within the circle
        const particles = [];   // array vacio para almacenar partículas.

        for (let i = 0; i < 512; i++)   // ciclo for para introducir 512 patículas en el array.
        {
            particles.push(this.add.image(0, 0, 'particle'));
        }

        //  The Circle geometry object
        const circle = new Phaser.Geom.Circle(400, 300, 210);   // crea un círculo en x:400 y:300 radio:210px

        //  Randomly position the sprites within the circle
        Phaser.Actions.RandomCircle(particles, circle);         // posiciona cada una de las 512 partículas en posiciones aleatorias detro del círculo
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