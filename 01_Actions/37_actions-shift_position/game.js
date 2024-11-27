class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
        this.move = 0;      // establece el valor de movimiento en 0
        this.x = 0;         // establece el valor de x en 0
        this.y = 0;         // establece el valor de y en 0
    }

    preload ()
    {
        this.load.image('sky', 'assets/deepblue.png');      // precarga del bg
        this.load.image('ball', 'assets/ball-tlb.png');     // precarga de la esfera
    }

    create ()
    {
        this.add.image(0, 0, 'sky')     // crea la imagen de fondo en las coords. x:0 y:0
            .setOrigin(0);              // y establece el punto de origen de la imagen en (0, 0) = esquina sup. izq.
        this.group = this.add.group({ key: 'ball', frameQuantity: 128 });   // crea un grupo de 128 esferas

        this.input.on('pointermove', function (pointer) {   // detecta el movimiento del cursor y captura su posición en 'x'
            this.x = pointer.x;     // asigna a la variable 'this.x' el valor de la pos. del cursor en 'x'
            this.y = pointer.y;     // asigna a la variable 'this.y' el valor de la pos. del cursor en 'y'
        }, this);   // this especifica el contexto
    }

    update (time, delta)
    // time:  Representa el tiempo total transcurrido desde que se inició la escena, medido en milisegundos.
    // delta: Representa el tiempo transcurrido desde el último frame, también en milisegundos.
    {
        this.move += delta;
        if (this.move > 6)
        {
            Phaser.Actions.ShiftPosition(this.group.getChildren(), this.x, this.y);     // actualiza la pos. en x y en y de las 128 esferas
            this.move = 0;      // reinicia this.move
        }
        //console.log(delta)    // 16.67
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