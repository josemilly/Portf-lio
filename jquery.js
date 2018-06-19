$(document).ready(function(){
	$("#botaoenviar").click(function(){
		alert("Mensagem enviada!");
	});
});

// // $(document).ready(function(){
// //    $('#itens li a').click(function(event){
// //    	  event.preventDefault();
// //       $("#itens li").find("a").removeClass('destaque');
// //       $(this).addClass('destaque');
// //    });
// // });

// $(document).ready(function() {

//  // Get current page URL
//  var url = window.location.href;

//  // remove # from URL
//  url = url.substring(0, (url.indexOf("#") == -1) ? url.length : url.indexOf("#"));

//  // remove parameters from URL
//  url = url.substring(0, (url.indexOf("?") == -1) ? url.length : url.indexOf("?"));

//  // select file name
//  url = url.substr(url.lastIndexOf("/") + 1);
 
//  // If file name not avilable
//  if(url == ''){
//  url = 'index.html';
//  }
 
//  // Loop all menu items
//  $('#itens li a').each(function(){

//   // select href
//   var href = $(this).find('a').attr('href');
 
//   // Check filename
//   if(url == href){

//    // Add active class
//    $(this).addClass('destaque');
//   }
//  });
// });

$(document).ready(function(){
	$("#titulosInicio").hide();
	$("#titulosInicio").slideDown(1200);
	$("#titulosInicio").fadeIn(2400);
});