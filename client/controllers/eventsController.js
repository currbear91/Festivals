console.log("HERE AT MY CONTROLLER FRONT")

myApp.controller('eventsController', ['$scope', '$location', 'eventFactory', function($scope, $location, eventFactory){

	var index = function(){
			eventFactory.index(function(returnedData){
				$scope.events = returnedData
			})
		}
	index();

	$scope.addEvent= function(){
		console.log("#######", $scope.newEvent);
		eventFactory.addEvent($scope.newEvent, function(url){
			$location.url(url);
		})	
	}

}])