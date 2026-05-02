$(document).ready(function(){

	function mesa(){
		$(".content .content--Mesa").click(function(){
			var obt = $(this).find('.titleMesa').text();
			var code = $(this).find('.titleIdMesa').text();

			//$(this).css('background', 'red');

			function addCart(){
				$(".jsPedidosMesa").text(obt);
				$(".jsCodigoMesa").text(code);
			}
			addCart();
		});
	}
	mesa()
	function toHover(){
		$(".content .content--Mesa").hover(function(){
			$(this).find('img').attr('src', 'images/mesa2.png');
			$(this).find('.titleMesa').css('color', '#feda4c');
		}, function(){
			$(this).find('img').attr('src', 'images/mesa.png');
			$(this).find('.titleMesa').css('color','#646262');
		});
	}
	toHover();

	setInterval(function(){
		function widgetHeader(){
			var a = new Date();
			var b = a.getHours();
			var c = a.getMinutes();
			var time = b + ":" + c;
			
			if(time.length == 3) {
				time = b + ":" + "0" + c;
				$(".Center--Time .time--Title").text(time);
			}
			else if(time.length == 4) {
				
				time = b + ":" + "0" + c;
				$(".Center--Time .time--Title").text(time);
			
			}
			else if(time.length == 5) {
				$(".Center--Time .time--Title").text(time);
			}

		

		}
		widgetHeader();

		function dataHeader(){
			var a = new Date();
			var dia = a.getDay();
			var c = a.getMonth();
			var d = a.getDate();
			var hora = a.getHours();
			//alert(b);
			var dias = {
				'uno': 'DOM',
				'dos': 'LUN',
				'tres': 'MAR',
				'cuatro': 'MIE',
				'cinco': 'JUE',
				'seis': 'VIE',
				'siete': 'SAB'
			};

			var meses = {
				'uno': 'ENE',
				'dos': 'FEB',
				'tres': 'MAR',
				'cuatro': 'ABR',
				'cinco': 'MAY',
				'seis': 'JUN',
				'siete': 'JUL',
				'ocho': 'AGO',
				'nueve': 'SEP',
				'diez': 'OCT',
				'once': 'NOV',
				'dosce': 'DEC'
			};

			var servicios = {
				'uno': 'DESAYUNO',
				'dos': 'ALMUERZO',
				'tres': 'CENA',
				'cuatro': 'AMANECIDA'
			}

			if(hora <= 6 || hora <= 10){
				//entre las 6 y 9
					if(c == 0) {
						 	if(dia == 0 && c == 0) {
								$(".jsTitleHeader").text(servicios.uno);
								$(".jsTitleDay").text(dias.uno + " ");
								$(".jsTitleMounth").text(d +" "+ "/" + meses.uno);
							}
							else if(dia == 1 && c == 0) {
								$(".jsTitleHeader").text(servicios.uno);
								$(".jsTitleDay").text(dias.dos + " ");
								$(".jsTitleMounth").text(d +" "+ "/" + meses.uno);
							}
							else if(dia == 2 && c == 0) {
								$(".jsTitleHeader").text(servicios.uno);
								$(".jsTitleDay").text(dias.tres + " ");
								$(".jsTitleMounth").text(d +" "+ "/" + meses.uno);
							}
							else if(dia == 3 && c == 0) {
								$(".jsTitleHeader").text(servicios.uno);
								$(".jsTitleDay").text(dias.cuatro + " ");
								$(".jsTitleMounth").text(d +" "+ "/" + meses.uno);
							}
							else if(dia == 4 && c == 0) {
								$(".jsTitleHeader").text(servicios.uno);
								$(".jsTitleDay").text(dias.cinco + " ");
								$(".jsTitleMounth").text(d +" "+ "/" + meses.uno);
							}
							else if(dia == 5 && c == 0) {
								$(".jsTitleHeader").text(servicios.uno);
								$(".jsTitleDay").text(dias.seis + " ");
								$(".jsTitleMounth").text(d +" "+ "/" + meses.uno);
							}
							else if(dia == 6 && c == 0) {
								$(".jsTitleHeader").text(servicios.uno);
								$(".jsTitleDay").text(dias.siete + " ");
								$(".jsTitleMounth").text(d +" "+ "/" + meses.uno);
							}
							else {
								$(".jsTitleHeader").text("ERROR");
								$(".jsTitleDay").text("ERROR")
								$(".jsTitleMounth").text("ERROR");
							}
					}
					else if (c == 1) {
								if(dia == 0 && c == 1) {
									$(".jsTitleHeader").text(servicios.uno);
									$(".jsTitleDay").text(dias.uno + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.dos);
								}
								else if(dia == 1 && c == 1) {
									$(".jsTitleHeader").text(servicios.uno);
									$(".jsTitleDay").text(dias.dos + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.dos);
								}
								else if(dia == 2 && c == 1) {
									$(".jsTitleHeader").text(servicios.uno);
									$(".jsTitleDay").text(dias.tres + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.dos);
								}
								else if(dia == 3 && c == 1) {
									$(".jsTitleHeader").text(servicios.uno);
									$(".jsTitleDay").text(dias.cuatro + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.dos);
								}
								else if(dia == 4 && c == 1) {
									$(".jsTitleHeader").text(servicios.uno);
									$(".jsTitleDay").text(dias.cinco + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.dos);
								}
								else if(dia == 5 && c == 1) {
									$(".jsTitleHeader").text(servicios.uno);
									$(".jsTitleDay").text(dias.seis + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.dos);
								}
								else if(dia == 6 && c == 1) {
									$(".jsTitleHeader").text(servicios.uno);
									$(".jsTitleDay").text(dias.siete + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.dos);
								}
								else {
									$(".jsTitleHeader").text("ERROR");
									$(".jsTitleDay").text("ERROR")
									$(".jsTitleMounth").text("ERROR");
								}
					}

					else if (c == 2) {
								if(dia == 0 && c == 2) {
									$(".jsTitleHeader").text(servicios.uno);
									$(".jsTitleDay").text(dias.uno + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.tres);
								}
								else if(dia == 1 && c == 2) {
									$(".jsTitleHeader").text(servicios.uno);
									$(".jsTitleDay").text(dias.dos + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.tres);
								}
								else if(dia == 2 && c == 2) {
									$(".jsTitleHeader").text(servicios.uno);
									$(".jsTitleDay").text(dias.tres + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.tres);
								}
								else if(dia == 3 && c == 2) {
									$(".jsTitleHeader").text(servicios.uno);
									$(".jsTitleDay").text(dias.cuatro + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.tres);
								}
								else if(dia == 4 && c == 2) {
									$(".jsTitleHeader").text(servicios.uno);
									$(".jsTitleDay").text(dias.cinco + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.tres);
								}
								else if(dia == 5 && c == 2) {
									$(".jsTitleHeader").text(servicios.uno);
									$(".jsTitleDay").text(dias.seis + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.tres);
								}
								else if(dia == 6 && c == 2) {
									$(".jsTitleHeader").text(servicios.uno);
									$(".jsTitleDay").text(dias.siete + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.tres);
								}
								else {
									$(".jsTitleHeader").text("ERROR");
									$(".jsTitleDay").text("ERROR")
									$(".jsTitleMounth").text("ERROR");
								}
					}

					else if (c == 3) {
								if(dia == 0 && c == 3) {
									$(".jsTitleHeader").text(servicios.uno);
									$(".jsTitleDay").text(dias.uno + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.cuatro);
								}
								else if(dia == 1 && c == 3) {
									$(".jsTitleHeader").text(servicios.uno);
									$(".jsTitleDay").text(dias.dos + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.cuatro);
								}
								else if(dia == 2 && c == 3) {
									$(".jsTitleHeader").text(servicios.uno);
									$(".jsTitleDay").text(dias.tres + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.cuatro);
								}
								else if(dia == 3 && c == 3) {
									$(".jsTitleHeader").text(servicios.uno);
									$(".jsTitleDay").text(dias.cuatro + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.cuatro);
								}
								else if(dia == 4 && c == 3) {
									$(".jsTitleHeader").text(servicios.uno);
									$(".jsTitleDay").text(dias.cinco + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.cuatro);
								}
								else if(dia == 5 && c == 3) {
									$(".jsTitleHeader").text(servicios.uno);
									$(".jsTitleDay").text(dias.seis + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.cuatro);
								}
								else if(dia == 6 && c == 3) {
									$(".jsTitleHeader").text(servicios.uno);
									$(".jsTitleDay").text(dias.siete + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.cuatro);
								}
								else {
									$(".jsTitleHeader").text("ERROR");
									$(".jsTitleDay").text("ERROR")
									$(".jsTitleMounth").text("ERROR");
								}
					}

					else if (c == 4) {
								if(dia == 0 && c == 4) {
									$(".jsTitleHeader").text(servicios.uno);
									$(".jsTitleDay").text(dias.uno + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.cinco);
								}
								else if(dia == 1 && c == 4) {
									$(".jsTitleHeader").text(servicios.uno);
									$(".jsTitleDay").text(dias.dos + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.cinco);
								}
								else if(dia == 2 && c == 4) {
									$(".jsTitleHeader").text(servicios.uno);
									$(".jsTitleDay").text(dias.tres + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.cinco);
								}
								else if(dia == 3 && c == 4) {
									$(".jsTitleHeader").text(servicios.uno);
									$(".jsTitleDay").text(dias.cuatro + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.cinco);
								}
								else if(dia == 4 && c == 4) {
									$(".jsTitleHeader").text(servicios.uno);
									$(".jsTitleDay").text(dias.cinco + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.cinco);
								}
								else if(dia == 5 && c == 4) {
									$(".jsTitleHeader").text(servicios.uno);
									$(".jsTitleDay").text(dias.seis + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.cinco);
								}
								else if(dia == 6 && c == 4) {
									$(".jsTitleHeader").text(servicios.uno);
									$(".jsTitleDay").text(dias.siete + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.cinco);
								}
								else {
									$(".jsTitleHeader").text("ERROR");
									$(".jsTitleDay").text("ERROR")
									$(".jsTitleMounth").text("ERROR");
								}
					}
					else if (c == 5) {
								if(dia == 0 && c == 5) {
									$(".jsTitleHeader").text(servicios.uno);
									$(".jsTitleDay").text(dias.uno + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.seis);
								}
								else if(dia == 1 && c == 5) {
									$(".jsTitleHeader").text(servicios.uno);
									$(".jsTitleDay").text(dias.dos + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.seis);
								}
								else if(dia == 2 && c == 5) {
									$(".jsTitleHeader").text(servicios.uno);
									$(".jsTitleDay").text(dias.tres + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.seis);
								}
								else if(dia == 3 && c == 5) {
									$(".jsTitleHeader").text(servicios.uno);
									$(".jsTitleDay").text(dias.cuatro + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.seis);
								}
								else if(dia == 4 && c == 5) {
									$(".jsTitleHeader").text(servicios.uno);
									$(".jsTitleDay").text(dias.cinco + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.seis);
								}
								else if(dia == 5 && c == 5) {
									$(".jsTitleHeader").text(servicios.uno);
									$(".jsTitleDay").text(dias.seis + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.seis);
								}
								else if(dia == 6 && c == 5) {
									$(".jsTitleHeader").text(servicios.uno);
									$(".jsTitleDay").text(dias.siete + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.seis);
								}
								else {
									$(".jsTitleHeader").text("ERROR");
									$(".jsTitleDay").text("ERROR")
									$(".jsTitleMounth").text("ERROR");
								}
					}
					else if (c == 6) {
								if(dia == 0 && c == 6) {
									$(".jsTitleHeader").text(servicios.uno);
									$(".jsTitleDay").text(dias.uno + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.siete);
								}
								else if(dia == 1 && c == 6) {
									$(".jsTitleHeader").text(servicios.uno);
									$(".jsTitleDay").text(dias.dos + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.siete);
								}
								else if(dia == 2 && c == 6) {
									$(".jsTitleHeader").text(servicios.uno);
									$(".jsTitleDay").text(dias.tres + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.siete);
								}
								else if(dia == 3 && c == 6) {
									$(".jsTitleHeader").text(servicios.uno);
									$(".jsTitleDay").text(dias.cuatro + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.siete);
								}
								else if(dia == 4 && c == 6) {
									$(".jsTitleHeader").text(servicios.uno);
									$(".jsTitleDay").text(dias.cinco + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.siete);
								}
								else if(dia == 5 && c == 6) {
									$(".jsTitleHeader").text(servicios.uno);
									$(".jsTitleDay").text(dias.seis + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.siete);
								}
								else if(dia == 6 && c == 6) {
									$(".jsTitleHeader").text(servicios.uno);
									$(".jsTitleDay").text(dias.siete + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.siete);
								}
								else {
									$(".jsTitleHeader").text("ERROR");
									$(".jsTitleDay").text("ERROR")
									$(".jsTitleMounth").text("ERROR");
								}
					}
					else if (c == 7) {
								if(dia == 0 && c == 7) {
									$(".jsTitleHeader").text(servicios.uno);
									$(".jsTitleDay").text(dias.uno + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.ocho);
								}
								else if(dia == 1 && c == 7) {
									$(".jsTitleHeader").text(servicios.uno);
									$(".jsTitleDay").text(dias.dos + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.ocho);
								}
								else if(dia == 2 && c == 7) {
									$(".jsTitleHeader").text(servicios.uno);
									$(".jsTitleDay").text(dias.tres + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.ocho);
								}
								else if(dia == 3 && c == 7) {
									$(".jsTitleHeader").text(servicios.uno);
									$(".jsTitleDay").text(dias.cuatro + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.ocho);
								}
								else if(dia == 4 && c == 7) {
									$(".jsTitleHeader").text(servicios.uno);
									$(".jsTitleDay").text(dias.cinco + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.ocho);
								}
								else if(dia == 5 && c == 7) {
									$(".jsTitleHeader").text(servicios.uno);
									$(".jsTitleDay").text(dias.seis + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.ocho);
								}
								else if(dia == 6 && c == 7) {
									$(".jsTitleHeader").text(servicios.uno);
									$(".jsTitleDay").text(dias.siete + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.ocho);
								}
								else {
									$(".jsTitleHeader").text("ERROR");
									$(".jsTitleDay").text("ERROR")
									$(".jsTitleMounth").text("ERROR");
								}
					}
					else if (c == 8) {
								if(dia == 0 && c == 8) {
									$(".jsTitleHeader").text(servicios.uno);
									$(".jsTitleDay").text(dias.uno + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.nueve);
								}
								else if(dia == 1 && c == 8) {
									$(".jsTitleHeader").text(servicios.uno);
									$(".jsTitleDay").text(dias.dos + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.nueve);
								}
								else if(dia == 2 && c == 8) {
									$(".jsTitleHeader").text(servicios.uno);
									$(".jsTitleDay").text(dias.tres + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.nueve);
								}
								else if(dia == 3 && c == 8) {
									$(".jsTitleHeader").text(servicios.uno);
									$(".jsTitleDay").text(dias.cuatro + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.nueve);
								}
								else if(dia == 4 && c == 8) {
									$(".jsTitleHeader").text(servicios.uno);
									$(".jsTitleDay").text(dias.cinco + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.nueve);
								}
								else if(dia == 5 && c == 8) {
									$(".jsTitleHeader").text(servicios.uno);
									$(".jsTitleDay").text(dias.seis + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.nueve);
								}
								else if(dia == 6 && c == 8) {
									$(".jsTitleHeader").text(servicios.uno);
									$(".jsTitleDay").text(dias.siete + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.nueve);
								}
								else {
									$(".jsTitleHeader").text("ERROR");
									$(".jsTitleDay").text("ERROR")
									$(".jsTitleMounth").text("ERROR");
								}
					}
					else if (c == 9) {
								if(dia == 0 && c == 9) {
									$(".jsTitleHeader").text(servicios.uno);
									$(".jsTitleDay").text(dias.uno + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.diez);
								}
								else if(dia == 1 && c == 9) {
									$(".jsTitleHeader").text(servicios.uno);
									$(".jsTitleDay").text(dias.dos + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.diez);
								}
								else if(dia == 2 && c == 9) {
									$(".jsTitleHeader").text(servicios.uno);
									$(".jsTitleDay").text(dias.tres + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.diez);
								}
								else if(dia == 3 && c == 9) {
									$(".jsTitleHeader").text(servicios.uno);
									$(".jsTitleDay").text(dias.cuatro + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.diez);
								}
								else if(dia == 4 && c == 9) {
									$(".jsTitleHeader").text(servicios.uno);
									$(".jsTitleDay").text(dias.cinco + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.diez);
								}
								else if(dia == 5 && c == 9) {
									$(".jsTitleHeader").text(servicios.uno);
									$(".jsTitleDay").text(dias.seis + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.diez);
								}
								else if(dia == 6 && c == 9) {
									$(".jsTitleHeader").text(servicios.uno);
									$(".jsTitleDay").text(dias.siete + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.diez);
								}
								else {
									$(".jsTitleHeader").text("ERROR");
									$(".jsTitleDay").text("ERROR")
									$(".jsTitleMounth").text("ERROR");
								}
					}
					else if (c == 10) {
								if(dia == 0 && c == 10) {
									$(".jsTitleHeader").text(servicios.uno);
									$(".jsTitleDay").text(dias.uno + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.once);
								}
								else if(dia == 1 && c == 10) {
									$(".jsTitleHeader").text(servicios.uno);
									$(".jsTitleDay").text(dias.dos + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.once);
								}
								else if(dia == 2 && c == 10) {
									$(".jsTitleHeader").text(servicios.uno);
									$(".jsTitleDay").text(dias.tres + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.once);
								}
								else if(dia == 3 && c == 10) {
									$(".jsTitleHeader").text(servicios.uno);
									$(".jsTitleDay").text(dias.cuatro + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.once);
								}
								else if(dia == 4 && c == 10) {
									$(".jsTitleHeader").text(servicios.uno);
									$(".jsTitleDay").text(dias.cinco + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.once);
								}
								else if(dia == 5 && c == 10) {
									$(".jsTitleHeader").text(servicios.uno);
									$(".jsTitleDay").text(dias.seis + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.once);
								}
								else if(dia == 6 && c == 10) {
									$(".jsTitleHeader").text(servicios.uno);
									$(".jsTitleDay").text(dias.siete + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.once);
								}
								else {
									$(".jsTitleHeader").text("ERROR");
									$(".jsTitleDay").text("ERROR")
									$(".jsTitleMounth").text("ERROR");
								}
					}
					else if (c == 11) {
								if(dia == 0 && c == 11) {
									$(".jsTitleHeader").text(servicios.uno);
									$(".jsTitleDay").text(dias.uno + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.dosce);
								}
								else if(dia == 1 && c == 11) {
									$(".jsTitleHeader").text(servicios.uno);
									$(".jsTitleDay").text(dias.dos + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.dosce);
								}
								else if(dia == 2 && c == 11) {
									$(".jsTitleHeader").text(servicios.uno);
									$(".jsTitleDay").text(dias.tres + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.dosce);
								}
								else if(dia == 3 && c == 11) {
									$(".jsTitleHeader").text(servicios.uno);
									$(".jsTitleDay").text(dias.cuatro + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.dosce);
								}
								else if(dia == 4 && c == 11) {
									$(".jsTitleHeader").text(servicios.uno);
									$(".jsTitleDay").text(dias.cinco + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.dosce);
								}
								else if(dia == 5 && c == 11) {
									$(".jsTitleHeader").text(servicios.uno);
									$(".jsTitleDay").text(dias.seis + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.dosce);
								}
								else if(dia == 6 && c == 11) {
									$(".jsTitleHeader").text(servicios.uno);
									$(".jsTitleDay").text(dias.siete + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.dosce);
								}
								else {
									$(".jsTitleHeader").text("ERROR");
									$(".jsTitleDay").text("ERROR")
									$(".jsTitleMounth").text("ERROR");
								}
					}
			}
			else if(hora <= 10 || hora <= 16) {
				//entre las 10 y 3pm

				
					if(c == 0) {
						 	if(dia == 0 && c == 0) {
								$(".jsTitleHeader").text(servicios.dos);
								$(".jsTitleDay").text(dias.uno + " ");
								$(".jsTitleMounth").text(d +" "+ "/" + meses.uno);
							}
							else if(dia == 1 && c == 0) {
								$(".jsTitleHeader").text(servicios.dos);
								$(".jsTitleDay").text(dias.dos + " ");
								$(".jsTitleMounth").text(d +" "+ "/" + meses.uno);
							}
							else if(dia == 2 && c == 0) {
								$(".jsTitleHeader").text(servicios.dos);
								$(".jsTitleDay").text(dias.tres + " ");
								$(".jsTitleMounth").text(d +" "+ "/" + meses.uno);
							}
							else if(dia == 3 && c == 0) {
								$(".jsTitleHeader").text(servicios.dos);
								$(".jsTitleDay").text(dias.cuatro + " ");
								$(".jsTitleMounth").text(d +" "+ "/" + meses.uno);
							}
							else if(dia == 4 && c == 0) {
								$(".jsTitleHeader").text(servicios.dos);
								$(".jsTitleDay").text(dias.cinco + " ");
								$(".jsTitleMounth").text(d +" "+ "/" + meses.uno);
							}
							else if(dia == 5 && c == 0) {
								$(".jsTitleHeader").text(servicios.dos);
								$(".jsTitleDay").text(dias.seis + " ");
								$(".jsTitleMounth").text(d +" "+ "/" + meses.uno);
							}
							else if(dia == 6 && c == 0) {
								$(".jsTitleHeader").text(servicios.dos);
								$(".jsTitleDay").text(dias.siete + " ");
								$(".jsTitleMounth").text(d +" "+ "/" + meses.uno);
							}
							else {
								$(".jsTitleHeader").text("ERROR");
								$(".jsTitleDay").text("ERROR")
								$(".jsTitleMounth").text("ERROR");
							}
					}
					else if (c == 1) {
								if(dia == 0 && c == 1) {
									$(".jsTitleHeader").text(servicios.dos);
									$(".jsTitleDay").text(dias.uno + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.dos);
								}
								else if(dia == 1 && c == 1) {
									$(".jsTitleHeader").text(servicios.dos);
									$(".jsTitleDay").text(dias.dos + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.dos);
								}
								else if(dia == 2 && c == 1) {
									$(".jsTitleHeader").text(servicios.dos);
									$(".jsTitleDay").text(dias.tres + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.dos);
								}
								else if(dia == 3 && c == 1) {
									$(".jsTitleHeader").text(servicios.dos);
									$(".jsTitleDay").text(dias.cuatro + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.dos);
								}
								else if(dia == 4 && c == 1) {
									$(".jsTitleHeader").text(servicios.dos);
									$(".jsTitleDay").text(dias.cinco + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.dos);
								}
								else if(dia == 5 && c == 1) {
									$(".jsTitleHeader").text(servicios.dos);
									$(".jsTitleDay").text(dias.seis + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.dos);
								}
								else if(dia == 6 && c == 1) {
									$(".jsTitleHeader").text(servicios.dos);
									$(".jsTitleDay").text(dias.siete + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.dos);
								}
								else {
									$(".jsTitleHeader").text("ERROR");
									$(".jsTitleDay").text("ERROR")
									$(".jsTitleMounth").text("ERROR");
								}
					}

					else if (c == 2) {
								if(dia == 0 && c == 2) {
									$(".jsTitleHeader").text(servicios.dos);
									$(".jsTitleDay").text(dias.uno + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.tres);
								}
								else if(dia == 1 && c == 2) {
									$(".jsTitleHeader").text(servicios.dos);
									$(".jsTitleDay").text(dias.dos + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.tres);
								}
								else if(dia == 2 && c == 2) {
									$(".jsTitleHeader").text(servicios.dos);
									$(".jsTitleDay").text(dias.tres + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.tres);
								}
								else if(dia == 3 && c == 2) {
									$(".jsTitleHeader").text(servicios.dos);
									$(".jsTitleDay").text(dias.cuatro + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.tres);
								}
								else if(dia == 4 && c == 2) {
									$(".jsTitleHeader").text(servicios.dos);
									$(".jsTitleDay").text(dias.cinco + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.tres);
								}
								else if(dia == 5 && c == 2) {
									$(".jsTitleHeader").text(servicios.dos);
									$(".jsTitleDay").text(dias.seis + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.tres);
								}
								else if(dia == 6 && c == 2) {
									$(".jsTitleHeader").text(servicios.dos);
									$(".jsTitleDay").text(dias.siete + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.tres);
								}
								else {
									$(".jsTitleHeader").text("ERROR");
									$(".jsTitleDay").text("ERROR")
									$(".jsTitleMounth").text("ERROR");
								}
					}

					else if (c == 3) {
								if(dia == 0 && c == 3) {
									$(".jsTitleHeader").text(servicios.dos);
									$(".jsTitleDay").text(dias.uno + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.cuatro);
								}
								else if(dia == 1 && c == 3) {
									$(".jsTitleHeader").text(servicios.dos);
									$(".jsTitleDay").text(dias.dos + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.cuatro);
								}
								else if(dia == 2 && c == 3) {
									$(".jsTitleHeader").text(servicios.dos);
									$(".jsTitleDay").text(dias.tres + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.cuatro);
								}
								else if(dia == 3 && c == 3) {
									$(".jsTitleHeader").text(servicios.dos);
									$(".jsTitleDay").text(dias.cuatro + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.cuatro);
								}
								else if(dia == 4 && c == 3) {
									$(".jsTitleHeader").text(servicios.dos);
									$(".jsTitleDay").text(dias.cinco + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.cuatro);
								}
								else if(dia == 5 && c == 3) {
									$(".jsTitleHeader").text(servicios.dos);
									$(".jsTitleDay").text(dias.seis + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.cuatro);
								}
								else if(dia == 6 && c == 3) {
									$(".jsTitleHeader").text(servicios.dos);
									$(".jsTitleDay").text(dias.siete + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.cuatro);
								}
								else {
									$(".jsTitleHeader").text("ERROR");
									$(".jsTitleDay").text("ERROR")
									$(".jsTitleMounth").text("ERROR");
								}
					}

					else if (c == 4) {
								if(dia == 0 && c == 4) {
									$(".jsTitleHeader").text(servicios.dos);
									$(".jsTitleDay").text(dias.uno + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.cinco);
								}
								else if(dia == 1 && c == 4) {
									$(".jsTitleHeader").text(servicios.dos);
									$(".jsTitleDay").text(dias.dos + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.cinco);
								}
								else if(dia == 2 && c == 4) {
									$(".jsTitleHeader").text(servicios.dos);
									$(".jsTitleDay").text(dias.tres + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.cinco);
								}
								else if(dia == 3 && c == 4) {
									$(".jsTitleHeader").text(servicios.dos);
									$(".jsTitleDay").text(dias.cuatro + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.cinco);
								}
								else if(dia == 4 && c == 4) {
									$(".jsTitleHeader").text(servicios.dos);
									$(".jsTitleDay").text(dias.cinco + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.cinco);
								}
								else if(dia == 5 && c == 4) {
									$(".jsTitleHeader").text(servicios.dos);
									$(".jsTitleDay").text(dias.seis + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.cinco);
								}
								else if(dia == 6 && c == 4) {
									$(".jsTitleHeader").text(servicios.dos);
									$(".jsTitleDay").text(dias.siete + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.cinco);
								}
								else {
									$(".jsTitleHeader").text("ERROR");
									$(".jsTitleDay").text("ERROR")
									$(".jsTitleMounth").text("ERROR");
								}
					}
					else if (c == 5) {
								if(dia == 0 && c == 5) {
									$(".jsTitleHeader").text(servicios.dos);
									$(".jsTitleDay").text(dias.uno + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.seis);
								}
								else if(dia == 1 && c == 5) {
									$(".jsTitleHeader").text(servicios.dos);
									$(".jsTitleDay").text(dias.dos + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.seis);
								}
								else if(dia == 2 && c == 5) {
									$(".jsTitleHeader").text(servicios.dos);
									$(".jsTitleDay").text(dias.tres + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.seis);
								}
								else if(dia == 3 && c == 5) {
									$(".jsTitleHeader").text(servicios.dos);
									$(".jsTitleDay").text(dias.cuatro + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.seis);
								}
								else if(dia == 4 && c == 5) {
									$(".jsTitleHeader").text(servicios.dos);
									$(".jsTitleDay").text(dias.cinco + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.seis);
								}
								else if(dia == 5 && c == 5) {
									$(".jsTitleHeader").text(servicios.dos);
									$(".jsTitleDay").text(dias.seis + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.seis);
								}
								else if(dia == 6 && c == 5) {
									$(".jsTitleHeader").text(servicios.dos);
									$(".jsTitleDay").text(dias.siete + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.seis);
								}
								else {
									$(".jsTitleHeader").text("ERROR");
									$(".jsTitleDay").text("ERROR")
									$(".jsTitleMounth").text("ERROR");
								}
					}
					else if (c == 6) {
								if(dia == 0 && c == 6) {
									$(".jsTitleHeader").text(servicios.dos);
									$(".jsTitleDay").text(dias.uno + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.siete);
								}
								else if(dia == 1 && c == 6) {
									$(".jsTitleHeader").text(servicios.dos);
									$(".jsTitleDay").text(dias.dos + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.siete);
								}
								else if(dia == 2 && c == 6) {
									$(".jsTitleHeader").text(servicios.dos);
									$(".jsTitleDay").text(dias.tres + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.siete);
								}
								else if(dia == 3 && c == 6) {
									$(".jsTitleHeader").text(servicios.dos);
									$(".jsTitleDay").text(dias.cuatro + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.siete);
								}
								else if(dia == 4 && c == 6) {
									$(".jsTitleHeader").text(servicios.dos);
									$(".jsTitleDay").text(dias.cinco + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.siete);
								}
								else if(dia == 5 && c == 6) {
									$(".jsTitleHeader").text(servicios.dos);
									$(".jsTitleDay").text(dias.seis + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.siete);
								}
								else if(dia == 6 && c == 6) {
									$(".jsTitleHeader").text(servicios.dos);
									$(".jsTitleDay").text(dias.siete + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.siete);
								}
								else {
									$(".jsTitleHeader").text("ERROR");
									$(".jsTitleDay").text("ERROR")
									$(".jsTitleMounth").text("ERROR");
								}
					}
					else if (c == 7) {
								if(dia == 0 && c == 7) {
									$(".jsTitleHeader").text(servicios.dos);
									$(".jsTitleDay").text(dias.uno + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.ocho);
								}
								else if(dia == 1 && c == 7) {
									$(".jsTitleHeader").text(servicios.dos);
									$(".jsTitleDay").text(dias.dos + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.ocho);
								}
								else if(dia == 2 && c == 7) {
									$(".jsTitleHeader").text(servicios.dos);
									$(".jsTitleDay").text(dias.tres + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.ocho);
								}
								else if(dia == 3 && c == 7) {
									$(".jsTitleHeader").text(servicios.dos);
									$(".jsTitleDay").text(dias.cuatro + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.ocho);
								}
								else if(dia == 4 && c == 7) {
									$(".jsTitleHeader").text(servicios.dos);
									$(".jsTitleDay").text(dias.cinco + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.ocho);
								}
								else if(dia == 5 && c == 7) {
									$(".jsTitleHeader").text(servicios.dos);
									$(".jsTitleDay").text(dias.seis + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.ocho);
								}
								else if(dia == 6 && c == 7) {
									$(".jsTitleHeader").text(servicios.dos);
									$(".jsTitleDay").text(dias.siete + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.ocho);
								}
								else {
									$(".jsTitleHeader").text("ERROR");
									$(".jsTitleDay").text("ERROR")
									$(".jsTitleMounth").text("ERROR");
								}
					}
					else if (c == 8) {
								if(dia == 0 && c == 8) {
									$(".jsTitleHeader").text(servicios.dos);
									$(".jsTitleDay").text(dias.uno + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.nueve);
								}
								else if(dia == 1 && c == 8) {
									$(".jsTitleHeader").text(servicios.dos);
									$(".jsTitleDay").text(dias.dos + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.nueve);
								}
								else if(dia == 2 && c == 8) {
									$(".jsTitleHeader").text(servicios.dos);
									$(".jsTitleDay").text(dias.tres + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.nueve);
								}
								else if(dia == 3 && c == 8) {
									$(".jsTitleHeader").text(servicios.dos);
									$(".jsTitleDay").text(dias.cuatro + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.nueve);
								}
								else if(dia == 4 && c == 8) {
									$(".jsTitleHeader").text(servicios.dos);
									$(".jsTitleDay").text(dias.cinco + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.nueve);
								}
								else if(dia == 5 && c == 8) {
									$(".jsTitleHeader").text(servicios.dos);
									$(".jsTitleDay").text(dias.seis + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.nueve);
								}
								else if(dia == 6 && c == 8) {
									$(".jsTitleHeader").text(servicios.dos);
									$(".jsTitleDay").text(dias.siete + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.nueve);
								}
								else {
									$(".jsTitleHeader").text("ERROR");
									$(".jsTitleDay").text("ERROR")
									$(".jsTitleMounth").text("ERROR");
								}
					}
					else if (c == 9) {
								if(dia == 0 && c == 9) {
									$(".jsTitleHeader").text(servicios.dos);
									$(".jsTitleDay").text(dias.uno + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.diez);
								}
								else if(dia == 1 && c == 9) {
									$(".jsTitleHeader").text(servicios.dos);
									$(".jsTitleDay").text(dias.dos + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.diez);
								}
								else if(dia == 2 && c == 9) {
									$(".jsTitleHeader").text(servicios.dos);
									$(".jsTitleDay").text(dias.tres + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.diez);
								}
								else if(dia == 3 && c == 9) {
									$(".jsTitleHeader").text(servicios.dos);
									$(".jsTitleDay").text(dias.cuatro + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.diez);
								}
								else if(dia == 4 && c == 9) {
									$(".jsTitleHeader").text(servicios.dos);
									$(".jsTitleDay").text(dias.cinco + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.diez);
								}
								else if(dia == 5 && c == 9) {
									$(".jsTitleHeader").text(servicios.dos);
									$(".jsTitleDay").text(dias.seis + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.diez);
								}
								else if(dia == 6 && c == 9) {
									$(".jsTitleHeader").text(servicios.dos);
									$(".jsTitleDay").text(dias.siete + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.diez);
								}
								else {
									$(".jsTitleHeader").text("ERROR");
									$(".jsTitleDay").text("ERROR")
									$(".jsTitleMounth").text("ERROR");
								}
					}
					else if (c == 10) {
								if(dia == 0 && c == 10) {
									$(".jsTitleHeader").text(servicios.dos);
									$(".jsTitleDay").text(dias.uno + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.once);
								}
								else if(dia == 1 && c == 10) {
									$(".jsTitleHeader").text(servicios.dos);
									$(".jsTitleDay").text(dias.dos + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.once);
								}
								else if(dia == 2 && c == 10) {
									$(".jsTitleHeader").text(servicios.dos);
									$(".jsTitleDay").text(dias.tres + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.once);
								}
								else if(dia == 3 && c == 10) {
									$(".jsTitleHeader").text(servicios.dos);
									$(".jsTitleDay").text(dias.cuatro + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.once);
								}
								else if(dia == 4 && c == 10) {
									$(".jsTitleHeader").text(servicios.dos);
									$(".jsTitleDay").text(dias.cinco + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.once);
								}
								else if(dia == 5 && c == 10) {
									$(".jsTitleHeader").text(servicios.dos);
									$(".jsTitleDay").text(dias.seis + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.once);
								}
								else if(dia == 6 && c == 10) {
									$(".jsTitleHeader").text(servicios.dos);
									$(".jsTitleDay").text(dias.siete + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.once);
								}
								else {
									$(".jsTitleHeader").text("ERROR");
									$(".jsTitleDay").text("ERROR")
									$(".jsTitleMounth").text("ERROR");
								}
					}
					else if (c == 11) {
								if(dia == 0 && c == 11) {
									$(".jsTitleHeader").text(servicios.dos);
									$(".jsTitleDay").text(dias.uno + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.dosce);
								}
								else if(dia == 1 && c == 11) {
									$(".jsTitleHeader").text(servicios.dos);
									$(".jsTitleDay").text(dias.dos + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.dosce);
								}
								else if(dia == 2 && c == 11) {
									$(".jsTitleHeader").text(servicios.dos);
									$(".jsTitleDay").text(dias.tres + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.dosce);
								}
								else if(dia == 3 && c == 11) {
									$(".jsTitleHeader").text(servicios.dos);
									$(".jsTitleDay").text(dias.cuatro + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.dosce);
								}
								else if(dia == 4 && c == 11) {
									$(".jsTitleHeader").text(servicios.dos);
									$(".jsTitleDay").text(dias.cinco + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.dosce);
								}
								else if(dia == 5 && c == 11) {
									$(".jsTitleHeader").text(servicios.dos);
									$(".jsTitleDay").text(dias.seis + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.dosce);
								}
								else if(dia == 6 && c == 11) {
									$(".jsTitleHeader").text(servicios.dos);
									$(".jsTitleDay").text(dias.siete + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.dosce);
								}
								else {
									$(".jsTitleHeader").text("ERROR");
									$(".jsTitleDay").text("ERROR")
									$(".jsTitleMounth").text("ERROR");
								}
					}
				

			}
			else if(hora <= 17 || hora <= 23) {
				//en la noche
				
				if(c == 0) {
						 	if(dia == 0 && c == 0) {
								$(".jsTitleHeader").text(servicios.tres);
								$(".jsTitleDay").text(dias.uno + " ");
								$(".jsTitleMounth").text(d +" "+ "/" + meses.uno);
							}
							else if(dia == 1 && c == 0) {
								$(".jsTitleHeader").text(servicios.tres);
								$(".jsTitleDay").text(dias.dos + " ");
								$(".jsTitleMounth").text(d +" "+ "/" + meses.uno);
							}
							else if(dia == 2 && c == 0) {
								$(".jsTitleHeader").text(servicios.tres);
								$(".jsTitleDay").text(dias.tres + " ");
								$(".jsTitleMounth").text(d +" "+ "/" + meses.uno);
							}
							else if(dia == 3 && c == 0) {
								$(".jsTitleHeader").text(servicios.tres);
								$(".jsTitleDay").text(dias.cuatro + " ");
								$(".jsTitleMounth").text(d +" "+ "/" + meses.uno);
							}
							else if(dia == 4 && c == 0) {
								$(".jsTitleHeader").text(servicios.tres);
								$(".jsTitleDay").text(dias.cinco + " ");
								$(".jsTitleMounth").text(d +" "+ "/" + meses.uno);
							}
							else if(dia == 5 && c == 0) {
								$(".jsTitleHeader").text(servicios.tres);
								$(".jsTitleDay").text(dias.seis + " ");
								$(".jsTitleMounth").text(d +" "+ "/" + meses.uno);
							}
							else if(dia == 6 && c == 0) {
								$(".jsTitleHeader").text(servicios.tres);
								$(".jsTitleDay").text(dias.siete + " ");
								$(".jsTitleMounth").text(d +" "+ "/" + meses.uno);
							}
							else {
								$(".jsTitleHeader").text("ERROR");
								$(".jsTitleDay").text("ERROR")
								$(".jsTitleMounth").text("ERROR");
							}
					}
					else if (c == 1) {
								if(dia == 0 && c == 1) {
									$(".jsTitleHeader").text(servicios.tres);
									$(".jsTitleDay").text(dias.uno + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.dos);
								}
								else if(dia == 1 && c == 1) {
									$(".jsTitleHeader").text(servicios.tres);
									$(".jsTitleDay").text(dias.dos + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.dos);
								}
								else if(dia == 2 && c == 1) {
									$(".jsTitleHeader").text(servicios.tres);
									$(".jsTitleDay").text(dias.tres + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.dos);
								}
								else if(dia == 3 && c == 1) {
									$(".jsTitleHeader").text(servicios.tres);
									$(".jsTitleDay").text(dias.cuatro + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.dos);
								}
								else if(dia == 4 && c == 1) {
									$(".jsTitleHeader").text(servicios.tres);
									$(".jsTitleDay").text(dias.cinco + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.dos);
								}
								else if(dia == 5 && c == 1) {
									$(".jsTitleHeader").text(servicios.tres);
									$(".jsTitleDay").text(dias.seis + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.dos);
								}
								else if(dia == 6 && c == 1) {
									$(".jsTitleHeader").text(servicios.dos);
									$(".jsTitleDay").text(dias.siete + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.dos);
								}
								else {
									$(".jsTitleHeader").text("ERROR");
									$(".jsTitleDay").text("ERROR")
									$(".jsTitleMounth").text("ERROR");
								}
					}

					else if (c == 2) {
								if(dia == 0 && c == 2) {
									$(".jsTitleHeader").text(servicios.tres);
									$(".jsTitleDay").text(dias.uno + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.tres);
								}
								else if(dia == 1 && c == 2) {
									$(".jsTitleHeader").text(servicios.tres);
									$(".jsTitleDay").text(dias.dos + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.tres);
								}
								else if(dia == 2 && c == 2) {
									$(".jsTitleHeader").text(servicios.tres);
									$(".jsTitleDay").text(dias.tres + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.tres);
								}
								else if(dia == 3 && c == 2) {
									$(".jsTitleHeader").text(servicios.tres);
									$(".jsTitleDay").text(dias.cuatro + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.tres);
								}
								else if(dia == 4 && c == 2) {
									$(".jsTitleHeader").text(servicios.tres);
									$(".jsTitleDay").text(dias.cinco + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.tres);
								}
								else if(dia == 5 && c == 2) {
									$(".jsTitleHeader").text(servicios.tres);
									$(".jsTitleDay").text(dias.seis + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.tres);
								}
								else if(dia == 6 && c == 2) {
									$(".jsTitleHeader").text(servicios.tres);
									$(".jsTitleDay").text(dias.siete + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.tres);
								}
								else {
									$(".jsTitleHeader").text("ERROR");
									$(".jsTitleDay").text("ERROR")
									$(".jsTitleMounth").text("ERROR");
								}
					}

					else if (c == 3) {
								if(dia == 0 && c == 3) {
									$(".jsTitleHeader").text(servicios.tres);
									$(".jsTitleDay").text(dias.uno + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.cuatro);
								}
								else if(dia == 1 && c == 3) {
									$(".jsTitleHeader").text(servicios.tres);
									$(".jsTitleDay").text(dias.dos + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.cuatro);
								}
								else if(dia == 2 && c == 3) {
									$(".jsTitleHeader").text(servicios.tres);
									$(".jsTitleDay").text(dias.tres + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.cuatro);
								}
								else if(dia == 3 && c == 3) {
									$(".jsTitleHeader").text(servicios.tres);
									$(".jsTitleDay").text(dias.cuatro + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.cuatro);
								}
								else if(dia == 4 && c == 3) {
									$(".jsTitleHeader").text(servicios.tres);
									$(".jsTitleDay").text(dias.cinco + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.cuatro);
								}
								else if(dia == 5 && c == 3) {
									$(".jsTitleHeader").text(servicios.tres);
									$(".jsTitleDay").text(dias.seis + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.cuatro);
								}
								else if(dia == 6 && c == 3) {
									$(".jsTitleHeader").text(servicios.tres);
									$(".jsTitleDay").text(dias.siete + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.cuatro);
								}
								else {
									$(".jsTitleHeader").text("ERROR");
									$(".jsTitleDay").text("ERROR")
									$(".jsTitleMounth").text("ERROR");
								}
					}

					else if (c == 4) {
								if(dia == 0 && c == 4) {
									$(".jsTitleHeader").text(servicios.tres);
									$(".jsTitleDay").text(dias.uno + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.cinco);
								}
								else if(dia == 1 && c == 4) {
									$(".jsTitleHeader").text(servicios.tres);
									$(".jsTitleDay").text(dias.dos + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.cinco);
								}
								else if(dia == 2 && c == 4) {
									$(".jsTitleHeader").text(servicios.tres);
									$(".jsTitleDay").text(dias.tres + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.cinco);
								}
								else if(dia == 3 && c == 4) {
									$(".jsTitleHeader").text(servicios.tres);
									$(".jsTitleDay").text(dias.cuatro + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.cinco);
								}
								else if(dia == 4 && c == 4) {
									$(".jsTitleHeader").text(servicios.tres);
									$(".jsTitleDay").text(dias.cinco + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.cinco);
								}
								else if(dia == 5 && c == 4) {
									$(".jsTitleHeader").text(servicios.tres);
									$(".jsTitleDay").text(dias.seis + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.cinco);
								}
								else if(dia == 6 && c == 4) {
									$(".jsTitleHeader").text(servicios.tres);
									$(".jsTitleDay").text(dias.siete + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.cinco);
								}
								else {
									$(".jsTitleHeader").text("ERROR");
									$(".jsTitleDay").text("ERROR")
									$(".jsTitleMounth").text("ERROR");
								}
					}
					else if (c == 5) {
								if(dia == 0 && c == 5) {
									$(".jsTitleHeader").text(servicios.tres);
									$(".jsTitleDay").text(dias.uno + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.seis);
								}
								else if(dia == 1 && c == 5) {
									$(".jsTitleHeader").text(servicios.tres);
									$(".jsTitleDay").text(dias.dos + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.seis);
								}
								else if(dia == 2 && c == 5) {
									$(".jsTitleHeader").text(servicios.tres);
									$(".jsTitleDay").text(dias.tres + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.seis);
								}
								else if(dia == 3 && c == 5) {
									$(".jsTitleHeader").text(servicios.tres);
									$(".jsTitleDay").text(dias.cuatro + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.seis);
								}
								else if(dia == 4 && c == 5) {
									$(".jsTitleHeader").text(servicios.tres);
									$(".jsTitleDay").text(dias.cinco + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.seis);
								}
								else if(dia == 5 && c == 5) {
									$(".jsTitleHeader").text(servicios.tres);
									$(".jsTitleDay").text(dias.seis + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.seis);
								}
								else if(dia == 6 && c == 5) {
									$(".jsTitleHeader").text(servicios.tres);
									$(".jsTitleDay").text(dias.siete + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.seis);
								}
								else {
									$(".jsTitleHeader").text("ERROR");
									$(".jsTitleDay").text("ERROR")
									$(".jsTitleMounth").text("ERROR");
								}
					}
					else if (c == 6) {
								if(dia == 0 && c == 6) {
									$(".jsTitleHeader").text(servicios.tres);
									$(".jsTitleDay").text(dias.uno + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.siete);
								}
								else if(dia == 1 && c == 6) {
									$(".jsTitleHeader").text(servicios.tres);
									$(".jsTitleDay").text(dias.dos + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.siete);
								}
								else if(dia == 2 && c == 6) {
									$(".jsTitleHeader").text(servicios.tres);
									$(".jsTitleDay").text(dias.tres + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.siete);
								}
								else if(dia == 3 && c == 6) {
									$(".jsTitleHeader").text(servicios.tres);
									$(".jsTitleDay").text(dias.cuatro + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.siete);
								}
								else if(dia == 4 && c == 6) {
									$(".jsTitleHeader").text(servicios.tres);
									$(".jsTitleDay").text(dias.cinco + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.siete);
								}
								else if(dia == 5 && c == 6) {
									$(".jsTitleHeader").text(servicios.tres);
									$(".jsTitleDay").text(dias.seis + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.siete);
								}
								else if(dia == 6 && c == 6) {
									$(".jsTitleHeader").text(servicios.tres);
									$(".jsTitleDay").text(dias.siete + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.siete);
								}
								else {
									$(".jsTitleHeader").text("ERROR");
									$(".jsTitleDay").text("ERROR")
									$(".jsTitleMounth").text("ERROR");
								}
					}
					else if (c == 7) {
								if(dia == 0 && c == 7) {
									$(".jsTitleHeader").text(servicios.tres);
									$(".jsTitleDay").text(dias.uno + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.ocho);
								}
								else if(dia == 1 && c == 7) {
									$(".jsTitleHeader").text(servicios.tres);
									$(".jsTitleDay").text(dias.dos + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.ocho);
								}
								else if(dia == 2 && c == 7) {
									$(".jsTitleHeader").text(servicios.tres);
									$(".jsTitleDay").text(dias.tres + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.ocho);
								}
								else if(dia == 3 && c == 7) {
									$(".jsTitleHeader").text(servicios.tres);
									$(".jsTitleDay").text(dias.cuatro + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.ocho);
								}
								else if(dia == 4 && c == 7) {
									$(".jsTitleHeader").text(servicios.tres);
									$(".jsTitleDay").text(dias.cinco + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.ocho);
								}
								else if(dia == 5 && c == 7) {
									$(".jsTitleHeader").text(servicios.tres);
									$(".jsTitleDay").text(dias.seis + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.ocho);
								}
								else if(dia == 6 && c == 7) {
									$(".jsTitleHeader").text(servicios.tres);
									$(".jsTitleDay").text(dias.siete + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.ocho);
								}
								else {
									$(".jsTitleHeader").text("ERROR");
									$(".jsTitleDay").text("ERROR")
									$(".jsTitleMounth").text("ERROR");
								}
					}
					else if (c == 8) {
								if(dia == 0 && c == 8) {
									$(".jsTitleHeader").text(servicios.tres);
									$(".jsTitleDay").text(dias.uno + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.nueve);
								}
								else if(dia == 1 && c == 8) {
									$(".jsTitleHeader").text(servicios.tres);
									$(".jsTitleDay").text(dias.dos + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.nueve);
								}
								else if(dia == 2 && c == 8) {
									$(".jsTitleHeader").text(servicios.tres);
									$(".jsTitleDay").text(dias.tres + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.nueve);
								}
								else if(dia == 3 && c == 8) {
									$(".jsTitleHeader").text(servicios.tres);
									$(".jsTitleDay").text(dias.cuatro + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.nueve);
								}
								else if(dia == 4 && c == 8) {
									$(".jsTitleHeader").text(servicios.tres);
									$(".jsTitleDay").text(dias.cinco + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.nueve);
								}
								else if(dia == 5 && c == 8) {
									$(".jsTitleHeader").text(servicios.tres);
									$(".jsTitleDay").text(dias.seis + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.nueve);
								}
								else if(dia == 6 && c == 8) {
									$(".jsTitleHeader").text(servicios.tres);
									$(".jsTitleDay").text(dias.siete + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.nueve);
								}
								else {
									$(".jsTitleHeader").text("ERROR");
									$(".jsTitleDay").text("ERROR")
									$(".jsTitleMounth").text("ERROR");
								}
					}
					else if (c == 9) {
								if(dia == 0 && c == 9) {
									$(".jsTitleHeader").text(servicios.tres);
									$(".jsTitleDay").text(dias.uno + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.diez);
								}
								else if(dia == 1 && c == 9) {
									$(".jsTitleHeader").text(servicios.tres);
									$(".jsTitleDay").text(dias.dos + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.diez);
								}
								else if(dia == 2 && c == 9) {
									$(".jsTitleHeader").text(servicios.tres);
									$(".jsTitleDay").text(dias.tres + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.diez);
								}
								else if(dia == 3 && c == 9) {
									$(".jsTitleHeader").text(servicios.tres);
									$(".jsTitleDay").text(dias.cuatro + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.diez);
								}
								else if(dia == 4 && c == 9) {
									$(".jsTitleHeader").text(servicios.tres);
									$(".jsTitleDay").text(dias.cinco + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.diez);
								}
								else if(dia == 5 && c == 9) {
									$(".jsTitleHeader").text(servicios.tres);
									$(".jsTitleDay").text(dias.seis + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.diez);
								}
								else if(dia == 6 && c == 9) {
									$(".jsTitleHeader").text(servicios.tres);
									$(".jsTitleDay").text(dias.siete + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.diez);
								}
								else {
									$(".jsTitleHeader").text("ERROR");
									$(".jsTitleDay").text("ERROR")
									$(".jsTitleMounth").text("ERROR");
								}
					}
					else if (c == 10) {
								if(dia == 0 && c == 10) {
									$(".jsTitleHeader").text(servicios.tres);
									$(".jsTitleDay").text(dias.uno + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.once);
								}
								else if(dia == 1 && c == 10) {
									$(".jsTitleHeader").text(servicios.tres);
									$(".jsTitleDay").text(dias.dos + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.once);
								}
								else if(dia == 2 && c == 10) {
									$(".jsTitleHeader").text(servicios.tres);
									$(".jsTitleDay").text(dias.tres + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.once);
								}
								else if(dia == 3 && c == 10) {
									$(".jsTitleHeader").text(servicios.tres);
									$(".jsTitleDay").text(dias.cuatro + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.once);
								}
								else if(dia == 4 && c == 10) {
									$(".jsTitleHeader").text(servicios.tres);
									$(".jsTitleDay").text(dias.cinco + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.once);
								}
								else if(dia == 5 && c == 10) {
									$(".jsTitleHeader").text(servicios.tres);
									$(".jsTitleDay").text(dias.seis + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.once);
								}
								else if(dia == 6 && c == 10) {
									$(".jsTitleHeader").text(servicios.tres);
									$(".jsTitleDay").text(dias.siete + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.once);
								}
								else {
									$(".jsTitleHeader").text("ERROR");
									$(".jsTitleDay").text("ERROR")
									$(".jsTitleMounth").text("ERROR");
								}
					}
					else if (c == 11) {
								if(dia == 0 && c == 11) {
									$(".jsTitleHeader").text(servicios.tres);
									$(".jsTitleDay").text(dias.uno + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.dosce);
								}
								else if(dia == 1 && c == 11) {
									$(".jsTitleHeader").text(servicios.tres);
									$(".jsTitleDay").text(dias.dos + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.dosce);
								}
								else if(dia == 2 && c == 11) {
									$(".jsTitleHeader").text(servicios.tres);
									$(".jsTitleDay").text(dias.tres + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.dosce);
								}
								else if(dia == 3 && c == 11) {
									$(".jsTitleHeader").text(servicios.tres);
									$(".jsTitleDay").text(dias.cuatro + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.dosce);
								}
								else if(dia == 4 && c == 11) {
									$(".jsTitleHeader").text(servicios.tres);
									$(".jsTitleDay").text(dias.cinco + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.dosce);
								}
								else if(dia == 5 && c == 11) {
									$(".jsTitleHeader").text(servicios.tres);
									$(".jsTitleDay").text(dias.seis + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.dosce);
								}
								else if(dia == 6 && c == 11) {
									$(".jsTitleHeader").text(servicios.tres);
									$(".jsTitleDay").text(dias.siete + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.dosce);
								}
								else {
									$(".jsTitleHeader").text("ERROR");
									$(".jsTitleDay").text("ERROR")
									$(".jsTitleMounth").text("ERROR");
								}
					}

			}
			else if(hora == 0 || hora <= 6) {
				//amaneciendo

				if(c == 0) {
						 	if(dia == 0 && c == 0) {
								$(".jsTitleHeader").text(servicios.cuatro);
								$(".jsTitleDay").text(dias.uno + " ");
								$(".jsTitleMounth").text(d +" "+ "/" + meses.uno);
							}
							else if(dia == 1 && c == 0) {
								$(".jsTitleHeader").text(servicios.cuatro);
								$(".jsTitleDay").text(dias.dos + " ");
								$(".jsTitleMounth").text(d +" "+ "/" + meses.uno);
							}
							else if(dia == 2 && c == 0) {
								$(".jsTitleHeader").text(servicios.cuatro);
								$(".jsTitleDay").text(dias.tres + " ");
								$(".jsTitleMounth").text(d +" "+ "/" + meses.uno);
							}
							else if(dia == 3 && c == 0) {
								$(".jsTitleHeader").text(servicios.cuatro);
								$(".jsTitleDay").text(dias.cuatro + " ");
								$(".jsTitleMounth").text(d +" "+ "/" + meses.uno);
							}
							else if(dia == 4 && c == 0) {
								$(".jsTitleHeader").text(servicios.cuatro);
								$(".jsTitleDay").text(dias.cinco + " ");
								$(".jsTitleMounth").text(d +" "+ "/" + meses.uno);
							}
							else if(dia == 5 && c == 0) {
								$(".jsTitleHeader").text(servicios.cuatro);
								$(".jsTitleDay").text(dias.seis + " ");
								$(".jsTitleMounth").text(d +" "+ "/" + meses.uno);
							}
							else if(dia == 6 && c == 0) {
								$(".jsTitleHeader").text(servicios.cuatro);
								$(".jsTitleDay").text(dias.siete + " ");
								$(".jsTitleMounth").text(d +" "+ "/" + meses.uno);
							}
							else {
								$(".jsTitleHeader").text("ERROR");
								$(".jsTitleDay").text("ERROR")
								$(".jsTitleMounth").text("ERROR");
							}
					}
					else if (c == 1) {
								if(dia == 0 && c == 1) {
									$(".jsTitleHeader").text(servicios.cuatro);
									$(".jsTitleDay").text(dias.uno + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.dos);
								}
								else if(dia == 1 && c == 1) {
									$(".jsTitleHeader").text(servicios.cuatro);
									$(".jsTitleDay").text(dias.dos + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.dos);
								}
								else if(dia == 2 && c == 1) {
									$(".jsTitleHeader").text(servicios.cuatro);
									$(".jsTitleDay").text(dias.tres + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.dos);
								}
								else if(dia == 3 && c == 1) {
									$(".jsTitleHeader").text(servicios.cuatro);
									$(".jsTitleDay").text(dias.cuatro + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.dos);
								}
								else if(dia == 4 && c == 1) {
									$(".jsTitleHeader").text(servicios.cuatro);
									$(".jsTitleDay").text(dias.cinco + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.dos);
								}
								else if(dia == 5 && c == 1) {
									$(".jsTitleHeader").text(servicios.cuatro);
									$(".jsTitleDay").text(dias.seis + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.dos);
								}
								else if(dia == 6 && c == 1) {
									$(".jsTitleHeader").text(servicios.cuatro);
									$(".jsTitleDay").text(dias.siete + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.dos);
								}
								else {
									$(".jsTitleHeader").text("ERROR");
									$(".jsTitleDay").text("ERROR")
									$(".jsTitleMounth").text("ERROR");
								}
					}

					else if (c == 2) {
								if(dia == 0 && c == 2) {
									$(".jsTitleHeader").text(servicios.cuatro);
									$(".jsTitleDay").text(dias.uno + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.tres);
								}
								else if(dia == 1 && c == 2) {
									$(".jsTitleHeader").text(servicios.cuatro);
									$(".jsTitleDay").text(dias.dos + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.tres);
								}
								else if(dia == 2 && c == 2) {
									$(".jsTitleHeader").text(servicios.cuatro);
									$(".jsTitleDay").text(dias.tres + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.tres);
								}
								else if(dia == 3 && c == 2) {
									$(".jsTitleHeader").text(servicios.cuatro);
									$(".jsTitleDay").text(dias.cuatro + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.tres);
								}
								else if(dia == 4 && c == 2) {
									$(".jsTitleHeader").text(servicios.cuatro);
									$(".jsTitleDay").text(dias.cinco + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.tres);
								}
								else if(dia == 5 && c == 2) {
									$(".jsTitleHeader").text(servicios.cuatro);
									$(".jsTitleDay").text(dias.seis + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.tres);
								}
								else if(dia == 6 && c == 2) {
									$(".jsTitleHeader").text(servicios.cuatro);
									$(".jsTitleDay").text(dias.siete + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.tres);
								}
								else {
									$(".jsTitleHeader").text("ERROR");
									$(".jsTitleDay").text("ERROR")
									$(".jsTitleMounth").text("ERROR");
								}
					}

					else if (c == 3) {
								if(dia == 0 && c == 3) {
									$(".jsTitleHeader").text(servicios.cuatro);
									$(".jsTitleDay").text(dias.uno + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.cuatro);
								}
								else if(dia == 1 && c == 3) {
									$(".jsTitleHeader").text(servicios.cuatro);
									$(".jsTitleDay").text(dias.dos + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.cuatro);
								}
								else if(dia == 2 && c == 3) {
									$(".jsTitleHeader").text(servicios.cuatro);
									$(".jsTitleDay").text(dias.tres + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.cuatro);
								}
								else if(dia == 3 && c == 3) {
									$(".jsTitleHeader").text(servicios.cuatro);
									$(".jsTitleDay").text(dias.cuatro + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.cuatro);
								}
								else if(dia == 4 && c == 3) {
									$(".jsTitleHeader").text(servicios.cuatro);
									$(".jsTitleDay").text(dias.cinco + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.cuatro);
								}
								else if(dia == 5 && c == 3) {
									$(".jsTitleHeader").text(servicios.cuatro);
									$(".jsTitleDay").text(dias.seis + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.cuatro);
								}
								else if(dia == 6 && c == 3) {
									$(".jsTitleHeader").text(servicios.cuatro);
									$(".jsTitleDay").text(dias.siete + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.cuatro);
								}
								else {
									$(".jsTitleHeader").text("ERROR");
									$(".jsTitleDay").text("ERROR")
									$(".jsTitleMounth").text("ERROR");
								}
					}

					else if (c == 4) {
								if(dia == 0 && c == 4) {
									$(".jsTitleHeader").text(servicios.cuatro);
									$(".jsTitleDay").text(dias.uno + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.cinco);
								}
								else if(dia == 1 && c == 4) {
									$(".jsTitleHeader").text(servicios.cuatro);
									$(".jsTitleDay").text(dias.dos + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.cinco);
								}
								else if(dia == 2 && c == 4) {
									$(".jsTitleHeader").text(servicios.cuatro);
									$(".jsTitleDay").text(dias.tres + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.cinco);
								}
								else if(dia == 3 && c == 4) {
									$(".jsTitleHeader").text(servicios.cuatro);
									$(".jsTitleDay").text(dias.cuatro + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.cinco);
								}
								else if(dia == 4 && c == 4) {
									$(".jsTitleHeader").text(servicios.cuatro);
									$(".jsTitleDay").text(dias.cinco + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.cinco);
								}
								else if(dia == 5 && c == 4) {
									$(".jsTitleHeader").text(servicios.cuatro);
									$(".jsTitleDay").text(dias.seis + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.cinco);
								}
								else if(dia == 6 && c == 4) {
									$(".jsTitleHeader").text(servicios.cuatro);
									$(".jsTitleDay").text(dias.siete + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.cinco);
								}
								else {
									$(".jsTitleHeader").text("ERROR");
									$(".jsTitleDay").text("ERROR")
									$(".jsTitleMounth").text("ERROR");
								}
					}
					else if (c == 5) {
								if(dia == 0 && c == 5) {
									$(".jsTitleHeader").text(servicios.cuatro);
									$(".jsTitleDay").text(dias.uno + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.seis);
								}
								else if(dia == 1 && c == 5) {
									$(".jsTitleHeader").text(servicios.cuatro);
									$(".jsTitleDay").text(dias.dos + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.seis);
								}
								else if(dia == 2 && c == 5) {
									$(".jsTitleHeader").text(servicios.cuatro);
									$(".jsTitleDay").text(dias.tres + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.seis);
								}
								else if(dia == 3 && c == 5) {
									$(".jsTitleHeader").text(servicios.cuatro);
									$(".jsTitleDay").text(dias.cuatro + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.seis);
								}
								else if(dia == 4 && c == 5) {
									$(".jsTitleHeader").text(servicios.cuatro);
									$(".jsTitleDay").text(dias.cinco + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.seis);
								}
								else if(dia == 5 && c == 5) {
									$(".jsTitleHeader").text(servicios.cuatro);
									$(".jsTitleDay").text(dias.seis + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.seis);
								}
								else if(dia == 6 && c == 5) {
									$(".jsTitleHeader").text(servicios.cuatro);
									$(".jsTitleDay").text(dias.siete + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.seis);
								}
								else {
									$(".jsTitleHeader").text("ERROR");
									$(".jsTitleDay").text("ERROR")
									$(".jsTitleMounth").text("ERROR");
								}
					}
					else if (c == 6) {
								if(dia == 0 && c == 6) {
									$(".jsTitleHeader").text(servicios.cuatro);
									$(".jsTitleDay").text(dias.uno + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.siete);
								}
								else if(dia == 1 && c == 6) {
									$(".jsTitleHeader").text(servicios.cuatro);
									$(".jsTitleDay").text(dias.dos + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.siete);
								}
								else if(dia == 2 && c == 6) {
									$(".jsTitleHeader").text(servicios.cuatro);
									$(".jsTitleDay").text(dias.tres + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.siete);
								}
								else if(dia == 3 && c == 6) {
									$(".jsTitleHeader").text(servicios.cuatro);
									$(".jsTitleDay").text(dias.cuatro + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.siete);
								}
								else if(dia == 4 && c == 6) {
									$(".jsTitleHeader").text(servicios.cuatro);
									$(".jsTitleDay").text(dias.cinco + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.siete);
								}
								else if(dia == 5 && c == 6) {
									$(".jsTitleHeader").text(servicios.cuatro);
									$(".jsTitleDay").text(dias.seis + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.siete);
								}
								else if(dia == 6 && c == 6) {
									$(".jsTitleHeader").text(servicios.cuatro);
									$(".jsTitleDay").text(dias.siete + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.siete);
								}
								else {
									$(".jsTitleHeader").text("ERROR");
									$(".jsTitleDay").text("ERROR")
									$(".jsTitleMounth").text("ERROR");
								}
					}
					else if (c == 7) {
								if(dia == 0 && c == 7) {
									$(".jsTitleHeader").text(servicios.cuatro);
									$(".jsTitleDay").text(dias.uno + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.ocho);
								}
								else if(dia == 1 && c == 7) {
									$(".jsTitleHeader").text(servicios.cuatro);
									$(".jsTitleDay").text(dias.dos + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.ocho);
								}
								else if(dia == 2 && c == 7) {
									$(".jsTitleHeader").text(servicios.cuatro);
									$(".jsTitleDay").text(dias.tres + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.ocho);
								}
								else if(dia == 3 && c == 7) {
									$(".jsTitleHeader").text(servicios.cuatro);
									$(".jsTitleDay").text(dias.cuatro + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.ocho);
								}
								else if(dia == 4 && c == 7) {
									$(".jsTitleHeader").text(servicios.cuatro);
									$(".jsTitleDay").text(dias.cinco + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.ocho);
								}
								else if(dia == 5 && c == 7) {
									$(".jsTitleHeader").text(servicios.cuatro);
									$(".jsTitleDay").text(dias.seis + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.ocho);
								}
								else if(dia == 6 && c == 7) {
									$(".jsTitleHeader").text(servicios.cuatro);
									$(".jsTitleDay").text(dias.siete + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.ocho);
								}
								else {
									$(".jsTitleHeader").text("ERROR");
									$(".jsTitleDay").text("ERROR")
									$(".jsTitleMounth").text("ERROR");
								}
					}
					else if (c == 8) {
								if(dia == 0 && c == 8) {
									$(".jsTitleHeader").text(servicios.cuatro);
									$(".jsTitleDay").text(dias.uno + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.nueve);
								}
								else if(dia == 1 && c == 8) {
									$(".jsTitleHeader").text(servicios.cuatro);
									$(".jsTitleDay").text(dias.dos + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.nueve);
								}
								else if(dia == 2 && c == 8) {
									$(".jsTitleHeader").text(servicios.cuatro);
									$(".jsTitleDay").text(dias.tres + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.nueve);
								}
								else if(dia == 3 && c == 8) {
									$(".jsTitleHeader").text(servicios.cuatro);
									$(".jsTitleDay").text(dias.cuatro + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.nueve);
								}
								else if(dia == 4 && c == 8) {
									$(".jsTitleHeader").text(servicios.cuatro);
									$(".jsTitleDay").text(dias.cinco + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.nueve);
								}
								else if(dia == 5 && c == 8) {
									$(".jsTitleHeader").text(servicios.cuatro);
									$(".jsTitleDay").text(dias.seis + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.nueve);
								}
								else if(dia == 6 && c == 8) {
									$(".jsTitleHeader").text(servicios.cuatro);
									$(".jsTitleDay").text(dias.siete + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.nueve);
								}
								else {
									$(".jsTitleHeader").text("ERROR");
									$(".jsTitleDay").text("ERROR")
									$(".jsTitleMounth").text("ERROR");
								}
					}
					else if (c == 9) {
								if(dia == 0 && c == 9) {
									$(".jsTitleHeader").text(servicios.cuatro);
									$(".jsTitleDay").text(dias.uno + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.diez);
								}
								else if(dia == 1 && c == 9) {
									$(".jsTitleHeader").text(servicios.cuatro);
									$(".jsTitleDay").text(dias.dos + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.diez);
								}
								else if(dia == 2 && c == 9) {
									$(".jsTitleHeader").text(servicios.cuatro);
									$(".jsTitleDay").text(dias.tres + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.diez);
								}
								else if(dia == 3 && c == 9) {
									$(".jsTitleHeader").text(servicios.cuatro);
									$(".jsTitleDay").text(dias.cuatro + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.diez);
								}
								else if(dia == 4 && c == 9) {
									$(".jsTitleHeader").text(servicios.cuatro);
									$(".jsTitleDay").text(dias.cinco + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.diez);
								}
								else if(dia == 5 && c == 9) {
									$(".jsTitleHeader").text(servicios.cuatro);
									$(".jsTitleDay").text(dias.seis + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.diez);
								}
								else if(dia == 6 && c == 9) {
									$(".jsTitleHeader").text(servicios.cuatro);
									$(".jsTitleDay").text(dias.siete + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.diez);
								}
								else {
									$(".jsTitleHeader").text("ERROR");
									$(".jsTitleDay").text("ERROR")
									$(".jsTitleMounth").text("ERROR");
								}
					}
					else if (c == 10) {
								if(dia == 0 && c == 10) {
									$(".jsTitleHeader").text(servicios.cuatro);
									$(".jsTitleDay").text(dias.uno + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.once);
								}
								else if(dia == 1 && c == 10) {
									$(".jsTitleHeader").text(servicios.cuatro);
									$(".jsTitleDay").text(dias.dos + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.once);
								}
								else if(dia == 2 && c == 10) {
									$(".jsTitleHeader").text(servicios.cuatro);
									$(".jsTitleDay").text(dias.tres + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.once);
								}
								else if(dia == 3 && c == 10) {
									$(".jsTitleHeader").text(servicios.cuatro);
									$(".jsTitleDay").text(dias.cuatro + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.once);
								}
								else if(dia == 4 && c == 10) {
									$(".jsTitleHeader").text(servicios.cuatro);
									$(".jsTitleDay").text(dias.cinco + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.once);
								}
								else if(dia == 5 && c == 10) {
									$(".jsTitleHeader").text(servicios.cuatro);
									$(".jsTitleDay").text(dias.seis + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.once);
								}
								else if(dia == 6 && c == 10) {
									$(".jsTitleHeader").text(servicios.cuatro);
									$(".jsTitleDay").text(dias.siete + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.once);
								}
								else {
									$(".jsTitleHeader").text("ERROR");
									$(".jsTitleDay").text("ERROR")
									$(".jsTitleMounth").text("ERROR");
								}
					}
					else if (c == 11) {
								if(dia == 0 && c == 11) {
									$(".jsTitleHeader").text(servicios.cuatro);
									$(".jsTitleDay").text(dias.uno + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.dosce);
								}
								else if(dia == 1 && c == 11) {
									$(".jsTitleHeader").text(servicios.cuatro);
									$(".jsTitleDay").text(dias.dos + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.dosce);
								}
								else if(dia == 2 && c == 11) {
									$(".jsTitleHeader").text(servicios.cuatro);
									$(".jsTitleDay").text(dias.tres + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.dosce);
								}
								else if(dia == 3 && c == 11) {
									$(".jsTitleHeader").text(servicios.cuatro);
									$(".jsTitleDay").text(dias.cuatro + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.dosce);
								}
								else if(dia == 4 && c == 11) {
									$(".jsTitleHeader").text(servicios.cuatro);
									$(".jsTitleDay").text(dias.cinco + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.dosce);
								}
								else if(dia == 5 && c == 11) {
									$(".jsTitleHeader").text(servicios.cuatro);
									$(".jsTitleDay").text(dias.seis + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.dosce);
								}
								else if(dia == 6 && c == 11) {
									$(".jsTitleHeader").text(servicios.cuatro);
									$(".jsTitleDay").text(dias.siete + " ");
									$(".jsTitleMounth").text(d +" "+ "/" + meses.dosce);
								}
								else {
									$(".jsTitleHeader").text("ERROR");
									$(".jsTitleDay").text("ERROR")
									$(".jsTitleMounth").text("ERROR");
								}
					}
				
			}

			/*if(b == 0) {

				$(".jsTitleDay").text(dias.uno + " ");
				$(".jsTitleMounth").text(d +" "+ "/" + meses.uno);
			}*/

		}
		dataHeader();


	}, 200);


	//To add filter
	function mesasUrl(){
		var toUrl = window.location.pathname;
		if(window.location.pathname == "/administracion/platos") {
			$('.searchFilter').hideseek({
				highlight: true, // highlight the keyword.
				ignore: '',
				nodata: 'No se encontro',
				list: '.hideseek-data'


			});
		}
		console.log(toUrl);
	}
	mesasUrl();

});