var nuevoArray = [];

function stringToArray() {

var textoCaja = document.getElementById('textoATraducir');

var miString = textoCaja.value;
   
var misCaracteres = miString.split('');

//console.log(misCaracteres)
 return misCaracteres;
 
}
//diccionario
function traducir(pa,na){
	for (var i = 0; i < pa.length; i++){
		if (pa[i] == 'A'){
			na.push('ki');
		}
		else if (pa[i] == 'B'){
			na.push('su');
		}
		else if (pa[i] == 'C'){
			na.push('mi');
		} 
		else if (pa[i] == 'D'){
			na.push('cui');
		} 
		else if (pa[i] == 'E'){
			na.push('mac');
		} 
		else if (pa[i] == 'F'){
			na.push('cui');
		} 
		else if (pa[i] == 'G'){
			na.push('ru');
		} 
		else if (pa[i] == 'H'){
			na.push('kia');
		} 
		else if (pa[i] == 'i'){
			na.push('ye');
		} 
		else if (pa[i] == 'J'){
			na.push('go');
		} 
		else if (pa[i] == 'K'){
			na.push('men');
		}
		else if (pa[i] == 'll'){
			na.push('kiar');
		}  
		else if (pa[i] == 'Ll'){
			na.push('kiar');
		} 
		else if (pa[i] == 'L'){
			na.push('lor');
		} 
		else if (pa[i] == 'M'){
			na.push('na');
		} 
		else if (pa[i] == 'N'){
			na.push('ña');
		} 
		else if (pa[i] == 'Ñ'){
			na.push('mac');
		} 
		else if (pa[i] == 'O'){
			na.push('os');
		} 
		else if (pa[i] == 'P'){
			na.push('ner');
		} 
		else if (pa[i] == 'Q'){
			na.push('su');
		} 
		else if (pa[i] == 'R'){
			na.push('do');
		} 
		else if (pa[i] == 'S'){
			na.push('con');
		} 
		else if (pa[i] == 'T'){
			na.push('bod');
		} 
		else if (pa[i] == 'U'){
			na.push('zor');
		} 
		else if (pa[i] == 'V'){
			na.push('pal');
		} 
		else if (pa[i] == 'W'){
			na.push('palpal');
		} 
		else if (pa[i] == 'X'){
			na.push('ses');
		} 
		else if (pa[i] == 'Y'){
			na.push('kikia');
		} 
		else if (pa[i] == 'Z'){
			na.push('mond');
		} 
		else if (pa[i] == 'a'){
			na.push('ki');
		} 
		else if (pa[i] == 'b'){
			na.push('su');
		} 
		else if (pa[i] == 'c'){
			na.push('mi');
		} 
		else if (pa[i] == 'd'){
			na.push('cui');
		} 
		else if (pa[i] == 'e'){
			na.push('mac');
		} 
		else if (pa[i] == 'f'){
			na.push('cul');
		} 
		else if (pa[i] == 'g'){
			na.push('ru');
		} 
		else if (pa[i] == 'h'){
			na.push('kia');
		} 
		else if (pa[i] == 'i'){
			na.push('ye');
		} 
		else if (pa[i] == 'j'){
			na.push('go');
		} 
		else if (pa[i] == 'k'){
			na.push('men');
		} 
		else if (pa[i] == 'l'){
			na.push('lor');
		} 
		else if (pa[i] == 'm'){
			na.push('na');
		} 
		else if (pa[i] == 'n'){
			na.push('ña');
		} 
		else if (pa[i] == 'ñ'){
			na.push('mac');
		} 
		else if (pa[i] == 'o'){
			na.push('os');
		} 
		else if (pa[i] == 'p'){
			na.push('ner');
		} 
		else if (pa[i] == 'q'){
			na.push('su');
		} 
		else if (pa[i] == 'r'){
			na.push('do');
		} 
		else if (pa[i] == 's'){
			na.push('con');
		} 
		else if (pa[i] == 't'){
			na.push('bod');
		} 
		else if (pa[i] == 'u'){
			na.push('zor');
		} 
		else if (pa[i] == 'v'){
			na.push('pal');
		} 
		else if (pa[i] == 'w'){
			na.push('palpal');
		} 
		else if (pa[i] == 'x'){
			na.push('ses');
		} 
		else if (pa[i] == 'y'){
			na.push('kikia');
		} 
		else if (pa[i] == 'z'){
			na.push('mond');
		} else {
			na.push(pa[i]);
				}
}
}
///diccionario
function parrafo (pa){
	var p1 = document.createElement("p");
	p1.id = "traducido";
	var contenido_p1 = document.createTextNode(pa);
	p1.appendChild(contenido_p1);
	var p2 = document.getElementById("traducido");
	var parentP = p2.parentNode;
	parentP.replaceChild(p1, p2)
}

function traduccion(){
	var miArray = stringToArray();
	
	traducir(miArray, nuevoArray);
	parrafo(nuevoArray.join(''))
	
}

var boton = document.getElementById('traducir');

boton.addEventListener('click', traduccion, false);