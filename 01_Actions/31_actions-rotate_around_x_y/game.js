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
        this.group = this.add.group();
        // Crea un grupo vacío. Los grupos permiten gestionar múltiples objetos de forma colectiva.

        for (var i = 0; i < 256; i++)   // Ciclo que se ejecuta 256 veces para añadir 256 diamantes al grupo.
        {
            this.group.create(Phaser.Math.Between(200, 600), Phaser.Math.Between(100, 500), 'diamonds', Phaser.Math.Between(0, 4));
            /*  Crea un nuevo objeto en el grupo con las siguientes propiedades:
                - Posición x: Valor aleatorio entre 200 y 600 (Phaser.Math.Between genera un número aleatorio en el rango especificado).
                - Posición y: Valor aleatorio entre 100 y 500.
                - Clave: 'diamonds' (la hoja de sprites cargada previamente).
                - Frame: Un número aleatorio entre 0 y 4 para seleccionar un frame específico del spritesheet.
            */
        }

        this.geomPoint = new Phaser.Geom.Point(400, 300);
        // Crea un punto geométrico en las coordenadas (400, 300).
        // Este punto será el centro alrededor del cual rotarán los diamantes.

        this.input.on('pointermove', function (pointer) {   // Evento que se activa cada vez que el puntero (mouse o touch) se mueve.
            this.geomPoint.setTo(pointer.x, pointer.y);
            // Actualiza la posición del punto geométrico a las coordenadas del puntero.
            // Esto permite mover dinámicamente el punto central de rotación.
        }, this);
        // `this` se pasa como contexto para que el evento pueda acceder a las propiedades de la escena.
    }

    update ()
    {
        Phaser.Actions.RotateAroundDistance(this.group.getChildren(), this.geomPoint, 0.1, 100);
        /*  Rota todos los objetos del grupo alrededor de un punto.
            - `this.group.getChildren()`: Obtiene un arreglo con todos los objetos del grupo.
            - `this.geomPoint`: Punto alrededor del cual rotarán los objetos (su posición cambia dinámicamente con el puntero).
            - `0.1`: Velocidad de rotación en radianes por frame.
            - `100`: Distancia fija desde el centro del punto geométrico a cada diamante.
        */

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