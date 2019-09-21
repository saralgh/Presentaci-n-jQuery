window.addEventListener("load",function(){
	console.log("¡Carga correcta!");

	var liTags = document.getElementsByTagName("li");

	for(var i = 0; i < liTags.length; i++){
		liTags[i].addEventListener("mouseover",animaMenu);
		liTags[i].addEventListener("mouseout",desanimaMenu);
	}

	function animaMenu(){
		console.log("Sobre un elemento");

		this.style.backgroundColor = "#6CDC45";

		if(this.id == "subMenu"){
			document.getElementById("menuSecundario").style.display = "block";
		}
	}

	function desanimaMenu(){
		console.log("Te vas de un elemento");

		this.style.backgroundColor = "";

		if(this.id == "subMenu"){
			document.getElementById("menuSecundario").style.display = "none";
		}
	}
})