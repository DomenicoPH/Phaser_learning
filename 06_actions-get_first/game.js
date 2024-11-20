class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        // Precargado de un SpriteSheet de 5 diamantes. / Separacion en Frames: 63px ancho / 48px alto
        this.load.spritesheet('diamonds', 'assets/diamonds32x5.png', { frameWidth: 63, frameHeight: 48 });
    }

    create ()
    {
        const gems = [];

        for (let i = 1; i < 64; i++)
        {
            const x = Phaser.Math.Between(100, 700);
            const y = Phaser.Math.Between(100, 500);
            const frame = Phaser.Math.Between(0, 4);

            gems.push(this.add.sprite(x, y, 'diamonds', frame));
        }

        this.add.text(16, 16, 'Click to find the first Red gem with a Scale of 1');

        const redFrame = this.textures.getFrame('diamonds', 0);         // Borra la gema ROJA
        //const orangeFrame = this.textures.getFrame('diamonds', 1);    // Borra la gema NARANJA
        //const greenFrame = this.textures.getFrame('diamonds', 2);     // Borra la gema VERDE
        //const purpleFrame = this.textures.getFrame('diamonds', 3);    // Borra la gema MORADA
        //const blueFrame = this.textures.getFrame('diamonds', 4);      // Borra la gema CELESTE

        this.input.on('pointerdown', () => {

            //  Get the first sprite with a scale of 1 that is using the Red frame
            const red = Phaser.Actions.GetFirst(gems, { scaleX: 1, frame: redFrame });
            //const orange = Phaser.Actions.GetFirst(gems, { scaleX: 1, frame: orangeFrame });
            //const green = Phaser.Actions.GetFirst(gems, { scaleX: 1, frame: greenFrame });
            //const purple = Phaser.Actions.GetFirst(gems, { scaleX: 1, frame: purpleFrame });
            //const blue = Phaser.Actions.GetFirst(gems, { scaleX: 1, frame: blueFrame });

            if (red)
            {
                this.children.bringToTop(red);

                this.tweens.chain({
                    targets: red,
                    tweens: [
                        {
                            scale: 2,
                            duration: 400,
                            ease: 'Bounce.easeOut'
                        },
                        {
                            delay: 500,
                            scale: 0,
                            duration: 1000
                        }
                    ]
                });
            }

        });
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