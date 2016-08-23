
myApp.controller('stagesController', ['$scope', 'stageFactory', function($scope, stageFactory){

	var index = function(){
			stageFactory.index(function(returnedData){
				$scope.events = returnedData
			})
		}
	index();

	$scope.addStage= function(){
		stageFactory.create($scope.newStage, function(newStage){
			$scope.newStage = newStage;
			console.log(newStage);
		})
			$scope.newStage = {};
	}

}])