console.log("HERE AT MY CONTROLLER FRONT")

myApp.controller('eventsController', ['$scope', 'eventFactory', function($scope, eventFactory){

	$scope.addEvent= function(){
		eventFactory.addEvent($scope.newEvent, function(newEvent){
			$scope.newEvent = newEvent;
		})
			$scope.newEvent = {}
	}

}])