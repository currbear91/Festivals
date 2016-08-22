console.log("HERE AT MY CONTROLLER FRONT")

myApp.controller('eventsController', function($scope, eventFactory){

	var index = function(){
			eventFactory.index(function(returnedData){
				$scope.events = returnedData
			})
		}
	index();

	$scope.addEvent= function(){
		eventFactory.addEvent($scope.newEvent, function(newEvent){
			$scope.newEvent = newEvent;
		})
			$scope.newEvent = {}
	}

})