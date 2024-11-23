class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.spritesheet('diamonds', 'assets/diamonds32x24x5.png', { frameWidth: 32, frameHeight: 24 });
    }

    create ()
    {
        this.group = this.add.group();  // crea un grupo vacio

        for (var i = 0; i < 256; i++)   // introduce en el grupo 256 diamantes
        {
            this.group.create(Phaser.Math.Between(200, 600), Phaser.Math.Between(100, 500), 'diamonds', Phaser.Math.Between(0, 4));
            // cada diamante se posiciona en
            // x: valor aleatorio entre 200 y 600 (siendo el ancho total de 800, deja 200px de margen a los lados)
            // y: valor aleatorio entre 100 y 500 (siendo el alto total de 600, deja 100px de margen arriba y abajo)
            // key: 'diamonds' (objeto precargado)
            // frame: aleatorio entre 0 y 4 (valores correspondientes a los 5 diamantes [0,1,2,3,4])
        }
    }

    update ()
    {
        Phaser.Actions.RotateAround(this.group.getChildren(), { x: 400, y: 300 }, 0.01);
        // Rota todos los hijos del grupo 'this.group' alrededor de un punto fijo.
        // Punto fijo pos. en x: 400
        // Punto fijo pos. en y: 300
        // Velocidad de rotación: 0.01 radianes / 0.57 grados x frame
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