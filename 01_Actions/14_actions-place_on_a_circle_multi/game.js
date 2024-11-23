class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.spritesheet('balls', 'assets/balls.png', { frameWidth: 17, frameHeight: 17 });    // Precarga de spritesheet 'balls' separada en frames de 17px de ancho por 17px de alto
    }

    create ()
    {
        const circle = new Phaser.Geom.Circle(400, 300, 220);
        /*  400: posición en x
            300: posición en y
            220: radio
        */

        this.group = this.add.group({ key: 'balls', frame: [0, 1, 5], repeat: 10 });
        /*  Crea un grupo utilizando la spritesheet 'balls' y coloca los frames en un array
            Selecciona los frames (sprites) 0, 1 y 5.
            Repite 10 veces (habrá 11 repeticiones de cada bola. 33 repeticiones en total)
        */

        Phaser.Actions.PlaceOnCircle(this.group.getChildren(), circle);
        /*  this.group.getChildren(): Obtiene las bolas del grupo como un array.
            circle: Posiciona las bolas equidistantes alrededor del círculo.
        */


        /* Crear una interpolación */
        this.tween = this.tweens.addCounter({
            from: 220,                  // radio inicial: 220px
            to: 100,                    // radio final: 100px
            duration: 3000,             // duración: 3000ms = 3s
            delay: 2000,                // retraso: 2000ms = 2s
            ease: 'Sine.easeInOut',     // usa una animación suave basada en la función seno.
            repeat: -1,                 // -1 = repite indefinidamente.
            yoyo: true                  // alterna entre expandir y contraer (efecto yoyo).
        });
    }

    update ()
    {
        Phaser.Actions.RotateAroundDistance(this.group.getChildren(), { x: 400, y: 300 }, 0.02, this.tween.getValue());
        /*  this.group.getChildren():   Obtiene las bolas.
            { x: 400, y: 300 }:         Define el punto central alrededor del cual rotan las bolas.
            0.02:                       Incrementa la rotación en cada cuadro. Es la velocidad angular.
            this.tween.getValue():      Recupera el valor actual del radio del tween (cambia dinámicamente entre 220 y 100).
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