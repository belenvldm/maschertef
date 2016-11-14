var Jueguin = Jueguin || {};

$(document).ready(function() {

	// *.. Autenticacion del formulario ..*
	$('#formulario').submit(function() {
		var datosUsuario = $("#nombredeusuario").val()    // tomo lo que esta en el input de usuario
		var datosPassword = $("#clave").val()             // tomo lo que esta en el input de password
		
	  	archivoValidacion = "http://maschertef.esy.es/host/validacion_de_datos.php?jsoncallback=?" // url del archivo php que busca en la db

		$.getJSON(archivoValidacion,{usuario:datosUsuario ,password:datosPassword})
        .done(function(respuestaServer) {
            $mensa = respuestaServer.mensaje;             // tomo los mensajes que devuelve el php

            if(respuestaServer.validacion == "ok") {
                
                for (i= 0; i < $mensa.length; i++) {
                    $.each($mensa[i], function(a,b) {
                        if (a == "id") {
                            localStorage.setItem("id", b);
                        } else if (a == "usuario") {
                            $saludo = "Hola " + b + "!";
                            $('#datos_inc').append($saludo);
                            ingreso();
                        }
                    });
                }
            } else {
                $('#datos_inc').append(respuestaServer.mensaje);
            }
        })
		return false;
	});

    $aide = localStorage.getItem("id");

    function ingreso() {
        Jueguin.game = new Phaser.Game(1024, 768, Phaser.AUTO); // Instancio Phaser y especifico las dimensiones
        // // Cargo los estados
        Jueguin.game.state.add('Menu', Jueguin.MenuState);
        Jueguin.game.state.add('Boot', Jueguin.BootState);
        Jueguin.game.state.add('Preload', Jueguin.PreloadState);
        Jueguin.game.state.add('Game', Jueguin.GameState);
        Jueguin.game.state.start('Menu');
    }
});