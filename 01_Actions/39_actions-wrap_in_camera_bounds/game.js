class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    create ()
    {
        this.graphics = this.add.graphics();

        this.shapes = new Array(15).fill(null).map(
            // Crea this.shapes y le asigna un array con 15 casillas. la llena de null. Ejecuta un map y en cada espacio ejecuta lo siguiente:
            () => new Phaser.Geom.Circle(Phaser.Math.Between(0, 800), Phaser.Math.Between(0, 600), Phaser.Math.Between(25, 75))
            // Nueva figura circular en
            // Posición: 
            // x: 'n' aleatorio entre 0 y 800
            // y: 'n' aleatorio entre 0 y 600
            // Dimensiones:
            // radio: 'n' aleatorio entre 25 y 75
        );

        this.rect = Phaser.Geom.Rectangle.Clone(this.cameras.main);
        // Crea un nuevo rectángulo que tiene los mismos límites (posición y tamaño) de la cámara principal y lo asigna a this.rect
    }

    update ()
    // Actualización en cada frame
    {
        this.shapes.forEach(function (shape, i) {
            // toma shapes y por cada uno de sus elementos...
            shape.x += (1 + 0.1 * i);
            // modifica su pos. en x sumándole 1 + 0.1 * i (i es el índice por lo que su valor irá incrementando en 1 con cada iteración), esto hará que cada siguiente esfera se desplace ligeramente más rápido que la anterior.
            shape.y += (1 + 0.1 * i);
            // modifica su pos. en y sumándole 1 + 0.1 * i (i es el índice por lo que su valor irá incrementando en 1 con cada iteración), esto hará que cada siguiente esfera se desplace ligeramente más rápido que la anterior.
        });

        Phaser.Actions.WrapInRectangle(this.shapes, this.rect, 72);
        // Si una forma se sale de los límites del rectángulo, se mueve al lado opuesto.
        // Envuelve las formas (this.shape) dentro del rectángulo definido por `this.rect`
        // El número 72 es un margen adicional para evitar que las formas se queden pegadas al borde.


        this.draw();
        // Llama al método `draw` para redibujar las formas con sus nuevas posiciones. Esto actualiza lo visual en la pantalla.
    }

    // Locals methods, they are not part of Phaser.scene
    color (i)
    {
        // Calcula un color dinámico para cada forma basado en su índice `i`
        // La fórmula genera un valor hexadecimal para el color, combinando dos valores:
        // - 0x001100 * (i % 15): Esto varía el color de acuerdo con el índice de la forma (i) y limita los valores de `i` entre 0 y 14 (modulo 15).
        // - 0x000033 * (i % 5): Similar a la parte anterior, pero con un rango más pequeño para variar ligeramente el color en otra dimensión.
        return 0x001100 * (i % 15) + 0x000033 * (i % 5);
         // Devuelve el valor hexadecimal calculado para el color, que es utilizado en el método `draw` para darle color a cada forma.
    }

    draw ()
    {
        this.graphics.clear();
        // Limpia el área de gráficos para poder redibujar las formas con sus nuevas posiciones y colores

        this.shapes.forEach((shape, i) => { // Itera sobre las formas en el array `shapes`
            this.graphics
            .fillStyle(this.color(i), 0.5)  // Establece el color y la opacidad
            .fillCircleShape(shape);    // Dibuja cada forma como un círculo, usando las propiedades definidas de la forma
        }, this);   // `this` hace referencia a la instancia de la escena de Phaser
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