<?php
	require_once ("conectar_base.php");		// traigo el codigo de conexion
	$conexion = new conexion;				// instancio conexion

	$id_oponente = $_GET['id'];				// Variable id que paso como param
	$ptos_oponente = $_GET['ptos_usuario'];	// Variable id que paso como param
	$id_competencia = $_GET['competencia'];
	$id_jugador = 1;
	$fch = "2016-11-30";

	// Conexion a db
	if(!mysqli_connect_error()) {
		// Consulta a la db
		$q  = "INSERT INTO competencias(id_competencia, id_usuario, id_oponente, ptos_usuario, ptos_oponente, fech) VALUES ('$id_competencia', '$id_jugador', '$id_oponente', 500, '$ptos_usuario', '$fch')";
		$respuesta = mysqli_query($conexion->conectado,$q);	// Respues de la db con la conexion y la consulta
		if ($respuesta) {
			$data = json_encode("alta ptos usuario");
		} else {
			$data = json_encode("NO alta ptos usuario");
		}
	} else {
		$data = json_encode(1);
	}
	echo $data;
?>