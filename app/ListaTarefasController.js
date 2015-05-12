var myApp = angular.module('myApp',[]);

myApp.controller('ListaTarefasController', ['$scope', function($scope){
	var task = document.getElementById('newTask');
	$scope.tarefas = [ ];

    $scope.adicionaTarefa = function (){
    	if(task.value != ''){
		    $scope.tarefas.push({compromisso: $scope.tarefa.compromisso,
			    concluido: false});
			//limpa campo do input
			$scope.tarefa.compromisso = '';
    	}else{
    		alert("Não foi possivel inserir tarefa!");
    	}
    };

    $scope.delete = function(index){
    	$scope.tarefas.splice(index,1); 
    };
}]);
