class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.image('sky', 'assets/pixelsky.png');
        this.load.spritesheet('blocks', 'assets/heartstar32.png', { frameWidth: 32, frameHeight: 32 });
    }

    create ()
    {
        this.add.image(400, 300, 'sky');
        // Crea la imagen de fondo en el centro de la pantalla de juego (x:400 y:300)

        //  Create a series of sprites, with a block as the 'head':
        let head;   // crea 'head' como variable
        const snake = []; // crea 'snake' como un array vacio

        for (let i = 0; i < 12; i++)    // repite este proceso 12 veces
        {
            // distribuciún de los bloques
            const part = this.add.image(64 + i * 32, 128, 'blocks', 1);
            /*  Distribuye los 12 bloques en:
                x: 64px del borde izq. + 32px * i (32x0, 32x1, 32x2, 32x3) / Esto crea un bloque cada 32px, alineándolos horizontalmente.
                y: 128px del borde superior
                key: 'blocks'
                index of 'blocks': 1
            */

            part.setOrigin(0, 0);   // Posiciona el origin de cada bloque en la su esquina sup. izq.

            // si estamos en el último bloque...
            if (i === 11)   // Si el valor de i es 11 (estamos dentro de un ciclo for q itera 12 veces, empezando con i=0, por lo tanto i=11 representa al último bloque)
            {
                // cabeza de la serpiente:
                part.setFrame(0);   // Establece un frame diferente para el último bloque
                head = part;    // asiga este bloque distinto a la variable 'head'
            }

            snake.push(part);   // empuja el bloque al array 'snake'
        }

        //  0 = left
        //  1 = right
        //  2 = up
        //  3 = down
        let direction = 3;                              // establece la velocidad en: 3
        let distance = Phaser.Math.Between(4, 8);       // establece la distancia en: un valor alatorio entre 4 y 8

        //  Create a movement timer - every 100ms we'll move the 'snake'

        this.time.addEvent({ delay: 100, loop: true, callback: () => {
        //  Crea un temporizador infinito que cada 100ms ejecuta:

            let x = head.x; // coordenada en 'x' de la cabeza de la serpiente
            let y = head.y; // coordenada en 'y' de la cabeza de la serpiente

            if (direction === 0)    // si la dirección es 0 = left
            {
                x = Phaser.Math.Wrap(x - 32, 0, 800);   // resta 32 a la pos. en 'x' en un rango de 0 - 800
            }
            else if (direction === 1)   // si la dirección es 1 = right
            {
                x = Phaser.Math.Wrap(x + 32, 0, 800);   // suma 32 a la pos. en 'x' en un rango de 0 - 800
            }
            else if (direction === 2)   // si la dirección es 2 = up
            {
                y = Phaser.Math.Wrap(y - 32, 0, 576);   // resta 32 a la pos. en 'y' en un rango de 0 - 576
            }
            else if (direction === 3)   // si la dirección es 3 = down
            {
                y = Phaser.Math.Wrap(y + 32, 0, 576);   // suma 32 a la pos. en 'y' en un rango de 0 - 576
            }

            Phaser.Actions.ShiftPosition(snake, x, y);  // todos los bloques de la serpiente toma la posición dinámica de x y

            distance--; // resta 1 al valor de 'distance' (La distancia disminuye en 1 en cada iteración hasta llegar a 0 para luego cambiar de dirección y reiniciar el ciclo)

            if (distance === 0) // si la distancia es igual a 0 ejecuta lo siguiente:
            {
                if (direction <= 1) // si la dirección es menor o igual a 1 (0, 1) = (left, right) coords. en x
                {
                    direction = Phaser.Math.Between(2, 3);  // asigna una dirección en 'y'
                }
                else                // si la dirección es mayor a 1 (2, 3) = (uup, down) coords. en y
                {
                    direction = Phaser.Math.Between(0, 1);  // asigna una dirección en 'x'
                }

                distance = Phaser.Math.Between(4, 12);
            }

        }});
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