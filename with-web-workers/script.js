function primo(numero) {

    for (var i = 2; i < numero; i++) {
  
      if (numero % i === 0) {
        return false;
      }
  
    }
  
    return numero !== 1;
}

onmessage = function(evento){
	var limite = evento.data; 
	var mayorEncontradoHastaElMomento = 0; 

	function esPrimo(numero) {

	  for (var i = 2; i < numero; i++) {

	    if (numero % i === 0) {
	      return false;
	    }

	  }

	  return numero !== 1;
	}

	for(var x = 0; x < limite; x++){
		if(esPrimo(x)){
			mayorEncontradoHastaElMomento = x;
		}
	}

	// postMessage para informar a nuestro invocador
	// que hemos terminado nuestra larga e importante tarea
	postMessage("Hola. El número primo más grande menor que " + limite.toString() + " es " + mayorEncontradoHastaElMomento.toString());

}

