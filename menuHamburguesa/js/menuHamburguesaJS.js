window.addEventListener("load",function(){
	console.log("¡Carga correcta!");

	var menuVisible = false;
	var submenuVisible = false;

	document.getElementById('subMenu').addEventListener("click",animaMenu);
	document.getElementById('iconMenu').addEventListener("click",menuOpciones);
	document.getElementById('closebtn').addEventListener("click",menuOpciones);

	function animaMenu(){

		if(submenuVisible == true){
			document.getElementById("menuSecundario").style.display = "none";
			submenuVisible = false;
		}else{
			document.getElementById("menuSecundario").style.display = "block";
			submenuVisible = true;
		}
	}

	function menuOpciones(){
		console.log("Dentro de la funcion");

		var menu = document.getElementsByTagName("nav");

		if(menuVisible == true){
			menu[0].style.left = "-20%";
			menuVisible = false;
		}else{
			menu[0].style.left = "0";
			menuVisible = true;
		}
	}
})