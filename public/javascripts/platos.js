$(document).ready(function(){

	function deletePlatos(){
		function addPlatos(){
			var API = "platoslist/entradas";
			
			var result = "";

			$.getJSON(API, success, false);

			function success(data) {
				var template = "";
				var labelEntradas;
				var entradasId;
				var entradas;
				var entradasOption = "";
				for(var i = 0; i < data.length; i++) {
					
					labelEntradas = data[0].Entradas.Categoria;
					
					entradas = data[i].Entradas.Nombre;
					entradasId = data[i]._id;
					entradasCodigo = data[i].Entradas.Codigo;
					//entradas = data[i].Entradas.Nombre;
					
					entradasOption += "<option value='"+entradasId+"' data-id='"+entradasCodigo+"'>" +
									 entradas +
									"</option>";
					
					
				}
				template = "<optgroup label='"+labelEntradas+"'>"+
									entradasOption +
								 "</optgroup>";
							

				
				
				$(".platosDelete--Select").append(template);
			}

			var APICEVICHES = "platoslist/ceviches";
			var result = "";
			$.getJSON(APICEVICHES, successceviches, false);

			function successceviches(data) {
				var template = "";
				var labelCeviches;
				var cevichesId;
				var ceviches;
				var cevichesOption = "";
				var cevicheCodigo;
				for(var i = 0; i < data.length; i++) {
					
					labelCeviches = data[0].Ceviches.Categoria;
					
					ceviches = data[i].Ceviches.Nombre;
				    cevichesId = data[i]._id;
					cevichesCodigo = data[i].Ceviches.Codigo;
					//entradas = data[i].Entradas.Nombre;
					
					cevichesOption += "<option value='"+cevichesId+"' data-id='"+cevichesCodigo+"'>" +
									 ceviches +
									"</option>";
					
					
				}
				template = "<optgroup label='"+labelCeviches+"'>"+
									cevichesOption +
								 "</optgroup>";
							

				
				
				$(".platosDelete--Select").append(template);
			}

			var APIPERCADOSMARISCOS = "platoslist/pescadosmariscos";
			var result = "";
			$.getJSON(APIPERCADOSMARISCOS, successpescados, false);

			function successpescados(data) {
				var template = "";
				var pescadosmariscosCeviches;
				var pescadosmariscosId;
				var pescadosmariscos;
				var pescadosmariscosOption = "";
				var pescadosmariscosCodigo;
				var labelPescadosMariscos;
				for(var i = 0; i < data.length; i++) {
					
					labelPescadosMariscos = data[0].PercadosMariscos.Categoria;
					
					pescadosmariscos = data[i].PercadosMariscos.Nombre;
				    pescadosmariscosId = data[i]._id;
					pescadosmariscosCodigo = data[i].PercadosMariscos.Codigo;
					//entradas = data[i].Entradas.Nombre;
					
					pescadosmariscosOption += "<option value='"+pescadosmariscosId+"' data-id='"+pescadosmariscosCodigo+"'>" +
									 pescadosmariscos +
									"</option>";
					
					
				}
				template = "<optgroup label='"+labelPescadosMariscos+"'>"+
									pescadosmariscosOption +
								 "</optgroup>";
							

				
				
				$(".platosDelete--Select").append(template);
			}

			var APIPERTIRADITOS = "platoslist/tiraditos";
			var result = "";
			$.getJSON(APIPERTIRADITOS, successtiraditos, false);

			function successtiraditos(data) {
				var template = "";

				var tiraditosId;
				var tiraditosName;
				var tiraditosOption = "";
				var tiraditosIdCodigo;
				var labelTiraditos;
				var labelTiraditosId;
				for(var i = 0; i < data.length; i++) {
					
					labelTiraditosId = data[0].Tiraditos.Categoria;
					
					tiraditosName = data[i].Tiraditos.Nombre;
				    ptiraditosId = data[i]._id;
					tiraditosIdCodigo = data[i].Tiraditos.Codigo;
					//entradas = data[i].Entradas.Nombre;
					
					tiraditosOption += "<option value='"+ptiraditosId+"' data-id='"+tiraditosIdCodigo+"'>" +
									 tiraditosName +
									"</option>";
					
					
				}
				template = "<optgroup label='"+labelTiraditosId+"'>"+
									tiraditosOption +
								 "</optgroup>";
							

				
				
				$(".platosDelete--Select").append(template);
			}


			var APILECHETIGRE = "platoslist/lechedetigre";
			var result = "";
			
			$.getJSON(APILECHETIGRE, lecheTigre, false);

			function lecheTigre(data) {
				var template = "";

				var lecheTigreId;
				var lecheTigreName;
				var lecheTigreOption = "";
				var lecheTigreCodigo;
				var labelLecheTigreCodigo;
				for(var i = 0; i < data.length; i++) {
					
					labelLecheTigreCodigo = data[0].Lechetigre.Categoria;
					
					lecheTigreName = data[i].Lechetigre.Nombre;
				    lecheTigreId = data[i]._id;
					lecheTigreCodigo = data[i].Lechetigre.Codigo;
					//entradas = data[i].Entradas.Nombre;
					
					lecheTigreOption += "<option value='"+lecheTigreId+"' data-id='"+lecheTigreCodigo+"'>" +
									 lecheTigreName +
									"</option>";
					
					
				}
				template = "<optgroup label='"+labelLecheTigreCodigo+"'>"+
									lecheTigreOption +
								 "</optgroup>";
							

				
				
				$(".platosDelete--Select").append(template);
			}


			var APISUDADOS = "platoslist/sudadoschupes";
			var result = "";
			$.getJSON(APISUDADOS, succesSudados, false);

			function succesSudados(data) {
				var template = "";
				var labelSudados;
				var sudadosId;
				var sudados;
				var sudadosOption = "";
				var sudadosCodigo;
				for(var i = 0; i < data.length; i++) {
					
					labelSudados = data[0].SudadosyChupes.Categoria;
					
					sudados = data[i].SudadosyChupes.Nombre;
				    sudadosId = data[i]._id;
					sudadosCodigo = data[i].SudadosyChupes.Codigo;
					//entradas = data[i].Entradas.Nombre;
					
					sudadosOption += "<option value='"+sudadosId+"' data-id='"+sudadosCodigo+"'>" +
									 sudados +
									"</option>";
					
					
				}
				template = "<optgroup label='"+labelSudados+"'>"+
									sudadosOption +
								 "</optgroup>";
							

				
				
				$(".platosDelete--Select").append(template);
			}

			var APISEGUNDOSMARINOS = "platoslist/segundosmarinos";
			var result = "";
			$.getJSON(APISEGUNDOSMARINOS, succesSegundosMarinos, false);

			function succesSegundosMarinos(data) {
				var template = "";
				var labelSegundosMarinos;
				var segundosmarinosId;
				var segundosmarinos;
				var segundosmarinosOption = "";
				var segundosmarinosCodigo;
				for(var i = 0; i < data.length; i++) {
					
					labelSegundosMarinos = data[0].SegundosMarinos.Categoria;
					
					segundosmarinos = data[i].SegundosMarinos.Nombre;
				    segundosmarinosId = data[i]._id;
					segundosmarinosCodigo = data[i].SegundosMarinos.Codigo;
					//entradas = data[i].Entradas.Nombre;
					
					segundosmarinosOption += "<option value='"+segundosmarinosId+"' data-id='"+segundosmarinosCodigo+"'>" +
									 segundosmarinos +
									"</option>";
					
					
				}
				template = "<optgroup label='"+labelSegundosMarinos+"'>"+
									segundosmarinosOption +
								 "</optgroup>";
							

				
				
				$(".platosDelete--Select").append(template);
			}

			var APICHICHARRONESMARINOS = "platoslist/chicharonesmarinos";
			var result = "";
			$.getJSON(APICHICHARRONESMARINOS, succesChicharronesMarinos, false);

			function succesChicharronesMarinos(data) {
				var template = "";
				var labelChicharronesMarinos;
				var chicharronesmarinosId;
				var chicharronesmarinos;
				var chicharronesmarinosOption = "";
				var chicharronesmarinosCodigo;
				for(var i = 0; i < data.length; i++) {
					
					labelChicharronesMarinos = data[0].ChicharronesMarinos.Categoria;
					
					chicharronesmarinos = data[i].ChicharronesMarinos.Nombre;
				    chicharronesmarinosId = data[i]._id;
					chicharronesmarinosCodigo = data[i].ChicharronesMarinos.Codigo;
					//entradas = data[i].Entradas.Nombre;
					
					chicharronesmarinosOption += "<option value='"+chicharronesmarinosId+"' data-id='"+chicharronesmarinosCodigo+"'>" +
									 chicharronesmarinos +
									"</option>";
					
					
				}
				template = "<optgroup label='"+labelChicharronesMarinos+"'>"+
									chicharronesmarinosOption +
								 "</optgroup>";
							

				
				
				$(".platosDelete--Select").append(template);
			}

			var APITRILOGIAS = "platoslist/trilogias";
			var result = "";
			$.getJSON(APITRILOGIAS, succesTrilogias, false);

			function succesTrilogias(data) {
				var template = "";
				var labelTrilogias;
				var trilogiasId;
				var trilogias;
				var trilogiasOption = "";
				var trilogiasCodigo;
				for(var i = 0; i < data.length; i++) {
					
					labelTrilogias = data[0].Trilogias.Categoria;
					
					trilogias = data[i].Trilogias.Nombre;
				    trilogiasId = data[i]._id;
					trilogiasCodigo = data[i].Trilogias.Codigo;
					//entradas = data[i].Entradas.Nombre;
					
					trilogiasOption += "<option value='"+trilogiasId+"' data-id='"+trilogiasCodigo+"'>" +
									 trilogias +
									"</option>";
					
					
				}
				template = "<optgroup label='"+labelTrilogias+"'>"+
									trilogiasOption +
								 "</optgroup>";
							

				
				
				$(".platosDelete--Select").append(template);
			}


			var APITACU = "platoslist/tacu";
			var result = "";
			$.getJSON(APITACU, succesTacu, false);

			function succesTacu(data) {
				var template = "";
				var labelTacu;
				var tacuId;
				var tacu;
				var tacuOption = "";
				var tacuCodigo;
				for(var i = 0; i < data.length; i++) {
					
					labelTacu = data[0].TacuTacus.Categoria;
					
					tacu = data[i].TacuTacus.Nombre;
				    tacuId = data[i]._id;
					tacuCodigo = data[i].TacuTacus.Codigo;
					//entradas = data[i].Entradas.Nombre;
					
					tacuOption += "<option value='"+tacuId+"' data-id='"+tacuCodigo+"'>" +
									 tacu +
									"</option>";
					
				}
				template = "<optgroup label='"+labelTacu+"'>"+
									tacuOption +
								 "</optgroup>";
							

				
				
				$(".platosDelete--Select").append(template);
			}

			var APICHICHARRONES = "platoslist/chicharrones";
			var result = "";
			$.getJSON(APICHICHARRONES, succesChicharrones, false);

			function succesChicharrones(data) {
				var template = "";
				var labelChicha;
				var chichaId;
				var chicha;
				var chichaOption = "";
				var chichaCodigo;
				for(var i = 0; i < data.length; i++) {
					
					labelChicha = data[0].Chicharrones.Categoria;
					
					chicha = data[i].Chicharrones.Nombre;
				    chichaId = data[i]._id;
					chichaCodigo = data[i].Chicharrones.Codigo;
					//entradas = data[i].Entradas.Nombre;
					
					chichaOption += "<option value='"+chichaId+"' data-id='"+chichaCodigo+"'>" +
									 chicha +
									"</option>";
					
				}
				template = "<optgroup label='"+labelChicha+"'>"+
									chichaOption +
								 "</optgroup>";
							

				
				
				$(".platosDelete--Select").append(template);
			}

			var APIGUARNICIONES = "platoslist/guarniciones";
			var result = "";
			$.getJSON(APIGUARNICIONES, succesGuarniciones, false);

			function succesGuarniciones(data) {
				var template = "";
				var labelGuarniciones;
				var guarnicionesId;
				var guarniciones;
				var guarnicionesOption = "";
				var guarnicionesCodigo;
				for(var i = 0; i < data.length; i++) {
					
					labelGuarniciones = data[0].Guarniciones.Categoria;
					
					guarniciones = data[i].Guarniciones.Nombre;
				    guarnicionesId = data[i]._id;
					guarnicionesCodigo = data[i].Guarniciones.Codigo;
					//entradas = data[i].Entradas.Nombre;
					
					guarnicionesOption += "<option value='"+guarnicionesId+"' data-id='"+guarnicionesCodigo+"'>" +
									 guarniciones +
									"</option>";
					
				}
				template = "<optgroup label='"+labelGuarniciones+"'>"+
									guarnicionesOption +
								 "</optgroup>";
							

				
				
				$(".platosDelete--Select").append(template);
			}



			var APISOPAS = "platoslist/sopascriollas";
			var result = "";
			$.getJSON(APISOPAS, succesSopas, false);

			function succesSopas(data) {
				var template = "";
				var labelSopas;
				var sopasId;
				var sopas;
				var sopasOption = "";
				var sopasCodigo;
				for(var i = 0; i < data.length; i++) {
					
					labelSopas = data[0].SopasCriollas.Categoria;
					
					sopas = data[i].SopasCriollas.Nombre;
				    sopasId = data[i]._id;
					sopasCodigo = data[i].SopasCriollas.Codigo;
					//entradas = data[i].Entradas.Nombre;
					
					sopasOption += "<option value='"+sopasId+"' data-id='"+sopasCodigo+"'>" +
									 sopas +
									"</option>";
					
				}
				template = "<optgroup label='"+labelSopas+"'>"+
									sopasOption +
								 "</optgroup>";
							

				
				
				$(".platosDelete--Select").append(template);
			}



			var APICHIFA = "platoslist/chifas";
			var result = "";
			$.getJSON(APICHIFA, succesChifa, false);

			function succesChifa(data) {
				var template = "";
				var labelChifa;
				var chifaId;
				var chifa;
				var chifaOption = "";
				var chifaCodigo;
				for(var i = 0; i < data.length; i++) {
					
					labelChifa = data[0].Chifas.Categoria;
					
					chifa = data[i].Chifas.Nombre;
				    chifaId = data[i]._id;
					chifaCodigo = data[i].Chifas.Codigo;
					//entradas = data[i].Entradas.Nombre;
					
					chifaOption += "<option value='"+chifaId+"' data-id='"+chifaCodigo+"'>" +
									 chifa +
									"</option>";
					
				}
				template = "<optgroup label='"+labelChifa+"'>"+
									chifaOption +
								 "</optgroup>";
							

				
				
				$(".platosDelete--Select").append(template);
			}

			var APIPOLLITO = "platoslist/pollobrasa";
			var result = "";
			$.getJSON(APIPOLLITO, succesPollito, false);

			function succesPollito(data) {
				var template = "";
				var labelPollito;
				var pollitoId;
				var pollito;
				var pollitoOption = "";
				var pollitoCodigo;
				for(var i = 0; i < data.length; i++) {
					
					labelPollito = data[0].Polloalabrasa.Categoria;
					
					pollito = data[i].Polloalabrasa.Nombre;
				    pollitoId = data[i]._id;
					pollitoCodigo = data[i].Polloalabrasa.Codigo;
					//entradas = data[i].Entradas.Nombre;
					
					pollitoOption += "<option value='"+pollitoId+"' data-id='"+pollitoCodigo+"'>" +
									 pollito +
									"</option>";
					
				}
				template = "<optgroup label='"+labelPollito+"'>"+
									pollitoOption +
								 "</optgroup>";
							

				
				
				$(".platosDelete--Select").append(template);
			}



			

		

			




		}
		addPlatos();

		function deletePlatosSelect() {
			var str = "";

			var optgroup = "";

			var dataCodigo = "";	

			$(".platosDelete--Select").change(function(){

				 optgroup += $(this.options[this.selectedIndex]).closest('optgroup').prop('label');

				

				
				$(".platosDelete--Select option:selected").each(function(){
					 
					 str += $(this).val() + " ";
					 
					 //alert(optgroup);

					//alert(str);

				});

				$(".platosDelete--Select option:selected").each(function(){
					dataCodigo += $(this).data('id') + " ";
				});

				//alert(optgroup);

				//alert(str);

				//alert(dataCodigo);
				
			});


			$(".jsFormPlatosDelete").submit(function(e){
				
				e.preventDefault();
				
				var urlDelete = 'deleteplatos/' + optgroup + '/' + str;
				var urlHome = 'deleteplatos/' + dataCodigo;

				$.when(

						$.ajax({
							url: urlDelete,
							type: 'GET',
							contentType: 'application/json',
							success: function(data) {
								alert('eliminado');	
							},
							error: function(err) {
								alert('error :(');
							}

						}),

						$.ajax({
							url: urlHome,
							type: 'GET',
							contentType: 'application/json',
							success: function(data) {
								alert('ajax 2 eliminado');
							},
							error: function(data){
								alert('error en request two ajax');
							}

						})


					).then(function(){
						alert('all two ajax request');
				});


			});
		}
		deletePlatosSelect();
		
	}
	deletePlatos();


});