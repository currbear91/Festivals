myApp.controller('adminDashboardController', ['$scope', '$location', 'eventFactory', 'userFactory', 'artistFactory', function($scope, $location, eventFactory, userFactory, artistFactory){

	var index = function(){
			eventFactory.index(function(returnedData){
				$scope.events = returnedData
			})
		}
	index();

	$scope.updateEvent = function(){
		console.log("#######", $scope.newEvent);
		eventFactory.update($scope.newEvent, function(event){
			$scope.event(event);
		})	
	}

}])