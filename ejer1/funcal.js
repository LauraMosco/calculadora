var op1, op2, op;

function inicio(){
	//DECLARAR VARIABLES
	var resul= document.getElementById("resul");
	var clean= document.getElementById('clean');
	var sum= document.getElementById('sum');
	var res= document.getElementById('res');
	var div= document.getElementById('div');
	var mul= document.getElementById('mul');
	var n1= document.getElementById('n1');
	var n2= document.getElementById('n2');
	var n3= document.getElementById('n3');
	var n4= document.getElementById('n4');
	var n5= document.getElementById('n5');
	var n6= document.getElementById('n6');
	var n7= document.getElementById('n7');
	var n8= document.getElementById('n8');
	var n9= document.getElementById('n9');
	var n0= document.getElementById('n0');
	var pto= document.getElementById('pto');

	//EVENTOS PARA QUE LOS NUMEROS SEAN VISIBLES EN LA BARRA DE RESULTADOS
	n1.onclick = function (e){
		resul.textContent = resul.textContent+"1";
	}

	n2.onclick = function (e){
		resul.textContent= resul.textContent+"2";
	}

	n3.onclick = function (e){
		resul.textContent= resul.textContent+"3";
	}

	n4.onclick = function (e){
		resul.textContent= resul.textContent+"4";
	}

	n5.onclick = function (e){
		resul.textContent= resul.textContent+"5";
	}

	n6.onclick = function (e){
		resul.textContent= resul.textContent+"6";
	}

	n7.onclick = function (e){
		resul.textContent= resul.textContent+"7";
	}

	n8.onclick = function (e){
		resul.textContent= resul.textContent+"8";
	}

	n9.onclick = function (e){
		resul.textContent= resul.textContent+"9";
	}

	n0.onclick = function (e){
		resul.textContent= resul.textContent + "0";
	}

	pto.onclick=function(e){
		resul.textContent=resul.textContent + ".";
	}

	//OTROS
	clean.onclick = function (e){
		reset();
	}

	//OPERCACIONES

	sum.onclick = function (e){
		op1= resul.textContent;
		op = "+";
		limpiar();
	}

	res.onclick = function (e){
		op1= resul.textContent;
		op = "-";
		limpiar();
	}

	mul.onclick = function (e){
		op1= resul.textContent;
		op = "*";
		limpiar();
	}

	div.onclick = function (e){
		op1= resul.textContent;
		op = "/";
		limpiar();
	}


	igual.onclick = function (e){
		op2= resul.textContent;
		resolver();
	}
}

function limpiar (){
	resul.textContent="";
}

function reset (){
	resul.textContent="";
	op1=0;
	op2=0;
	op="";
}

function resolver (){
	//VARIABLE DEL RESULTADO
	var r=0;
	switch(op){
		case "+":
			r= parseFloat(op1) + parseFloat(op2);
			break;

		case "-":
			r= parseFloat(op1) - parseFloat(op2);
			break;

		case "*":
			r=parseFloat(op1) * parseFloat(op2);
			break;

		case "/":
			r=parseFloat(op1) / parseFloat(op2);
			break;
	}
	reset();
	resul.textContent = r;
}