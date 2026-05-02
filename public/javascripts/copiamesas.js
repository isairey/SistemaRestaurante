$(document).ready(function(){

	var cantPedidos = " "; 
	var pedido = "";

	function addPedidos(){
		var API = "pedidos/show";
		$.getJSON(API, success, false);

		function success(data) {

			var template = "";
			var Adicionales;

			for(var i = 0; i < data.length; i++) {
				var dataPedidos = data[i].Adicionales;
				Adicionales = data[i].Adicionales;
				
				


				var mesa = data[i].Mesa;
			    var pedido = data[i].Pedido;
			    var mozo = data[i].Mozo;
			    var fecha = data[i].Hora;
			    var id = data[i]._id;
			    var dataOkey = "Si";
			    var persona = data[i].Personas;

				template += "<div class='details mesasSelect'>" +
 						   		"<div class='details--Name'>"+
 						   			"<span class='persona' style='display:none;'>"+persona+"</span>"+
 						   			"<span class='id' style='display:none;'>"+id+"</span>"+
 						   			"<span class='title'>"+mesa+"</span>"+
 						   		"</div>"+
 						   		"<div class='details--Email jsPedido'>"+
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
			}

			if(Adicionales) {
				for(var i = 0; i < Adicionales.length; i++) {
					console.log(Adicionales[i]);
					if(Adicionales[i].PedidosCant) {
						console.log('a');
					}

				}
			}
			
			$(".jsMesasAdd").html(template);

			//to modify pedidos
			$(".mesasSelect").click(function(){
				var id = $(this).find('.details--Name .id').text();
				var mesa = $(this).find('.details--Name .title').text();
				var personas = $(this).find('.details--Name .persona').text();
				var pedido = $(this).find('.jsPedido .title').text();
				var moso = $(this).find('.details--Celu .title').text();
				//alert(id);
				$(".jsMesaTT").text(mesa);
				//alert(pedido);

				$(".jsEditPedidos .idTitle").text(id);
				$(".jsEditPedidos input[name='jsPersonas']").val(personas);
				
				
				var templateMesa = "<option value="+moso+">"+
								moso
								+"</option>";

				var template = "<option value="+pedido+">"+
								pedido
								+"</option>";
				$(".jsEditPedidos select[name='jsPedidoActual']").html(template);

				$(".selectMozo").html(templateMesa);

				//to class}
				//unbind, siblings, 
				$(this).addClass('itemSelect').siblings().removeClass('itemSelect');

			
			});
			
		}


	}
	addPedidos();

	


	





	function roomPedidos(){
		
		

		$(".contSum label .title--Ad").on('click', function(){
			

			function pedidosMesas() {
		function platosSalon() {
		
				var APIBEBIDAS = "administracion/platoslist/bebidas";

				$.getJSON(APIBEBIDAS, bebidas, false);

				function bebidas(data) {
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
						template += "<option class='optionMesas' value='"+precio+"'>"+
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

		function platosEntradas() {
		
				var APIBEBIDAS = "administracion/platoslist/entradas";

				$.getJSON(APIBEBIDAS, entradas, false);

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
						precio = data[i].Entradas.Precio
						template += "<option class='optionMesas' value='"+precio+"'>"+
										dataName +
									"</option>"
					}
					optgroup = "<optgroup label='"+optgroupLabel+"'>"+
								template
								"</optgroup>"

					$(".selectPlatosMesasList").append(optgroup);
				}

				

		}

		platosEntradas();

		function platosMenus() {
		
				var APIBEBIDAS = "administracion/platoslist/menus";

				$.getJSON(APIBEBIDAS, menus, false);

				function menus(data) {
					var template = "";
					var optgroup = "";
					var dataId;
					var optgroupLabel = "";
					var precio = "";
					for(var i = 0; i < data.length; i++) {
						dataId = data[i]._id;
						dataName = data[i].Menus.Nombre;
						optgroupLabel = data[i].Menus.Categoria;
						precio = data[i].Menus.Precio;
						template += "<option class='optionMesas' value='"+precio+"'>"+
										dataName +
									"</option>"
					}
					optgroup = "<optgroup label='"+optgroupLabel+"'>"+
								template
								"</optgroup>"

					$(".selectPlatosMesasList").append(optgroup);
				}

				

		}

		platosMenus();


		function platosCarta() {
		
				var APIBEBIDAS = "administracion/platoslist/platoscarta";

				$.getJSON(APIBEBIDAS, carta, false);

				function carta(data) {
					var template = "";
					var optgroup = "";
					var dataId;
					var optgroupLabel = "";
					var precio = "";
					for(var i = 0; i < data.length; i++) {
						dataId = data[i]._id;
						dataName = data[i].carta.Nombre;
						optgroupLabel = data[i].carta.Categoria;
						precio = data[i].carta.Precio;
						template += "<option class='optionMesas' value='"+precio+"'>"+
										dataName +
									"</option>"
					}
					optgroup = "<optgroup label='"+optgroupLabel+"'>"+
								template
								"</optgroup>"

					$(".selectPlatosMesasList").append(optgroup);
				}

				

		}

		platosCarta();
	
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

			cant = $(".conSumSet");

			

			$(".selectPlatosMesasList").change(function(){
				
				$(".selectPlatosMesasList option:selected").each(function(){
					 pedido = $(this).text() + " ";
				});

				
			});

		});

		
	}
	roomPedidos();



	function saveModify() {

		
		



		$(".editPedido").click(function(e){

			e.preventDefault();
			
			var pedidosCantidad = "";
			var pedidoAdicional = "";
			var valueSelect = "";
			var title = "PedidosAdicionales"
			var contTitle = "";
			for( var i = 0; i < cant.length; i++) {

				var a = cant[i];
				contTitle = title + [i];
				pedidoAdicional = "PedidoAdicional";
				valueSelect += $(a).find("select[name='jsPedidoMas'] option:selected").text();
				
			}

			var id = $(".idTitle").text();
			$.ajax({
				url: "mesas/edit/" + id,
				type: "POST",
				dataType: "JSON",
				contentType: "application/json",
				data: JSON.stringify({
					mesa: $(".jsEditPedidos .jsMesaTT").text(),
					personas: $(".jsEditPedidos input[name='jsPersonas']").val(),
					pedido: $(".jsEditPedidos select[name='jsPedidoActual']").val(),
					pedidosCant0: {
						Pedido: $(".jsEditPedidos .conSumSet:first-child .selectPlatosMesasList option:selected").html(),
						Precio: $(".jsEditPedidos .conSumSet:first-child select[name='jsPedidoMas']").val()
					},
					pedidosCant1: {
						Pedido: $(".jsEditPedidos .conSumSet:first-child .selectPlatosMesasList option:selected").html(),
						Precio: $(".jsEditPedidos .conSumSet:first-child select[name='jsPedidoMas']").val()
					},
					pedidosCant2: {
						Pedido: $(".jsEditPedidos .conSumSet:nth-child(2) .selectPlatosMesasList option:selected").html(),
						Precio: $(".jsEditPedidos .conSumSet:nth-child(2) select[name='jsPedidoMas']").val()
					},
					pedidosCant3: {
						Pedido: $(".jsEditPedidos .conSumSet:nth-child(3) .selectPlatosMesasList option:selected").html(),
						Precio: $(".jsEditPedidos .conSumSet:nth-child(3) select[name='jsPedidoMas']").val()
					},
					pedidosCant4: {
						Pedido: $(".jsEditPedidos .conSumSet:nth-child(4) .selectPlatosMesasList option:selected").html(),
						Precio: $(".jsEditPedidos .conSumSet:nth-child(4) select[name='jsPedidoMas']").val()
					},
					pedidosCant5: {
						Pedido: $(".jsEditPedidos .conSumSet:nth-child(5) .selectPlatosMesasList option:selected").html(),
						Precio: $(".jsEditPedidos .conSumSet:nth-child(5) select[name='jsPedidoMas']").val()
					},
					pedidosCant6: {
						Pedido: $(".jsEditPedidos .conSumSet:nth-child(6) .selectPlatosMesasList option:selected").html(),
						Precio: $(".jsEditPedidos .conSumSet:nth-child(6) select[name='jsPedidoMas']").val()
					},
					pedidosCant7: {
						Pedido: $(".jsEditPedidos .conSumSet:nth-child(7) .selectPlatosMesasList option:selected").html(),
						Precio: $(".jsEditPedidos .conSumSet:nth-child(7) select[name='jsPedidoMas']").val()
					},
					pedidosCant8: {
						Pedido: $(".jsEditPedidos .conSumSet:nth-child(8) .selectPlatosMesasList option:selected").html(),
						Precio: $(".jsEditPedidos .conSumSet:nth-child(8) select[name='jsPedidoMas']").val()
					},
					pedidosCant9: {
						Pedido: $(".jsEditPedidos .conSumSet:nth-child(9) .selectPlatosMesasList option:selected").html(),
						Precio: $(".jsEditPedidos .conSumSet:nth-child(9) select[name='jsPedidoMas']").val()
					},
					pedidosCant10: {
						Pedido: $(".jsEditPedidos .conSumSet:nth-child(10) .selectPlatosMesasList option:selected").html(),
						Precio: $(".jsEditPedidos .conSumSet:nth-child(10) select[name='jsPedidoMas']").val()
					},
					pedidosCant11: {
						Pedido: $(".jsEditPedidos .conSumSet:nth-child(11) .selectPlatosMesasList option:selected").html(),
						Precio: $(".jsEditPedidos .conSumSet:nth-child(11) select[name='jsPedidoMas']").val()
					},
					pedidosCant12: {
						Pedido: $(".jsEditPedidos .conSumSet:nth-child(12) .selectPlatosMesasList option:selected").html(),
						Precio: $(".jsEditPedidos .conSumSet:nth-child(12) select[name='jsPedidoMas']").val()
					},
					pedidosCant13: {
						Pedido: $(".jsEditPedidos .conSumSet:nth-child(13) .selectPlatosMesasList option:selected").html(),
						Precio: $(".jsEditPedidos .conSumSet:nth-child(13) select[name='jsPedidoMas']").val()
					},
					pedidosCant14: {
						Pedido: $(".jsEditPedidos .conSumSet:nth-child(14) .selectPlatosMesasList option:selected").html(),
						Precio: $(".jsEditPedidos .conSumSet:nth-child(14) select[name='jsPedidoMas']").val()
					},
					pedidosCant15: {
						Pedido: $(".jsEditPedidos .conSumSet:nth-child(15) .selectPlatosMesasList option:selected").html(),
						Precio: $(".jsEditPedidos .conSumSet:nth-child(15) select[name='jsPedidoMas']").val()
					},
					pedidosCant16: {
						Pedido: $(".jsEditPedidos .conSumSet:nth-child(16) .selectPlatosMesasList option:selected").html(),
						Precio: $(".jsEditPedidos .conSumSet:nth-child(16) select[name='jsPedidoMas']").val()
					},
					pedidosCant17: {
						Pedido: $(".jsEditPedidos .conSumSet:nth-child(17) .selectPlatosMesasList option:selected").html(),
						Precio: $(".jsEditPedidos .conSumSet:nth-child(17) select[name='jsPedidoMas']").val()
					},
					pedidosCant18: {
						Pedido: $(".jsEditPedidos .conSumSet:nth-child(18) .selectPlatosMesasList option:selected").html(),
						Precio: $(".jsEditPedidos .conSumSet:nth-child(18) select[name='jsPedidoMas']").val()
					},
					pedidosCant19: {
						Pedido: $(".jsEditPedidos .conSumSet:nth-child(19) .selectPlatosMesasList option:selected").html(),
						Precio: $(".jsEditPedidos .conSumSet:nth-child(19) select[name='jsPedidoMas']").val()
					},
					pedidosCant20: {
						Pedido: $(".jsEditPedidos .conSumSet:nth-child(20) .selectPlatosMesasList option:selected").html(),
						Precio: $(".jsEditPedidos .conSumSet:nth-child(20) select[name='jsPedidoMas']").val()
					},
					mozo: $(".jsEditPedidos select[name='jsMozo']").val()
				}),
				success: function(data) {
					alert('done');
					//alert(cant);
					
				},
				error: function(err) {
					alert('fail');
				}
			});
			



		});


	}
	saveModify();
	


});