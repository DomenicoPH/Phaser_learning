class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.image('ball', 'assets/shinyball.png');    // precarga de la imagen y le asigna una key: 'ball'
    }

    create ()   // creación de imagen estática
    {
        this.group1 = this.add.group({ key: 'ball', frameQuantity: 16 });   // creación de un grupo de 16 bolas - grupo1
        this.group2 = this.add.group({ key: 'ball', frameQuantity: 16 });   // creación de un grupo de 16 bolas - grupo2
        this.group3 = this.add.group({ key: 'ball', frameQuantity: 16 });   // creación de un grupo de 16 bolas - grupo3
        this.group4 = this.add.group({ key: 'ball', frameQuantity: 16 });   // creación de un grupo de 16 bolas - grupo4

        Phaser.Actions.PlaceOnCircle(this.group1.getChildren(), { x: 400, y: 300, radius: 200 });   // Distribuye las 16 bolas del 'grupo1' en un circulo de radio: 200 con centro en x:200 / y:300
        Phaser.Actions.PlaceOnCircle(this.group2.getChildren(), { x: 400, y: 300, radius: 160 });   // Distribuye las 16 bolas del 'grupo2' en un circulo de radio: 160 con centro en x:200 / y:300
        Phaser.Actions.PlaceOnCircle(this.group3.getChildren(), { x: 400, y: 300, radius: 120 });   // Distribuye las 16 bolas del 'grupo3' en un circulo de radio: 120 con centro en x:200 / y:300
        Phaser.Actions.PlaceOnCircle(this.group4.getChildren(), { x: 400, y: 300, radius: 80 });    // Distribuye las 16 bolas del 'grupo4' en un circulo de radio: 80 con centro en x:200 / y:300
    }

    update ()   // animación
    {
        Phaser.Actions.RotateAroundDistance(this.group1.getChildren(), { x: 400, y: 300 }, 0.02, 200);  // Parámetros: {eje de rotación en 'x' y en 'y'}, velocidad de giro, distancia del centro en px.
        Phaser.Actions.RotateAroundDistance(this.group2.getChildren(), { x: 400, y: 300 }, 0.02, 160);  // Parámetros: {eje de rotación en 'x' y en 'y'}, velocidad de giro, distancia del centro en px.
        Phaser.Actions.RotateAroundDistance(this.group3.getChildren(), { x: 400, y: 300 }, 0.02, 120);  // Parámetros: {eje de rotación en 'x' y en 'y'}, velocidad de giro, distancia del centro en px.
        Phaser.Actions.RotateAroundDistance(this.group4.getChildren(), { x: 400, y: 300 }, 0.02, 80);   // Parámetros: {eje de rotación en 'x' y en 'y'}, velocidad de giro, distancia del centro en px.
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