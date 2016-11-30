<?php
	class conexion {
    	// *.. LOCALHOST ..*
		// private $servidor = "localhost";
		// private $usuario = "root";
		// private $clave = "";
		// private $base = "masterchefi";
		// public  $conectado;

    	// *.. SERVER ..*
		private $servidor = "localhost";
		private $usuario = "u307646916_masch";
		private $clave = "phc4n98JXf";
		private $base = "u307646916_masch";
		public  $conectado;

		function __construct() {
			$this->conectado = @mysqli_connect($this->servidor, $this->usuario, $this->clave, $this->base);
		}
	}
?>