class Example extends Phaser.Scene
{
    constructor ()
    {
        super();

        this.fireballs = [];
    }

    preload ()
    {
        this.load.image('fireball', 'assets/fireball.png');
    }

    create ()
    {
        for (let i = 0; i < 26; i++)
        {
            this.fireballs.push(this.add.image(i * 32, 300, 'fireball').setScale(0.5));
        }
    }

    update ()
    {
        Phaser.Actions.Angle(this.fireballs, 1.5, 0.1);
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