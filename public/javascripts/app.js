$(document).ready(function(){

	function saveMozos(){
		$(".jsFormMozos").submit(function(e){
			e.preventDefault();

			$.ajax({

				url: 'addmozos',
				type: 'POST',
				dataType: 'JSON',
				contentType: 'application/json',
				data: JSON.stringify({
					nombre: $(".inputNombre").val(),
					email: $(".inputEmail").val(),
					celular: $(".inputCel").val()
				}),
				success: function(data){
					$(".jsHide").fadeOut();
					$(".cssPreload").css('display','block');
					$(".cssPreload .cssPreload--Header").css('display','none');
					setTimeout(function(){
						$(".cssPreload img").css('display','none');
						$(".cssPreload .cssPreload--Header").css({'display':'block','padding':'1em 0;'});
					}, 2000);
					setTimeout(function(){
						window.location.reload();
					}, 2800);
				},
				error: function(err) {
					alert('hubo un error');
					console.log(err)
				}

			});

		});
	}
	saveMozos();

	if(window.location.pathname == "/administracion/mozos") {
			function addMozos(){
				var API = "mozoslist";
				$.getJSON(API, success, false);

				function success(data) {

					var template = "";
					for(var i = 0; i < data.length; i++) {

						var nombre = data[i].Nombre;
					    var email = data[i].Email;
					    var celular = data[i].Celular;
					    var dataOkey = "Si";

						template += "<div class='details'>" +
		 						   		"<div class='details--Name'>"+
		 						   			"<span class='title'>"+nombre+"</span>"+
		 						   		"</div>"+
		 						   		"<div class='details--Email'>"+
		 						   			"<span class='title'>"+email+"</span>"+
		 						   		"</div>"+
		 						   		"<div class='details--Celu'>"+
		 						   			"<span class='title'>"+celular+"</span>"+
		 						   		"</div>"+
		 						   		"<div class='details--Activo'>"+
		 						   			"<span class='title'>"+
		 						   			  dataOkey+
		 						   			"</span>"+
		 						   		"</div>"+
					               "</div>";
					}
					
					$(".jsMozosAdd").html(template);

					
				}
			}
			addMozos();
	
			function deleteMozos(){
					function addSelect(){
						var API = "mozoslist";

						$.getJSON(API, success, false);

						var template = "";

						function success(data) {
							
						
							for(var i = 0; i < data.length; i++) {
								template += "<option value="+data[i].Nombre+">"
											 + data[i].Nombre +
											"</option>";
							}

							$(".mozosDelete--Select").append(template);
						}
					}
					addSelect();

					function deleteSelect() {
						var str = "";

						$(".mozosDelete--Select").change(function(){
							
							$(".mozosDelete--Select option:selected").each(function(){
								 str += $(this).text() + " ";
							});
							
						});

						$(".jsFormMozosDelete").submit(function(e){
							
							
							$.ajax({
								url: 'mozoslist/' + str,
								type: 'POST',
								dataType: "html",
								contentType: 'application/json',
								success: function(data) {
									alert('eliminado');
								},
								error: function(err) {
									alert('error :(');
								}

							});

						})
					}
					deleteSelect();

			}
			deleteMozos();

	}

	

	function mozosSalon(){

		var API = "administracion/mozoslist";

		$.getJSON(API, success, false);

		function success(data) {
			//alert(data);
			var template = "";
			var Nombre;
			for(var i = 0; i < data.length; i++) {
				Nombre = data[i].Nombre;
				template += "<option value='"+Nombre+"'>"+
							 Nombre +
							"</option>";
			}

			$(".selectSalon").append(template);
		}

	}
	mozosSalon();

	function salonHomeSitePlatos() {
		

		function platosEntradas() {
		
				var APIBEBIDAS = "./administracion/platoslist/entradas";

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
						precio = data[i].Entradas.Precio;
						template += "<option data-precio='"+precio+"' value='"+dataName+"'>"+
										dataName +
									"</option>"
					}
					optgroup = "<optgroup label='"+optgroupLabel+"'>"+
								template
								"</optgroup>"

					$(".selectPlatosList").append(optgroup);
				}

				

		}

		platosEntradas();


		function platosCeviches() {
		
				var APICEVICHES = "./administracion/platoslist/ceviches";

				$.getJSON(APICEVICHES, ceviches, false);

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
						template += "<option data-precio='"+precio+"' value='"+dataName+"'>"+
										dataName +
									"</option>"
					}
					optgroup = "<optgroup label='"+optgroupLabel+"'>"+
								template
								"</optgroup>"

					$(".selectPlatosList").append(optgroup);
				}

				

		}

		platosCeviches();

		function platosTiraditos() {
		
				var APITIRADITOS = "./administracion/platoslist/tiraditos";

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
						template += "<option data-precio='"+precio+"' value='"+dataName+"'>"+
										dataName +
									"</option>"
					}
					optgroup = "<optgroup label='"+optgroupLabel+"'>"+
								template
								"</optgroup>"

					$(".selectPlatosList").append(optgroup);
				}

				

		}

		platosTiraditos();

		

		function platosLechedetigre() {
		
				var APILECHEDETIGRE = "./administracion/platoslist/lechedetigre";

				$.getJSON(APILECHEDETIGRE, leche, false);

				function leche(data) {
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
						template += "<option data-precio='"+precio+"' value='"+dataName+"'>"+
										dataName +
									"</option>"
					}
					optgroup = "<optgroup label='"+optgroupLabel+"'>"+
								template
								"</optgroup>"

					$(".selectPlatosList").append(optgroup);
				}

				

		}

		platosLechedetigre();

		function platosSudadoschupes() {
		
				var APISUDADOS = "./administracion/platoslist/sudadoschupes";

				$.getJSON(APISUDADOS, chupes, false);

				function chupes(data) {
					var template = "";
					var optgroup = "";
					var dataId;
					var optgroupLabel = "";
					var precio = "";
					for(var i = 0; i < data.length; i++) {
						dataId = data[i]._id;
						dataName = data[i].SudadosChupes.Nombre;
						optgroupLabel = data[i].SudadosChupes.Categoria;
						precio = data[i].SudadosChupes.Precio;
						template += "<option data-precio='"+precio+"' value='"+dataName+"'>"+
										dataName +
									"</option>"
					}
					optgroup = "<optgroup label='"+optgroupLabel+"'>"+
								template
								"</optgroup>"

					$(".selectPlatosList").append(optgroup);
				}

				

		}

		platosSudadoschupes();

		function platosSegundosMarinos() {
		
				var APISUDADOS = "./administracion/platoslist/segundosmarinos";

				$.getJSON(APISUDADOS, marinos, false);

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
						template += "<option data-precio='"+precio+"' value='"+dataName+"'>"+
										dataName +
									"</option>"
					}
					optgroup = "<optgroup label='"+optgroupLabel+"'>"+
								template
								"</optgroup>"

					$(".selectPlatosList").append(optgroup);
				}

				

		}

		platosSegundosMarinos();

		function platosChicharonesMarinos() {
		
				var APICHICHARONES = "./administracion/platoslist/chicharonesmarinos";

				$.getJSON(APICHICHARONES, chicharrones, false);

				function chicharrones(data) {
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
						template += "<option data-precio='"+precio+"' value='"+dataName+"'>"+
										dataName +
									"</option>"
					}
					optgroup = "<optgroup label='"+optgroupLabel+"'>"+
								template
								"</optgroup>"

					$(".selectPlatosList").append(optgroup);
				}

				

		}

		platosChicharonesMarinos();

		function platosTrilogias() {
		
				var APICHICHARONES = "./administracion/platoslist/trilogias";

				$.getJSON(APICHICHARONES, chicharrones, false);

				function chicharrones(data) {
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
						template += "<option data-precio='"+precio+"' value='"+dataName+"'>"+
										dataName +
									"</option>"
					}
					optgroup = "<optgroup label='"+optgroupLabel+"'>"+
								template
								"</optgroup>"

					$(".selectPlatosList").append(optgroup);
				}

				

		}

		platosTrilogias();

		function platosTacus() {
		
				var APITACU = "./administracion/platoslist/tacu";

				$.getJSON(APITACU, tacu, false);

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
						template += "<option data-precio='"+precio+"' value='"+dataName+"'>"+
										dataName +
									"</option>"
					}
					optgroup = "<optgroup label='"+optgroupLabel+"'>"+
								template
								"</optgroup>"

					$(".selectPlatosList").append(optgroup);
				}

				

		}

		platosTacus();


		function platosChicharrones() {
		
				var APICHICHARRONES = "./administracion/platoslist/chicharrones";

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
						template += "<option data-precio='"+precio+"' value='"+dataName+"'>"+
										dataName +
									"</option>"
					}
					optgroup = "<optgroup label='"+optgroupLabel+"'>"+
								template
								"</optgroup>"

					$(".selectPlatosList").append(optgroup);
				}

				

		}

		platosChicharrones();


		function platosGuarniciones() {
		
				var APIGUARNICIONES = "./administracion/platoslist/guarniciones";

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
						template += "<option data-precio='"+precio+"' value='"+dataName+"'>"+
										dataName +
									"</option>"
					}
					optgroup = "<optgroup label='"+optgroupLabel+"'>"+
								template
								"</optgroup>"

					$(".selectPlatosList").append(optgroup);
				}

				

		}

		platosGuarniciones();

		function platosSopasCriollas() {
		
				var APISOPAS = "./administracion/platoslist/sopascriollas";

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
						template += "<option data-precio='"+precio+"' value='"+dataName+"'>"+
										dataName +
									"</option>"
					}
					optgroup = "<optgroup label='"+optgroupLabel+"'>"+
								template
								"</optgroup>"

					$(".selectPlatosList").append(optgroup);
				}

				

		}

		platosSopasCriollas();


		function platosChifas() {
		
				var APICHIFAS = "./administracion/platoslist/chifas";

				$.getJSON(APICHIFAS, chifas, false);

				function chifas(data) {
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
						template += "<option data-precio='"+precio+"' value='"+dataName+"'>"+
										dataName +
									"</option>"
					}
					optgroup = "<optgroup label='"+optgroupLabel+"'>"+
								template
								"</optgroup>"

					$(".selectPlatosList").append(optgroup);
				}

				

		}

		platosChifas();

		function platosPolloBrasa() {
		
				var APIBRASA = "./administracion/platoslist/pollobrasa";

				$.getJSON(APIBRASA, brasa, false);

				function brasa(data) {
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
						template += "<option data-precio='"+precio+"' value='"+dataName+"'>"+
										dataName +
									"</option>"
					}
					optgroup = "<optgroup label='"+optgroupLabel+"'>"+
								template
								"</optgroup>"

					$(".selectPlatosList").append(optgroup);
				}

				

		}

		platosPolloBrasa();

		function platosPescadosMariscos() {
		
				var APIBRASA = "./administracion/platoslist/pescadosmariscos";

				$.getJSON(APIBRASA, brasa, false);

				function brasa(data) {
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
						template += "<option data-precio='"+precio+"' value='"+dataName+"'>"+
										dataName +
									"</option>"
					}
					optgroup = "<optgroup label='"+optgroupLabel+"'>"+
								template
								"</optgroup>"

					$(".selectPlatosList").append(optgroup);
				}

				

		}

		platosPescadosMariscos();

		function bebidasUno() {
		
				var APIBEBIDA = "./administracion/bebidaslist/bebidasalcohol";

				$.getJSON(APIBEBIDA, bebida, false);

				function bebida(data) {
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
						template += "<option data-precio='"+precio+"' value='"+dataName+"'>"+
										dataName +
									"</option>"
					}
					optgroup = "<optgroup label='"+optgroupLabel+"'>"+
								template
								"</optgroup>"

					$(".selectPlatosList").append(optgroup);
				}

				

		}

		bebidasUno();
		function bebidasDos() {
		
				var APIBEBIDA = "./administracion/bebidaslist/bebidasalcohol";

				$.getJSON(APIBEBIDA, bebida, false);

				function bebida(data) {
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
						template += "<option data-precio='"+precio+"' value='"+dataName+"'>"+
										dataName +
									"</option>"
					}
					optgroup = "<optgroup label='"+optgroupLabel+"'>"+
								template
								"</optgroup>"

					$(".selectPlatosList").append(optgroup);
				}

				

		}

		bebidasDos();

		function bebidasTres() {
		
				var APIBEBIDA = "./administracion/bebidaslist/Tragosconpisco";

				$.getJSON(APIBEBIDA, bebida, false);

				function bebida(data) {
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
						template += "<option data-precio='"+precio+"' value='"+dataName+"'>"+
										dataName +
									"</option>"
					}
					optgroup = "<optgroup label='"+optgroupLabel+"'>"+
								template
								"</optgroup>"

					$(".selectPlatosList").append(optgroup);
				}

				

		}

		bebidasTres();

		function bebidasCuatro() {
		
				var APIBEBIDA = "./administracion/bebidaslist/Tragosconvodka";

				$.getJSON(APIBEBIDA, bebida, false);

				function bebida(data) {
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
						template += "<option data-precio='"+precio+"' value='"+dataName+"'>"+
										dataName +
									"</option>"
					}
					optgroup = "<optgroup label='"+optgroupLabel+"'>"+
								template
								"</optgroup>"

					$(".selectPlatosList").append(optgroup);
				}

				

		}

		bebidasCuatro();

		function bebidasCinco() {
		
				var APIBEBIDA = "./administracion/bebidaslist/Tragosconron";

				$.getJSON(APIBEBIDA, bebida, false);

				function bebida(data) {
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
						template += "<option data-precio='"+precio+"' value='"+dataName+"'>"+
										dataName +
									"</option>"
					}
					optgroup = "<optgroup label='"+optgroupLabel+"'>"+
								template
								"</optgroup>"

					$(".selectPlatosList").append(optgroup);
				}

				

		}

		bebidasCinco();

		function bebidasSeis() {
		
				var APIBEBIDA = "./administracion/bebidaslist/Vinosblancos";

				$.getJSON(APIBEBIDA, bebida, false);

				function bebida(data) {
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
						template += "<option data-precio='"+precio+"' value='"+dataName+"'>"+
										dataName +
									"</option>"
					}
					optgroup = "<optgroup label='"+optgroupLabel+"'>"+
								template
								"</optgroup>"

					$(".selectPlatosList").append(optgroup);
				}

				

		}

		bebidasCinco();


		function bebidasSiete() {
		
				var APIBEBIDA = "./administracion/bebidaslist/Vinosblancos";

				$.getJSON(APIBEBIDA, bebida, false);

				function bebida(data) {
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
						template += "<option data-precio='"+precio+"' value='"+dataName+"'>"+
										dataName +
									"</option>"
					}
					optgroup = "<optgroup label='"+optgroupLabel+"'>"+
								template
								"</optgroup>"

					$(".selectPlatosList").append(optgroup);
				}

				

		}

		bebidasSiete();

		function bebidasOcho() {
		
				var APIBEBIDA = "./administracion/bebidaslist/Espumantes";

				$.getJSON(APIBEBIDA, bebida, false);

				function bebida(data) {
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
						template += "<option data-precio='"+precio+"' value='"+dataName+"'>"+
										dataName +
									"</option>"
					}
					optgroup = "<optgroup label='"+optgroupLabel+"'>"+
								template
								"</optgroup>"

					$(".selectPlatosList").append(optgroup);
				}

				

		}

		bebidasOcho();

		function bebidasNueve() {
		
				var APIBEBIDA = "./administracion/bebidaslist/Tragoscontequila";

				$.getJSON(APIBEBIDA, bebida, false);

				function bebida(data) {
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
						template += "<option data-precio='"+precio+"' value='"+dataName+"'>"+
										dataName +
									"</option>"
					}
					optgroup = "<optgroup label='"+optgroupLabel+"'>"+
								template
								"</optgroup>"

					$(".selectPlatosList").append(optgroup);
				}

				

		}

		bebidasNueve();

		function bebidasDiez() {
		
				var APIBEBIDA = "./administracion/bebidaslist/medidaswhisky";

				$.getJSON(APIBEBIDA, bebida, false);

				function bebida(data) {
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
						template += "<option data-precio='"+precio+"' value='"+dataName+"'>"+
										dataName +
									"</option>"
					}
					optgroup = "<optgroup label='"+optgroupLabel+"'>"+
								template
								"</optgroup>"

					$(".selectPlatosList").append(optgroup);
				}

				

		}

		bebidasDiez();

		function bebidasOnce() {
		
				var APIBEBIDA = "./administracion/bebidaslist/Vinostintos";

				$.getJSON(APIBEBIDA, bebida, false);

				function bebida(data) {
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
						template += "<option data-precio='"+precio+"' value='"+dataName+"'>"+
										dataName +
									"</option>"
					}
					optgroup = "<optgroup label='"+optgroupLabel+"'>"+
								template
								"</optgroup>"

					$(".selectPlatosList").append(optgroup);
				}

				

		}

		bebidasOnce();



	
	}

	salonHomeSitePlatos();

	function savePlatos(){
		$(".jsFormPlatos").submit(function(e){

			e.preventDefault();
			
			$.ajax({
				url: 'addplatos',
				type: 'POST',
				dataType: 'JSON',
				contentType: 'application/json',
				data: JSON.stringify({
					nombre: $(".nombrePlato").val(),
					precio: $(".precioPlato").val(),
					categoria: $(".categoryPlato").val(),
					codigo: $(".codigoPlato").val()
				}),
				success: function(data) {
					$(".jsFormPlatos .aside--Form--Fieldset").hide();
					$(".cssPreload").css('display','block');
					$(".cssPreload .cssPreload--Header").css('display','none');
					setTimeout(function(){
						$(".cssPreload img").css('display','none');
						$(".cssPreload .cssPreload--Header").css({'display':'block','padding':'1em 0;'});
					}, 1000);
					setTimeout(function(){
						window.location.reload();
					}, 1500);


				},
				error: function(err){
					alert('error');
				}
			});


		});
	}
	savePlatos();


	if(window.location.pathname == "/administracion/platos") {
			function addPlatos(){
				var API = "platoslist";
				$.getJSON(API, success, false);

				function success(data) {

					var template = "";
					for(var i = 0; i < data.length; i++) {
						console.log(data[i]);
						var nombre = data[i].Nombre;
					    var precio = data[i].Precio;
					    var categoria = data[i].Categoria;
					    var codigo = data[i].Codigo

						template += "<div class='details'>" +
		 						   		"<div class='details--Name '>"+
		 						   			"<span class='title'>"+nombre+"</span>"+
		 						   		"</div>"+
		 						   		"<div class='details--Email'>"+
		 						   			"<span class='title'>"+precio+"</span>"+
		 						   		"</div>"+
		 						   		"<div class='details--Celu data-list'>"+
		 						   			"<span class='title'>"+categoria+"</span>"+
		 						   		"</div>"+
		 						   		"<div class='details--Activo'>"+
		 						   			"<span class='title'>"+
		 						   			  codigo+
		 						   			"</span>"+
		 						   		"</div>"+
					               "</div>";
					}
					
					$(".jsPlatosAdd").html(template);

					
				}
			}
			addPlatos();

	}

	



});