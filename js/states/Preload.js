var Jueguin = Jueguin || {};

Jueguin.PreloadState = {
    preload: function() {
        // Cargo las imagenes que voy a usar
        this.game.load.spritesheet('button', 'assets/img/button_sprite_sheet.png', 192, 71);
        this.game.load.spritesheet('tildeB', 'assets/img/tilde.png', 192, 71);
        this.game.load.spritesheet('cruzB', 'assets/img/cruz.png', 192, 71);
        this.load.image('menu', 'assets/img/number-buttons-90x90.png');
        this.load.image('fondo', 'assets/img/fondo.png');
        this.load.image('sarten', 'assets/img/sarten.png');
        this.load.image('pan', 'assets/img/pan.png', 48, 48);
        this.load.image('queso', 'assets/img/queso.png', 48, 48);
        this.load.image('tomate', 'assets/img/tomate.png');
		this.load.image('lechuga', 'assets/img/lechuga.png', 338, 100);

        this.load.image('bgPlaca', 'assets/img/back.png');
		this.load.image('bgWin', 'assets/img/bg.jpg');
    },

    create: function() {
        this.state.start('Menu');
    }
};