var Jueguin = Jueguin || {};
var confirmado = false;

Jueguin.Ingreso = function() {

    Jueguin.Ingreso.prototype.confirmado = function(confirm) {
    	confirmado = confirm;
        return confirmado;
    }

    Jueguin.Ingreso.prototype.inicio = function() {
    	if (confirmado == true) {
        	console.log("hola mundo");
    	} else {
        	console.log("hola mundo");
    	}
    }
};