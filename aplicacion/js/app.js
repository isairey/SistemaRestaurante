$(document).ready(function(){

	var template = "";
	var mesa, pedido, hora;
	var API;
	var resultadoFecha;

	function show(){

				function hour(){
				/*Data*/
					var fecha = new Date();
					var hora = fecha.getHours();
					var minutes = fecha.getMinutes();
					var resultadoHora = hora + ":" + minutes;

					var mes = fecha.getMonth();
					var ano = fecha.getFullYear();
					var dia = fecha.getDate();

					if(mes == 0) {
						mes = "Enero";
					}
					else if(mes == 1) {
						mes = "Febrero";
					}
					else if(mes == 2) {
						mes = "Marzo";
					}
					else if(mes == 3){
						mes = "Abril";
					}
					else if(mes == 4) {
						mes = "Mayo";
					}
					else if(mes == 5) {
						mes = "Junio";
					}
					else if(mes == 6) {
						mes = "Julio";
					}
					else if(mes == 7) {
						mes = "Agosto";
					}
					else if(mes == 8) {
						mes = "Septiembre";
					}
					else if(mes == 9) {
						mes = "Octubre";
					}
					else if(mes == 10) {
						mes = "Noviembre";
					}
					else if(mes == 11){
						mes = "Diciembre";
					}
					else  {
						mes = "Ningun mes se encontro";
					}
					resultadoFecha = "El " + dia + " de " + mes  + " del " + ano;
				$(".headerMain .de--HeaderMain .title").text(resultadoFecha);
				
			}
			hour();
			

			function showPedidos(){
				 
				API = "http://128.199.86.176:8080/apipollos/" + resultadoFecha;
				
				$.getJSON(API, pollos, false);
				

				function pollos(data){

					for(var i = 0; i < data.length; i++) {
						
						mesa = data[i].Mesa;
						pedido = data[i].Pedido;
						hora = data[i].Hora;
						var codigo = data[i]._id;
						template += "<ul class='ul'>"+
									"<div class='contentUl'>"+
										"<li class='list'>"+
										"<span class='tt'>"+
											mesa+
										"</span>"+
									"</li>"+
									"<li class='list'>"+
										"<span class='tt'>"+
											pedido+
										"</span>"+
									"</li>"+
									"<li class='list'>"+
										"<span class='tt'>"+hora+"</span>"+
									"</li>"+
									"<li class='list'>"+
										"<button class='buttonAproved'>"+
											"<i class='fa fa-check-circle'></i>Aprobar"+
											"<span style='display:none;' class='idCode'>"+codigo+"</span>"+
										"</button>"+
									"</li>"+
									"</div>"+
								"</ul>";

					}

					$(".jsInsertMain").html(template);
					
	 				//todelete pedido
	 				$(".buttonAproved").click(function(e){
	 					e.preventDefault();
			 			var a = $(this).find('.idCode').text();
			 			$.ajax({
			 				url: "http://128.199.86.176:8080/apipollos/borrar/"+a,
			 				tpye: "POST",
			 				contentType: "application/json",
			 				success: function(data){
			 					alert("Se envió el pollo");
			 				},
			 				error: function(err){
			 					alert('ocurrio un error');
			 				}

			 			});
			 		});
				}

				
			}
			showPedidos();


	}



	setInterval(show, 5000);
	setInterval(function(){
		window.location.reload();

	}, 3000);
 	show();




});

