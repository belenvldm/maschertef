var Jueguin = Jueguin || {};

// Creo las variables del juego
var cuadroTxt;          					// Placa de texto invitacion
var x;										// width
var y; 										// height
var inviTxt; 								// Titulo seccion quienes te retan
var teInvita; 								// Nombre jugador que te reta
var jugador; 								// El "id" de quien comenzo la competencia
var oponente; 								// El "id" de quien fue retado
var invitarA;								// Boton para invitar a un jugador
var aceptar; 								// Boton para aceptar invitacion
var rechazar; 								// Boton para rechazar invitacion
var descartar;								// Boton para descartar las invitaciones


Jueguin.InviteState = {
	init: function() {
		x = this.game.world.width / 4; 		// Asigno un cuarto del ancho
		y = this.game.world.height / 4; 	// Asigno un cuarto del alto
	},

    create: function() {
 		// Placa invitacion
        cuadroTxt = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'bgPlaca');
        cuadroTxt.scale.setTo(x,y);
        cuadroTxt.anchor.setTo(0.5);
        // !Placa invitacion

        // Invitaciones
        inviTxt = this.game.add.text(this.game.world.centerX - 400, this.game.world.centerY - 270, 'Te reta!', {fontSize: '32px',fill: '#000'});
        teInvita = this.game.add.text(this.game.world.centerX - 400, this.game.world.centerY - 170, 'Dany', {fontSize: '28px',fill: '#000'});

        aceptar = this.game.add.button(this.game.world.centerX - 300, this.game.world.centerY - 70, 'tildeB', clickAccept, this, 1, 0);
        aceptar.anchor.setTo(0.5);

        rechazar = this.game.add.button(this.game.world.centerX - 100, this.game.world.centerY - 70, 'cruzB', clickDismiss, this, 1, 0);
        rechazar.anchor.setTo(0.5);

        // descartar = this.game.add.button(this.game.world.centerX + 500, this.game.world.centerY - 300, 'button', descartarTodo, this, 1, 0);
        // descartar.anchor.setTo(0.5);
        // !Invitaciones

        // Botones invitaciones
        // invitarA = this.game.add.button(this.game.world.centerX, this.game.world.centerY - 200, 'button', clickInvite, this, 1, 0);
        // invitarA.anchor.setTo(0.5);

        // finPtos = this.game.add.button(this.game.world.centerX - 200, this.game.world.centerY + 200, 'button', clickFin, this, 1, 0);
        // finPtos.anchor.setTo(0.5);

        function clickInvite() {
            this.onInvite();
        }

        function clickAccept() {
            this.onAccept();
            oponente = localStorage.getItem("id");
            jugador = 1;
            crearCompetencia(jugador, oponente);
        	this.state.start('Game');
        }

        function clickDismiss() {
            this.onDismiss();
        }

        function descartarTodo() {
            this.onDescartar();
        }

        function clickFin() {
            fin(scoreUno);
        }
        // !Botones invitaciones
    }, 

    onInvite: function() {
        console.log("onInvite");
    },

    onAccept: function() {
        console.log("onAccept");
        this.state.start('Game');
    },

    onDescartar: function() {
        console.log("onDescartar");
        this.state.start('Game');
    },

    onDismiss: function() {
        console.log("onDismiss");
    }
};