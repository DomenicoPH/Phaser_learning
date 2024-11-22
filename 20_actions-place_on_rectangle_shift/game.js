class Example extends Phaser.Scene
{
    constructor ()
    {
        super();

        this.i = 0;
    }

    preload ()
    {
        this.load.spritesheet('balls', 'assets/balls.png', { frameWidth: 17, frameHeight: 17 });
        /*  Precarga de spritesheet:
            key: 'balls'
            url:  'assets/balls.png'
            recorte: width: 17px / height: 17px
        */
    }

    create ()
    {
        this.rect = new Phaser.Geom.Rectangle(64, 32, 100, 512);
        /*  Rectángulo inicial: Creación de un rectangulo con los siguientes parámetros:
            posicionamiento del origen del rectángulo (esquina superior izquierda) en:
            x: 64
            y: 32
            width: 100px
            height: 512px
        */

        this.group = this.add.group({ key: 'balls', frame: [0,1,2,3,4,5], frameQuantity: 10 });
        /*  Creación de un grupo que toma los elementos del array 'balls'
            key: utiliza 'balls'
            frame: slección de fotogramas que serán visibles
            frameQuantity: repeticiones
        */

        this.tweens.add({
            /*  Animación */
            targets: this.rect,     // Objetivo de la animación: rectángulo
            x: 200,                 // Pos. del origin en 'x'
            y: 200,                 // Pos. del origin en 'y'
            width: 512,             // Ancho del rectángulo: 512px
            height: 100,            // Alto del rectángulo: 512px
            delay: 2000,            // Retraso inicial: 2 segundos
            duration: 3000,         // Duración de la animación: 3 segundos
            ease: 'Sine.easeInOut', // Curva de animación
            repeat: -1,             // Loop infinito
            yoyo: true              // Efecto Yoyo
        });

    }

    update ()
    {
        Phaser.Actions.PlaceOnRectangle(this.group.getChildren(), this.rect, this.i);
        /*  Phaser.Actions.PlaceOnRectangle -> posiciona en un rectángulo
            this.rect -> el rectángulo creado previamente
            this.i -> controla un desplazamiento progresivo en las posiciones de las esferas para animarlas
        */

        // Acutalización del índice de desplazamiento
        this.i++;

        if (this.i === this.group.length)
        {
            this.i = 0;
        }
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);