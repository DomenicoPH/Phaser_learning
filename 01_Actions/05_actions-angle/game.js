class Example extends Phaser.Scene
{
    constructor ()
    {
        super();

        this.fireballs = [];
    }

    preload ()  // Precargado de los elementos a utilizar.
    {
        this.load.image('fireball', 'assets/fireball.png');
    }

    create ()   // Creación de los elementos en pantalla.
    {
        for (let i = 0; i < 32; i++)    // Genera 32 objetos --> hace lo siguiente 32 veces:
        {
            const x = Phaser.Math.Between(0, 800);  // Establece el valor de x (horizontal): Un número aleatorio entre 0 y 800
            const y = Phaser.Math.Between(0, 600);  // Establece el valor de y (vertical): Un número aleatorio entre 0 y 600

            this.fireballs.push(this.add.image(x, y, 'fireball').setScale(0.25));
            // Posiciona en el screen la imagen utilizando los valores aleatorios de x e y. Vuelve a iterar.
        }
    }

    update ()   // Actualizaciones (animaciones)
    {
        Phaser.Actions.Angle(this.fireballs, 1);
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