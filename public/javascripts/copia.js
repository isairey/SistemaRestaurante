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

				globalTemplate += "<option value='"+pedido+"'>"+
									pedido
								+"</option>";

				for(var i = 0; i < pedido.length; i++){
					var recorrer = pedido[i];
					console.log(recorrer);
				}

				$(".jsEditPedidos select[name='jsPedidoActual']").html(globalTemplate);

				$(".selectMozo").html(templateMesa);