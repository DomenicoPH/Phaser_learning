class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.image('ball', 'assets/chunk.png');    // preload de la imagen / key: 'ball'
    }

    create ()
    {
        // Triángulo 1
        const triangle1 = new Phaser.Geom.Triangle.BuildEquilateral(200, 90, 280);
        /*  creación de un -- triángulo equiláatero --:
            200 : pos. del origin en 'x'
            90: pos. del origin en 'y'
            280: longitud de lado en px

            origin: vérticce superior
        */

        const group1 = this.add.group({ key: 'ball', frameQuantity: 64 });
        /*  creación del grupo1
            key: 'ball'
            cantidad de copias: 64

            NOTA:
            group1.getChildren() -> retorna un array que contiene los elementos del grupo
        */

        Phaser.Actions.PlaceOnTriangle(group1.getChildren(), triangle1);
        /*  
            Distribuye los elementos del 'group1' (obtenidos con getChildren()) 
            a lo largo de los bordes del triángulo definido por 'triangle1'.
        */

        // Triángulo 2
        const triangle2 = new Phaser.Geom.Triangle.BuildRight(400, 500, 300, 200);
        /*  creación de un -- triángulo rectángulo --:
            400 : pos. del origin en 'x'
            500: pos. del origin en 'y'
            300: longitud de la base en px
            200: longitud de la altura en px

            origin: vértice inferior izquierdo
        */

        const group2 = this.add.group({ key: 'ball', frameQuantity: 64 });
        /*  creación del grupo2
            key: 'ball'
            cantidad de copias: 64

            NOTA:
            group1.getChildren() -> retorna un array que contiene los elementos del grupo
        */

        Phaser.Actions.PlaceOnTriangle(group2.getChildren(), triangle2);
        /*  
            Distribuye los elementos del 'group1' (obtenidos con getChildren()) 
            a lo largo de los bordes del triángulo definido por 'triangle1'.
        */
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