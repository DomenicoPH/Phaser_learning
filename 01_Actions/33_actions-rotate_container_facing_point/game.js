class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
        // Llama al constructor de la clase base `Phaser.Scene`. Esto asegura que la escena se inicialice correctamente.

        this.container;
        /*  Variable declarada para almacenar un contenedor (container) que se utilizará más adelante.
            Un contenedor en Phaser permite agrupar varios objetos para tratarlos como uno solo.
        */
        this.center = {x: 400, y: 300}
        /*  Objeto que define un punto central.
            - `x: 400`: Coordenada horizontal del centro.
            - `y: 300`: Coordenada vertical del centro.
            Este punto podría usarse como referencia para movimientos, rotaciones u otras transformaciones.
        */
        this.rotateSpeed = 0.02
        /*  Velocidad de rotación.
            - Define cuánto se rotarán los objetos (en radianes) por cada frame.
            - 0.02 radianes equivale aproximadamente a 1.15 grados por frame.
        */
    }

    preload ()
    {
        this.load.spritesheet('diamonds', 'assets/diamonds32x24x5.png', { frameWidth: 32, frameHeight: 24 });
    }

    create ()
    {
        // Diamante Central
        this.add.sprite(this.center.x, this.center.y, 'diamonds', 1); // center point. We will rotate around it
        /* crea un sprite utilizando:
            this.center.x para la pos. en x
            this.center.y para la pos. en y
            key: 'diamonds'
            1: index del array de diamantes
        */

        // Contenedor
        this.container = this.add.container(600, 300);  // crea un contenedor en las coordenadas x:600, y:300

        // Contenido
        const text = this.add.text(-25, -50, 'Phaser'); // Crea un texto con el contenido "Phaser" en las coordenadas (-25, -50) relativas al centro del contenedor.

        const diamond1 = this.add.sprite(0, 0, 'diamonds', 1); // Crea un sprite de la hoja 'diamonds' con el frame 1 en las coordenadas (0, 0) relativas al centro del contenedor.
        diamond1.setScale(2) // Escala el sprite `diamond1` al doble de su tamaño original.

        const diamond2 = this.add.sprite(15, 0, 'diamonds', 2); // Crea un sprite de la hoja 'diamonds' con el frame 2 en las coordenadas (15, 0) relativas al centro del contenedor.
        diamond2.setScale(2) // Escala el sprite `diamond1` al doble de su tamaño original.

        const diamond3 = this.add.sprite(-15, 0, 'diamonds', 3); // Crea un sprite de la hoja 'diamonds' con el frame 3 en las coordenadas (-15, 0) relativas al centro del contenedor.
        diamond3.setScale(2) // Escala el sprite `diamond1` al doble de su tamaño original.

        this.container.add([diamond1, diamond2, diamond3, text])
        // Añade los sprites (`diamond1`, `diamond2`, `diamond3`) y el texto al contenedor. Ahora, todos estos objetos se mueven y rotan junto con el contenedor.

        // stop rotation on click
        this.input.on('pointerdown', function() {   // Evento que se activa cada vez que se detecta un clic en cualquier parte de la pantalla.
          if (this.rotateSpeed > 0) {   // Si la velocidad de rotación (`rotateSpeed`) es mayor que 0 (es decir, el contenedor está rotando):
              this.rotateSpeed = 0      // Detiene la rotación estableciendo la velocidad a 0.
          } else {                      // Si la velocidad de rotación es 0 (es decir, el contenedor está detenido):
              this.rotateSpeed = 0.02   // Reinicia la rotación asignando una velocidad de 0.02 radianes por frame.
          }
        }, this);
        /* El segundo argumento (`this`) se usa para pasar el contexto de la escena al evento, asegurando que `this` dentro del callback se refiera a la instancia actual de la escena.
*/
    }

    update ()
    {
        Phaser.Actions.RotateAroundDistance([this.container], this.center, this.rotateSpeed, 250);
        /* rota los objetos del container ([this.container]) alrededor del centro (this.center)
            a una velocidad de (this.rotateSpeed) a una distancia de radio:250
        */
        const angleDeg = Math.atan2(this.container.y - this.center.y, this.container.x - this.center.x) * 180 / Math.PI;
        /*  Calcula el ángulo actual del contenedor respecto al punto central.
            1. `Math.atan2`: Calcula el ángulo (en radianes) entre el eje x y el vector que conecta dos puntos.
               - `(this.container.y - this.center.y)`: Diferencia en la posición y (altura).
               - `(this.container.x - this.center.x)`: Diferencia en la posición x (anchura).
            2. `* 180 / Math.PI`: Convierte el ángulo de radianes a grados.
            this.container.angle = angleDeg+90 // container should face the center point
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