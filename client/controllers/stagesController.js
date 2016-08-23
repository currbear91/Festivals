
myApp.controller('stagesController', ['$scope','$routeParams', 'stageFactory', function($scope, $routeParams, stageFactory){
	$scope.event_id = $routeParams._id;

	var index = function(){
			stageFactory.index(function(returnedData){
				$scope.stages = returnedData
			})
		}
	index();

	$scope.addStage= function(){
		$scope.newStage.event_id = $scope.event_id;
		stageFactory.create($scope.newStage, function(newStage){
			$scope.newStage = newStage;
			console.log(newStage);
		})
			$scope.newStage = {};
	}

}])