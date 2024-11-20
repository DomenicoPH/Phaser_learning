class Example extends Phaser.Scene
{
    constructor ()
    {
        super();

        this.planes = [];   // Genera el array planes donde se almacenaran los aviones.
    }

    preload ()
    {
        this.load.image('bg', 'assets/deepblue.png');       // precarga del fondo
        this.load.image('plane', 'assets/ww2plane.png');    // precarga del avion
    }

    create ()
    {
        this.add.image(400, 300, 'bg');     
        // Generación del fondo. posicionamiento en el centro según su punto de origen.

        this.cameras.main.setBounds(0, 0, 800, 600);    
        // Establece los límites del marco activo de la cámara:
        // 0: margen en x, 0: margen en y, 800px de ancho, 600px de alto.

        // Establece la cantidad de aviones en pantalla en 128
        for (let i = 0; i < 128; i++)
        {
            const x = Phaser.Math.Between(0, 800);      // Coordenada aleatoria en x entre 0 y 800
            const y = Phaser.Math.Between(0, 600);      // Coordenada aleatoria en y entre 0 y 600

            this.planes.push(this.add.image(x, y, 'plane'));
            /*  Crea un avion en las corrdenadas x,y aleatoriamente asignadas.
                Hace push del avion en el array 'planes'.
            */
        }
    }

    update ()
    {
        Phaser.Actions.IncY(this.planes, -1, -0.025);
        // Incremento en x a cada avion en 'this.planes'
        // -1 : dirección
        // -0.025 : velocidad

        Phaser.Actions.WrapInRectangle(this.planes, this.cameras.main.getBounds(), 128);
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