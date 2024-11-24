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
        const snake = []; // crea 'snake' como un array

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
        let direction = 3;
        let distance = Phaser.Math.Between(4, 8);

        //  Create a movement timer - every 100ms we'll move the 'snake'

        this.time.addEvent({ delay: 100, loop: true, callback: () => {

            let x = head.x;
            let y = head.y;

            if (direction === 0)
            {
                x = Phaser.Math.Wrap(x - 32, 0, 800);
            }
            else if (direction === 1)
            {
                x = Phaser.Math.Wrap(x + 32, 0, 800);
            }
            else if (direction === 2)
            {
                y = Phaser.Math.Wrap(y - 32, 0, 576);
            }
            else if (direction === 3)
            {
                y = Phaser.Math.Wrap(y + 32, 0, 576);
            }

            Phaser.Actions.ShiftPosition(snake, x, y);

            distance--;

            if (distance === 0)
            {
                if (direction <= 1)
                {
                    direction = Phaser.Math.Between(2, 3);
                }
                else
                {
                    direction = Phaser.Math.Between(0, 1);
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