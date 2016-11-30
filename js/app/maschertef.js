$(document).ready(function() {
    console.log("inicio");
    // *.. Autenticacion del formulario ..*
    $('#botonLogin').click(function() {
        console.log("form");
        params = {};
        params.user = $("#nombredeusuario").val();    // tomo lo que esta en el input de usuario
        params.pass = $("#clave").val();              // tomo lo que esta en el input de password

        $.ajax({
            // *url, archivo php que busca en la db, *type, tipo de dato ue paso, *data, array del info que mando
            // url: "http://localhost/develop/Actuales/maschertef/host/validacion_de_datos.php",
            url: "http://maschertef.esy.es/host/validacion_de_datos.php",
            type: "POST",
            data: params,
            cache: false,
            dataType: "json"
        }).done(function(data) {
            console.log("success");
            switch (data) {
                case 1:
                    $('#datos_inc').append("Usuario y/o contraseña invalidos");
                break;
                case 2:
                    $('#datos_inc').append("fallo la conexion");
                break;
                default:
                    console.log("id: " + data.id + " nombre: " + data.usuario);
                    localStorage.setItem("id", data.id);
                    $(location).attr('href', 'http://maschertef.esy.es/app/game.html');
                break;
            }
        }).error(function(error, textStatus){
            console.log(error);
        });
    });
});

function crearCompetencia(jugador, oponente) {
    console.log("Crear Competencia");
    params = {};
    params.jugador = jugador;
    params.oponente = oponente;

    $.ajax({
        // url: "http://localhost/develop/Actuales/maschertef/host/crearCompetencia.php",
        url: "http://maschertef.esy.es/host/crearCompetencia.php",
        type: 'GET',
        data: params,
        dataType: 'json',
    }).done(function(data) {
        console.log("success competencia");
        if (data == 1) {
            console.log("fallo la conexion");
        } else {
            localStorage.setItem("competencia", data.id_competencia);
            console.log(data);
        }
    }).error(function(error, textStatus){
        console.log(error);
    });
}


function fin(competencia, ptos) {
    console.log("alta puntos");
    $id = localStorage.getItem("id");
    params = {};
    params.id = $id;
    params.ptos_usuario = ptos;
    params.id_competencia = competencia;
    console.log("id " + params.id + "\nPtos: " + params.ptos_usuario);

    $.ajax({
        // url: "http://localhost/develop/Actuales/maschertef/host/ptos.php",
        url: "http://maschertef.esy.es/host/ptos.php",
        type: "GET",
        data: params,
        cache: false,
        dataType: "json"
    }).done(function(data) {
        console.log("success");
        if (data == 1) {
            console.log("fallo la conexion");
        } else {
            console.log(data);
        }
        // $(location).attr('href', 'http://localhost/develop/Actuales/maschertef/app/game.html');
    }).error(function(error, textStatus){
        console.log(error);
    });
}