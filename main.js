$('.itens').click(function(){

	//--> active representa a classe de cor diferente

	//Procura algum botao com a classe active e remove essa classe para tirar a cor diferente do botao selecionado
	$('.active').removeClass('active');
	
	//Adiciona a classe de cor diferente no botao clicado
	$(this).addClass('active');

});