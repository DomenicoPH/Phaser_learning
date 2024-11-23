class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.image('ball', 'assets/shinyball.png');    // precarga de la imagen
    }

    create ()
    {
        const circle = new Phaser.Geom.Circle(400, 300, 260);   // Genera un círculo: pos.x: 400, pos.y: 300, radio: 260px

        this.group = this.add.group({ key: 'ball', frameQuantity: 32 });    // Crea un grupo de bolas con 32 elementos

        Phaser.Actions.PlaceOnCircle(this.group.getChildren(), circle);     // Posiciona las 32 bolas del grupo en el círculo

        // Animación (interpolación, loop)
        this.tween = this.tweens.addCounter({
            from: 260,                  // radio inicial: 260px
            to: 0,                      // radio final: 0px
            duration: 3000,             // tiempo de animación: 3s
            delay: 2000,                // retraso inicial
            ease: 'Sine.easeInOut',     // curva de movimiento: senoidal
            //--:Otras curvas de movimiento:--
            //ease: 'Quad.easeInOut',
            //ease: 'Cubic.easeInOut',
            //ease: 'Quart.easeInOut',
            //ease: 'Sine.easeInOut',
            //ease: 'Expo.easeInOut',
            //ease: 'Circ.easeInOut',
            repeat: -1,                 // repetición: infinita
            yoyo: true                  // efecto yoyo: la animación finaliza y retrocede hasta el punto inial para volver a empezar el loop, como un yoyo.
        });
    }

    update ()
    {
        Phaser.Actions.RotateAroundDistance(this.group.getChildren(), { x: 400, y: 300 }, 0.02, this.tween.getValue());
        /*      
            this.group.getChildren(),  // Objetos que se moverán
            { x: 400, y: 300 },        // Centro de rotación
            0.02,                      // Incremento del ángulo de rotación (velocidad de giro)
            this.tween.getValue()      // Distancia al punto central
        */
    }
}

const config = {
    type: Phaser.AUTO,  // motor
    width: 800,         // ancho
    height: 600,        // alto
    backgroundColor: '#2d2d2d', // bg color
    parent: 'phaser-example',   // div cotenedor en html
    scene: Example              // nombre de escena
};

const game = new Phaser.Game(config);