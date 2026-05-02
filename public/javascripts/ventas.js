$(document).ready(function(){


	function showReportes(){

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
		var resultadoFecha
		 resultadoFecha = "El " + dia + " de " + mes + " " + "del" + " "+ ano; 
		
		$(".content--Search .title--Search--Secondary").text(dia);
		$(".content--Search .title--Search--Four").text(mes);

		$(".titleReporteDia").text(resultadoFecha);

		//encontrar reporte del dia
		$(".linkButton--Reporte").click(function(e){
			e.preventDefault();

			var onePrimary = $(".content--Search .title--Search--Secondary").text();
			var twoPrimary = $(".content--Search .title--Search--Four").text();
			resultadoFecha = "El " + onePrimary + " de " + twoPrimary + " " + "del" + " " + ano;
			
			$(".titleReporteDia").text(resultadoFecha);	

			var APIURL = "../ventas/list/" + resultadoFecha;

		

			$.getJSON(APIURL, ventas, false);

			function ventas(data){
				var name;
				var total;
				var hora;
				var fecha;
				var inTemplate = "";
				var suma = 0;
				var totalDay = 0;
				for(var i = 0; i < data.length; i++) {
					name = data[i].Mesa;
					total = data[i].Total;
					fecha = data[i].Fecha;
					hora = data[i].Hora;
					var numberoTotall = data[i].Total.replace('$','');
					
					var converterNumber = Number(numberoTotall);

					totalDay += converterNumber;
					
				

					inTemplate += "<div class='details'>" +
		 						   		"<div class='details--Name '>"+
		 						   			"<span class='title'>"+name+"</span>"+
		 						   		"</div>"+
		 						   		"<div class='details--Email'>"+
		 						   			"<span class='title'>"+fecha+"</span>"+
		 						   		"</div>"+
		 						   		"<div class='details--Celu data-list'>"+
		 						   			"<span class='title'>"+hora+"</span>"+
		 						   		"</div>"+
		 						   		"<div class='details--Activo'>"+
		 						   			"<span class='title'>"+
		 						   			  total+
		 						   			"</span>"+
		 						   		"</div>"+
					               "</div>";

				}

				$(".jsReportes").html(inTemplate);
				$(".jsPriceTotallVentas").html(" $"+totalDay);
			}	
		

		});
		
		var APIURL = "../ventas/list/" + resultadoFecha;

		

		$.getJSON(APIURL, ventas, false);

			function ventas(data){
				var name;
				var total;
				var hora;
				var fecha;
				var inTemplate = "";
				var suma = 0;
				var totalDay = 0;
				for(var i = 0; i < data.length; i++) {
					name = data[i].Mesa;
					total = data[i].Total;
					fecha = data[i].Fecha;
					hora = data[i].Hora;
					var formaPago = data[i].Metodopago;
					var descuento = data[i].Descuento;
					var descuentoTotal = data[i].DescuentoTotal;
					var numberoTotall = data[i].Total.replace('$','');
					
					var converterNumber = Number(numberoTotall);

					totalDay += converterNumber;
					
					if(descuento == "" ){
						descuento = "No hay descuento";
					}
					if(descuentoTotal.length > 0){
						total = descuentoTotal;
					}

					inTemplate += "<div class='details'>" +
		 						   		"<div class='details--Name '>"+
		 						   			"<span class='title'>"+name+"</span>"+
		 						   		"</div>"+
		 						   		"<div class='details--Email'>"+
		 						   			"<span class='title'>"+fecha+"</span>"+
		 						   		"</div>"+
		 						   		"<div class='details--Celu data-list'>"+
		 						   			"<span class='title'>"+hora+"</span>"+
		 						   		"</div>"+
		 						   		"<div class='details--Celu data-list'>"+
		 						   			"<span class='title'>"+formaPago+"</span>"+
		 						   		"</div>"+
		 						   		"<div class='details--Celu data-list'>"+
		 						   			"<span class='title'>"+descuento+"</span>"+
		 						   		"</div>"+

		 						   		"<div class='details--Activo'>"+
		 						   			"<span class='title'>"+
		 						   			  total+
		 						   			"</span>"+
		 						   		"</div>"+
					               "</div>";

				}

				$(".jsReportes").html(inTemplate);
				$(".jsPriceTotallVentas").html(" $"+totalDay);
			}

		


	}
	showReportes();

	function savePrice(){
		$(".guardar--ElTotal").click(function(e){
			e.preventDefault();

			var total = $(".jsPriceTotallVentas").text();
			var fecha = $(".titleReporteDia").text();

			$.ajax({
				url: "ventas/savetotal",
				type: "POST",
				dataType: "JSON",
				contentType: "application/json",
				data: JSON.stringify({
					fecha: fecha,
					total: total
				}),
				success: function(data){
					alert('guardado en total');
				},
				error: function(err) {
					alert('error');
				}
			});

		});
	}
	savePrice();


});
