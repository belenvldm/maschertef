var Jueguin = Jueguin || {};
var button;         // Creo la variable para el boton
var txtInstruc;     // Texto de instrucciones

// Creo el estado del Menu
Jueguin.MenuState = {
    init: function() {
        // Establezco que se vea la totalidad del juego
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        // Centro el state en la pantalla
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
    },

    create: function () {
        txtInstruc = this.game.add.text(this.game.world.centerX - 440, this.game.world.centerY - 100, '             arrastra los ingrdientes hasta los utensillos \n y prepara la mejor receta para ganarle a tus chefamigos', {fontSize: '32px',fill: '#de98ff'});

        // Situo el boton y le setteo el ancla en el medio
        button = this.game.add.button(this.game.world.centerX, this.game.world.centerY + 180, 'button', actionOn, this, 1, 0);
        button.anchor.setTo(0.5);
        
        // Disparo una accion
        function actionOn() {
            this.actionOnClick();
        }
    },

    actionOnClick: function () {
        // Voy a "Invite"
        Jueguin.game.state.start('Invite');
    }
};