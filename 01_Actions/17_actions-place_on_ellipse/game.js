class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.image('ball', 'assets/shinyball.png');
    }

    create ()
    {
        this.ellipse = new Phaser.Geom.Ellipse(400, 300, 200, 500); // Parámetros de la elipse: pos.x: 400 / pos.y: 300 / ancho de la elipse / altura de la elipse

        this.group = this.add.group({ key: 'ball', frameQuantity: 48 }); // crea un grupo con 48 bolas

        Phaser.Actions.PlaceOnEllipse(this.group.getChildren(), this.ellipse);  // distribuye las 48 bolas del grupo en la elipse

        // Parámetros de animación:
        this.tweens.add({
            targets: this.ellipse,
            width: 700,
            height: 100,
            delay: 1000,
            duration: 2000,
            ease: 'Sine.easeInOut',
            repeat: -1,
            yoyo: true
        });
    }

    update ()
    {
        Phaser.Actions.PlaceOnEllipse(this.group.getChildren(), this.ellipse);
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