class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.spritesheet('diamonds', 'assets/diamonds32x24x5.png', { frameWidth: 32, frameHeight: 24 });
        // precarga de la spritesheet de los diamantes segmentada en rectángulos de 32 x 24 px
    }

    create ()
    {
        const group = this.add.group({ key: 'diamonds', frame: 3, frameQuantity: 50, setXY: { x: 32, y: 32, stepX: 14 }});
        // crea un grupo de 50 diamantes untilizando el índice 3 del grupo de diamantes.
        // pos. inicial en x: 32, en y: 32 / cada siguiente diamante se colocará a 14px del anterior

        //  Spread out the children between the 2 given values, using the string-based property
        Phaser.Actions.Spread(group.getChildren(), 'alpha', 0, 1);
        // Ajusta el valor alfa a lo largo de los diamantes en un rango de 0 (invisible) y 1 (visible)


        // otras pruebas...
        
        const group2 = this.add.group({ key: 'diamonds', frame: 0, frameQuantity: 50, setXY: { x: 32, y: 64, stepX: 14 }});
        Phaser.Actions.Spread(group2.getChildren(), 'alpha', 0, 0.75);

        const group3 = this.add.group({ key: 'diamonds', frame: 1, frameQuantity: 50, setXY: { x: 32, y: 96, stepX: 14 }});
        Phaser.Actions.Spread(group3.getChildren(), 'alpha', 0, 0.5);

        const group4 = this.add.group({ key: 'diamonds', frame: 2, frameQuantity: 50, setXY: { x: 32, y: 128, stepX: 14 }});
        Phaser.Actions.Spread(group4.getChildren(), 'alpha', 0, 0.25);

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