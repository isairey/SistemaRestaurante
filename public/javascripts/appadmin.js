$(document).ready(function(){

	

	function salonHomeSitePlatos() {
		

		function platosEntradas() {
		
				var APIBEBIDAS = "../../administracion/platoslist/entradas";

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
		
				var APICEVICHES = "../../administracion/platoslist/ceviches";

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
		
				var APITIRADITOS = "../../administracion/platoslist/tiraditos";

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
		
				var APILECHEDETIGRE = "../../administracion/platoslist/lechedetigre";

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
		
				var APISUDADOS = "../../administracion/platoslist/sudadoschupes";

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
		
				var APISUDADOS = "../../administracion/platoslist/segundosmarinos";

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
		
				var APICHICHARONES = "../../administracion/platoslist/chicharonesmarinos";

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
		
				var APICHICHARONES = "../../administracion/platoslist/trilogias";

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
		
				var APITACU = "../../administracion/platoslist/tacu";

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
		
				var APICHICHARRONES = "../../administracion/platoslist/chicharrones";

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
		
				var APIGUARNICIONES = "../../administracion/platoslist/guarniciones";

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
		
				var APISOPAS = "../../administracion/platoslist/sopascriollas";

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
		
				var APICHIFAS = "../../administracion/platoslist/chifas";

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
		
				var APIBRASA = "../../administracion/platoslist/pollobrasa";

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
		
				var APIBRASA = "../../administracion/platoslist/pescadosmariscos";

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

	

	



});