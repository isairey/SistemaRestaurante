$(document).ready(function(){



	function pedidosMesa() {
		var url = window.location.pathname;
		

		if(url == "/panel") {
			
			$(".jsPedidos").submit(function(e){

				e.preventDefault();

				$.when(

					$.ajax({
						url: "pedidos/save",
						type: "POST",
						dataType: "JSON",
						contentType: "application/json",
						data: JSON.stringify({
							mesa: $(".jsPedidosMesa").text(),
							//personas: $("input[name='jsPersonas']").val(),
							pedido: $("select[name='jsPedido']").val(),
							precio: $("select[name='jsPedido'] option:selected").data('precio'),
							mozo: $("select[name='jsMozo']").val(),
							codigo: $(".jsCodigoMesa").text()
						}),
						success: function(data){
							//alert('agregado');
							$(".jsPedidos .aside--Form--Fieldset").hide();
							$(".cssPreload").css('display','block');
							$(".cssPreload .cssPreload--Header").css('display','none');
							setTimeout(function(){
								$(".cssPreload img").css('display','none');
								$(".cssPreload .cssPreload--Header").css({'display':'block','padding':'1em 0;'});
							}, 2000);

					setTimeout(function(){
						window.location.href = "/mesas";
					}, 2800);
						
						},	
						error: function(err) {
							alert('hubo un error');
							console.log(err)
						}
					}),

					$.ajax({
						url: "pedidos/mesas",
						type: "POST",
						dataType: "JSON",
						contentType: "application/json",
						data: JSON.stringify({
							mesa: $(".jsPedidosMesa").text(),
							codigo: $(".jsCodigoMesa").text()
						}),
						success: function(data){
							console.log('agregado');
						},
						error: function(err) {
							//alert('hubo un error');
							//console.log(err)
							console.log(err)
						}
					})


				).then(function(){
						//
					});

			});	

			function pintarColours() {
				var API = "/pedidos/showmesas";
				$.getJSON(API, verificar, false);
				var estado = "";
				var mesa = "";
				
				function verificar(data){
					
					for(var i = 0; i < data.length; i++) {
						estado = data[i].Estado;
						mesa = data[i].Mesa;
						
						//alert(mesa);

						if(estado == "Ocupado"){
							
							var find = $(".content--Mesa:contains('"+mesa+"')").addClass('ocupado-JS ocupadoBtn');
							
							var string = $(find).find(mesa).selector;
							/*if(string == mesa) {

							}*/
							console.log(find);
							
						}
					}

				}
			}
			pintarColours();

			function occupeMesas() {
				var API = "pedidos/showmesas";

				$.getJSON(API, mesas, false);


				var estado = "";
				var mesas;
				var template = "";

				function mesas(data){


					
					for(var i = 0; i < data.length; i++) {
						
						estado = data[i].Estado;
						mesas = data[i].Mesa;
						mesasDe = data[i].Mesa;
						var codigo = data[i].Codigo;
						var t = decodeURIComponent(mesasDe);
						
						id = data[i]._id;

						template += "<option value='"+codigo+"'>"+
										mesas+ 
										"</option>"

						//	alert(template);
					}
					$(".mesasOccupe").append(template);
				}
			}
			occupeMesas();

			
		}

		
	}
	pedidosMesa();


	function deleteMesas() {
				var selecionado;
				$(".mesasOccupe").change(function(){

					$(".mesasOccupe option:selected").each(function(){
						selecionado = $(this).val() + " ";
						
					});

				});

				

				$(".jsMesasDisponibilidad").submit(function(e){
					
					

					var url = "pedidos/deletemesas/" + selecionado;
					
					$.ajax({
						url: url,
						method: "POST",
						cache: false,
						contentType: 'application/json; charset=utf-8',
						dataType: 'json',
						success: function() {
							alert('borrado');
							window.location.href = "/";
						},
						error: function(err){
							alert('error');
						}
					});

					e.preventDefault();

				});

	}
	deleteMesas();
});