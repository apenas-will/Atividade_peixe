var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,

    scene: {
        preload: preload,
        create: create,
        update: update
    }
}

var game = new Phaser.Game(config);

var peixito;
var nave;

function preload() {
    this.load.image('espaço', "assets/bg_espaço.jpg"); 
    this.load.image('logo', "assets/logo-inteli_branco.png");
    this.load.image('peixito', "assets/peixes/peixinho_laranja.png");
    this.load.image('nave', "assets/peixes/nave.png")
    //Perguntar o que é esse "this"
}

function create() {
    this.add.image(180, 300, "espaço");
    this.add.image(400, 525, "logo").setScale(0.7)
    nave = this.add.image(400, 300, "nave").setScale(0.25);
    peixito = this.add.image(400, 300, "peixito").setScale(0.7);
}

function update() {
    peixito.x = this.input.x;
    peixito.y = this.input.y;
    nave.x = peixito.x;
    nave.y = peixito.y - 100;
}