$(document).ready(function(){

	function saveBebidas(){
		$(".jsFormBebidas").submit(function(e){

			e.preventDefault();
			
			$.ajax({
				url: 'addbebidas',
				type: 'POST',
				dataType: 'JSON',
				contentType: 'application/json',
				data: JSON.stringify({
					nombre: $(".nombreBebida").val(),
					precio: $(".precioBebida").val(),
					categoria: $(".categoryBebida").val(),
					codigo: $(".codigoBebida").val()
				}),
				success: function(data) {
					$(".jsFormBebidas .aside--Form--Fieldset").hide();
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
	saveBebidas();

	function addBebidas(){
				var API = "bebidaslist";
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
					
					$(".jsBebidasAdd").html(template);

					
				}
	}
	addBebidas();

	function addBebidasDelete(){
			var API = "bebidaslist/bebidasalcohol";
			
			var result = "";

			$.getJSON(API, success, false);

			function success(data) {
				var template = "";
				var labelEntradas;
				var entradasId;
				var entradas;
				var entradasOption = "";
				for(var i = 0; i < data.length; i++) {
					
					labelEntradas = data[0].Bebidas.Categoria;
					
					entradas = data[i].Bebidas.Nombre;
					entradasId = data[i]._id;
					entradasCodigo = data[i].Bebidas.Codigo;
					//entradas = data[i].Entradas.Nombre;
					
					entradasOption += "<option value='"+entradasId+"' data-id='"+entradasCodigo+"'>" +
									 entradas +
									"</option>";
					
					
				}
				template = "<optgroup label='"+labelEntradas+"'>"+
									entradasOption +
								 "</optgroup>";
							

				
				
				$(".bebidasDelete--Select").append(template);
			}

			var APICEVICHES = "bebidaslist/cervezas";
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
					
					labelCeviches = data[0].Cervezas.Categoria;
					
					ceviches = data[i].Cervezas.Nombre;
				    cevichesId = data[i]._id;
					cevichesCodigo = data[i].Cervezas.Codigo;
					//entradas = data[i].Entradas.Nombre;
					
					cevichesOption += "<option value='"+cevichesId+"' data-id='"+cevichesCodigo+"'>" +
									 ceviches +
									"</option>";
					
					
				}
				template = "<optgroup label='"+labelCeviches+"'>"+
									cevichesOption +
								 "</optgroup>";
							

				
				
				$(".bebidasDelete--Select").append(template);
			}

			var APIPERCADOSMARISCOS = "bebidaslist/tragosconpisco";
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
					
					labelPescadosMariscos = data[0].Tragosconpisco.Categoria;
					
					pescadosmariscos = data[i].Tragosconpisco.Nombre;
				    pescadosmariscosId = data[i]._id;
					pescadosmariscosCodigo = data[i].Tragosconpisco.Codigo;
					//entradas = data[i].Entradas.Nombre;
					
					pescadosmariscosOption += "<option value='"+pescadosmariscosId+"' data-id='"+pescadosmariscosCodigo+"'>" +
									 pescadosmariscos +
									"</option>";
					
					
				}
				template = "<optgroup label='"+labelPescadosMariscos+"'>"+
									pescadosmariscosOption +
								 "</optgroup>";
							

				
				
				$(".bebidasDelete--Select").append(template);
			}

			var APIPERTIRADITOS = "bebidaslist/tragosconvodka";
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
					
					labelTiraditosId = data[0].Tragosconvodka.Categoria;
					
					tiraditosName = data[i].Tragosconvodka.Nombre;
				    ptiraditosId = data[i]._id;
					tiraditosIdCodigo = data[i].Tragosconvodka.Codigo;
					//entradas = data[i].Entradas.Nombre;
					
					tiraditosOption += "<option value='"+ptiraditosId+"' data-id='"+tiraditosIdCodigo+"'>" +
									 tiraditosName +
									"</option>";
					
					
				}
				template = "<optgroup label='"+labelTiraditosId+"'>"+
									tiraditosOption +
								 "</optgroup>";
							

				
				
				$(".bebidasDelete--Select").append(template);
			}


			var APILECHETIGRE = "bebidaslist/tragosron";
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
					
					labelLecheTigreCodigo = data[0].Tragosconron.Categoria;
					
					lecheTigreName = data[i].Tragosconron.Nombre;
				    lecheTigreId = data[i]._id;
					lecheTigreCodigo = data[i].Tragosconron.Codigo;
					//entradas = data[i].Entradas.Nombre;
					
					lecheTigreOption += "<option value='"+lecheTigreId+"' data-id='"+lecheTigreCodigo+"'>" +
									 lecheTigreName +
									"</option>";
					
					
				}
				template = "<optgroup label='"+labelLecheTigreCodigo+"'>"+
									lecheTigreOption +
								 "</optgroup>";
							

				
				
				$(".bebidasDelete--Select").append(template);
			}


			var APISUDADOS = "bebidaslist/vinosblancos";
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
					
					labelSudados = data[0].Vinosblancos.Categoria;
					
					sudados = data[i].Vinosblancos.Nombre;
				    sudadosId = data[i]._id;
					sudadosCodigo = data[i].Vinosblancos.Codigo;
					//entradas = data[i].Entradas.Nombre;
					
					sudadosOption += "<option value='"+sudadosId+"' data-id='"+sudadosCodigo+"'>" +
									 sudados +
									"</option>";
					
					
				}
				template = "<optgroup label='"+labelSudados+"'>"+
									sudadosOption +
								 "</optgroup>";
							

				
				
				$(".bebidasDelete--Select").append(template);
			}

			var APISEGUNDOSMARINOS = "bebidaslist/espumantes";
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
					
					labelSegundosMarinos = data[0].Espumantes.Categoria;
					
					segundosmarinos = data[i].Espumantes.Nombre;
				    segundosmarinosId = data[i]._id;
					segundosmarinosCodigo = data[i].Espumantes.Codigo;
					//entradas = data[i].Entradas.Nombre;
					
					segundosmarinosOption += "<option value='"+segundosmarinosId+"' data-id='"+segundosmarinosCodigo+"'>" +
									 segundosmarinos +
									"</option>";
					
					
				}
				template = "<optgroup label='"+labelSegundosMarinos+"'>"+
									segundosmarinosOption +
								 "</optgroup>";
							

				
				
				$(".bebidasDelete--Select").append(template);
			}

			var APICHICHARRONESMARINOS = "bebidaslist/tragoscontequila";
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
					
					labelChicharronesMarinos = data[0].Tragoscontequila.Categoria;
					
					chicharronesmarinos = data[i].Tragoscontequila.Nombre;
				    chicharronesmarinosId = data[i]._id;
					chicharronesmarinosCodigo = data[i].Tragoscontequila.Codigo;
					//entradas = data[i].Entradas.Nombre;
					
					chicharronesmarinosOption += "<option value='"+chicharronesmarinosId+"' data-id='"+chicharronesmarinosCodigo+"'>" +
									 chicharronesmarinos +
									"</option>";
					
					
				}
				template = "<optgroup label='"+labelChicharronesMarinos+"'>"+
									chicharronesmarinosOption +
								 "</optgroup>";
							

				
				
				$(".bebidasDelete--Select").append(template);
			}

			var APITRILOGIAS = "bebidaslist/medidaswhisky";
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
					
					labelTrilogias = data[0].Medidawhisky.Categoria;
					
					trilogias = data[i].Medidawhisky.Nombre;
				    trilogiasId = data[i]._id;
					trilogiasCodigo = data[i].Medidawhisky.Codigo;
					//entradas = data[i].Entradas.Nombre;
					
					trilogiasOption += "<option value='"+trilogiasId+"' data-id='"+trilogiasCodigo+"'>" +
									 trilogias +
									"</option>";
					
					
				}
				template = "<optgroup label='"+labelTrilogias+"'>"+
									trilogiasOption +
								 "</optgroup>";
							

				
				
				$(".bebidasDelete--Select").append(template);
			}


			var APITACU = "bebidaslist/vinostintos";
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
					
					labelTacu = data[0].Vinostintos.Categoria;
					
					tacu = data[i].Vinostintos.Nombre;
				    tacuId = data[i]._id;
					tacuCodigo = data[i].Vinostintos.Codigo;
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

							

				
		

			




	}
	addBebidasDelete();

	function deleteBebidas() {
			var str = "";

			var optgroup = "";

			var dataCodigo = "";	

			$(".bebidasDelete--Select").change(function(){

				 optgroup = $(this.options[this.selectedIndex]).closest('optgroup').prop('label');

				

				
				$(".bebidasDelete--Select option:selected").each(function(){
					 
					 str = $(this).val() + " ";
					 
					

					//alert(str);

				});

				$(".bebidasDelete--Select option:selected").each(function(){
					dataCodigo = $(this).data('id') + " ";
					
				});

				//alert(optgroup);

				//alert(str);

				
				
			});


			$(".jsFormBebidasDelete").submit(function(e){
				
				e.preventDefault();
				
				var urlDelete = 'deletebebidas/' + optgroup + '/' + str;
				var urlHome = 'deletebebidas/' + dataCodigo;

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
	deleteBebidas();

});