class Example extends Phaser.Scene
{
    constructor ()
    {
        super();

        this.move = 0;
        this.layer1 = [];   // Se crea un array vacio para almacenar los vegetales del bloque 1
        this.layer2 = [];   // Se crea un array vacio para almacenar los vegetales del bloque 2
    }

    preload ()
    {
        this.load.atlas('atlas', 'assets/veg.png', 'assets/veg.json');
    }

    create ()
    {
        // Crea dos bloques:

        // Bloque 1
        for (let i = 0; i < 1024; i++)  // Número de repeticiones x unidad (vegetal)
        {
            const x = Phaser.Math.Between(100, 700);            // posición en x (entre el pixel 100 y el 700) ancho total: 800px
            const y = Phaser.Math.Between(100, 500);            // posición en y (entre el pixel 100 y el 500) alto total: 600px
            const frame = `veg0${Phaser.Math.Between(1, 9)}`;   // elige un frame aleatorio (un vegetal) de la SpriteSheet

            // mete en el arreglo el vegetal elegido en la posición obtenida aleatoriamente.
            this.layer1.push(this.add.image(x, y, 'atlas', frame));
        }

        // Bloque 2
        for (let i = 0; i < 1024; i++)  // Número de repeticiones x unidad (vegetal)
        {
            const x = Phaser.Math.Between(100, 700);            // posición en x (entre el pixel 100 y el 700) ancho total: 800px
            const y = Phaser.Math.Between(100, 500);            // posición en y (entre el pixel 100 y el 500) alto total: 600px
            const frame = `veg0${Phaser.Math.Between(1, 9)}`;   // elige un frame aleatorio (un vegetal) de la SpriteSheet

            // mete en el arreglo el vegetal elegido en la posición obtenida aleatoriamente.
            this.layer2.push(this.add.image(x, y, 'atlas', frame));
        }
    }

    update ()
    {
        // Rotación:
        // Math.cos() COSENO Genera un valor oscilante para el desplazamiento horizontal (eje x), que varía entre -1 y 1.
        // Math.sin()  SENO  Genera un valor oscilante para el desplazamiento vertical (eje y), también entre -1 y 1.
        
        Phaser.Actions.IncXY(this.layer1, Math.cos(this.move), Math.sin(this.move));
        Phaser.Actions.Rotate(this.layer1, -0.01);  // velocidad y orientación individual (unidad de vegetal)

        Phaser.Actions.IncXY(this.layer2, -Math.cos(this.move), -Math.sin(this.move));
        Phaser.Actions.Rotate(this.layer2, 0.01);   // velocidad y orientación individual (unidad de vegetal)

        this.move += 0.01;
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