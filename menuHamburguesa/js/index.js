$(document).ready(function(){
	$("#subMenu").click(animaMenu);
	$("#iconMenu").click(menuOpciones);
	$("#closebtn").click(menuOpciones);

	function animaMenu(){
		$("#menuSecundario").slideToggle(300);
	}

	function menuOpciones(){
		if($("nav").position().left == "0"){
			$("nav").animate({
				"left": "-20%"
			},500);
		}else{
			$("nav").animate({
				"left": "0"
			},500);
		}		
	}
})