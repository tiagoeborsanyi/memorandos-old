angular.module('memorandos').controller('EquipamentoController', function($http, $scope, $routeParams, Equipamento){

	//seta o filter como vazio
	$scope.$on('equipamento', function(event, data){
		$scope.equipamentos = data;
	});


if($routeParams.equipamentoId){
	Equipamento.get({id: $routeParams.equipamentoId},
	function(equipamento){
		$scope.equipamento = equipamento;
		console.log(equipamento);
	},
	function(erro){
		console.log(erro);
		console.log('não foi possível obter o equipamento');
	});
}else{
	//cria um novo objeto equipamento
	$scope.equipamento = new Equipamento();
}

$scope.salva = function(){

	//console.log("Equipamento "+ $scope.equipamento.tombo); //Função de função e alterar esta funcionando

	$scope.equipamento.$save()
		.then(function(){
			console.log($scope.equipamento);
			//limpa o form
			$scope.equipamento = new Equipamento();
		})
		.catch(function(erro){
			console.log("não foi possivel salvar o equipamento "+ erro);
		});
	};

	function selecionaSituacao(){

  	$http.get('/configuracao/situacaoequiparada').success(function(situacaolista){

  		$scope.situacoes = situacaolista;

  	},
  	function(erro){
  		console.log(erro);
  		console.log('não foi possível obter o equipamento');
  	});
  };

	selecionaSituacao();

});
