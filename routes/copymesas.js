collection.findAndModify({
			query: {'_id': id},
			update: {
				'Mesa': mesa,
				'Personas': personas,
				'Pedido': pedido,
				'Mozo': mozo,
				'Estado': 'Actualizado',
				'Hora': resultadoHora,
				'Fecha': resultadoFecha,
				'Adicionales': [
					{'PedidosCant0' : pedidosCant0},
					{'PedidosCant1' : pedidosCant},
					{'pedidosCant2' : pedidosCant2},
					{'pedidosCant3' : pedidosCant3},
					{'pedidosCant4' : pedidosCant4},
					{'pedidosCant5' : pedidosCant5},
					{'pedidosCant6' : pedidosCant6},
					{'pedidosCant7' : pedidosCant7},
					{'pedidosCant8' : pedidosCant8},
					{'pedidosCant9' : pedidosCant9},
					{'pedidosCant10' : pedidosCant10},
					{'pedidosCant11' : pedidosCant11},
					{'pedidosCant12' : pedidosCant12},
					{'pedidosCant13' : pedidosCant13},
					{'pedidosCant14' : pedidosCant14},
					{'pedidosCant15' : pedidosCant15},
					{'pedidosCant16' : pedidosCant16},
					{'pedidosCant17' : pedidosCant17},
					{'pedidosCant18' : pedidosCant18},
					{'pedidosCant19' : pedidosCant19},
					{'pedidosCant20' : pedidosCant20}
				]
				

				
			}
			
			
		}).success(function(doc){
			res.json({inserted: true});
		}).error(function(err){
			console.log('hubo error' + err);
		})