<?php
	require_once ("conectar_base.php");		// traigo el codigo de conexion
	$conexion = new conexion;				// instancio conexion

	$jugador = $_GET['jugador'];			// Variable id que paso como param
	$oponente = $_GET['oponente'];			// Variable id que paso como param
	$fch = "2016-11-30";

	// Conexion a db
	if(!mysqli_connect_error()) {
		// Consulta a la db
		$q  = "INSERT INTO competencias(id_usuario, id_oponente, fech) VALUES ('$jugador', '$oponente', '$fch')";
		$respuesta = mysqli_query($conexion->conectado,$q);	// Respues de la db con la conexion y la consulta
		if ($respuesta) {
			$q2 = "SELECT id_competencia FROM competencias WHERE id_usuario = $'jugador' AND id_oponente = '$oponente' ORDER BY fech DESC LIMIT 1";
			$respuesta2 = mysqli_query($conexion->conectado,$q2);
			
			while ($obj = mysqli_fetch_object($respuesta2)) {
				$matriz = array("id_competencia" => $obj->id_competencia);
			}
			$data = json_encode($matriz);
		} else {
			$data = json_encode("NO creo la competencia");
		}
	} else {
		$data = json_encode(1);
	}
	echo $data;
?>