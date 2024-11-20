class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.image('bg', 'assets/bg.jpg'); //import del background
        this.load.spritesheet('walkCycle', 'assets/wcycle.png', { frameWidth: 64, frameHeight: 112 }); //import del spriteSheet
    }

    create ()
    {
        //this.add.image(400, 300, 'bg'); // Background comentado para inhabilitarlo.

        this.anims.create({
            key: 'walk',
            frames: this.anims.generateFrameNumbers('walkCycle'),
            frameRate: 16,
            repeat: -1
        });

        const sprites = [];

        for (var i = 0; i < 60; i++)
        {
            sprites.push(this.add.sprite(0, 0, 'walkCycle').play('walk'));
        }

        //  The sprites are 64x112 in size

        //  Let's lay them out in a grid 12 sprites wide, by as many tall as we have sprites in the array for

        Phaser.Actions.GridAlign(sprites, {
            width: 12,
            cellWidth: 64,
            cellHeight: 120,
            x: 16,
            y: 4
        });
    }
}

const config = {
    type: Phaser.AUTO,              // Motor de renderizado: AUTO --> Elige el mejor entre WEBGL y CANVAS
    width: 800,                     // Ancho de pantalla del juego: 800px
    height: 600,                    // Alto de pantalla del juego: 600px
    backgroundColor: '#2d2d2d',     // Color de fondo de la pantalla de juego (hexadecimal)
    parent: 'phaser-example',       // ID del contenedor HTML en el que se desplegara el juego
    scene: Example
};

const game = new Phaser.Game(config);