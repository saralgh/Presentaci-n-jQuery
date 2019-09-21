$(document).ready(function(){
	console.log("¡Carga correcta!");

	$("ul#menuPrincipal").find("li").hover(animaMenu,desanimaMenu);

	function animaMenu(){
		console.log("Sobre un elemento");
		
		$(this).animate({"backgroundColor":"#6CDC45"},300);

		if($(this).attr("id") == "subMenu"){
			$("#menuSecundario").css({"display": "block"});
		}
	}

	function desanimaMenu(){
		console.log("Te vas de un elemento");

		if($(this).parent().attr("id") == "menuSecundario"){
			$(this).animate({
				"backgroundColor":"#F8FF67"
			},300);
		}else{
			$(this).animate({
				"backgroundColor":"#7CFC50"
			},300);
		}

		if($(this).attr("id") == "subMenu"){
			$("#menuSecundario").css({
				"display": "none"
			});
		}
	}
})