<?php

	@require "conectar_base.php";			// traigo el codigo de conexion

	$conexion = new conexion;				// instancio conexion
	$conexion->conectado;					// asigno la propiedad

	$usuarioEnviado = $_GET['usuario'];		// Variable de usuario desde el form
	$passwordEnviado = $_GET['password'];	// Variable de password desde el form

	$resultados = array();					// Array de mensajes a devolver

	// Conexion a db
	if(!mysqli_connect_error()) {
		// Consulta a la db
		$consulta  = "SELECT * FROM usuario WHERE nombre_usuario = '$usuarioEnviado' and pass_usuario = '$passwordEnviado'";
		$respuesta = mysqli_query($conexion->conectado,$consulta);	// Respues de la db con la conexion y la consulta

		$matriz = array();					// Array de objetos donde guardo los datos de los usuarios
		
		while ($obj = mysqli_fetch_object($respuesta)) {
			$matriz[] = array("id" => $obj -> id_usuario, "usuario" => utf8_encode($obj -> nombre_usuario));
		}

		if ($matriz == null) {
			// SI EL RESULTADO ES NULL AVISA
			$resultados["mensaje"] = "Usuario y/o contraseña invalidos";
			$resultados["validacion"] = "No";
		} else {
			// SI EL RESULTADO TRAE DATA, LA PASA Y DA EL OK
			// $resultados["mensaje"] = "Usuario correcto";
			$resultados["mensaje"] = $matriz;
			$resultados["validacion"] = "ok";
		}
	} else {
		$resultados["coneccion"] = "No se a conectao";
	}

	$resultadosJson = json_encode($resultados);	// PASA A JSON LOS MENSAJES
	echo $_GET['jsoncallback'] . '(' . $resultadosJson . ');'; // PASA ENCODEADO LOS MENSAJES
?>