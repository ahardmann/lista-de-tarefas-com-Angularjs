var myApp = angular.module('myApp',[]);

myApp.controller('ListaTarefasController', ['$scope', function($scope){
    
	$scope.tarefas = [ ];

    $scope.adicionaTarefa = function (){
    	$scope.tarefas.push({compromisso: $scope.tarefa.compromisso,
	            concluido: false});
	    //limpa campo do input
	    $scope.tarefa.compromisso = '';
    };
}]);
