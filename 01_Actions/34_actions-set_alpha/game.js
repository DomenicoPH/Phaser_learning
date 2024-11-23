class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.spritesheet('diamonds', 'assets/diamonds32x24x5.png', { frameWidth: 32, frameHeight: 24 });
    }

    create ()
    {
        const group = this.add.group({ key: 'diamonds', frame: 0, frameQuantity: 50, setXY: { x: 32, y: 32, stepX: 14 }});
        Phaser.Actions.SetAlpha(group.getChildren(), 0, 1 / 50);

        // ** prueba personal **
        const group2props = {
            key: 'diamonds',
            frame: 3,                               // index en el array de diamantes
            frameQuantity: 25,                      // cantidad de diamantes
            setXY: {x:32, y:300, stepX: 28}         // pos. en 'x' / pos. en 'y' / separación en 'x'
        }
        const group2 = this.add.group(group2props)                  // crea el grupo 2 utilizando por parametro el objeto 'group2props'
        Phaser.Actions.SetAlpha(group2.getChildren(), 0,1 / 25)     
        /*  Ajusta progresivamente la opacidad (alpha) de los sprites.
            El primer sprite será completamente transparente (alpha 0).
            Cada sprite siguiente incrementa su alpha por 1/25, hasta alcanzar un efecto de degradado de opacidad en todo el grupo.
        */                                       
        // ** prueba personal **
    }
}

const config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);