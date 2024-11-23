class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.image('bg', 'assets/bg.png');
        this.load.spritesheet('diamonds', 'assets/diamonds32x24x5.png', { frameWidth: 32, frameHeight: 24 });
    }

    create ()
    {
        this.add.image(400, 300, 'bg'); //background

        const group = this.add.group({      // Crea el grupo 'diamonds'
            key: 'diamonds',
            frame: [ 0, 1, 2, 3, 4 ],       // Frames o cortes en la hoja de sprites: en este caso un array que contiene los 5 diamantes.
            frameQuantity: 40               // Cantidad de repeticiones por unidad
        });

        Phaser.Actions.GridAlign(group.getChildren(), {
            width: 20,              // 20 columnas
            height: 10,             // 10 filas
            cellWidth: 32,          // ancho de celda: 32 pixeles
            cellHeight: 32,         // alto de celda: 32 pixeles
            x: 80,                  // coordenada X de inicio de la cuadrícula
            y: 140                  // coordenada Y de inicio de la cuadrícula
        });
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