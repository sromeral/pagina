var usuarios = ["guest", "invitado", "usuario"];

function mensaje(texto) {
	document.getElementById("mensaje").value = texto;
}

function valido(usuario) {
	var numUsuarios = usuarios.length;
	for (var i = 0; i < numUsuarios; i++) {
		if (usuarios[i] === usuario) {
			return true;
		}
	}
	return false;
}

function verificar() {
	var usuario = document.getElementById("nombre").value;
	
	if (usuario === "") {
		mensaje("Debe escribir un nombre de usuario.");
	}
	else {
		if (valido(usuario)) {
			mensaje("Usuario autorizado.");
		}
		else {
			mensaje("Usuario no autorizado.");
		}
	}
}

function reiniciar() {
	document.getElementById("mensaje").value = "";
	document.getElementById("nombre").value = "";
}