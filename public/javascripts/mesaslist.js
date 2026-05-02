$(document).ready(function(){

	var cantPedidos = " "; 
	var globalTemplate = "";
	var pedidoEdit = "";
	var precioPedido;
	var pollolabel = "";

	function addPedidos(){
		var API = "pedidos/show";
		$.getJSON(API, success, false);

		function success(data) {

			var template = "";
			var template2 = "";
			for(var i = 0; i < data.length; i++) {

				var mesa = data[i].Mesa;
			    var pedido = data[i].Pedido;
			    var mozo = data[i].Mozo;
			    var fecha = data[i].Hora;
			    var id = data[i]._id;
			    var dataOkey = "Si";
			    var persona = data[i].Personas;
				var newPedidos = " ";



				if(data[i].Adicionales) {
					
					var p = data[i].Adicionales.length;
					var a = data[i].Adicionales;
					for(var ab = 0; ab < p; ab++) {
						newPedidos += a[ab].Pedido + " ";

					}


					template = "<div class='details mesasSelect'>" +
 						   		"<div class='details--Name'>"+
 						   			"<span class='persona' style='display:none;'>"+persona+"</span>"+
 						   			"<span class='id' style='display:none;'>"+id+"</span>"+
 						   			"<span class='title'><i class='fa fa-check'></i>"+ mesa+"</span>"+
 						   		"</div>"+
 						   		"<div class='details--Email jsPedido jsTextEllipsis'>"+
 						   			"<span class='title'>"+  newPedidos +"</span>"+
 						   		"</div>"+
 						   		"<div class='details--Celu'>"+
 						   			"<span class='title'>"+mozo+"</span>"+
 						   		"</div>"+
 						   		"<div class='details--Activo'>"+
 						   			"<span class='title'>"+
 						   			  fecha+
 						   			"</span>"+
 						   		"</div>"+
			               "</div>";

			        $(".jsMesasAdd").append(template);


				}
				else {

					template = "<div class='details mesasSelect'>" +
 						   		"<div class='details--Name'>"+
 						   			"<span class='persona' style='display:none;'>"+persona+"</span>"+
 						   			"<span class='id' style='display:none;'>"+id+"</span>"+
 						   			"<span class='title'>"+mesa+"</span>"+
 						   		"</div>"+
 						   		"<div class='details--Email jsPedido jsTextEllipsis'>"+
 						   			"<span class='title'>"+pedido+"</span>"+
 						   		"</div>"+
 						   		"<div class='details--Celu'>"+
 						   			"<span class='title'>"+mozo+"</span>"+
 						   		"</div>"+
 						   		"<div class='details--Activo'>"+
 						   			"<span class='title'>"+
 						   			  fecha+
 						   			"</span>"+
 						   		"</div>"+
			               "</div>";
					$(".jsMesasAdd").append(template);			               

				}
				
				

			



				
			}
			
			

			


			//to modify pedidos
			$(".mesasSelect").click(function(){
				
				var id = $(this).find(".id").text();
				//alert(id);
				var API = "pedidos/pedidounico/" + id;

				$.getJSON(API, mostrar, false);
				function mostrar(data){
					var nameMesa = data[0].Mesa;
					var toId = data[0]._id;
					console.log(toId);
					var cantPersona = data[0].Personas;
					var templateMozo = "<option value="+data[0].Mozo+">"+
								      data[0].Mozo
								   +"</option>";
					var pedidos = "";
					var pedidosunicos = "";
					
					//alert(cantPersona);
					//to add text name in mesa
					$(".jsMesaTT").text(nameMesa);
					$(".asi--Form-Header .title--DataId").text(toId);
					$(".jsEditPedidos input[name='jsPersonas']").val(cantPersona);
					$(".selectMozo").html(templateMozo);
					//alert(data[0].Adicionales);
					if(data[0].Adicionales) {
						
						pedidosunicos = "<option value='"+data[0].Pedido+"'>"+
									data[0].Pedido                  
								+"</option>";

						for(var i = 0; i < data[0].Adicionales.length; i++) {
							

							pedidos += "<option value='"+data[0].Adicionales[i].Pedido+"'>"+
									data[0].Adicionales[i].Pedido                    
								+"</option>";
						}
						$(".jsEditPedidos select[name='jsPedidoActual']").html(pedidosunicos);
						$(".jsEditPedidos select[name='jsPedidoActual']").append(pedidos);
					}
					else{
						pedidosunicos += "<option value='"+data[0].Pedido+"'>"+
									data[0].Pedido                  
								+"</option>";
						$(".jsEditPedidos select[name='jsPedidoActual']").html(pedidosunicos);
					}

				}


				//to class}
				//unbind, siblings, 
				$(this).addClass('itemSelect').siblings().removeClass('itemSelect');

			
			});

			$(".jsRemovePedido").click(function(){

				var idPedido = $(".title--DataId").text();
				var mesa = $(".jsMesaTT").text();
				
				$.ajax({
					url: "pedidos/show/pedido/" + idPedido ,
					type: "POST",
					contentType: "application/json",
					dataType: "JSON",
					data: JSON.stringify({
						borrar: 'cevichon'
					}),
					success: function(){
						alert('borrado');
					},
					error: function(err){
						alert('fail');
					}
				});

			});
			
		}


	}
	addPedidos();

	


	





	function roomPedidos(){
		
		

		$(".contSum label .title--Ad").on('click', function(){
			

			function pedidosMesas() {
					function platosSalon() {
					
							var APIENTRADAS = "administracion/platoslist/entradas";	

							$.getJSON(APIENTRADAS, entradas, false);

							function entradas(data) {
								var template = "";
								var optgroup = "";
								var dataId;
								var optgroupLabel = "";
								var precio = "";
								for(var i = 0; i < data.length; i++) {
									dataId = data[i]._id;
									dataName = data[i].Entradas.Nombre;
									optgroupLabel = data[i].Entradas.Categoria;
									precio = data[i].Entradas.Precio;
									template += "<option value='"+precio+"'>"+
													dataName +
												"</option>"
								}
								optgroup = "<optgroup label='"+optgroupLabel+"'>"+
											template
											"</optgroup>"

								$(".selectPlatosMesasList").append(optgroup);
							}

							var APICEVICHEST = "administracion/platoslist/ceviches";
							$.getJSON(APICEVICHEST, ceviches, false);

							function ceviches(data) {
								var template = "";
								var optgroup = "";
								var dataId;
								var optgroupLabel = "";
								var precio = "";
								for(var i = 0; i < data.length; i++) {
									dataId = data[i]._id;
									dataName = data[i].Ceviches.Nombre;
									optgroupLabel = data[i].Ceviches.Categoria;
									precio = data[i].Ceviches.Precio;
									template += "<option value='"+precio+"'>"+
													dataName +
												"</option>"
								}
								optgroup = "<optgroup label='"+optgroupLabel+"'>"+
											template
											"</optgroup>"

								$(".selectPlatosMesasList").append(optgroup);
							}

							var APIMARISCOS = "administracion/platoslist/pescadosmariscos";
							$.getJSON(APIMARISCOS, mariscos, false);

							function mariscos(data) {
								var template = "";
								var optgroup = "";
								var dataId;
								var optgroupLabel = "";
								var precio = "";
								for(var i = 0; i < data.length; i++) {
									dataId = data[i]._id;
									dataName = data[i].PercadosMariscos.Nombre;
									optgroupLabel = data[i].PercadosMariscos.Categoria;
									precio = data[i].PercadosMariscos.Precio;
									template += "<option value='"+precio+"'>"+
													dataName +
												"</option>"
								}
								optgroup = "<optgroup label='"+optgroupLabel+"'>"+
											template
											"</optgroup>"

								$(".selectPlatosMesasList").append(optgroup);
							}

							var APITIRADITOS = "administracion/platoslist/tiraditos";
							$.getJSON(APITIRADITOS, tiraditos, false);

							function tiraditos(data) {
								var template = "";
								var optgroup = "";
								var dataId;
								var optgroupLabel = "";
								var precio = "";
								for(var i = 0; i < data.length; i++) {
									dataId = data[i]._id;
									dataName = data[i].Tiraditos.Nombre;
									optgroupLabel = data[i].Tiraditos.Categoria;
									precio = data[i].Tiraditos.Precio;
									template += "<option value='"+precio+"'>"+
													dataName +
												"</option>"
								}
								optgroup = "<optgroup label='"+optgroupLabel+"'>"+
											template
											"</optgroup>"

								$(".selectPlatosMesasList").append(optgroup);
							}

							var APITIGRE = "administracion/platoslist/lechedetigre";
							$.getJSON(APITIGRE, tigre, false);

							function tigre(data) {
								var template = "";
								var optgroup = "";
								var dataId;
								var optgroupLabel = "";
								var precio = "";
								for(var i = 0; i < data.length; i++) {
									dataId = data[i]._id;
									dataName = data[i].Lechetigre.Nombre;
									optgroupLabel = data[i].Lechetigre.Categoria;
									precio = data[i].Lechetigre.Precio;
									template += "<option value='"+precio+"'>"+
													dataName +
												"</option>"
								}
								optgroup = "<optgroup label='"+optgroupLabel+"'>"+
											template
											"</optgroup>"

								$(".selectPlatosMesasList").append(optgroup);
							}

							var APISUDADOS = "administracion/platoslist/sudadoschupes";
							$.getJSON(APISUDADOS, sudados, false);

							function sudados(data) {
								var template = "";
								var optgroup = "";
								var dataId;
								var optgroupLabel = "";
								var precio = "";
								for(var i = 0; i < data.length; i++) {
									dataId = data[i]._id;
									dataName = data[i].SudadosyChupes.Nombre;
									optgroupLabel = data[i].SudadosyChupes.Categoria;
									precio = data[i].SudadosyChupes.Precio;
									template += "<option value='"+precio+"'>"+
													dataName +
												"</option>"
								}
								optgroup = "<optgroup label='"+optgroupLabel+"'>"+
											template
											"</optgroup>"

								$(".selectPlatosMesasList").append(optgroup);
							}

							var APIMARINOS = "administracion/platoslist/segundosmarinos";
							$.getJSON(APIMARINOS, marinos, false);

							function marinos(data) {
								var template = "";
								var optgroup = "";
								var dataId;
								var optgroupLabel = "";
								var precio = "";
								for(var i = 0; i < data.length; i++) {
									dataId = data[i]._id;
									dataName = data[i].SegundosMarinos.Nombre;
									optgroupLabel = data[i].SegundosMarinos.Categoria;
									precio = data[i].SegundosMarinos.Precio;
									template += "<option value='"+precio+"'>"+
													dataName +
												"</option>"
								}
								optgroup = "<optgroup label='"+optgroupLabel+"'>"+
											template
											"</optgroup>"

								$(".selectPlatosMesasList").append(optgroup);
							}

							var APICHICHARRONESMARINOS = "administracion/platoslist/chicharonesmarinos";
							$.getJSON(APICHICHARRONESMARINOS, chichamarinos, false);

							function chichamarinos(data) {
								var template = "";
								var optgroup = "";
								var dataId;
								var optgroupLabel = "";
								var precio = "";
								for(var i = 0; i < data.length; i++) {
									dataId = data[i]._id;
									dataName = data[i].ChicharronesMarinos.Nombre;
									optgroupLabel = data[i].ChicharronesMarinos.Categoria;
									precio = data[i].ChicharronesMarinos.Precio;
									template += "<option value='"+precio+"'>"+
													dataName +
												"</option>"
								}
								optgroup = "<optgroup label='"+optgroupLabel+"'>"+
											template
											"</optgroup>"

								$(".selectPlatosMesasList").append(optgroup);
							}

							var APITRILOGIAS = "administracion/platoslist/trilogias";
							$.getJSON(APITRILOGIAS, trigolo, false);

							function trigolo(data) {
								var template = "";
								var optgroup = "";
								var dataId;
								var optgroupLabel = "";
								var precio = "";
								for(var i = 0; i < data.length; i++) {
									dataId = data[i]._id;
									dataName = data[i].Trilogias.Nombre;
									optgroupLabel = data[i].Trilogias.Categoria;
									precio = data[i].Trilogias.Precio;
									template += "<option value='"+precio+"'>"+
													dataName +
												"</option>"
								}
								optgroup = "<optgroup label='"+optgroupLabel+"'>"+
											template
											"</optgroup>"

								$(".selectPlatosMesasList").append(optgroup);
							}

							var APITACUTACU = "administracion/platoslist/tacu";
							$.getJSON(APITACUTACU, tacu, false);

							function tacu(data) {
								var template = "";
								var optgroup = "";
								var dataId;
								var optgroupLabel = "";
								var precio = "";
								for(var i = 0; i < data.length; i++) {
									dataId = data[i]._id;
									dataName = data[i].TacuTacus.Nombre;
									optgroupLabel = data[i].TacuTacus.Categoria;
									precio = data[i].TacuTacus.Precio;
									template += "<option value='"+precio+"'>"+
													dataName +
												"</option>"
								}
								optgroup = "<optgroup label='"+optgroupLabel+"'>"+
											template
											"</optgroup>"

								$(".selectPlatosMesasList").append(optgroup);
							}


							var APICHICHARRONES = "administracion/platoslist/chicharrones";
							$.getJSON(APICHICHARRONES, chicharrones, false);

							function chicharrones(data) {
								var template = "";
								var optgroup = "";
								var dataId;
								var optgroupLabel = "";
								var precio = "";
								for(var i = 0; i < data.length; i++) {
									dataId = data[i]._id;
									dataName = data[i].Chicharrones.Nombre;
									optgroupLabel = data[i].Chicharrones.Categoria;
									precio = data[i].Chicharrones.Precio;
									template += "<option value='"+precio+"'>"+
													dataName +
												"</option>"
								}
								optgroup = "<optgroup label='"+optgroupLabel+"'>"+
											template
											"</optgroup>"

								$(".selectPlatosMesasList").append(optgroup);
							}

							var APIGUARNICIONES = "administracion/platoslist/guarniciones";
							$.getJSON(APIGUARNICIONES, guarniciones, false);

							function guarniciones(data) {
								var template = "";
								var optgroup = "";
								var dataId;
								var optgroupLabel = "";
								var precio = "";
								for(var i = 0; i < data.length; i++) {
									dataId = data[i]._id;
									dataName = data[i].Guarniciones.Nombre;
									optgroupLabel = data[i].Guarniciones.Categoria;
									precio = data[i].Guarniciones.Precio;
									template += "<option value='"+precio+"'>"+
													dataName +
												"</option>"
								}
								optgroup = "<optgroup label='"+optgroupLabel+"'>"+
											template
											"</optgroup>"

								$(".selectPlatosMesasList").append(optgroup);
							}

							var APISOPAS = "administracion/platoslist/sopascriollas";
							$.getJSON(APISOPAS, sopas, false);

							function sopas(data) {
								var template = "";
								var optgroup = "";
								var dataId;
								var optgroupLabel = "";
								var precio = "";
								for(var i = 0; i < data.length; i++) {
									dataId = data[i]._id;
									dataName = data[i].SopasCriollas.Nombre;
									optgroupLabel = data[i].SopasCriollas.Categoria;
									precio = data[i].SopasCriollas.Precio;
									template += "<option value='"+precio+"'>"+
													dataName +
												"</option>"
								}
								optgroup = "<optgroup label='"+optgroupLabel+"'>"+
											template
											"</optgroup>"

								$(".selectPlatosMesasList").append(optgroup);
							}

							var APICHIFA = "administracion/platoslist/chifas";
							$.getJSON(APICHIFA, chifa, false);

							function chifa(data) {
								var template = "";
								var optgroup = "";
								var dataId;
								var optgroupLabel = "";
								var precio = "";
								for(var i = 0; i < data.length; i++) {
									dataId = data[i]._id;
									dataName = data[i].Chifas.Nombre;
									optgroupLabel = data[i].Chifas.Categoria;
									precio = data[i].Chifas.Precio;
									template += "<option value='"+precio+"'>"+
													dataName +
												"</option>"
								}
								optgroup = "<optgroup label='"+optgroupLabel+"'>"+
											template
											"</optgroup>"

								$(".selectPlatosMesasList").append(optgroup);
							}

							var APIPOLLO = "administracion/platoslist/pollobrasa";
							$.getJSON(APIPOLLO, pollo, false);

							function pollo(data) {
								var template = "";
								var optgroup = "";
								var dataId;
								var optgroupLabel = "";
								var precio = "";
								for(var i = 0; i < data.length; i++) {
									dataId = data[i]._id;
									dataName = data[i].Polloalabrasa.Nombre;
									optgroupLabel = data[i].Polloalabrasa.Categoria;
									precio = data[i].Polloalabrasa.Precio;
									template += "<option value='"+precio+"'>"+
													dataName +
												"</option>"
								}
								optgroup = "<optgroup label='"+optgroupLabel+"'>"+
											template
											"</optgroup>"

								$(".selectPlatosMesasList").append(optgroup);
							}

							var APIBEBIDA1 = "administracion/bebidaslist/bebidasalcohol";
							$.getJSON(APIBEBIDA1, bebida1, false);

							function bebida1(data) {
								var template = "";
								var optgroup = "";
								var dataId;
								var optgroupLabel = "";
								var precio = "";
								for(var i = 0; i < data.length; i++) {
									dataId = data[i]._id;
									dataName = data[i].Bebidas.Nombre;
									optgroupLabel = data[i].Bebidas.Categoria;
									precio = data[i].Bebidas.Precio;
									template += "<option value='"+precio+"'>"+
													dataName +
												"</option>"
								}

								optgroup = "<optgroup label='"+optgroupLabel+"'>"+
											template
											"</optgroup>"

								$(".selectPlatosMesasList").append(optgroup);
							}

							var APIBEBIDA2 = "administracion/bebidaslist/cervezas";
							$.getJSON(APIBEBIDA2, bebida2, false);

							function bebida2(data) {
								var template = "";
								var optgroup = "";
								var dataId;
								var optgroupLabel = "";
								var precio = "";
								for(var i = 0; i < data.length; i++) {
									dataId = data[i]._id;
									dataName = data[i].Cervezas.Nombre;
									optgroupLabel = data[i].Cervezas.Categoria;
									precio = data[i].Cervezas.Precio;
									template += "<option value='"+precio+"'>"+
													dataName +
												"</option>"
								}
								
								optgroup = "<optgroup label='"+optgroupLabel+"'>"+
											template
											"</optgroup>"

								$(".selectPlatosMesasList").append(optgroup);
							}

							var APIBEBIDA3 = "administracion/bebidaslist/Tragosconpisco";
							$.getJSON(APIBEBIDA3, bebida3, false);

							function bebida3(data) {
								var template = "";
								var optgroup = "";
								var dataId;
								var optgroupLabel = "";
								var precio = "";
								for(var i = 0; i < data.length; i++) {
									dataId = data[i]._id;
									dataName = data[i].Tragosconpisco.Nombre;
									optgroupLabel = data[i].Tragosconpisco.Categoria;
									precio = data[i].Tragosconpisco.Precio;
									template += "<option value='"+precio+"'>"+
													dataName +
												"</option>"
								}
								
								optgroup = "<optgroup label='"+optgroupLabel+"'>"+
											template
											"</optgroup>"

								$(".selectPlatosMesasList").append(optgroup);
							}

							var APIBEBIDA4 = "administracion/bebidaslist/Tragosconvodka";
							$.getJSON(APIBEBIDA4, bebida4, false);

							function bebida4(data) {
								var template = "";
								var optgroup = "";
								var dataId;
								var optgroupLabel = "";
								var precio = "";
								for(var i = 0; i < data.length; i++) {
									dataId = data[i]._id;
									dataName = data[i].Tragosconvodka.Nombre;
									optgroupLabel = data[i].Tragosconvodka.Categoria;
									precio = data[i].Tragosconvodka.Precio;
									template += "<option value='"+precio+"'>"+
													dataName +
												"</option>"
								}
								
								optgroup = "<optgroup label='"+optgroupLabel+"'>"+
											template
											"</optgroup>"

								$(".selectPlatosMesasList").append(optgroup);
							}

							var APIBEBIDA5 = "administracion/bebidaslist/Tragosron";
							$.getJSON(APIBEBIDA5, bebida5, false);

							function bebida5(data) {
								var template = "";
								var optgroup = "";
								var dataId;
								var optgroupLabel = "";
								var precio = "";
								for(var i = 0; i < data.length; i++) {
									dataId = data[i]._id;
									dataName = data[i].Tragosconron.Nombre;
									optgroupLabel = data[i].Tragosconron.Categoria;
									precio = data[i].Tragosconron.Precio;
									template += "<option value='"+precio+"'>"+
													dataName +
												"</option>"
								}
								
								optgroup = "<optgroup label='"+optgroupLabel+"'>"+
											template
											"</optgroup>"

								$(".selectPlatosMesasList").append(optgroup);
							}

							var APIBEBIDA6 = "administracion/bebidaslist/Vinosblancos";
							$.getJSON(APIBEBIDA6, bebida6, false);

							function bebida6(data) {
								var template = "";
								var optgroup = "";
								var dataId;
								var optgroupLabel = "";
								var precio = "";
								for(var i = 0; i < data.length; i++) {
									dataId = data[i]._id;
									dataName = data[i].Vinosblancos.Nombre;
									optgroupLabel = data[i].Vinosblancos.Categoria;
									precio = data[i].Vinosblancos.Precio;
									template += "<option value='"+precio+"'>"+
													dataName +
												"</option>"
								}
								
								optgroup = "<optgroup label='"+optgroupLabel+"'>"+
											template
											"</optgroup>"

								$(".selectPlatosMesasList").append(optgroup);
							}

							var APIBEBIDA7 = "administracion/bebidaslist/Espumantes";
							$.getJSON(APIBEBIDA7, bebida7, false);

							function bebida7(data) {
								var template = "";
								var optgroup = "";
								var dataId;
								var optgroupLabel = "";
								var precio = "";
								for(var i = 0; i < data.length; i++) {
									dataId = data[i]._id;
									dataName = data[i].Espumantes.Nombre;
									optgroupLabel = data[i].Espumantes.Categoria;
									precio = data[i].Espumantes.Precio;
									template += "<option value='"+precio+"'>"+
													dataName +
												"</option>"
								}
								
								optgroup = "<optgroup label='"+optgroupLabel+"'>"+
											template
											"</optgroup>"

								$(".selectPlatosMesasList").append(optgroup);
							}

							var APIBEBIDA8 = "administracion/bebidaslist/Espumantes";
							$.getJSON(APIBEBIDA8, bebida8, false);

							function bebida8(data) {
								var template = "";
								var optgroup = "";
								var dataId;
								var optgroupLabel = "";
								var precio = "";
								for(var i = 0; i < data.length; i++) {
									dataId = data[i]._id;
									dataName = data[i].Tragoscontequila.Nombre;
									optgroupLabel = data[i].Tragoscontequila.Categoria;
									precio = data[i].Tragoscontequila.Precio;
									template += "<option value='"+precio+"'>"+
													dataName +
												"</option>"
								}
								
								optgroup = "<optgroup label='"+optgroupLabel+"'>"+
											template
											"</optgroup>"

								$(".selectPlatosMesasList").append(optgroup);
							}

							var APIBEBIDA9 = "administracion/bebidaslist/Medidawhisky";
							$.getJSON(APIBEBIDA9, bebida9, false);

							function bebida9(data) {
								var template = "";
								var optgroup = "";
								var dataId;
								var optgroupLabel = "";
								var precio = "";
								for(var i = 0; i < data.length; i++) {
									dataId = data[i]._id;
									dataName = data[i].Medidawhisky.Nombre;
									optgroupLabel = data[i].Medidawhisky.Categoria;
									precio = data[i].Medidawhisky.Precio;
									template += "<option value='"+precio+"'>"+
													dataName +
												"</option>"
								}
								
								optgroup = "<optgroup label='"+optgroupLabel+"'>"+
											template
											"</optgroup>"

								$(".selectPlatosMesasList").append(optgroup);
							}

							var APIBEBIDA10 = "administracion/bebidaslist/Vinostintos";
							$.getJSON(APIBEBIDA10, bebida10, false);

							function bebida10(data) {
								var template = "";
								var optgroup = "";
								var dataId;
								var optgroupLabel = "";
								var precio = "";
								for(var i = 0; i < data.length; i++) {
									dataId = data[i]._id;
									dataName = data[i].Vinostintos.Nombre;
									optgroupLabel = data[i].Vinostintos.Categoria;
									precio = data[i].Vinostintos.Precio;
									template += "<option value='"+precio+"'>"+
													dataName +
												"</option>"
								}
								
								optgroup = "<optgroup label='"+optgroupLabel+"'>"+
											template
											"</optgroup>"

								$(".selectPlatosMesasList").append(optgroup);
							}


							
					}

					platosSalon();

					
	
			}

			pedidosMesas();

			var pedidosMas = 
					"<div class='aside--Form--Fieldset conSumSet'>" +

							"<div class='fieldset--Iz'>"+

			                 "<label class='title'>+ Pedido</label>"+
			                 "</div>"+

			                "<div class='fieldset--De'>"+
			                 "<select name='jsPedidoMas' class='selectPlatosMesasList'>"+
			                        "<option value='Selecciona'>Selecciona</option>" +
			                  "</select>" +
			                "</div>" +
			         "</div>";
			
			var a = $(".agregar").append(pedidosMas);
			

						$(".selectPlatosMesasList").change(function(){
							
							$(".selectPlatosMesasList option:selected").each(function(){
								 pedidoEdit = $(this).text() + " ";
								 precioPedido = $(this).val();
							});

							pollolabel = $('.selectPlatosMesasList :selected').parent().attr('label');
							
							
						});


		});

		$(".jsDeleteP").on('click', function(){
			
			if($(".conSumSet")){
				$(".conSumSet").remove();
			}
			else {

			}
			
			//aqui me deje trabajando...

			var idPlatosAcutales = $(".title--DataId").text();

			APIPEDIDO = "pedidos/pedidounico/" + idPlatosAcutales;

			$.getJSON(APIPEDIDO, comidas, false);
			function comidas(data){
				var pedidosAdicionales = data[0].Pedido;
				

				console.log(pedidosAdicionales);
				
				var pedidoEliminar = 
					"<div class='aside--Form--Fieldset conSumSet'>" +

							"<div class='fieldset--Iz'>"+

			                 "<label class='title'>- Eliminar</label>"+
			                 "</div>"+

			                "<div class='fieldset--De'>"+
			                 "<select name='jsPedidoMas' class='selectPlatosMesasList'>"+
			                        "<option value='Selecciona'>Selecciona</option>" +
			                  "</select>" +
			                "</div>" +
			         "</div>";
			     $(".deletePedido").append(pedidoEliminar);
			}

		});



		
	}
	roomPedidos();




	function saveModify() {

		$(".editPedido").click(function(e){
			var id = $(".asi--Form-Header .title--DataId").text();
			var txtSucess = $(".jsMesaTT").text();
			var descuento = $(".aside--Form--Fieldset .fieldset--De input[name='descuento']").val();
			var metodoPago = $(".selectPagos").val();
			var comentarios = $("#comentarios").val();
			
			$(".conSumSet").remove();
			
			e.preventDefault();
			
			if(pollolabel == "Polloalabrasa"){
					
				$.when(

					$.ajax({
					url: "mesas/edit/" + id,
					type: "POST",
					dataType: "JSON",
					contentType: "application/json",
					data: JSON.stringify({
						pedidosCant: precioPedido,
						precio: pedidoEdit,
						descuento: descuento,
						metodoPago: metodoPago,
						comentarios: comentarios
					}),
					success: function(data) {
						$(".headerNotify").fadeIn();
						$(".headerNotify .success .title .mesaNum").text(txtSucess);

						setTimeout(function(){
							$(".headerNotify").fadeOut();
						}, 1000);

					},
					error: function(err) {
						console.log(err);
					}
					}),


					$.ajax({
					url: "apipollos/save",
					type: "POST",
					dataType: "JSON",
					contentType: "application/json",
					data: JSON.stringify({
						precio: precioPedido,
						pedido: pedidoEdit,
						mesa: $(".jsEditPedidos .jsMesaTT").text(),
						comentarios: comentarios
					}),
					success: function(data) {
						$(".headerNotify").fadeIn();
						$(".headerNotify .success .title .mesaNum").text(txtSucess);

						setTimeout(function(){
							$(".headerNotify").fadeOut();
						}, 1000);

					},
					error: function(err) {
						console.log(err);
					}
					})


				).then(function(){
					
				});

			}
			else {

				$.ajax({
					url: "mesas/edit/" + id,
					type: "POST",
					dataType: "JSON",
					contentType: "application/json",
					data: JSON.stringify({
						pedidosCant: precioPedido,
						precio: pedidoEdit,
						descuento: descuento,
						metodoPago: metodoPago,
						comentarios: comentarios
					}),
					success: function(data) {
						$(".headerNotify").fadeIn();
						$(".headerNotify .success .title .mesaNum").text(txtSucess);

						setTimeout(function(){
							$(".headerNotify").fadeOut();
						}, 1000);

					},
					error: function(err) {
						console.log(err);
					}
					});

			}

			
			

		


		});




	}
	saveModify();


	function ticket(){
		$(".jsEditPedidos .sendPrint").click(function(){
		
			var a = $(".asi--Form-Header .title--DataId").text();
			
			//$(".impresionMesaCerrada").css('display','block');

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
			var resultadoFecha = "El " + dia + " de " + mes  + " del " + ano;


			var API = "pedidos/ticket/" + a;
			var templateTicketOne = "";
				var ticketNumber = "";
				var ticketMesa = "";
				var tiketPersonas = "";
				var ticketPrimaryPedido = "";
				var ticketPrimaryPedidoPrice = "";
				var ticketMozo = "";
				var ticketHora = "";
				var ticketFecha = "";
				var ticketPedidosAdicionales = "";
				var ticketMas = "";	
				var ticketMasPedido = "";
				var ticketMasPrecio = "";
				var sumaTickets = 0;
				var total = 0;
				var suma1 = 0;
				var suma2 = 0;
				var descuento;
				var descuentoDel;
				var resultadoDescuento;
				var formula;
				var formulaOne;
				var formulaDos;
				var tipodepago;
			var templateTicketTwo = "";
			

			
			if(a.length > 1) {
				//alert('ingrese');
				//$(".impresionMesaCerrada").css('display','block');
				$.getJSON(API, ticket, false);
				function ticket(data) {


					for(var i = 0; i < data.length; i++) {
						
						if(data[i].Adicionales) {

							ticketNumber = data[i]._id;
							ticketMesa = data[i].Mesa;
							tiketPersonas = data[i].Personas;
							ticketPrimaryPedido = data[i].Pedido;
							ticketPrimaryPedidoPrice = data[i].Precio;
							ticketMozo = data[i].Mozo;
							ticketHora = data[i].Hora;
							ticketFecha = data[i].Fecha;
							tipodepago = data[i].MetodoPago;
							$(".imprension--Cont--Pagos .title").text(tipodepago);
							
							ticketPedidosAdicionales = data[0].Adicionales;
					
							for(var a = 0; a < ticketPedidosAdicionales.length; a++) {
								ticketMasPedido = data[0].Adicionales[a].Pedido;
								ticketMasPrecio = data[0].Adicionales[a].Precio;
								suma1 = Number(ticketPedidosAdicionales[a].Precio);
								suma2 = ticketPrimaryPedidoPrice;
								descuento = data[0].Descuento;
								
								if(descuento){
									
									descuentoDel = descuento;
								}
								else {
									$(".imprension--Cont--Descuento").remove();
									$(".imprension--Cont--Total-Descuento").remove();
								}

								total += suma1;
								var totalDefinity = total + suma2;

								ticketMas += "<div class='imprension--Cont--Description-Mas'>"+
									                  "<div class='cont--Iz'>" +
									                      "<span class='titleProduct'>" +
									                      ticketMasPedido +
									                      "</span>"+
									                  "</div>"+
									                  "<div class='cont--De'>"+
									                  		"<span class='titleTotall'>"+
									                  		"$"+ticketMasPrecio +
									                  		"</span>"+
									                  "</div>"+
									            "</div>";
							}

								//To implement is ticket
								$(".imprension--Mesa .title--Mesa").text(ticketMesa);
								$(".numTicket .titleTicket").text(ticketNumber);
								$(".imprension--Cont--Description .cont--Iz .titleProduct").text(ticketPrimaryPedido);
								$(".imprension--Cont--Description .con--De .titleTotall").text("$"+ticketPrimaryPedidoPrice);
								$(".imprension--Cont--Description-Cont").html(ticketMas);

								$(".imprension--Cont--Descuento .descuento .descuento--De .title").text("%" + descuentoDel);

								//To Add totall
								$(".totall .totall--De .title").text("$" + totalDefinity)
								//resultadoDescuento

								formula = (totalDefinity * descuentoDel);

								formulaOne = formula / 100;

								formulaDos = totalDefinity - formulaOne;

								$(".imprension--Cont--Total-Descuento .descuento .descuento--De .title").text("$" + formulaDos.toFixed(2));
								//formulaOne = 


								

								//to Add Fecha
								$(".imprension--Cont--Fecha--Abierto .fecha-Fecha--Abierto").text(ticketFecha + " " + ticketHora);
								$(".imprension--Cont--Fecha .fecha-Fecha").text(resultadoFecha);
								$(".imprension--Cont--Fecha .fecha-Hora").text(" Hora: " +resultadoHora);

								
								$(".background--Mesa").css('display','block');
								$(".jsTicket").css('display','block');
						
						}
						else {
							//Active background and ticket
							//Ingresa mesa sola d
							tipodepago = data[0].MetodoPago;
							$(".imprension--Cont--Pagos .title").text(tipodepago);

							$(".background--Mesa").css('display','block');
						    $(".jsTicket").css('display','block');


						    //variables in body
						    ticketNumber = data[i]._id;
						    ticketMesa = data[i].Mesa;
						    descuento = data[0].Descuento;




						    if(descuento){
									alert('tengo descuento');
									descuentoDel = descuento;
									alert(descuentoDel);
								}
								else {
									$(".imprension--Cont--Descuento").remove();
									$(".imprension--Cont--Total-Descuento").remove();
								}

						    ticketPrimaryPedido = data[i].Pedido;
							ticketPrimaryPedidoPrice = data[i].Precio;

							formula = (ticketPrimaryPedidoPrice * descuentoDel);

							formulaOne = formula / 100;

							formulaDos = ticketPrimaryPedidoPrice - formulaOne;

							$(".imprension--Cont--Descuento .descuento .descuento--De .title").text("%" + descuentoDel);

							$(".imprension--Cont--Total-Descuento .descuento .descuento--De .title").text("$" + formulaDos.toFixed(2));

						    //insert variables in to html
						    $(".numTicket .titleTicket").text(ticketNumber);
						    $(".imprension--Mesa .title--Mesa").text(ticketMesa);

						    $(".imprension--Cont--Description .cont--Iz .titleProduct").text(ticketPrimaryPedido);
							$(".imprension--Cont--Description .con--De .titleTotall").text("$"+ticketPrimaryPedidoPrice);

							$(".totall .totall--De .title").text("$" + ticketPrimaryPedidoPrice)

							$(".imprension--Cont--Fecha--Abierto .fecha-Fecha--Abierto").text(data[i].Fecha + " " + data[i].Hora);
							$(".imprension--Cont--Fecha .fecha-Fecha").text(resultadoFecha);
								$(".imprension--Cont--Fecha .fecha-Hora").text(" Hora: " +resultadoHora);
						}
					} 
				}
			}
			else {
				$(".background--Error").fadeIn('slow');
				setTimeout(function(){
					$(".background--Error").fadeOut('slow');
				}, 200);
			}


		});
	}
	ticket();

	function cocinaticket(){
		$(".jsEditPedidos .cocinaPrint").click(function(){
		
			var a = $(".asi--Form-Header .title--DataId").text();
			
			//$(".impresionMesaCerrada").css('display','block');

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
			var resultadoFecha = "El " + dia + " de " + mes  + " del " + ano;


			var API = "pedidos/ticket/" + a;
			var templateTicketOne = "";
				var ticketNumber = "";
				var ticketMesa = "";
				var tiketPersonas = "";
				var ticketPrimaryPedido = "";
				var ticketPrimaryPedidoPrice = "";
				var ticketMozo = "";
				var ticketHora = "";
				var ticketFecha = "";
				var ticketPedidosAdicionales = "";
				var ticketMas = "";	
				var ticketMasPedido = "";
				var ticketMasPrecio = "";
				var sumaTickets = 0;
				var total = 0;
				var suma1 = 0;
				var suma2 = 0;
				var descuento;
				var descuentoDel;
				var resultadoDescuento;
				var formula;
				var formulaOne;
				var formulaDos;
				var tipodepago;
				var comentarios;
				var mozo;
			var templateTicketTwo = "";
			

			
			if(a.length > 1) {
				//alert('ingrese');
				//$(".impresionMesaCerrada").css('display','block');
				$.getJSON(API, ticket, false);
				function ticket(data) {


					for(var i = 0; i < data.length; i++) {
						
						if(data[i].Adicionales) {

							ticketNumber = data[i]._id;
							ticketMesa = data[i].Mesa;
							tiketPersonas = data[i].Personas;
							ticketPrimaryPedido = data[i].Pedido;
							ticketPrimaryPedidoPrice = data[i].Precio;
							ticketMozo = data[i].Mozo;
							ticketHora = data[i].Hora;
							ticketFecha = data[i].Fecha;
							tipodepago = data[i].MetodoPago;
							comentarios= data[0].Comentarios;
							mozo = data[0].Mozo;
							//$(".imprension--Cont--Pagos .title").text(tipodepago);
							
							ticketPedidosAdicionales = data[0].Adicionales;
					
							for(var a = 0; a < ticketPedidosAdicionales.length; a++) {
								ticketMasPedido = data[0].Adicionales[a].Pedido;
								ticketMasPrecio = data[0].Adicionales[a].Precio;
								suma1 = Number(ticketPedidosAdicionales[a].Precio);
								suma2 = ticketPrimaryPedidoPrice;
								descuento = data[0].Descuento;
								
								if(descuento){
									
									descuentoDel = descuento;
								}
								else {
									$(".imprension--Cont--Descuento").remove();
									$(".imprension--Cont--Total-Descuento").remove();
								}

								total += suma1;
								var totalDefinity = total + suma2;

								ticketMas += "<div class='imprension--Cont--Description-Mas'>"+
									                  "<div class='cont--Iz--De'>" +
									                      "<span class='titleProduct'>"+
									                      "1 - Enviar " + ticketMasPedido +
									                      "</span>"+
									                  "</div>"+
									                  
									            "</div>";
							}

								//To implement is ticket
								$(".imprension--Mesa .title--Mesa").text(ticketMesa);
								$(".numTicket .titleTicket").text(ticketNumber);
								$(".imprension--Cont--Description .cont--Iz .titleProduct").text("1 - Enviar " + ticketPrimaryPedido);
								$(".imprension--Cont--Description .con--De .titleTotall").text("$"+ticketPrimaryPedidoPrice);
								$(".imprension--Cont--Description-Cont").html(ticketMas);

								$(".imprension--Cont--Descuento .descuento .descuento--De .title").text("%" + descuentoDel);

								//To Add totall
								$(".totall .totall--De .title").text("$" + totalDefinity)
								//resultadoDescuento

								formula = (totalDefinity * descuentoDel);

								formulaOne = formula / 100;

								formulaDos = totalDefinity - formulaOne;

								$(".imprension--Cont--Total-Descuento .descuento .descuento--De .title").text("$" + formulaDos.toFixed(2));
								//formulaOne = 


								

								//to Add Fecha
								$(".imprension--Cont--Fecha--Abierto .fecha-Fecha--Abierto").text(ticketFecha + " " + ticketHora);
								$(".imprension--Cont--Fecha .fecha-Fecha").text(resultadoFecha);
								$(".imprension--Cont--Fecha .fecha-Hora").text(" Hora: " +resultadoHora);

								
								$(".background--Mesa").css('display','block');
								$(".jsCocina").css('display','block');
								//alert(comentarios);
								$(".jsComentarios").html(comentarios);
								$(".jsaddMozo").html(mozo);
						}
						else {
							//Active background and ticket
							//Ingresa mesa sola d
							tipodepago = data[0].MetodoPago;
							mozo = data[0].Mozo;
							$(".imprension--Cont--Pagos .title").text(tipodepago);

							$(".background--Mesa").css('display','block');
						    $(".jsCocina").css('display','block');

						    comentarios= data[0].Comentarios;
							$(".jsaddMozo").html(mozo);
							//alert(comentarios);
						    $(".jsComentarios").html(comentarios);
						    //variables in body
						    ticketNumber = data[i]._id;
						    ticketMesa = data[i].Mesa;
						    descuento = data[0].Descuento;




						    if(descuento){
									descuentoDel = descuento;
									
								}
								else {
									$(".imprension--Cont--Descuento").remove();
									$(".imprension--Cont--Total-Descuento").remove();
								}

						    ticketPrimaryPedido = data[i].Pedido;
							ticketPrimaryPedidoPrice = data[i].Precio;

							formula = (ticketPrimaryPedidoPrice * descuentoDel);

							formulaOne = formula / 100;

							formulaDos = ticketPrimaryPedidoPrice - formulaOne;

							$(".imprension--Cont--Descuento .descuento .descuento--De .title").text("%" + descuentoDel);

							$(".imprension--Cont--Total-Descuento .descuento .descuento--De .title").text("$" + formulaDos.toFixed(2));

						    //insert variables in to html
						    $(".numTicket .titleTicket").text(ticketNumber);
						    $(".imprension--Mesa .title--Mesa").text(ticketMesa);

						    $(".imprension--Cont--Description .cont--Iz .titleProduct").text("Enviar " + ticketPrimaryPedido);
							$(".imprension--Cont--Description .con--De .titleTotall").text("$"+ticketPrimaryPedidoPrice);

							$(".totall .totall--De .title").text("$" + ticketPrimaryPedidoPrice)

							$(".imprension--Cont--Fecha--Abierto .fecha-Fecha--Abierto").text(data[i].Fecha + " " + data[i].Hora);
							$(".imprension--Cont--Fecha .fecha-Fecha").text(resultadoFecha);
								$(".imprension--Cont--Fecha .fecha-Hora").text(" Hora: " +resultadoHora);
						}
					} 
				}
			}
			else {
				$(".background--Error").fadeIn('slow');
				setTimeout(function(){
					$(".background--Error").fadeOut('slow');
				}, 200);
			}


		});
	}
	cocinaticket();



	
	function ticketPrint(){

		$(".sendImprimir").click(function(){
			setTimeout(function(){
				window.print()
			}, 10);
		});

		$(".sendHome").click(function(){
			setTimeout(function(){
				window.location.href = "http://128.199.86.176:8080/panel";
			}, 20)
		});

		$(".sendGuardar").click(function(e){
			e.preventDefault();
			var mesaDeleteAnPedido = $(".imprension--Mesa .jsMesaDelete").text();
			//alert(mesaDeleteAnPedido);
			var url = "pedidos/deletemesas/" + mesaDeleteAnPedido;
			$.when(
				$.ajax({
					url: "ventas/save",
					type: "POST",
					dataType: "JSON",
					contentType: "application/json",
					data: JSON.stringify({
						codigo: $(".numTicket .titleTicket").text(),
						mesa: $(".imprension--Mesa .jsMesaAdd").text(),
						hora: $(".imprension--Cont--Fecha .fecha-Hora").text(),
						fecha: $(".imprension--Cont--Fecha .fecha-Fecha").text(),
						total: $(".totall .totall--De .title").text(),
						metodoPago: $(".imprension--Cont--Pagos .jsPagosText").text(),
						descuento: $(".imprension--Cont--Descuento .descuento .descuento--De .title").text(),
						descuentoTotal: $(".imprension--Cont--Total-Descuento .descuento .descuento--De .title").text()
					}),
					success: function(data){
						alert('La mesa se libero y se guardo en el reporte gracias');
						setTimeout(function(){
							window.location.href = "http://128.199.86.176:8080/panel";
						}, 200)
					},
					error: function(err){
						alert('hubo un error');
					}
				}),
					
					$.ajax({
						url: url,
						type: "POST",
						contentType: 'application/json',
						success: function() {
							alert('borrado');
							window.location.href = "/";
						},
						error: function(err){
							alert('error');
						}
					})


			).then(function(){

			});
		});

	}
	ticketPrint();
	




});