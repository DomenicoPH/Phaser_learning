class Example extends Phaser.Scene
{
    constructor ()
    {
        super();

        this.donuts = [];   // Genera un array vacio para almacenar las donuts
    }

    preload ()
    {
        this.load.image('bg', 'assets/grid.png');       // Precarga del bg.
        this.load.image('donut', 'assets/donut.png');   // Precarga del donut.
    }

    create ()
    {
        this.add.image(400, 600, 'bg').setOrigin(0.5, 1);
            /*  this.add.image(400, 600, 'bg') ->
                    Posiciona la imagen de fondo. 400px en 'x' y 600px en 'y'
                setOrigin(0.5, 1) -> 
                    Establece el punto de origen del 'bg' en el medio en x (0.5) 
                    y en la parte inferior en y (1) 
            */

        this.cameras.main.setBounds(0, 0, 800, 600);
            /*  Establece parámetros para una cámara:
                    setBounds(límite en x, límite en y, ancho en px, alto en px)
            */

        for (let i = 0; i < 16; i++)    // Define la cantidad de donuts de la animación
        {
            const x = Phaser.Math.Between(0, 800);      // Define la coordenada aleatoria en 'x'
            const y = Phaser.Math.Between(200, 600);    // Define la coordenada aleatoria en 'y'

            this.donuts.push(this.add.image(x, y, 'donut'));
            /*  Crea un donut con las coordenadas 'x' e 'y' proporcionadas aleatoriamente 
                y lo empuja al array this.donuts
            */
        }
    }

    /* Update()
        Este método se ejecuta en cada frame de la animación y controla el 
        movimiento y comportamiento de las donas.
    */
    update ()
    {
        Phaser.Actions.IncX(this.donuts, -2, -0.5);
        /* Phaser.Actions.IncX
            
            Mueve cada imagen en el array this.donuts a lo largo del eje x.
            
            El parámetro -2 indica que cada dona se desplaza hacia la izquierda 
            a una velocidad constante de 2 píxeles por frame.

            El parámetro -0.5 Es el factor de aceleración adicional que se aplica a cada objeto del array.
            Este valor afecta cómo cambia el desplazamiento en cada frame. Un valor negativo 
            como -0.5 hace que el desplazamiento hacia la izquierda sea más lento 
            progresivamente (ya que resta 0.5 al desplazamiento en cada llamada).
        */

        Phaser.Actions.WrapInRectangle(this.donuts, this.cameras.main.getBounds(), 128);
        /* WrapInRectangle 
            Detecta si una dona sale de los límites definidos por 
            this.cameras.main.getBounds() (el tamaño del canvas).
        */
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#000000',
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);