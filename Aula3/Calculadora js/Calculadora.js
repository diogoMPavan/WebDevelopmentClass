function clique(element) {
	if (document.getElementById("display").textContent == "") {
		switch (element.id) {
			case "1":
				definirDisplay(element.textContent);
				break;

			case "2":
				definirDisplay(element.textContent);
				break;

			case "3":
				definirDisplay(element.textContent);
				break;

			case "4":
				definirDisplay(element.textContent);
				break;

			case "5":
				definirDisplay(element.textContent);
				break;

			case "6":
				definirDisplay(element.textContent);
				break;

			case "7":
				definirDisplay(element.textContent);
				break;

			case "8":
				definirDisplay(element.textContent);
				break;

			case "9":
				definirDisplay(element.textContent);
				break;

			/*case "+":
				//fazOperacao
				break;

			case "-":
				//fazOperacao
				break;

			case "x":
				//fazOperacao
				break;

			case "CE":
				definirDisplay("");
				break;

			case "=":
				//fazOperacao
				break;*/

			default:
				break;
		}
	}
	else {
		switch (element.id) {
			case "1":
				definirDisplay(element.textContent);
				break;

			case "2":
				definirDisplay(element.textContent);
				break;

			case "3":
				definirDisplay(element.textContent);
				break;

			case "4":
				definirDisplay(element.textContent);
				break;

			case "5":
				definirDisplay(element.textContent);
				break;

			case "6":
				definirDisplay(element.textContent);
				break;

			case "7":
				definirDisplay(element.textContent);
				break;

			case "8":
				definirDisplay(element.textContent);
				break;

			case "9":
				definirDisplay(element.textContent);
				break;

			case "+":
				definirDisplay(element.textContent);
				break;

			case "-":
				definirDisplay(element.textContent);
				break;

			case "x":
				definirDisplay(element.textContent);
				break;
			
			case "/":
				definirDisplay(element.textContent);
				break;

			case "CE":
				limpaDisplay()
				break;

			case "=":
				fazOperacao(display)
				break;

			default:
				break;
		}
	}
}
function definirDisplay(texto) {
	document.getElementById("display").textContent = document.getElementById("display").textContent + texto
}

function limpaDisplay() {
	document.getElementById("display").textContent = ""
}

function fazOperacao(texto) {
	let str = texto.textContent;
	if (texto != "") {
		var n1 = parseInt(str.substring(0, str.indexOf(" ")))
		var n2 = parseInt(str.substring(str.lastIndexOf(" "), str.length))
		if (str.includes("+")) {
			let soma = n1 + n2
			limpaDisplay()
			definirDisplay(soma)
		}
		else if(str.includes("-")){
			let subtracao = n1 - n2
			limpaDisplay()
			definirDisplay(subtracao)
		}
		else if(str.includes("÷")){
			let div = n1/n2
			limpaDisplay()
			definirDisplay(div)
		}
		else if(str.includes("x")){
			let mult = n1 * n2
			limpaDisplay()
			definirDisplay(mult)
		}
	}
}
/*https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
		integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
		crossorigin="anonymous*/