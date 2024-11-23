class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.image('bg', 'assets/soil.png');
        this.load.image('tree', 'assets/tree.png');
    }

    create ()
    {
        this.add.tileSprite(400, 300, 800, 600, 'bg').setTileScale(0.25);
        /*  .tileSprite() Creación de un tileSprite. parámetros:
            400: punto central en 'x'
            300: punto central en 'y'
            800: width
            600: height
            key: 'bg'      

            .setTileScale() Escala de cada tile (teja)
            0.25: escala de cada 'tile' -> 0.25 -> 1/4 del tamaño original  
        */

        const circle = new Phaser.Geom.Circle(400, 300, 220);
        /*  Phaser.Geom.Circle() Creación de un círculo. parámetros:
            400: Pos. del centro en 'x'
            300: Pos. del centro en 'y'
            220: Radio
        */

        const trees = [];   // Creación de un arreglo para los árboles

        for (let i = 0; i < 32; i++)    
        // Ciclo for: i vale 0; mientras 'i' sea menor que 32 ejecuta lo siguiente; suma 1 a 'i'
        // Este ciclo ejecutará lo siguiente 32 veces:
        {
            trees.push(this.add.image(0, 0, 'tree'));
            // this.add.image() -> Crea una imagen del árbol (key: 'tree') en las coordenadas x:0 y:0 (esquina superior izquierda)
        }

        Phaser.Actions.PlaceOnCircle(trees, circle);
        // Distribuye las 32 copias del árbol del arreglo: 'trees' en el circulo: 'circle'

        //  Depth sort based on y value
        //  Profundidad de cada arbol igual a su valor en y.
        trees.forEach(tree => {
            tree.setDepth(tree.y);
        });
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    pixelArt: true,
    scene: Example
};

const game = new Phaser.Game(config);