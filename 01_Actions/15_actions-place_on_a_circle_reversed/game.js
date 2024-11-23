class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.image('ball', 'assets/shinyball.png');    // precargado de imagen
    }

    create ()
    {
        /*  El método create() en este código genera cuatro grupos de bolas, 
        coloca cada grupo en un círculo de diferente tamaño, y organiza las 
        bolas equidistantes alrededor de esos círculos.
        */

        // crea 4 grupos con un número determinado de bolas cada uno:
        this.group1 = this.add.group({ key: 'ball', frameQuantity: 36 });   // grupo 1 -> 36 bolas
        this.group2 = this.add.group({ key: 'ball', frameQuantity: 32 });   // grupo 2 -> 32 bolas
        this.group3 = this.add.group({ key: 'ball', frameQuantity: 26 });   // grupo 3 -> 26 bolas
        this.group4 = this.add.group({ key: 'ball', frameQuantity: 16 });   // grupo 4 -> 16 bolas

        // crea 4 circulos:
        this.circle1 = new Phaser.Geom.Circle(400, 300, 200);   // pos. del centro en 'x': 400 / pos. del centro en 'y': 300 / radio: 200px
        this.circle2 = new Phaser.Geom.Circle(400, 300, 160);   // pos. del centro en 'x': 400 / pos. del centro en 'y': 300 / radio: 160px
        this.circle3 = new Phaser.Geom.Circle(400, 300, 120);   // pos. del centro en 'x': 400 / pos. del centro en 'y': 300 / radio: 120px
        this.circle4 = new Phaser.Geom.Circle(400, 300, 80);    // pos. del centro en 'x': 400 / pos. del centro en 'y': 300 / radio: 80px

        Phaser.Actions.PlaceOnCircle(this.group1.getChildren(), this.circle1);  // distribuye todas las bolas del 'group1' en el 'circle1'
        Phaser.Actions.PlaceOnCircle(this.group2.getChildren(), this.circle2);  // distribuye todas las bolas del 'group2' en el 'circle2'
        Phaser.Actions.PlaceOnCircle(this.group3.getChildren(), this.circle3);  // distribuye todas las bolas del 'group3' en el 'circle3'
        Phaser.Actions.PlaceOnCircle(this.group4.getChildren(), this.circle4);  // distribuye todas las bolas del 'group4' en el 'circle4'
    }

    update ()
    {
        Phaser.Actions.RotateAroundDistance(this.group1.getChildren(), this.circle1, -0.030, this.circle1.radius);
            /*  Hace que las bolas del grupo 1 roten alrededor del centro del círculo 1 en sentido antihorario
                Velocidad de rotación: -0.030 radianes por frame
                Distancia de rotación: igual al radio del círculo 1
            */
        Phaser.Actions.RotateAroundDistance(this.group2.getChildren(), this.circle2, 0.025, this.circle2.radius);
            /*  Hace que las bolas del grupo 2 roten alrededor del centro del círculo 2 en sentido horario
                Velocidad de rotación: 0.025 radianes por frame
                Distancia de rotación: igual al radio del círculo 2
            */
        Phaser.Actions.RotateAroundDistance(this.group3.getChildren(), this.circle3, -0.020, this.circle3.radius);
            /*  Hace que las bolas del grupo 3 roten alrededor del centro del círculo 3 en sentido antihorario
                Velocidad de rotación: -0.020 radianes por frame
                Distancia de rotación: igual al radio del círculo 3
            */
        Phaser.Actions.RotateAroundDistance(this.group4.getChildren(), this.circle4, 0.015, this.circle4.radius);
            /*  Hace que las bolas del grupo 4 roten alrededor del centro del círculo 4 en sentido horario
                Velocidad de rotación: 0.015 radianes por frame
                Distancia de rotación: igual al radio del círculo 4
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