class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.image('ball', 'assets/shinyball.png');
    }

    create ()
    {
        this.group = this.add.group();  // Crea un grupo vacío. Un grupo es un contenedor que puede almacenar múltiples objetos (en este caso, imágenes de bolas).

        for (let i = 0; i < 32; i++)    // Ciclo que se ejecuta 32 veces para añadir 32 bolas al grupo.
        {
            this.group.create(i * 32, i * 2, 'ball');
            // Crea una nueva bola dentro del grupo en la posición:
            // - x: `i * 32` (separadas uniformemente en el eje X, con una distancia de 32 px entre cada bola).
            // - y: `i * 2` (incrementando ligeramente en el eje Y, creando un patrón diagonal).
            // Usa la imagen previamente cargada con la clave 'ball'.
        }
    }

    update ()
    {
        Phaser.Actions.RotateAroundDistance(this.group.getChildren(), { x: 400, y: 300 }, 0.02, 200);
        // Rota todas las bolas del grupo en torno a un punto central.
        // - `this.group.getChildren()`: Obtiene un arreglo de todos los elementos del grupo.
        // - `{ x: 400, y: 300 }`: Centro de rotación en las coordenadas (400, 300).
        // - `0.02`: Velocidad de rotación (en radianes por frame).
        // - `200`: Distancia del punto de rotación al centro del círculo (radio).
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